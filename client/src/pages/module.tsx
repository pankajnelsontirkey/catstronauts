import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { gql } from '../__generated__';
import { Layout, ModuleDetail, QueryResult } from '../components';

export const GET_MODULE_AND_PARENT_TRACK = gql(`
  query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
    module(id: $moduleId) {
      id
      title    
      content
      videoUrl
    }
    track(id: $trackId) {
      id
      title
      modules {
        id
        title
        length
        videoUrl
      }
    }
  }
`);

const Module = () => {
  const { trackId = '', moduleId = '' } = useParams();
  const { loading, error, data } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: { trackId, moduleId }
  });

  return (
    <Layout fullWidth>
      <QueryResult loading={loading} error={error} data={data}>
        <ModuleDetail module={data?.module} track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
