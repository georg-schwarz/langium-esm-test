import { depA } from "@org/dep-a";
import { Langium } from '@org/langium-commonjs';
export function depB(): string {
  return 'dep-b' + depA() + JSON.stringify(Langium.isReference({}));
}
