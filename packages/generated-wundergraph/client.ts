import {
	Client,
	ClientConfig,
	User,
	UploadRequestOptions,
	OperationMetadata,
	OperationsDefinition,
} from "@wundergraph/sdk/client";
import type {
	ContinentsResponse,
	ContinentsResponseData,
	CountriesResponse,
	CountriesInput,
	CountriesResponseData,
} from "./models";

export type UserRole = "admin" | "user";

export const WUNDERGRAPH_S3_ENABLED = false;
export const WUNDERGRAPH_AUTH_ENABLED = false;

export const defaultClientConfig: ClientConfig = {
	applicationHash: "ec07225d",
	applicationPath: "app/main",
	baseURL: "http://localhost:9991",
	sdkVersion: "0.116.1",
};

const operationMetadata: OperationMetadata = {
	Continents: {
		requiresAuthentication: false,
	},
	Countries: {
		requiresAuthentication: false,
	},
};

type PrivateConfigProperties = "applicationHash" | "applicationPath" | "sdkVersion" | "operationMetadata";

export const createClient = (config?: Omit<ClientConfig, PrivateConfigProperties>) => {
	return new Client({
		...defaultClientConfig,
		...config,
		operationMetadata,
	});
};

export type Queries = {
	Continents: {
		input?: undefined;
		data: ContinentsResponseData;
		requiresAuthentication: false;
		liveQuery: true;
	};
	Countries: {
		input: CountriesInput;
		data: CountriesResponseData;
		requiresAuthentication: false;
		liveQuery: true;
	};
};

export type Mutations = {};

export type Subscriptions = {};

export type LiveQueries = {
	Continents: {
		input?: undefined;
		data: ContinentsResponseData;
		liveQuery: true;
		requiresAuthentication: false;
	};
	Countries: {
		input: CountriesInput;
		data: CountriesResponseData;
		liveQuery: true;
		requiresAuthentication: false;
	};
};

export interface Operations extends OperationsDefinition<Queries, Mutations, Subscriptions, UserRole> {}
