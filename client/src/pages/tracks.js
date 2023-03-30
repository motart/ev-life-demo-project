import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card'
import QueryResult from '../components/query-result';

// Query to retrieve all tracks
const TRACKS = gql`
  query GetTracks {
    tracksForHome {
      title
      thumbnail
      modulesCount
      length
      author {
        name
        photo
      }
    }
  }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  console.log(data);
  if ( loading ) return "Loading ...";
  if ( error ) return `Error! ${ error.message }`;
  return (
    <Layout grid>
      <QueryResult griderror={error} loading={loading} data={data} >
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  )
};

export default Tracks;
