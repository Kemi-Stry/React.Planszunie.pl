'use strict';

/**
 * rate service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rate.rate');
