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

  if (response?.error) {
    throw response.error;
  }

  return response?.data ?? Error('No Data');
};
