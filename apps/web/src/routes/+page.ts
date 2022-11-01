import type { Load } from '@sveltejs/kit';
import { createClient } from 'generated-wundergraph';
import type { Operations } from 'generated-wundergraph';
import { createHooks } from '../lib/hooks';

const client = createClient();
const hooks = createHooks<Operations>(client);

export const load: Load = async () => {
  const response = await hooks.query({
    operationName: 'Countries',
    input: {
      filter: {
        continent: { eq: 'SA' }
      }
    }
  });

  return response ?? Error('No Data');
};
