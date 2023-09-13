import { check} from 'express-validator';

export const validateCreateUser = [
    check('id').isInt().notEmpty(),
    check('firstName').isString().notEmpty(),
    check('lastName').isString().notEmpty(),
    check('phoneNumber').isString().notEmpty(),
    check('birthday').optional().isISO8601(),
    check('image').notEmpty(),
];

export const validateUpdateUser = [
    check('firstName').isString().notEmpty(),
    check('lastName').isString().notEmpty(),
    check('phoneNumber').isString().notEmpty(),
    check('birthday').optional().isISO8601(),
    check('image').notEmpty(),
];