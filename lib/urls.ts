// Imports
import { join } from "../deps.ts";

type URLCombiner<Args extends string[]> =
  & ((
    ...args: Args
  ) => string)
  & { nArgs: number };

function createAppend<
  P extends URLCombiner<string[]>,
  C extends string[] = [],
>(
  func: P,
  n: number,
  ...before: string[]
): URLCombiner<[...Parameters<P>, ...C]> {
  const l = n;
  n = func.nArgs + n;
  const fn: URLCombiner<[...Parameters<P>, ...C]> =
    ((...args: string[]) =>
      join(
        func(...(args.slice(0, n).map(encodeURIComponent))),
        ...before.map(encodeURIComponent),
        ...args.slice(n - l, n).map(encodeURIComponent),
      )) as unknown as URLCombiner<[...Parameters<P>, ...C]>;
  fn.nArgs = n;
  return fn;
}

export const realm: URLCombiner<[realm: string]> =
  ((realm) => "/" + encodeURIComponent(realm)) as URLCombiner<[realm: string]>;
realm.nArgs = 1;
export const bruteForceUsers = createAppend<typeof realm>(
  realm,
  0,
  "attack-detection",
  "brute-force",
  "users",
);
export const bruteForceUser = createAppend<
  typeof bruteForceUsers,
  [user: string]
>(bruteForceUsers, 1);
export const auth = createAppend<typeof realm>(realm, 0, "authentication");
export const authProviders = createAppend<typeof auth>(
  auth,
  0,
  "authentication-providers",
);
export const cltAuthProviders = createAppend<typeof auth>(
  auth,
  0,
  "client-authentication-providers",
);
export const authConfDesc = createAppend<typeof auth, [providerId: string]>(
  auth,
  1,
  "config-description",
);
export const authConf = createAppend<typeof auth, [id: string]>(
  auth,
  1,
  "config",
);
export const authExecs = createAppend<typeof auth>(auth, 0, "executions");
export const authExec = createAppend<typeof authExecs, [executionId: string]>(
  authExecs,
  1,
);
export const authExecConf = createAppend<typeof authExec>(authExec, 0, "conf");
export const authExecLowerPriority = createAppend<typeof authExec>(
  authExec,
  0,
  "lower-priority",
);
export const authExecRaisePriority = createAppend<typeof authExec>(
  authExec,
  0,
  "raise-priority",
);
export const authFlows = createAppend<typeof auth>(auth, 0, "flows");
export const authFlow = createAppend<typeof auth, [flowAlias: string]>(
  authFlows,
  1,
);
export const flowCopy = createAppend<typeof authFlow>(authFlow, 0, "copy");
export const flowExecs = createAppend<typeof authFlow>(
  authFlow,
  0,
  "executions",
);
export const flowExec = createAppend<typeof flowExecs>(
  flowExecs,
  0,
  "execution",
);
export const flowFlow = createAppend<typeof flowExecs>(
  flowExecs,
  0,
  "flow",
);
export const authFormActionProviders = createAppend<typeof auth>(
  auth,
  0,
  "form-action-providers",
);
export const authFormProviders = createAppend<typeof auth>(
  auth,
  0,
  "form-providers",
);
export const authPerCltCfgDsc = createAppend<typeof auth>(
  auth,
  0,
  "per-client-config-description",
);
export const authRegReqAct = createAppend<typeof auth>(
  auth,
  0,
  "register-required-action",
);
export const authReqActs = createAppend<typeof auth>(
  auth,
  0,
  "required-actions",
);
export const authReqAct = createAppend<typeof authReqActs, [alias: string]>(
  authReqActs,
  1,
);
export const authReqActLowerPriority = createAppend<typeof authReqAct>(
  authReqAct,
  0,
  "lower-priority",
);
export const authReqActRaisePriority = createAppend<typeof authReqAct>(
  authReqAct,
  0,
  "raise-priority",
);
export const authUnregReqAct = createAppend<typeof auth>(
  auth,
  0,
  "unregistered-required-actions",
);
export const clts = createAppend<typeof realm>(realm, 0, "clients");
export const clt = createAppend<typeof clts, [id: string]>(clts, 1);
export const cltCrts = createAppend<typeof clt>(clt, 0);
export const cltCrt = createAppend<typeof cltCrts, [attr: string]>(cltCrts, 1);
export const cltCrtDl = createAppend<typeof cltCrt>(cltCrt, 0, "download");
export const cltCrtGen = createAppend<typeof cltCrt>(cltCrt, 0, "generate");
export const cltCrtGenDl = createAppend<typeof cltCrt>(
  cltCrt,
  0,
  "generate-and-download",
);
export const cltCrtUplPrv = createAppend<typeof cltCrt>(cltCrt, 0, "upload");
export const cltCrtUplCrt = createAppend<typeof cltCrt>(
  cltCrt,
  0,
  "upload-certificate",
);
export const cias = createAppend<typeof realm>(
  realm,
  0,
  "clients-initial-access",
);
export const cia = createAppend<typeof cias, [id: string]>(cias, 1);
export const ciasPro = createAppend<typeof cias>(cias, 0, "providers");
export const grps = createAppend<typeof realm>(realm, 0, "groups");
export const grp = createAppend<typeof grps, [id: string]>(grps, 1);
export const grpRm = createAppend<typeof grp>(grp, 0, "role-mappings");
export const grpRmClts = createAppend<typeof grpRm>(grpRm, 0, "clients");
export const grpRmClt = createAppend<typeof grpRmClts, [client: string]>(
  grpRmClts,
  1,
);
export const grpRmCltAvail = createAppend<typeof grpRmClt>(
  grpRmClt,
  0,
  "available",
);
export const grpRmCltComp = createAppend<typeof grpRmClt>(
  grpRmClt,
  0,
  "composite",
);
export const usrs = createAppend<typeof realm>(realm, 0, "users");
export const usr = createAppend<typeof usrs, [id: string]>(usrs, 1);
export const usrRm = createAppend<typeof usr>(usr, 0, "role-mappings");
export const usrRmClts = createAppend<typeof usrRm>(usrRm, 0, "clients");
export const usrRmClt = createAppend<typeof usrRmClts, [id: string]>(
  usrRmClts,
  1,
);
export const usrRmCltAvail = createAppend<typeof usrRmClt>(
  usrRmClt,
  0,
  "available",
);
export const usrRmCltComp = createAppend<typeof usrRmClt>(
  usrRmClt,
  0,
  "composite",
);
export const cltScos = createAppend<typeof realm>(realm, 0, "client-scopes");
export const cltSco = createAppend<typeof cltScos, [id: string]>(cltScos, 1);
export const cltCs = createAppend<typeof clt>(clt, 0, "client-secret");
export const cltDcss = createAppend<typeof clt>(
  clt,
  0,
  "default-client-scopes",
);
export const cltDcs = createAppend<typeof cltDcss, [clientScopeId: string]>(
  cltDcss,
  1,
);
export const cltEs = createAppend<typeof clt>(clt, 0, "evaluate-scopes");
export const cltEsGeat = createAppend<typeof cltEs>(
  cltEs,
  0,
  "generate-example-access-token",
);
export const cltEsGeit = createAppend<typeof cltEs>(
  cltEs,
  0,
  "generate-example-id-token",
);
export const cltEsGeu = createAppend<typeof cltEs>(
  cltEs,
  0,
  "generate-example-userinfo",
);
export const cltEsPm = createAppend<typeof cltEs>(cltEs, 0, "protocol-mappers");
export const cltEsSms = createAppend<typeof cltEs>(cltEs, 0, "scope-mappings");
export const cltEsSm = createAppend<typeof cltEsSms, [roleContainerId: string]>(
  cltEsSms,
  1,
);
export const cltEsSmG = createAppend<typeof cltEsSm>(cltEsSm, 0, "granted");
export const cltEsSmNg = createAppend<typeof cltEsSm>(
  cltEsSm,
  0,
  "not-granted",
);
export const cltI = createAppend<typeof clt>(clt, 0, "installation");
export const cltIPs = createAppend<typeof cltI>(cltI, 0, "providers");
export const cltIP = createAppend<typeof cltIPs, [providerId: string]>(
  cltIPs,
  1,
);
export const cltMan = createAppend<typeof clt>(clt, 0, "management");
export const cltManP = createAppend<typeof cltMan>(cltMan, 0, "permissions");
export const cltNodes = createAppend<typeof clt>(clt, 0, "nodes");
export const cltNode = createAppend<typeof cltNodes, [node: string]>(
  cltNodes,
  1,
);
export const cltOsc = createAppend<typeof clt>(clt, 0, "offline-session-count");
export const cltOs = createAppend<typeof clt>(clt, 0, "offline-sessions");
export const cltOcss = createAppend<typeof clt>(
  clt,
  0,
  "optional-client-scopes",
);
export const cltOcs = createAppend<typeof cltOcss, [clientScopeId: string]>(
  cltOcss,
  1,
);
export const cltPr = createAppend<typeof clt>(clt, 0, "push-revocation");
export const cltRat = createAppend<typeof clt>(
  clt,
  0,
  "registration-access-token",
);
export const cltSau = createAppend<typeof clt>(clt, 0, "service-account-user");
export const cltSc = createAppend<typeof clt>(clt, 0, "session-count");
export const cltTna = createAppend<typeof clt>(clt, 0, "test-nodes-available");
export const cltUs = createAppend<typeof cltTna>(clt, 0, "user-sessions");
export const cltComps = createAppend<typeof clt>(clt, 0, "components");
export const cltComp = createAppend<typeof cltComps, [components: string]>(
  clt,
  1,
);
export const cltCompSct = createAppend<typeof cltComp>(
  cltComp,
  0,
  "sub-component-types",
);
export const grpsCount = createAppend<typeof grps>(grps, 0, "count");
export const grpChildren = createAppend<typeof grps>(grps, 0, "children");
export const grpMan = createAppend<typeof grp>(grp, 0, "management");
export const grpManP = createAppend<typeof grpMan>(grpMan, 0, "permissions");
export const grpMem = createAppend<typeof grp>(grp, 0, "members");
export const IdPr = createAppend<typeof realm>(realm, 0, "identity-provider");
export const IdPrImCo = createAppend<typeof IdPr>(IdPr, 0, "import-config");
export const IdPrIns = createAppend<typeof IdPr>(IdPr, 0, "instances");
export const IdPrIn = createAppend<typeof IdPrIns, [alias: string]>(IdPrIns, 1);
export const IdPrInEx = createAppend<typeof IdPrIn>(IdPrIn, 0, "export");
export const IdPrInMan = createAppend<typeof IdPrIn>(IdPrIn, 0, "management");
export const IdPrInManP = createAppend<typeof IdPrInMan>(
  IdPrInMan,
  0,
  "permissions",
);
export const IdPrInMt = createAppend<typeof IdPrIn>(IdPrIn, 0, "mapper-types");
export const IdPrInMs = createAppend<typeof IdPrIn>(IdPrIn, 0, "mappers");
export const IdPrInM = createAppend<typeof IdPrInMs, [id: string]>(IdPrInMs, 1);
export const IdPrPrs = createAppend<typeof IdPr>(IdPr, 0, "providers");
export const IdPrPr = createAppend<typeof IdPrPrs, [provider_id: string]>(
  IdPrPrs,
  1,
);
export const ClScs = createAppend<typeof realm>(realm, 0, "client-scopes");
export const ClSc = createAppend<typeof ClScs, [id: string]>(ClScs, 1);
export const ClScPm = createAppend<typeof ClSc>(ClSc, 0, "protocol-mappers");
export const ClScPmAm = createAppend<typeof ClScPm>(ClScPm, 0, "add-models");
export const ClScPmMods = createAppend<typeof ClScPm>(ClScPm, 0, "models");
export const ClScPmMod = createAppend<typeof ClScPm, [id: string]>(ClScPm, 1);
export const ClScPmPrs = createAppend<typeof ClScPm>(ClScPm, 0, "protocol");
export const ClScPmPr = createAppend<typeof ClScPmPrs, [protocol: string]>(
  ClScPmPrs,
  1,
);
export const cltPm = createAppend<typeof clt>(clt, 0, "protocol-mappers");
export const cltPmAm = createAppend<typeof cltPm>(cltPm, 0, "add-models");
export const cltPmMs = createAppend<typeof cltPm>(cltPm, 0, "models");
export const cltPmM = createAppend<typeof cltPmMs, [id: string]>(cltPmMs, 1);
export const cltPmPrs = createAppend<typeof cltPm>(cltPm, 0, "protocol");
export const cltPmPr = createAppend<typeof cltPmPrs, [protocol: string]>(
  cltPmPrs,
  1,
);
export const realmAdmEvts = createAppend<typeof realm>(
  realm,
  0,
  "admin-events",
);
export const realmCkc = createAppend<typeof realm>(
  realm,
  0,
  "clear-keys-cache",
);
export const realmCrc = createAppend<typeof realm>(
  realm,
  0,
  "clear-realm-cache",
);
export const realmCuc = createAppend<typeof realm>(
  realm,
  0,
  "clear-user-cache",
);
export const realmCdc = createAppend<typeof realm>(
  realm,
  0,
  "client-description-converter",
);
export const cltPol = createAppend<typeof realm>(realm, 0, "client-policies");
export const cltPlPl = createAppend<typeof cltPol>(cltPol, 0, "policies");
export const cltPlPr = createAppend<typeof cltPol>(cltPol, 0, "profiles");
export const css = createAppend<typeof realm>(realm, 0, "client-session-stats");
export const CrRe = createAppend<typeof realm>(
  realm,
  0,
  "credential-registrators",
);
export const ddcss = createAppend<typeof realm>(
  realm,
  0,
  "default-default-client-scopes",
);
export const ddcs = createAppend<typeof ddcss, [clientScopeid: string]>(
  ddcss,
  1,
);
export const dgs = createAppend<typeof realm>(realm, 0, "default-groups");
export const dg = createAppend<typeof realm, [groupId: string]>(realm, 1);
export const docss = createAppend<typeof realm>(
  realm,
  0,
  "default-optional-client-scopes",
);
export const docs = createAppend<typeof docss, [clientScopeId: string]>(
  docss,
  1,
);
export const evts = createAppend<typeof realm>(realm, 0, "events");
export const evtsCfg = createAppend<typeof evts>(realm, 0, "config");
export const gbpp = createAppend<typeof realm, [path: string]>(
  realm,
  1,
  "group-by-path",
);
export const ldapsc = createAppend<typeof realm>(
  realm,
  0,
  "ldap-server-capabilities",
);
export const rll = createAppend<typeof realm>(realm, 0, "localization");
export const rl = createAppend<typeof rll, [localse: string]>(rll, 1);
export const rlk = createAppend<typeof rl, [key: string]>(rl, 1);
export const logoutAll = createAppend<typeof realm>(realm, 0, "logout-all");
export const pe = createAppend<typeof realm>(realm, 0, "partial-export");
export const pi = createAppend<typeof realm>(realm, 0, "partialImport");
export const pr = createAppend<typeof realm>(realm, 0, "push-revocation");
