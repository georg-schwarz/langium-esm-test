import { depA } from './lib/dep-a';

export * from './lib/dep-a';

console.log('dep-a loaded');

console.log(depA());
