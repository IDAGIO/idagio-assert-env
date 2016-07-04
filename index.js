module.exports = function assertVariables(variables) {
  var success = true;

  variables.forEach(function checkVar(variable) {
    var value = process.env[variable];
    var result = value && value !== '';

    if (!result) {
      console.error('Environment variable "' + variable + '" must have a value');
      success = false;
    }
  });

  if (!success) {
    process.exit(1);
  }
}
