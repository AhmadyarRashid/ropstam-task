// NPM dependencies
const { check } = require('express-validator');

module.exports = {
  validateCategoryParams: [
    check("name", "2001").exists().isString(),
    check('name', '2002').isLength({min: 3}),
  ],
  validateParamId: [
    check('id', '2004').isMongoId(),
  ],
  validateAddCarParams: [
    check("title", "2005").exists().isString(),
    check('model', '2007').optional().isString().isLength({min: 3}),
    check('make', '2008').exists().isString(),
    check('registrationNo', '2010').exists().isString(),
    check('color', '2012').optional().isString(),
    check('condition', '2013').optional().isString(),
    check('description', '2014').exists().isString(),
  ],
  validateUpdateCarParams: [
    check("title", "2006").optional().isString(),
    check('model', '2007').optional().isString().isLength({min: 3}),
    check('make', '2009').optional().isString(),
    check('registrationNo', '2011').optional().isString(),
    check('color', '2012').optional().isString(),
    check('condition', '2013').optional().isString(),
    check('description', '2015').optional().isString(),
  ],
};
