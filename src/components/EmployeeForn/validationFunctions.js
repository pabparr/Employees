export const ValidateForm = (initialValues, currentValues) => {
  let hasErrors = false;
  let nameError = "";
  let salaryError = "";
  let ageError = "";
  if (/[a-z ,.'-]/.test(currentValues.name) === false) {
    hasErrors = true;
    nameError = "Introduzca un nombre válido";
  }

  if (
    isNaN(parseInt(currentValues.salary)) ||
    parseInt(currentValues.salary) < 13510
  ) {
    hasErrors = true;
    salaryError = "Introduzca un salario mayor o igual que 13510";
  }

  if (/^(1[6-9]|[2-5]\d|6[0-6]){1}$/g.test(currentValues.age) === false) {
    hasErrors = true;
    ageError = "Introduzca una edad entre 16 y 66";
  }

  return {
    hasErrors: hasErrors,
    errors: { name: nameError, salary: salaryError, age: ageError },
  };
};
