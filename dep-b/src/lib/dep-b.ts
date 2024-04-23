import { depA } from "@org/dep-a";
import { isReference } from 'langium';
export function depB(): string {
  return 'dep-bpppp' + depA() + JSON.stringify(isReference({}));
}
