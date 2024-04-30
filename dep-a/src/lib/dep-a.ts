import { isAstNode } from 'langium';
import * as process from 'node:process';

export function depA(): string {
  return 'dep-a. ' + isAstNode("HALLO") +
    process.argv.join(", ");
}
