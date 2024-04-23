// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GrammarUtils } from 'langium';

export function depA(): string {
  const i = GrammarUtils.isOptionalCardinality(undefined);
  return 'dep-a ' + i;
}
