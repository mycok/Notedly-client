import React from 'react';
import { useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner, Text } from '@chakra-ui/core';

import { noteFeedQuery } from '../../graphql/queries/noteFeed';
import SampleNote from './SampleNote';
import { NotesLoader } from '../shared/Loader';
import NotFound from '../shared/NotFound';
import ErrorAlert from '../shared/ErrorAlert';
import GraphqlErrorHandler from '../shared/GraphqlErrorHandler';
import { ReactComponent as NotesImage } from '../../images/notes.svg';

const Notes = () => {
  const {
    loading, error, data, fetchMore,
  } = useQuery(noteFeedQuery, {
    errorPolicy: 'all',
  });

  const loadMore = () => {
    fetchMore({
      query: noteFeedQuery,
      variables: { cursor: data.noteFeed.cursor },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const prevEntry = prevResult.noteFeed;
        const newNotes = fetchMoreResult.noteFeed.notes;
        const newCursor = fetchMoreResult.noteFeed.cursor;
        const hasNextPage = fetchMoreResult.noteFeed.hasNextPage;

        return {
          noteFeed: {
            notes: [...prevEntry.notes, ...newNotes],
            cursor: newCursor,
            hasNextPage,
            __typename: prevEntry.__typename,
          },
        };
      },
    });
  };

  if (loading) return <NotesLoader backgroundColor="#222121" />;

  if (error) {
    return <GraphqlErrorHandler err={error} ErrComponent={ErrorAlert} />;
  }

  if (data.noteFeed.notes.length === 0) {
    return (
      <NotFound
        size="1000px"
        NotFoundComp={NotesImage}
        text="No Notes Available!"
      />
    );
  }

  return (
    <div>
      <InfiniteScroll
        height="94vh"
        dataLength={data.noteFeed.notes.length}
        next={() => loadMore()}
        hasMore={data.noteFeed.hasNextPage}
        loader={<Spinner thickness="4px" color="teal" />}
        endMessage={(
          <Text textAlign="center" color="teal.200" fontWeight="md">
            Yay! You have seen it all
          </Text>
        )}
      >
        {data
          && data.noteFeed.notes.map((note) => (
            <SampleNote key={note.id} note={note} />
          ))}
      </InfiniteScroll>
    </div>
  );
};

export default Notes;
