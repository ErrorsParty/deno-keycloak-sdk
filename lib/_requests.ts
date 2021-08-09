// todo(ihack2712): Document file.

type JSONValues = boolean | string | number | JSONArray | JSONObject | null;
type JSONArray = JSONValues[];
type JSONObject = { [key: string]: JSONValues } & { [key: number]: JSONValues };
type QueryObject = Record<string, boolean | number | string>;

function joinUrl(base: string, path: string) {
  if (base.length > 0) {
    return new URL(path, base);
  }
  return new URL(path);
}

function queryBuilder(
  query: undefined | QueryObject,
): string {
  if (query === undefined) return "";
  const arr: string[] = [];
  for (const key in query) {
    arr.join(encodeURIComponent(key) + "=" + encodeURIComponent(String(query)));
  }
  return arr.length > 0 ? "?" + arr.join("&") : "";
}

async function req(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  base: string,
  path: string,
  query?: QueryObject,
  headers?: Record<string, string> | HeadersInit,
  data?: JSONValues,
): Promise<Response> {
  const h = new Headers(headers);
  let body: string | undefined = undefined;
  if (data !== undefined) {
    body = JSON.stringify(data);
    h.set("Content-Type", "application/json");
  }
  return await fetch(joinUrl(base, path) + queryBuilder(query), {
    method,
    headers: h,
    body,
  });
}

// deno-lint-ignore no-explicit-any
async function JSONReq<X = any>(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  base: string,
  path: string,
  query?: QueryObject,
  headers?: Record<string, string> | HeadersInit,
  data?: JSONValues,
): Promise<X> {
  const res = await req(method, base, path, query, headers, data);
  return await res.json() as X;
}

export interface QOptions {
  query?: QueryObject;
  data?: JSONValues;
  headers?: HeadersInit;
}

export interface SQOptions {
  base?: string;
  headers?: HeadersInit;
}

export class Q {
  // deno-lint-ignore no-explicit-any
  private static async req<X = any>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    url: string,
    options?: QOptions & SQOptions,
  ): Promise<X> {
    const base = options && options.base ? options.base : "";
    const query = options && options.query ? options.query : undefined;
    const headers = options && options.headers ? options.headers : undefined;
    const data = options && options.data ? options.data : undefined;
    return await JSONReq<X>(method, base, url, query, headers, data);
  }

  // deno-lint-ignore no-explicit-any
  public static async get<X = any>(
    url: string,
    options?: QOptions | SQOptions,
  ): Promise<X> {
    return await Q.req<X>("GET", url, options);
  }

  // deno-lint-ignore no-explicit-any
  public static async post<X = any>(
    url: string,
    options?: QOptions | SQOptions,
  ): Promise<X> {
    return await Q.req<X>("POST", url, options);
  }

  // deno-lint-ignore no-explicit-any
  public static async put<X = any>(
    url: string,
    options?: QOptions | SQOptions,
  ): Promise<X> {
    return await Q.req<X>("PUT", url, options);
  }

  // deno-lint-ignore no-explicit-any
  public static async patch<X = any>(
    url: string,
    options?: QOptions | SQOptions,
  ): Promise<X> {
    return await Q.req<X>("PATCH", url, options);
  }

  // deno-lint-ignore no-explicit-any
  public static async delete<X = any>(
    url: string,
    options?: QOptions | SQOptions,
  ): Promise<X> {
    return await Q.req<X>("DELETE", url, options);
  }

  private static combineHeaders(headers: HeadersInit, from: Headers) {
    headers = new Headers(headers);
    const h = new Headers();
    for (const [key, value] of from.entries()) {
      h.set(key, value);
    }
    for (const [key, value] of headers.entries()) h.set(key, value);
    return h;
  }

  public base: string;
  public headers: Headers;

  public constructor(options?: SQOptions) {
    this.base = options && options.base ? options.base : "";
    this.headers = options ? new Headers(options.headers) : new Headers();
    this.headers.set("Accept", "application/json");
  }

  public authorization(value?: string) {
    if (value !== undefined) {
      this.headers.set("Authorization", value);
    } else {
      this.headers.delete("Authorization");
    }
  }

  // deno-lint-ignore no-explicit-any
  private async req<X = any>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    path: string,
    query?: QueryObject,
    headers?: Record<string, string> | HeadersInit,
    data?: JSONValues,
  ): Promise<X> {
    return await Q.req<X>(method, path, {
      base: this.base,
      data,
      query,
      headers: Q.combineHeaders(headers ?? {}, this.headers),
    });
  }

  // deno-lint-ignore no-explicit-any
  public async get<X = any>(path: string, options?: QOptions) {
    return await this.req<X>(
      "GET",
      path,
      options ? options.query : undefined,
      options ? options.headers : undefined,
      options ? options.data : undefined,
    );
  }

  // deno-lint-ignore no-explicit-any
  public async post<X = any>(path: string, options?: QOptions) {
    return await this.req<X>(
      "POST",
      path,
      options ? options.query : undefined,
      options ? options.headers : undefined,
      options ? options.data : undefined,
    );
  }

  // deno-lint-ignore no-explicit-any
  public async put<X = any>(path: string, options?: QOptions) {
    return await this.req<X>(
      "PUT",
      path,
      options ? options.query : undefined,
      options ? options.headers : undefined,
      options ? options.data : undefined,
    );
  }

  // deno-lint-ignore no-explicit-any
  public async patch<X = any>(path: string, options?: QOptions) {
    return await this.req<X>(
      "PATCH",
      path,
      options ? options.query : undefined,
      options ? options.headers : undefined,
      options ? options.data : undefined,
    );
  }

  // deno-lint-ignore no-explicit-any
  public async delete<X = any>(path: string, options?: QOptions) {
    return await this.req<X>(
      "DELETE",
      path,
      options ? options.query : undefined,
      options ? options.headers : undefined,
      options ? options.data : undefined,
    );
  }
}

export default Q;
