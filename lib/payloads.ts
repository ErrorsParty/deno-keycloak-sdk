// deno-lint-ignore-file camelcase (Because payloads from keycloak doesn't use camlecasing)

// This is file is generated from the following URL:
// https://www.keycloak.org/docs-api/14.0/rest-api/

export type Optional<Value> = Value | null | undefined;

export interface AccessToken {
  "acr": Optional<string>;
  "address": Optional<AddressClaimSet>;
  "allowed-origins": Optional<string[]>;
  "at_hash": Optional<string>;
  "auth_time": Optional<bigint>;
  "authorization": Optional<AccessToken_Authorization>;
  "azp": Optional<string>;
  "birthdate": Optional<string>;
  "c_hash": Optional<string>;
  "category": Optional<
    "INTERNAL" | "ACCESS" | "ID" | "ADMIN" | "USERINFO" | "LOGOUT"
  >;
  "claims_locales": Optional<string>;
  "cnf": Optional<AccessToken_CertConf>;
  "email": Optional<string>;
  "email_verified": Optional<boolean>;
  "exp": Optional<bigint>;
  "family_name": Optional<string>;
  "gender": Optional<string>;
  "given_name": Optional<string>;
  "iat": Optional<bigint>;
  "iss": Optional<string>;
  "jti": Optional<string>;
  "locale": Optional<string>;
  "middle_name": Optional<string>;
  "name": Optional<string>;
  "nbf": Optional<bigint>;
  "nickname": Optional<string>;
  "nonce": Optional<string>;
  "otherClaims": Optional<undefined>;
  "phone_number": Optional<string>;
  "phone_number_verified": Optional<boolean>;
  "picture": Optional<string>;
  "preferred_username": Optional<string>;
  "profile": Optional<string>;
  "realm_access": Optional<AccessToken_Access>;
  "s_hash": Optional<string>;
  "scope": Optional<string>;
  "session_state": Optional<string>;
  "sub": Optional<string>;
  "trusted-certs": Optional<string[]>;
  "typ": Optional<string>;
  "updated_at": Optional<bigint>;
  "website": Optional<string>;
  "zoneinfo": Optional<string>;
}

export interface AccessToken_Access {
  "roles": Optional<string[]>;
  "verify_caller": Optional<boolean>;
}

export interface AccessToken_Authorization {
  "permissions": Optional<Permission[]>;
}

export interface AccessToken_CertConf {
  "x5t#S256": Optional<string>;
}

export interface AddressClaimSet {
  "country": Optional<string>;
  "formatted": Optional<string>;
  "locality": Optional<string>;
  "postal_code": Optional<string>;
  "region": Optional<string>;
  "street_address": Optional<string>;
}

export interface AuthenticationExecutionExportRepresentation {
  "authenticator": Optional<string>;
  "authenticatorConfig": Optional<string>;
  "authenticatorFlow": Optional<boolean>;
  "flowAlias": Optional<string>;
  "priority": Optional<number>;
  "requirement": Optional<string>;
  "userSetupAllowed": Optional<boolean>;
}

export interface AuthenticationExecutionInfoRepresentation {
  "alias": Optional<string>;
  "authenticationConfig": Optional<string>;
  "authenticationFlow": Optional<boolean>;
  "configurable": Optional<boolean>;
  "description": Optional<string>;
  "displayName": Optional<string>;
  "flowId": Optional<string>;
  "id": Optional<string>;
  "index": Optional<number>;
  "level": Optional<number>;
  "providerId": Optional<string>;
  "requirement": Optional<string>;
  "requirementChoices": Optional<string[]>;
}

export interface AuthenticationExecutionRepresentation {
  "authenticator": Optional<string>;
  "authenticatorConfig": Optional<string>;
  "authenticatorFlow": Optional<boolean>;
  "flowId": Optional<string>;
  "id": Optional<string>;
  "parentFlow": Optional<string>;
  "priority": Optional<number>;
  "requirement": Optional<string>;
}

export interface AuthenticationFlowRepresentation {
  "alias": Optional<string>;
  "authenticationExecutions": Optional<
    AuthenticationExecutionExportRepresentation[]
  >;
  "builtIn": Optional<boolean>;
  "description": Optional<string>;
  "id": Optional<string>;
  "providerId": Optional<string>;
  "topLevel": Optional<boolean>;
}

export interface AuthenticatorConfigInfoRepresentation {
  "helpText": Optional<string>;
  "name": Optional<string>;
  "properties": Optional<ConfigPropertyRepresentation[]>;
  "providerId": Optional<string>;
}

export interface AuthenticatorConfigRepresentation {
  "alias": Optional<string>;
  "config": Optional<undefined>;
  "id": Optional<string>;
}

export interface CertificateRepresentation {
  "certificate": Optional<string>;
  "kid": Optional<string>;
  "privateKey": Optional<string>;
  "publicKey": Optional<string>;
}

export interface ClientInitialAccessCreatePresentation {
  "count": Optional<number>;
  "expiration": Optional<number>;
}

export interface ClientInitialAccessPresentation {
  "count": Optional<number>;
  "expiration": Optional<number>;
  "id": Optional<string>;
  "remainingCount": Optional<number>;
  "timestamp": Optional<number>;
  "token": Optional<string>;
}

export interface ClientMappingsRepresentation {
  "client": Optional<string>;
  "id": Optional<string>;
  "mappings": Optional<RoleRepresentation[]>;
}

export interface ClientPoliciesRepresentation {
  "policies": Optional<ClientPolicyRepresentation[]>;
}

export interface ClientPolicyConditionRepresentation {
  "condition": Optional<string>;
  "configuration": Optional<JsonNode>;
}

export interface ClientPolicyExecutorRepresentation {
  "configuration": Optional<JsonNode>;
  "executor": Optional<string>;
}

export interface ClientPolicyRepresentation {
  "conditions": Optional<ClientPolicyConditionRepresentation[]>;
  "description": Optional<string>;
  "enabled": Optional<boolean>;
  "name": Optional<string>;
  "profiles": Optional<string[]>;
}

export interface ClientProfileRepresentation {
  "description": Optional<string>;
  "executors": Optional<ClientPolicyExecutorRepresentation[]>;
  "name": Optional<string>;
}

export interface ClientProfilesRepresentation {
  "globalProfiles": Optional<ClientProfileRepresentation[]>;
  "profiles": Optional<ClientProfileRepresentation[]>;
}

export interface ClientRepresentation {
  "access": Optional<undefined>;
  "adminUrl": Optional<string>;
  "alwaysDisplayInConsole": Optional<boolean>;
  "attributes": Optional<undefined>;
  "authenticationFlowBindingOverrides": Optional<undefined>;
  "authorizationServicesEnabled": Optional<boolean>;
  "authorizationSettings": Optional<ResourceServerRepresentation>;
  "baseUrl": Optional<string>;
  "bearerOnly": Optional<boolean>;
  "clientAuthenticatorType": Optional<string>;
  "clientId": Optional<string>;
  "consentRequired": Optional<boolean>;
  "defaultClientScopes": Optional<string[]>;
  "description": Optional<string>;
  "directAccessGrantsEnabled": Optional<boolean>;
  "enabled": Optional<boolean>;
  "frontchannelLogout": Optional<boolean>;
  "fullScopeAllowed": Optional<boolean>;
  "id": Optional<string>;
  "implicitFlowEnabled": Optional<boolean>;
  "name": Optional<string>;
  "nodeReRegistrationTimeout": Optional<number>;
  "notBefore": Optional<number>;
  "oauth2DeviceAuthorizationGrantEnabled": Optional<boolean>;
  "optionalClientScopes": Optional<string[]>;
  "origin": Optional<string>;
  "protocol": Optional<string>;
  "protocolMappers": Optional<ProtocolMapperRepresentation[]>;
  "publicClient": Optional<boolean>;
  "redirectUris": Optional<string[]>;
  "registeredNodes": Optional<undefined>;
  "registrationAccessToken": Optional<string>;
  "rootUrl": Optional<string>;
  "secret": Optional<string>;
  "serviceAccountsEnabled": Optional<boolean>;
  "standardFlowEnabled": Optional<boolean>;
  "surrogateAuthRequired": Optional<boolean>;
  "webOrigins": Optional<string[]>;
}

export interface ClientScopeEvaluateResource_ProtocolMapperEvaluationRepresentation {
  "containerId": Optional<string>;
  "containerName": Optional<string>;
  "containerType": Optional<string>;
  "mapperId": Optional<string>;
  "mapperName": Optional<string>;
  "protocolMapper": Optional<string>;
}

export interface ClientScopeRepresentation {
  "attributes": Optional<undefined>;
  "description": Optional<string>;
  "id": Optional<string>;
  "name": Optional<string>;
  "protocol": Optional<string>;
  "protocolMappers": Optional<ProtocolMapperRepresentation[]>;
}

export interface ComponentExportRepresentation {
  "config": Optional<MultivaluedHashMap>;
  "id": Optional<string>;
  "name": Optional<string>;
  "providerId": Optional<string>;
  "subComponents": Optional<MultivaluedHashMap>;
  "subType": Optional<string>;
}

export interface ComponentRepresentation {
  "config": Optional<MultivaluedHashMap>;
  "id": Optional<string>;
  "name": Optional<string>;
  "parentId": Optional<string>;
  "providerId": Optional<string>;
  "providerType": Optional<string>;
  "subType": Optional<string>;
}

export interface ConfigPropertyRepresentation {
  "defaultValue": Optional<undefined>;
  "helpText": Optional<string>;
  "label": Optional<string>;
  "name": Optional<string>;
  "options": Optional<string[]>;
  "secret": Optional<boolean>;
  "type": Optional<string>;
}

export interface CredentialRepresentation {
  "createdDate": Optional<bigint>;
  "credentialData": Optional<string>;
  "id": Optional<string>;
  "priority": Optional<number>;
  "secretData": Optional<string>;
  "temporary": Optional<boolean>;
  "type": Optional<string>;
  "userLabel": Optional<string>;
  "value": Optional<string>;
}

export interface FederatedIdentityRepresentation {
  "identityProvider": Optional<string>;
  "userId": Optional<string>;
  "userName": Optional<string>;
}

export interface GlobalRequestResult {
  "failedRequests": Optional<string[]>;
  "successRequests": Optional<string[]>;
}

export interface GroupRepresentation {
  "access": Optional<undefined>;
  "attributes": Optional<undefined>;
  "clientRoles": Optional<undefined>;
  "id": Optional<string>;
  "name": Optional<string>;
  "path": Optional<string>;
  "realmRoles": Optional<string[]>;
  "subGroups": Optional<GroupRepresentation[]>;
}

export interface IDToken {
  "acr": Optional<string>;
  "address": Optional<AddressClaimSet>;
  "at_hash": Optional<string>;
  "auth_time": Optional<bigint>;
  "azp": Optional<string>;
  "birthdate": Optional<string>;
  "c_hash": Optional<string>;
  "category": Optional<
    "INTERNAL" | "ACCESS" | "ID" | "ADMIN" | "USERINFO" | "LOGOUT"
  >;
  "claims_locales": Optional<string>;
  "email": Optional<string>;
  "email_verified": Optional<boolean>;
  "exp": Optional<bigint>;
  "family_name": Optional<string>;
  "gender": Optional<string>;
  "given_name": Optional<string>;
  "iat": Optional<bigint>;
  "iss": Optional<string>;
  "jti": Optional<string>;
  "locale": Optional<string>;
  "middle_name": Optional<string>;
  "name": Optional<string>;
  "nbf": Optional<bigint>;
  "nickname": Optional<string>;
  "nonce": Optional<string>;
  "otherClaims": Optional<undefined>;
  "phone_number": Optional<string>;
  "phone_number_verified": Optional<boolean>;
  "picture": Optional<string>;
  "preferred_username": Optional<string>;
  "profile": Optional<string>;
  "s_hash": Optional<string>;
  "session_state": Optional<string>;
  "sub": Optional<string>;
  "typ": Optional<string>;
  "updated_at": Optional<bigint>;
  "website": Optional<string>;
  "zoneinfo": Optional<string>;
}

export interface IdentityProviderMapperRepresentation {
  "config": Optional<undefined>;
  "id": Optional<string>;
  "identityProviderAlias": Optional<string>;
  "identityProviderMapper": Optional<string>;
  "name": Optional<string>;
}

export interface IdentityProviderRepresentation {
  "addReadTokenRoleOnCreate": Optional<boolean>;
  "alias": Optional<string>;
  "config": Optional<undefined>;
  "displayName": Optional<string>;
  "enabled": Optional<boolean>;
  "firstBrokerLoginFlowAlias": Optional<string>;
  "internalId": Optional<string>;
  "linkOnly": Optional<boolean>;
  "postBrokerLoginFlowAlias": Optional<string>;
  "providerId": Optional<string>;
  "storeToken": Optional<boolean>;
  "trustEmail": Optional<boolean>;
}

export interface JsonNode {
  "array": Optional<boolean>;
  "bigDecimal": Optional<boolean>;
  "bigInteger": Optional<boolean>;
  "binary": Optional<boolean>;
  "boolean": Optional<boolean>;
  "containerNode": Optional<boolean>;
  "double": Optional<boolean>;
  "empty": Optional<boolean>;
  "float": Optional<boolean>;
  "floatingPointNumber": Optional<boolean>;
  "int": Optional<boolean>;
  "integralNumber": Optional<boolean>;
  "long": Optional<boolean>;
  "missingNode": Optional<boolean>;
  "nodeType": Optional<
    | "ARRAY"
    | "BINARY"
    | "BOOLEAN"
    | "MISSING"
    | "NULL"
    | "NUMBER"
    | "OBJECT"
    | "POJO"
    | "STRING"
  >;
  "null": Optional<boolean>;
  "number": Optional<boolean>;
  "object": Optional<boolean>;
  "pojo": Optional<boolean>;
  "short": Optional<boolean>;
  "textual": Optional<boolean>;
  "valueNode": Optional<boolean>;
}

export interface KeyStoreConfig {
  "format": Optional<string>;
  "keyAlias": Optional<string>;
  "keyPassword": Optional<string>;
  "realmAlias": Optional<string>;
  "realmCertificate": Optional<boolean>;
  "storePassword": Optional<string>;
}

export interface KeysMetadataRepresentation {
  "active": Optional<undefined>;
  "keys": Optional<KeysMetadataRepresentation_KeyMetadataRepresentation[]>;
}

export interface KeysMetadataRepresentation_KeyMetadataRepresentation {
  "algorithm": Optional<string>;
  "certificate": Optional<string>;
  "kid": Optional<string>;
  "providerId": Optional<string>;
  "providerPriority": Optional<bigint>;
  "publicKey": Optional<string>;
  "status": Optional<string>;
  "type": Optional<string>;
}

export interface ManagementPermissionReference {
  "enabled": Optional<boolean>;
  "resource": Optional<string>;
  "scopePermissions": Optional<undefined>;
}

export interface MappingsRepresentation {
  "clientMappings": Optional<undefined>;
  "realmMappings": Optional<RoleRepresentation[]>;
}

export interface MemoryInfoRepresentation {
  "free": Optional<bigint>;
  "freeFormated": Optional<string>;
  "freePercentage": Optional<bigint>;
  "total": Optional<bigint>;
  "totalFormated": Optional<string>;
  "used": Optional<bigint>;
  "usedFormated": Optional<string>;
}

export interface MultivaluedHashMap {
  "empty": Optional<boolean>;
  "loadFactor": Optional<undefined>;
  "threshold": Optional<number>;
}

export interface PartialImportRepresentation {
  "clients": Optional<ClientRepresentation[]>;
  "groups": Optional<GroupRepresentation[]>;
  "identityProviders": Optional<IdentityProviderRepresentation[]>;
  "ifResourceExists": Optional<string>;
  "policy": Optional<"SKIP" | "OVERWRITE" | "FAIL">;
  "roles": Optional<RolesRepresentation>;
  "users": Optional<UserRepresentation[]>;
}

export interface PasswordPolicyTypeRepresentation {
  "configType": Optional<string>;
  "defaultValue": Optional<string>;
  "displayName": Optional<string>;
  "id": Optional<string>;
  "multipleSupported": Optional<boolean>;
}

export interface Permission {
  "claims": Optional<undefined>;
  "rsid": Optional<string>;
  "rsname": Optional<string>;
  "scopes": Optional<string[]>;
}

export interface PolicyRepresentation {
  "config": Optional<undefined>;
  "decisionStrategy": Optional<"AFFIRMATIVE" | "UNANIMOUS" | "CONSENSUS">;
  "description": Optional<string>;
  "id": Optional<string>;
  "logic": Optional<"POSITIVE" | "NEGATIVE">;
  "name": Optional<string>;
  "owner": Optional<string>;
  "policies": Optional<string[]>;
  "resources": Optional<string[]>;
  "resourcesData": Optional<ResourceRepresentation[]>;
  "scopes": Optional<string[]>;
  "scopesData": Optional<ScopeRepresentation[]>;
  "type": Optional<string>;
}

export interface ProfileInfoRepresentation {
  "disabledFeatures": Optional<string[]>;
  "experimentalFeatures": Optional<string[]>;
  "name": Optional<string>;
  "previewFeatures": Optional<string[]>;
}

export interface ProtocolMapperRepresentation {
  "config": Optional<undefined>;
  "id": Optional<string>;
  "name": Optional<string>;
  "protocol": Optional<string>;
  "protocolMapper": Optional<string>;
}

export interface ProviderRepresentation {
  "operationalInfo": Optional<undefined>;
  "order": Optional<number>;
}

export interface RealmEventsConfigRepresentation {
  "adminEventsDetailsEnabled": Optional<boolean>;
  "adminEventsEnabled": Optional<boolean>;
  "enabledEventTypes": Optional<string[]>;
  "eventsEnabled": Optional<boolean>;
  "eventsExpiration": Optional<bigint>;
  "eventsListeners": Optional<string[]>;
}

export interface RealmRepresentation {
  "accessCodeLifespan": Optional<number>;
  "accessCodeLifespanLogin": Optional<number>;
  "accessCodeLifespanUserAction": Optional<number>;
  "accessTokenLifespan": Optional<number>;
  "accessTokenLifespanForImplicitFlow": Optional<number>;
  "accountTheme": Optional<string>;
  "actionTokenGeneratedByAdminLifespan": Optional<number>;
  "actionTokenGeneratedByUserLifespan": Optional<number>;
  "adminEventsDetailsEnabled": Optional<boolean>;
  "adminEventsEnabled": Optional<boolean>;
  "adminTheme": Optional<string>;
  "attributes": Optional<undefined>;
  "authenticationFlows": Optional<AuthenticationFlowRepresentation[]>;
  "authenticatorConfig": Optional<AuthenticatorConfigRepresentation[]>;
  "browserFlow": Optional<string>;
  "browserSecurityHeaders": Optional<undefined>;
  "bruteForceProtected": Optional<boolean>;
  "clientAuthenticationFlow": Optional<string>;
  "clientOfflineSessionIdleTimeout": Optional<number>;
  "clientOfflineSessionMaxLifespan": Optional<number>;
  "clientPolicies": Optional<JsonNode>;
  "clientProfiles": Optional<JsonNode>;
  "clientScopeMappings": Optional<undefined>;
  "clientScopes": Optional<ClientScopeRepresentation[]>;
  "clientSessionIdleTimeout": Optional<number>;
  "clientSessionMaxLifespan": Optional<number>;
  "clients": Optional<ClientRepresentation[]>;
  "components": Optional<MultivaluedHashMap>;
  "defaultDefaultClientScopes": Optional<string[]>;
  "defaultGroups": Optional<string[]>;
  "defaultLocale": Optional<string>;
  "defaultOptionalClientScopes": Optional<string[]>;
  "defaultRole": Optional<RoleRepresentation>;
  "defaultSignatureAlgorithm": Optional<string>;
  "directGrantFlow": Optional<string>;
  "displayName": Optional<string>;
  "displayNameHtml": Optional<string>;
  "dockerAuthenticationFlow": Optional<string>;
  "duplicateEmailsAllowed": Optional<boolean>;
  "editUsernameAllowed": Optional<boolean>;
  "emailTheme": Optional<string>;
  "enabled": Optional<boolean>;
  "enabledEventTypes": Optional<string[]>;
  "eventsEnabled": Optional<boolean>;
  "eventsExpiration": Optional<bigint>;
  "eventsListeners": Optional<string[]>;
  "failureFactor": Optional<number>;
  "federatedUsers": Optional<UserRepresentation[]>;
  "groups": Optional<GroupRepresentation[]>;
  "id": Optional<string>;
  "identityProviderMappers": Optional<IdentityProviderMapperRepresentation[]>;
  "identityProviders": Optional<IdentityProviderRepresentation[]>;
  "internationalizationEnabled": Optional<boolean>;
  "keycloakVersion": Optional<string>;
  "loginTheme": Optional<string>;
  "loginWithEmailAllowed": Optional<boolean>;
  "maxDeltaTimeSeconds": Optional<number>;
  "maxFailureWaitSeconds": Optional<number>;
  "minimumQuickLoginWaitSeconds": Optional<number>;
  "notBefore": Optional<number>;
  "oAuth2DeviceCodeLifespan": Optional<number>;
  "oAuth2DevicePollingInterval": Optional<number>;
  "oauth2DeviceCodeLifespan": Optional<number>;
  "oauth2DevicePollingInterval": Optional<number>;
  "offlineSessionIdleTimeout": Optional<number>;
  "offlineSessionMaxLifespan": Optional<number>;
  "offlineSessionMaxLifespanEnabled": Optional<boolean>;
  "otpPolicyAlgorithm": Optional<string>;
  "otpPolicyDigits": Optional<number>;
  "otpPolicyInitialCounter": Optional<number>;
  "otpPolicyLookAheadWindow": Optional<number>;
  "otpPolicyPeriod": Optional<number>;
  "otpPolicyType": Optional<string>;
  "otpSupportedApplications": Optional<string[]>;
  "passwordPolicy": Optional<string>;
  "permanentLockout": Optional<boolean>;
  "protocolMappers": Optional<ProtocolMapperRepresentation[]>;
  "quickLoginCheckMilliSeconds": Optional<bigint>;
  "realm": Optional<string>;
  "refreshTokenMaxReuse": Optional<number>;
  "registrationAllowed": Optional<boolean>;
  "registrationEmailAsUsername": Optional<boolean>;
  "registrationFlow": Optional<string>;
  "rememberMe": Optional<boolean>;
  "requiredActions": Optional<RequiredActionProviderRepresentation[]>;
  "resetCredentialsFlow": Optional<string>;
  "resetPasswordAllowed": Optional<boolean>;
  "revokeRefreshToken": Optional<boolean>;
  "roles": Optional<RolesRepresentation>;
  "scopeMappings": Optional<ScopeMappingRepresentation[]>;
  "smtpServer": Optional<undefined>;
  "sslRequired": Optional<string>;
  "ssoSessionIdleTimeout": Optional<number>;
  "ssoSessionIdleTimeoutRememberMe": Optional<number>;
  "ssoSessionMaxLifespan": Optional<number>;
  "ssoSessionMaxLifespanRememberMe": Optional<number>;
  "supportedLocales": Optional<string[]>;
  "userFederationMappers": Optional<UserFederationMapperRepresentation[]>;
  "userFederationProviders": Optional<UserFederationProviderRepresentation[]>;
  "userManagedAccessAllowed": Optional<boolean>;
  "users": Optional<UserRepresentation[]>;
  "verifyEmail": Optional<boolean>;
  "waitIncrementSeconds": Optional<number>;
  "webAuthnPolicyAcceptableAaguids": Optional<string[]>;
  "webAuthnPolicyAttestationConveyancePreference": Optional<string>;
  "webAuthnPolicyAuthenticatorAttachment": Optional<string>;
  "webAuthnPolicyAvoidSameAuthenticatorRegister": Optional<boolean>;
  "webAuthnPolicyCreateTimeout": Optional<number>;
  "webAuthnPolicyPasswordlessAcceptableAaguids": Optional<string[]>;
  "webAuthnPolicyPasswordlessAttestationConveyancePreference": Optional<string>;
  "webAuthnPolicyPasswordlessAuthenticatorAttachment": Optional<string>;
  "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": Optional<boolean>;
  "webAuthnPolicyPasswordlessCreateTimeout": Optional<number>;
  "webAuthnPolicyPasswordlessRequireResidentKey": Optional<string>;
  "webAuthnPolicyPasswordlessRpEntityName": Optional<string>;
  "webAuthnPolicyPasswordlessRpId": Optional<string>;
  "webAuthnPolicyPasswordlessSignatureAlgorithms": Optional<string[]>;
  "webAuthnPolicyPasswordlessUserVerificationRequirement": Optional<string>;
  "webAuthnPolicyRequireResidentKey": Optional<string>;
  "webAuthnPolicyRpEntityName": Optional<string>;
  "webAuthnPolicyRpId": Optional<string>;
  "webAuthnPolicySignatureAlgorithms": Optional<string[]>;
  "webAuthnPolicyUserVerificationRequirement": Optional<string>;
}

export interface RequiredActionProviderRepresentation {
  "alias": Optional<string>;
  "config": Optional<undefined>;
  "defaultAction": Optional<boolean>;
  "enabled": Optional<boolean>;
  "name": Optional<string>;
  "priority": Optional<number>;
  "providerId": Optional<string>;
}

export interface ResourceRepresentation {
  "id": Optional<string>;
  "attributes": Optional<undefined>;
  "displayName": Optional<string>;
  "icon_uri": Optional<string>;
  "name": Optional<string>;
  "ownerManagedAccess": Optional<boolean>;
  "scopes": Optional<ScopeRepresentation[]>;
  "type": Optional<string>;
  "uris": Optional<string[]>;
}

export interface ResourceServerRepresentation {
  "allowRemoteResourceManagement": Optional<boolean>;
  "clientId": Optional<string>;
  "decisionStrategy": Optional<"AFFIRMATIVE" | "UNANIMOUS" | "CONSENSUS">;
  "id": Optional<string>;
  "name": Optional<string>;
  "policies": Optional<PolicyRepresentation[]>;
  "policyEnforcementMode": Optional<"ENFORCING" | "PERMISSIVE" | "DISABLED">;
  "resources": Optional<ResourceRepresentation[]>;
  "scopes": Optional<ScopeRepresentation[]>;
}

export interface RoleRepresentation {
  "attributes": Optional<undefined>;
  "clientRole": Optional<boolean>;
  "composite": Optional<boolean>;
  "composites": Optional<RoleRepresentation_Composites>;
  "containerId": Optional<string>;
  "description": Optional<string>;
  "id": Optional<string>;
  "name": Optional<string>;
}

export interface RoleRepresentation_Composites {
  "client": Optional<undefined>;
  "realm": Optional<string[]>;
}

export interface RolesRepresentation {
  "client": Optional<undefined>;
  "realm": Optional<RoleRepresentation[]>;
}

export interface ScopeMappingRepresentation {
  "client": Optional<string>;
  "clientScope": Optional<string>;
  "roles": Optional<string[]>;
  "self": Optional<string>;
}

export interface ScopeRepresentation {
  "displayName": Optional<string>;
  "iconUri": Optional<string>;
  "id": Optional<string>;
  "name": Optional<string>;
  "policies": Optional<PolicyRepresentation[]>;
  "resources": Optional<ResourceRepresentation[]>;
}

export interface ServerInfoRepresentation {
  "builtinProtocolMappers": Optional<undefined>;
  "clientImporters": Optional<undefined[]>;
  "clientInstallations": Optional<undefined>;
  "componentTypes": Optional<undefined>;
  "enums": Optional<undefined>;
  "identityProviders": Optional<undefined[]>;
  "memoryInfo": Optional<MemoryInfoRepresentation>;
  "passwordPolicies": Optional<PasswordPolicyTypeRepresentation[]>;
  "profileInfo": Optional<ProfileInfoRepresentation>;
  "protocolMapperTypes": Optional<undefined>;
  "providers": Optional<undefined>;
  "socialProviders": Optional<undefined[]>;
  "systemInfo": Optional<SystemInfoRepresentation>;
  "themes": Optional<undefined>;
}

export interface SpiInfoRepresentation {
  "internal": Optional<boolean>;
  "providers": Optional<undefined>;
}

export interface SynchronizationResult {
  "added": Optional<number>;
  "failed": Optional<number>;
  "ignored": Optional<boolean>;
  "removed": Optional<number>;
  "status": Optional<string>;
  "updated": Optional<number>;
}

export interface SystemInfoRepresentation {
  "fileEncoding": Optional<string>;
  "javaHome": Optional<string>;
  "javaRuntime": Optional<string>;
  "javaVendor": Optional<string>;
  "javaVersion": Optional<string>;
  "javaVm": Optional<string>;
  "javaVmVersion": Optional<string>;
  "osArchitecture": Optional<string>;
  "osName": Optional<string>;
  "osVersion": Optional<string>;
  "serverTime": Optional<string>;
  "uptime": Optional<string>;
  "uptimeMillis": Optional<bigint>;
  "userDir": Optional<string>;
  "userLocale": Optional<string>;
  "userName": Optional<string>;
  "userTimezone": Optional<string>;
  "version": Optional<string>;
}

export interface TestLdapConnectionRepresentation {
  "action": Optional<string>;
  "authType": Optional<string>;
  "bindCredential": Optional<string>;
  "bindDn": Optional<string>;
  "componentId": Optional<string>;
  "connectionTimeout": Optional<string>;
  "connectionUrl": Optional<string>;
  "startTls": Optional<string>;
  "useTruststoreSpi": Optional<string>;
}

export interface UserConsentRepresentation {
  "clientId": Optional<string>;
  "createdDate": Optional<bigint>;
  "grantedClientScopes": Optional<string[]>;
  "lastUpdatedDate": Optional<bigint>;
}

export interface UserFederationMapperRepresentation {
  "config": Optional<undefined>;
  "federationMapperType": Optional<string>;
  "federationProviderDisplayName": Optional<string>;
  "id": Optional<string>;
  "name": Optional<string>;
}

export interface UserFederationProviderRepresentation {
  "changedSyncPeriod": Optional<number>;
  "config": Optional<undefined>;
  "displayName": Optional<string>;
  "fullSyncPeriod": Optional<number>;
  "id": Optional<string>;
  "lastSync": Optional<number>;
  "priority": Optional<number>;
  "providerName": Optional<string>;
}

export interface UserRepresentation {
  "access": Optional<undefined>;
  "attributes": Optional<undefined>;
  "clientConsents": Optional<UserConsentRepresentation[]>;
  "clientRoles": Optional<undefined>;
  "createdTimestamp": Optional<bigint>;
  "credentials": Optional<CredentialRepresentation[]>;
  "disableableCredentialTypes": Optional<string[]>;
  "email": Optional<string>;
  "emailVerified": Optional<boolean>;
  "enabled": Optional<boolean>;
  "federatedIdentities": Optional<FederatedIdentityRepresentation[]>;
  "federationLink": Optional<string>;
  "firstName": Optional<string>;
  "groups": Optional<string[]>;
  "id": Optional<string>;
  "lastName": Optional<string>;
  "notBefore": Optional<number>;
  "origin": Optional<string>;
  "realmRoles": Optional<string[]>;
  "requiredActions": Optional<string[]>;
  "self": Optional<string>;
  "serviceAccountClientId": Optional<string>;
  "username": Optional<string>;
}
