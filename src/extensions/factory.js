/**
 * @overview Extensions API factory
 */

import config from '../config/stable-api.json';
import Api from '../api';

export default function () {
  return new Api(config).create();
}
