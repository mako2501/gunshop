'use strict';

/**
 * calibre service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calibre.calibre');
