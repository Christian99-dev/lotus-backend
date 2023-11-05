'use strict';

/**
 * rezensionen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rezensionen.rezensionen');
