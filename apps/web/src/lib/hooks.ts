import type {
  Client,
  OperationRequestOptions,
  OperationsDefinition
} from '@wundergraph/sdk/client';

export type UseQueryOptions<OperationName, Input, LiveQuery> = {
  operationName: OperationName;
  liveQuery?: LiveQuery;
  enabled?: boolean;
  input?: Input;
};

export const createHooks = <Operations extends OperationsDefinition>(client: Client) => {
  const queryFetcher = async <
    OperationName extends Extract<keyof Operations['queries'], string>,
    Data extends Operations['queries'][OperationName]['data'] = Operations['queries'][OperationName]['data'],
    RequestOptions extends OperationRequestOptions<
      Extract<keyof Operations['queries'], string>,
      Operations['queries'][OperationName]['input']
    > = OperationRequestOptions<
      Extract<keyof Operations['queries'], string>,
      Operations['queries'][OperationName]['input']
    >
  >(
    query: RequestOptions
  ) => {
    const result = await client.query<RequestOptions, Data>(query);

    if (result.error) {
      throw result.error;
    }

    return result?.data;
  };

  const query = <
    OperationName extends Extract<keyof Operations['queries'], string>,
    Input extends Operations['queries'][OperationName]['input'] = Operations['queries'][OperationName]['input'],
    Data extends Operations['queries'][OperationName]['data'] = Operations['queries'][OperationName]['data'],
    LiveQuery extends Operations['queries'][OperationName]['liveQuery'] = Operations['queries'][OperationName]['liveQuery']
  >(
    options: UseQueryOptions<OperationName, Input, LiveQuery>
  ) => {
    return queryFetcher<OperationName, Data | undefined>(options);
  };

  return { query };
};
