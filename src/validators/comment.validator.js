import Joi from "joi";

const commentValidator = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    body: Joi.string().min(10).max(100).required(),
    email: Joi.string()
        .regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        .required()
        .messages({
            'string.pattern.base': 'Incorrectly entered email!'
        })
})

export default commentValidator;