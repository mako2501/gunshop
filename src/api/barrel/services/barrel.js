'use strict';

/**
 * barrel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::barrel.barrel');
