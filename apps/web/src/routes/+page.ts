import { createClient } from 'generated-wundergraph';

export async function load() {
  const client = createClient();

  const response = await client.query({
    operationName: 'Countries',
    input: {
      filter: {
        continent: { eq: 'SA' }
      }
    }
  });

  return { response };
}
