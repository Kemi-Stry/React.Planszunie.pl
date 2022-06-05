'use strict';

/**
 * friend service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::friend.friend');
