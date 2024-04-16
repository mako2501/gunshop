'use strict';

/**
 * barrel router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::barrel.barrel');
