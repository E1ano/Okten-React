import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().min(1).max(20).pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required()
        .messages({'string.pattern.base': '1-20 letters'}),
    price: Joi.number().min(0).max(1000000).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export default carValidator;