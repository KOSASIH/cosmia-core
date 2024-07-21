// validation.js
import { Joi } from 'joi';

const validationUtils = {
  validateRequest: (request, schema) => {
    const result = Joi.validate(request, schema);
    if (result.error) {
      throw new Error(result.error.details[0].message);
    }
    return result.value;
  },
};

export default validationUtils;
