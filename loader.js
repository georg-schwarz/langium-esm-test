// (loader.ts)
// Uses tsconfig.json and createMatchPath (from tsconfig-paths lib) to implement a custom loader
// (resolve function) that applies path mappings like `@src/foo` --> `/path/to/app/build/src/foo.js`
// See also https://github.com/TypeStrong/ts-node/discussions/1450#discussion-3563207
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { basename, dirname, resolve as pathResolve } from 'path';
import { fileURLToPath } from 'url';

import { createMatchPath } from 'tsconfig-paths';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function getTSConfig() {
  // In our setup, the paths to the local libs are defined in "tsconfig.base.json"
  let tsConfigFile = pathResolve(__dirname, 'tsconfig.base.json');
  return JSON.parse(await readFile(tsConfigFile, 'utf-8'));
}

const getMatchPathPromise = (async () => {
  const tsConfig = await getTSConfig();
  const baseUrl = tsConfig.compilerOptions.baseUrl || '.';
  const outDir = tsConfig.compilerOptions.outDir || '.';
  const absoluteBaseUrl = pathResolve(baseUrl, outDir);
  const paths = tsConfig.compilerOptions.paths;
  return createMatchPath(absoluteBaseUrl, paths);
})();

export async function resolve(specifier, context, defaultResolve) {
  const matchPath = await getMatchPathPromise;
  const mappedSpecifier = matchPath(specifier)
  if (mappedSpecifier) {
    specifier = `file://${mappedSpecifier}`
      .replace('.ts', '.js')
      .replace('home/georg/dev/jvalue/nx-esm/org/', 'home/georg/dev/jvalue/nx-esm/org/dist/');
  }
  return defaultResolve(specifier, context, defaultResolve);
}