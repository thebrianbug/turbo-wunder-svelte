import type { Load } from '@sveltejs/kit';
import { createClient } from 'generated-wundergraph';

const client = createClient();

export const load: Load = async () => {
  const response = await client.query({
    operationName: 'Countries',
    input: {
      filter: {
        continent: { eq: 'SA' }
      }
    }
  });

  return response ?? Error('No Data');
};
