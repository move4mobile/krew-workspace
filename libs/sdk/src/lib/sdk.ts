/**
 *
 * Inspired by:
 *
 * https://lyamkin.com/blog/how-to-build-api-client-library-in-js/
 *
 * https://github.com/ilyamkin/dev-to-js
 *
 */

import { News } from './news';
import { applyMixins } from './utils';
import { Base } from './base';

// Export types
export * from './news/types';

class Sdk extends Base {}
interface Sdk extends News {}
applyMixins(Sdk, [News]);

export { Sdk };
