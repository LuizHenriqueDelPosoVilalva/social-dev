import Joi from 'joi'

export const createdPostSchema= Joi.object({
  text:Joi.string().required().max(256)
})