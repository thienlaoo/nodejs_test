import { check} from 'express-validator';

export const validateUpdateAddress = [
    check('userId').optional().isInt(),
    check('country').optional().isString(),
    check('state').optional().isString(),
    check('city').optional().isString(),
    check('zipCode').optional().isNumeric().isLength({ min: 5, max: 5 }),
    check('address').optional().isString(),
];

export const validateCreateAddress = [
    check('id').isInt().notEmpty(),
    check('userId').isInt().notEmpty(),
    check('country').isString().notEmpty(),
    check('state').optional().isString(),
    check('city').isString().notEmpty(),
    check('zipCode').isNumeric().isLength({ min: 5, max: 5 }).notEmpty(),
    check('address').isString().notEmpty(),
];