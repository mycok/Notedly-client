import React, { useState } from 'react';
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
import { meQuery } from '../../graphql/queries/me';
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
  const [textValue, setTextValue] = useState(
    location.state ? location.state.note.content : '',
  );
  const [selected, select] = useState('Plain Text');

  console.log('locationnnnnnnnn', location.state);

  const [newNote, { loading, error }] = useMutation(newNoteQuery, {
    refetchQueries: [{ query: meQuery }],
    onCompleted: () => {
      history.push('/my-notes');
    },
  });

  const handleOnChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleNewNote = () => {
    newNote({ variables: { content: textValue } });
  };

  if (error) {
    return (
      <NewNoteBox>
        <GraphqlErrorHandler err={error} ErrComponent={ErrorAlert} />
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

        {selected === 'Plain Text' && (
          <Box d="flex" align="center" justify="space-between">
            <CustomIconButton icon="image" label="add image" />
            <CustomIconButton icon="code" label="add code" />
          </Box>
        )}
        <Box d="flex" alignItems="center" justifyContent="flex-end">
          <Button
            variantColor="teal"
            variant="outline"
            size="sm"
            mr={10}
            _hover={{ bg: '#3b4048' }}
            _focus={{ outline: 'none' }}
            isLoading={loading}
            onClick={handleNewNote}
          >
            Publish
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
          value={textValue}
          placeholder="share something......."
          size="lg"
          bg="#222121"
          border="none"
          resize="vertical"
          minHeight={300}
          onChange={handleOnChange}
          _focus={{ outline: 'none' }}
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