/**
 * test comment
 * @preferred
 * test2 comment
 */
export * from './models';
export * from './enums';

import * as models from './models';
import * as enums from './enums';

export default Object.assign({},models,enums);