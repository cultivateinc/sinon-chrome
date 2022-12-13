/**
 * @overview Firefox's WebExtensions API factory
 */

import config from '../config/stable-api-ff.json';
import Api from '../api';

export default function () {
  return new Api(config).create();
}
