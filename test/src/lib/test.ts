import * as process from 'node:process';

export function test(): string {
  return 'test' + process.argv.join(",");
}
