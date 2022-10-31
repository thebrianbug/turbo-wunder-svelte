import type { OperationRequestOptions } from '@wundergraph/sdk/client';
import { createClient } from 'generated-wundergraph';
import type { Operations } from 'generated-wundergraph';

type Queries = Extract<keyof Operations['queries'], string>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface QueryRequestOptions<OperationName extends Queries = Queries>
  extends OperationRequestOptions<OperationName, Operations['queries'][OperationName]['input']> {}

export async function load() {
  const client = createClient();

  // TODO: get types to generate for response
  const response = await client.query<QueryRequestOptions>({
    operationName: 'Countries',
    input: {
      filter: {
        continent: { eq: 'SA' }
      }
    }
  });

  return response?.data;
}
