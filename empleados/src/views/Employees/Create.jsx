import React from "react";
import EmployeeForm from "../../components/EmployeeForn/EmployeeForm";
import { EmployeesRoute } from "../../config/routes";

const formTitle = "Crear Empleado";

const CreateEmployeeView = () => {
  const createHandler = () => {};
  const actionSubmit = "create";
  const formValues = {
    employee_age: "",
    employee_name: "",
    employee_salary: "",
  };
  return (
    <div>
      <EmployeeForm
        title={formTitle}
        backUrl={EmployeesRoute}
        values={formValues}
        actionSubmit={actionSubmit}
      />
    </div>
  );
};

export default CreateEmployeeView;
