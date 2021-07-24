// deno-lint-ignore-file camelcase (Because payloads from keycloak doesn't use camlecasing)

// Mapped Types
export type Optional<Value> = Value | null | undefined;
export type int32 = number;
export type int64 = bigint;
export type KMap = Record<string, string>;

// Move later
export interface Permission {
  rsid: Optional<string>;
  rsname: Optional<string>;
  scopes: Optional<string[]>;
  claim: Optional<KMap>;
}

// Export Definitions

export type CategoryEnum =
  | "INTERNAL"
  | "ACCESS"
  | "ID"
  | "ADMIN"
  | "USERINFO"
  | "LOGOUT";

export interface AccessToken {
  acr: Optional<string>;
  at_hash: Optional<string>;
  azp: Optional<string>;
  birthdate: Optional<string>;
  c_hash: Optional<string>;
  claims_locales: Optional<string>;
  email: Optional<string>;
  family_name: Optional<string>;
  gender: Optional<string>;
  given_name: Optional<string>;
  iss: Optional<string>;
  jti: Optional<string>;
  locale: Optional<string>;
  middle_name: Optional<string>;
  name: Optional<string>;
  nickname: Optional<string>;
  none: Optional<string>;
  phone_number: Optional<string>;
  picture: Optional<string>;
  preferred_username: Optional<string>;
  profile: Optional<string>;
  s_hash: Optional<string>;
  scope: Optional<string>;
  session_state: Optional<string>;
  sub: Optional<string>;
  typ: Optional<string>;
  website: Optional<string>;
  zoneinfo: Optional<string>;
  category: Optional<CategoryEnum>;
  auth_time: Optional<int64>;
  exp: Optional<int64>;
  iat: Optional<int64>;
  nbf: Optional<int64>;
  updated_at: Optional<int64>;
  authorization: Optional<AccessToken_Authorization>;
  otherClaims: Optional<KMap>;
  cnf: Optional<AccessToken_CertConf>;
  realm_access: Optional<AccessToken_CertConf>;
  "trusted-certs": Optional<string[]>;
}

export interface AccessToken_Access {
  roles: Optional<string[]>;
  verify_caller: Optional<boolean>;
}

export interface AccessToken_Authorization {
  permsissions: Optional<Permission[]>;
}

export interface AccessToken_CertConf {
  "x5t#s256": Optional<string>;
}

export interface AddressClaimSet {
  country: Optional<string>;
  formatted: Optional<string>;
  locality: Optional<string>;
  postal_code: Optional<string>;
  region: Optional<string>;
  street_address: Optional<string>;
}

export interface AuthenticationExecutionExportRepresentation {
  authenticator: Optional<string>;
  authenticatorConfig: Optional<string>;
  authenticatorFlow: Optional<boolean>;
  flowAlias: Optional<string>;
  priority: Optional<int32>;
  requirement: Optional<string>;
  userSetupAllowed: Optional<boolean>;
}

export interface AuthenticationExecutionInfoRepresentation {
  alias: Optional<string>;
  authenticationConfig: Optional<string>;
  authenticationFlow: Optional<boolean>;
  configurable: Optional<boolean>;
  description: Optional<string>;
  displayName: Optional<string>;
  flowId: Optional<string>;
  id: Optional<string>;
  index: Optional<int32>;
  level: Optional<int32>;
  providerId: Optional<string>;
  requirement: Optional<string>;
  requirementChoices: Optional<string[]>;
}

export interface AuthenticationExecutionRepresentation {
  authenticator: Optional<string>;
  authenticatorConfig: Optional<string>;
  authenticatorFlow: Optional<boolean>;
  flowId: Optional<string>;
  id: Optional<string>;
  parentFlow: Optional<string>;
  priority: Optional<int32>;
  requirement: Optional<string>;
}

export interface AuthenticationFlowRepresentation {
  alias: Optional<string>;
  authenticationExecutions: Optional<AuthenticationExecutionRepresentation[]>;
  builtIn: Optional<boolean>;
  description: Optional<string>;
  id: Optional<string>;
  providerId: Optional<string>;
  topLevel: Optional<boolean>;
}

export interface AuthenticatorConfigInfoRepresentation {
  helpText: Optional<string>;
  name: Optional<string>;
  properties: Optional<ConfigPropertyRepresentation[]>;
  providerId: Optional<string>;
}

export interface AuthenticatorConfigRepresentation {
  alias: Optional<string>;
  config: Optional<KMap>;
  id: Optional<string>;
}

export interface CertificateRepresentation {
  certificate: Optional<string>;
  kid: Optional<string>;
  privateKey: Optional<string>;
  publicKey: Optional<string>;
}

export interface ClientInitialAccessCreatePresentation {
  count: Optional<int32>;
  expiration: Optional<int32>;
}

export interface ClientInitialAccessPresentation {
  count: Optional<int32>;
  expiration: Optional<int32>;
  id: Optional<string>;
  remainingCount: Optional<int32>;
  timestamp: Optional<int32>;
  token: Optional<string>;
}

export interface ClientMappingsRepresentation {
  client: Optional<string>;
  id: Optional<string>;
  mappings: Optional<RoleRepresentation[]>;
}

export interface ClientPoliciesRepresentation {
  policies: Optional<ClientPolicyRepresentation[]>;
}

export interface ClientPolicyConditionRepresentation {
  condition: Optional<string>;
  // todo(ihack2712): JSONNode for property configuration.
}

export interface ClientPolicyExecutorRepresentation {
  // todo(ihack2712): JSONNode for property configuration.
  executor: Optional<string>;
}

export interface ClientPolicyRepresentation {
  conditions: Optional<ClientPolicyConditionRepresentation[]>;
  description: Optional<string>;
  enabled: Optional<boolean>;
  name: Optional<string>;
  profiles: Optional<string[]>;
}

export interface ClientProfileRepresentation {
  description: Optional<string>;
  executors: Optional<ClientPolicyExecutorRepresentation[]>;
  name: Optional<string>;
}

export interface ClientProfilesRepresentation {
  globalProfiles: Optional<ClientProfileRepresentation[]>;
  profiles: Optional<ClientProfileRepresentation[]>;
}

export interface ClientRepresentation {
  access: Optional<KMap>;
  adminUrl: Optional<string>;
  alwaysDisplayInConsole: Optional<boolean>;
  attributes: Optional<KMap>;
  authenticationFlowBindingOverrides: Optional<KMap>;
  authorizationServicesEnabled: Optional<boolean>;
  authorizationSettings: Optional<ResourceServerRepresentation>;
  baseUrl: Optional<string>;
  bearerOnly: Optional<boolean>;
  clientAuthenticatorType: Optional<string>;
  clientId: Optional<string>;
  consentRequired: Optional<boolean>;
  defaultClientScopes: Optional<string[]>;
  description: Optional<string>;
  directAccessGrantsEnabled: Optional<boolean>;
  enabled: Optional<boolean>;
  frontchannelLogout: Optional<boolean>;
  fullScopeAllowed: Optional<boolean>;
  id: Optional<string>;
  implicitFlowEnabled: Optional<boolean>;
  name: Optional<string>;
  nodeReRegistrationTimeout: Optional<int32>;
  notBefore: Optional<int32>;
  oauth2DeviceAuthorizationGrantEnabled: Optional<boolean>;
  optionalClientScopes: Optional<string[]>;
  origin: Optional<string>;
  protocol: Optional<string>;
  protocolMappers: Optional<string[]>;
  publicClient: Optional<boolean>;
  redirectUris: Optional<string[]>;
  registeredNodes: Optional<KMap>;
  registrationAccessToken: Optional<string>;
  rootUrl: Optional<string>;
  secret: Optional<string>;
  serviceAccountsEnabled: Optional<boolean>;
  standardFlowEnabled: Optional<boolean>;
  surrogateAuthRequired: Optional<boolean>;
  webOrigins: Optional<int32>;
}

export interface ClientScopeEvaluateResource_ProtocolMapperEvaluationRepresentation {
  containerId: Optional<string>;
  containerName: Optional<string>;
  containerType: Optional<string>;
  mapperId: Optional<string>;
  mapperName: Optional<string>;
  protocolMapper: Optional<string>;
}

export interface ClientScopeRepresentation {
  attributes: Optional<KMap>;
  description: Optional<string>;
  id: Optional<string>;
  name: Optional<string>;
  protocol: Optional<string>;
  protocolMappers: Optional<ProtocolMapperRepresentation[]>;
}

export interface ComponentExportRepresentation {
  config: Optional<MultivaluedHashMap>;
  id: Optional<string>;
  name: Optional<string>;
  providerId: Optional<string>;
  subComponents: Optional<MultivaluedHashMap>;
  subType: Optional<string>;
}

export interface ComponentRepresentation {
  config: Optional<MultivaluedHashMap>;
  id: Optional<string>;
  name: Optional<string>;
  parentId: Optional<string>;
  providerId: Optional<string>;
  providerType: Optional<string>;
  subType: Optional<string>;
}

export interface ConfigPropertyRepresentation {
  defaultValue: Optional<Record<string | number | symbol, unknown>>;
  helpText: Optional<string>;
  label: Optional<string>;
  name: Optional<string>;
  options: Optional<string[]>;
  secret: Optional<boolean>;
  type: Optional<string>;
}

export interface CredentialRepresentation {
  createdDate: Optional<int32>;
  credentialData: Optional<string>;
  id: Optional<string>;
  priority: Optional<int32>;
  secretData: Optional<string>;
  temporary: Optional<boolean>;
  type: Optional<string>;
  userLabel: Optional<string>;
  value: Optional<string>;
}

export interface FederatedIdentityRepresentation {
  identityProvider: Optional<string>;
  userId: Optional<string>;
  userName: Optional<string>;
}

export interface GlobalRequestResult {
  failedRequests: Optional<string[]>;
  successRequests: Optional<string[]>;
}

export interface GroupRepresentation {
  access: Optional<KMap>;
  attributes: Optional<KMap>;
  clientRoles: Optional<KMap>;
  id: Optional<string>;
  name: Optional<string>;
  path: Optional<string>;
  realmRoles: Optional<string[]>;
  subGroups: Optional<GroupRepresentation[]>;
}

export interface IDToken {
  acr: Optional<string>;
  address: Optional<AddressClaimSet>;
  at_hash: Optional<string>;
  auth_time: Optional<int32>;
  azp: Optional<string>;
  birthdate: Optional<string>;
  c_hash: Optional<string>;
  category: CategoryEnum;
  claims_locales: Optional<string>;
  email: Optional<string>;
  email_verified: Optional<boolean>;
  exp: Optional<int64>;
  family_name: Optional<string>;
  gender: Optional<string>;
  given_name: Optional<string>;
  iat: Optional<int64>;
  iss: Optional<string>;
  jti: Optional<string>;
  locale: Optional<string>;
  middle_name: Optional<string>;
  name: Optional<string>;
  nbf: Optional<int64>;
  nickname: Optional<string>;
  nonce: Optional<string>;
  otherClaims: Optional<KMap>;
  phone_number: Optional<string>;
  phone_number_verified: Optional<boolean>;
  picture: Optional<string>;
  preferred_username: Optional<string>;
  profile: Optional<string>;
  s_hash: Optional<string>;
  session_state: Optional<string>;
  sub: Optional<string>;
  typ: Optional<string>;
  updated_at: Optional<int64>;
  website: Optional<string>;
  zoneinfo: Optional<string>;
}
