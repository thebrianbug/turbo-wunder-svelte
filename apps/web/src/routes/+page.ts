import type { OperationRequestOptions } from '@wundergraph/sdk/client';
import { createClient } from 'generated-wundergraph';
import type { Operations } from 'generated-wundergraph';
import type { CountriesResponseData } from 'generated-wundergraph/models';
import type { Load } from '@sveltejs/kit';

type Queries = Extract<keyof Operations['queries'], string>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface QueryRequestOptions<OperationName extends Queries = Queries>
  extends OperationRequestOptions<OperationName, Operations['queries'][OperationName]['input']> {}

export const load: Load = async () => {
  const client = createClient();

  // TODO: auto-generate types instead of casting
  const response = await client.query<QueryRequestOptions>({
    operationName: 'Countries',
    input: {
      filter: {
        continent: { eq: 'SA' }
      }
    }
  });

  return response?.data as CountriesResponseData;
};
