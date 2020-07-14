import React, { useState, useRef, useEffect } from 'react';
import {
  instanceOf, element, oneOfType, arrayOf,
} from 'prop-types';
import { useMutation } from '@apollo/client';
import {
  Box,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  Icon,
  MenuOptionGroup,
  Textarea,
} from '@chakra-ui/core';

import { newNoteQuery } from '../../graphql/mutations/newNote';
import { updateNoteMutation } from '../../graphql/mutations/updateNote';
import { meQuery } from '../../graphql/queries/me';
import { noteByIdQuery } from '../../graphql/queries/note';
import GraphqlErrorHandler from '../shared/GraphqlErrorHandler';
import { isAuthenticated } from '../../utils/authHelpers';

import ErrorAlert from '../shared/ErrorAlert';
import CustomIconButton from '../shared/CustomIconButton';

const NewNoteBox = ({ children }) => (
  <Box
    borderWidth="1px"
    bg="#222121"
    rounded="lg"
    overflow="scroll"
    padding={5}
    borderColor="#1a1a1a"
    boxShadow="lg"
    width="1000px"
    margin="auto"
    mt={3}
    mb={3}
  >
    {children}
  </Box>
);

const NewNote = ({ history, location }) => {
  const user = isAuthenticated();
  const textFieldRef = useRef(null);
  const [textValue, setTextValue] = useState(
    location.state ? location.state.note.content : '',
  );
  const [selected, select] = useState('Plain Text');

  const [newNote, { loading: creatingNote, error: newNoteError }] = useMutation(
    newNoteQuery,
    {
      refetchQueries: [{ query: meQuery }],
      onCompleted: () => {
        history.push('/my-notes');
      },
    },
  );

  const [
    updateNote,
    { loading: updatingNote, error: updateNoteError },
  ] = useMutation(updateNoteMutation, {
    refetchQueries: [{ query: noteByIdQuery }],
    onCompleted: () => {
      history.push(`/notes/${location.state.note.id}`);
    },
  });

  useEffect(() => {
    if (location.state && textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, [location.state]);

  const handleOnChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleNewNote = () => {
    newNote({ variables: { content: textValue } });
  };

  const handleUpdateNote = () => {
    updateNote({
      variables: {
        id: location.state.note.id,
        content: textValue,
      },
    });
  };

  if (newNoteError || updateNoteError) {
    return (
      <NewNoteBox>
        <GraphqlErrorHandler
          err={newNoteError || updateNoteError}
          ErrComponent={ErrorAlert}
        />
      </NewNoteBox>
    );
  }

  return (
    <NewNoteBox>
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Box d="flex" alignItems="center">
          <Avatar
            size="sm"
            name={user && user.user.username}
            src={user && user.user.avatar}
          />
          <Text ml={2} color="grey" fontSize="sm">
            Draft
          </Text>
        </Box>

        <Box d="flex" align="center" justify="space-between">
          {selected === 'Plain Text' && (
            <>
              <CustomIconButton icon="image" label="add image" />
              <CustomIconButton icon="code" label="add code" />
            </>
          )}
          <CustomIconButton
            icon="small-close"
            label="close"
            handler={() => history.goBack()}
          />
        </Box>

        <Box d="flex" alignItems="center" justifyContent="flex-end">
          <Button
            variantColor="teal"
            variant="outline"
            size="sm"
            mr={10}
            _hover={{ bg: '#3b4048' }}
            _focus={{ outline: 'none' }}
            isLoading={!!creatingNote || !!updatingNote}
            onClick={location.state ? handleUpdateNote : handleNewNote}
          >
            {location.state ? 'Update' : 'Publish'}
          </Button>

          <Menu closeOnSelect>
            <MenuButton as="div" variant="ghost">
              <Icon name="ellipsis" />
            </MenuButton>
            <MenuList minWidth="200px" bg="#222121" borderColor="#1a1a1a">
              <MenuOptionGroup
                defaultValue={selected}
                type="radio"
                value={selected}
                onChange={(value) => select(value)}
              >
                <MenuItemOption
                  value="Plain Text"
                  _focus={{ bg: '#3b4048', outline: 'none' }}
                >
                  Plain Text
                </MenuItemOption>
                <MenuItemOption
                  value="Mark-Down"
                  _focus={{ bg: '#3b4048', outline: 'none' }}
                >
                  Mark-Down
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <Box d="flex" alignItems="center" justifyContent="center" m={5}>
        <Textarea
          ref={textFieldRef}
          value={textValue}
          placeholder="share something......."
          size="lg"
          bg="#222121"
          mt={3}
          border="none"
          focusBorderColor="teal.800"
          resize="vertical"
          fontSize={16}
          minHeight={300}
          onChange={handleOnChange}
        />
      </Box>
    </NewNoteBox>
  );
};

NewNote.propTypes = {
  history: instanceOf(Object).isRequired,
  location: instanceOf(Object).isRequired,
};

NewNoteBox.propTypes = {
  children: oneOfType([element, arrayOf(element)]).isRequired,
};

export default NewNote;
