(() => {
  console.clear();
  document.querySelectorAll(".sect1:nth-child(3) .sect2");

  const defs = new Map();
  const typeMap = new Map();
  typeMap
    .set("string", "string")
    .set("_map", "Record<string | number | symbol, unknown>")
    .set("integer(int32)", "number")
    .set("integer(int64)", "bigint")
    .set("boolean", "boolean");

  let compiledOutput = "" +
    "// deno-lint-ignore-file camelcase (Because payloads from keycloak doesn't use camlecasing)\n\n" +
    "// This is file is generated from the following URL:\n" +
    "// " +
    ((_ = location.href.indexOf("#")) =>
      location.href.substring(0, _ > -1 ? _ : location.href.length))() +
    "\n\n" +
    "export type Optional<Value> = Value | null | undefined;\n\n";

  const nameRegex = /\n.*optional$/g;

  for (const sect of document.querySelectorAll(".sect1:nth-child(3) .sect2")) {
    const h3 = sect.querySelector("h3");
    const oname = h3.innerText;
    const name = oname.replaceAll("-", "_").trim();
    const id = h3.id;
    const pairs = [];
    const iface = { name, pairs };
    defs.set(id, iface);
    typeMap.set(oname, name);
    for (const row of sect.querySelectorAll("tbody tr")) {
      const item = [];
      pairs.push(item);
      let name = row.querySelector("td").innerText.trim();
      let optional = false;
      if (nameRegex.test(name)) {
        optional = true;
        name = name.replace(nameRegex, "");
      }
      item.push(name);
      item.push(optional);
      const kindEl = row.querySelector("td ~ td p");
      let txt = kindEl.innerText;
      let arr = false;
      if (txt.startsWith("< ") && txt.endsWith(" > array")) {
        arr = true;
        txt = txt.substring(2, txt.length - 8);
      }
      if (txt.startsWith("enum (") && txt.endsWith(")") && !typeMap.has(txt)) {
        typeMap.set(
          txt,
          txt.substring(6, txt.length - 1).split(",").map((s) =>
            '"' + s.trim() + '"'
          ).join(" | "),
        );
      }
      item.push(txt);
      item.push(arr);
    }
  }

  for (const [_, def] of defs) {
    compiledOutput += "export interface " + def.name + " {\n";
    for (const [name, optional, kind, arr] of def.pairs) {
      compiledOutput += '  "' + name + '": ';
      if (optional) compiledOutput += "Optional<";
      compiledOutput += typeMap.get(kind);
      if (arr) compiledOutput += "[]";
      if (optional) compiledOutput += ">";
      compiledOutput += ";\n";
    }
    compiledOutput += "}\n\n";
  }

  console.log(compiledOutput);
})();
