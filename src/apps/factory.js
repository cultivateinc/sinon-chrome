/**
 * @overview Apps API factory
 */

import config from '../config/stable-api-apps.json';
import Api from '../api';

export default function () {
  return new Api(config).create();
}
