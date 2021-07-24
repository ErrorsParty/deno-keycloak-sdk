// Used to make is simpler to port definitions.
export type K<Value, Key extends string> = Record<Key, Value>;

// Mapped Types
export type Optional<Value> = Value | null | undefined;
export type int32 = number;
export type int64 = bigint;
export type KMap = Record<string, string>;

// Export Definitions

export type AddressClaimSet = Record<
  | "country"
  | "formatted"
  | "locality"
  | "postal_code"
  | "region"
  | "street_address",
  undefined | null | string
>;

export type Permission =
  & K<Optional<string>, "rsid" | "rsname">
  & K<Optional<string[]>, "scopes">
  & K<Optional<KMap>, "claims">;

// deno-lint-ignore camelcase (the name comes from the Keycloak payload definitions)
export type AccessToken_Authorization = K<
  Optional<Permission[]>,
  "permissions"
>;

// deno-lint-ignore camelcase (the name comes from the Keycloak payload definitions)
export type AccessToken_CertConf = K<Optional<string>, "x5t#s256">;

// deno-lint-ignore camelcase (the name comes from the Keycloak payload definitions)
export type AccessToken_Access =
  & K<Optional<string[]>, "roles">
  & K<Optional<boolean>, "verify_caller">;

export type AccessToken =
  & K<Optional<AddressClaimSet>, "address">
  & K<
    Optional<string>,
    | "acr"
    | "at_hash"
    | "azp"
    | "birthdate"
    | "c_hash"
    | "claims_locales"
    | "email"
    | "family_name"
    | "gender"
    | "given_name"
    | "iss"
    | "jti"
    | "locale"
    | "middle_name"
    | "name"
    | "nickname"
    | "none"
    | "phone_number"
    | "picture"
    | "preferred_username"
    | "profile"
    | "s_hash"
    | "scope"
    | "session_state"
    | "sub"
    | "typ"
    | "website"
    | "zoneinfo"
  >
  & K<
    Optional<"INTERNAL" | "ACCESS" | "ID" | "ADMIN" | "USERINFO" | "LOGOUT">,
    "category"
  >
  & K<Optional<int64>, "auth_time" | "exp" | "iat" | "nbf" | "updated_at">
  & K<Optional<AccessToken_Authorization>, "authorization">
  & K<Optional<KMap>, "otherClaims">
  & K<Optional<AccessToken_CertConf>, "cnf">
  & K<Optional<AccessToken_Access>, "realm_access">
  & K<Optional<string[]>, "trusted-certs">;
