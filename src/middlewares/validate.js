const Ajv = require('ajv');

const ajv = new Ajv();

function errorResponse(schemaErrors) {
  const errors = schemaErrors.map((error) => ({
    path: error.dataPath,
    message: error.message,
  }));
  return {
    status: 'failed',
    errors,
    message: 'Error validate',
  };
}

const validateSchema = (schema) => async (ctx, next) => {
  const data = ctx.request.body;
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    ctx.status = 422;
    ctx.body = errorResponse(validate.errors);
  } else {
    await next();
  }
};

module.exports = validateSchema;
