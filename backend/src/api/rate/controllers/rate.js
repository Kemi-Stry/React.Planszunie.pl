'use strict';

/**
 *  rate controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::rate.rate');
