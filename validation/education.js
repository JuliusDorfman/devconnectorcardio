const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';


  if (Validator.isEmpty(data.school)) {
    errors.school = "Job Dchool field is required";
  };

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  };

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Fieldofstudy date field is required";
  };

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  };

  return {
    errors,
    isValid: isEmpty(errors)
  };
};