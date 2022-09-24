/**
 *
 * project config settings file
 *
 */

/**
 * the following dev_device_ip is dev only
 */
const dev_device_ip = '192.168.71.215';

const env = process.env.NODE_ENV;
const version = require('../package.json').version;
const build = require('../package.json').build;

export default {
    version:version,
    build:build,
    video_host : env === 'development' ? dev_device_ip : window.location.hostname,
    keyboard_host :  env === 'development' ? dev_device_ip : window.location.hostname,
    mouse_host : env === 'development' ? dev_device_ip : window.location.hostname,
    extension_host : env === 'development' ? dev_device_ip : window.location.hostname,
}
