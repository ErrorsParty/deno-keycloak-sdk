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
