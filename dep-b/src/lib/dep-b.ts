import { depA } from "@org/dep-a";

export function depB(): string {
  return 'dep-b' + depA();
}
