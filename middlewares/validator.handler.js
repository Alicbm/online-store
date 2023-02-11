const boom = require("@hapi/boom");

function validatorHandler (schema, property) {
  return (req, res, next) => {
    const data = req[property];

    // el schema viene de joi, por ende, .validate tambien es de joi
    const { error } = schema.validate(data, { abortEarly: false });
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler
