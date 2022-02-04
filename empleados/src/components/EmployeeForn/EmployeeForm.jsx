import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { EmployeesRoute } from "../../config/routes";
import { addEmployee, updateEmployee } from "../../services/Employees";
import { ValidateForm } from "./validationFunctions";

const EmployeeForm = ({ title, actionSubmit, backUrl, values }) => {
  const history = useHistory();

  const [employeeData, setEmployeeData] = useState({
    name: values.employee_name,
    salary: values.employee_salary,
    age: values.employee_age,
  });

  const [errorData, setErrorData] = useState({ name: "", salary: "", age: "" });

  const initialValues = {
    name: values.employee_name,
    salary: values.employee_salary,
    age: values.employee_age,
  };

  const { id } = useParams();

  const submitHandler = (e, action) => {
    e.preventDefault();
    let employee = {
      name: employeeData.name,
      salary: employeeData.salary,
      age: employeeData.age,
    };
    const validationResult = ValidateForm(initialValues, employee);

    if (validationResult.hasErrors) {
      setErrorData(validationResult.errors);
    } else {
      if (action == "create") {
        addEmployee(employee)
          .then((res) => {
            alert(res.message);
            history.push(EmployeesRoute);
          })
          .catch((err) => {
            alert(err);
          });
      } else if (action == "edit") {
        updateEmployee(id, employee)
          .then((res) => {
            alert(res.message);
            history.push(EmployeesRoute);
          })
          .catch((err) => alert(err));
      }
    }
  };

  const backHandler = () => history.push(backUrl);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="mt-4"
    >
      <Paper elevation={3}>
        <Grid item xs={12} className="m-4 p-4">
          <h2 className="text-center mb-4">{title}</h2>
          <form action="">
            <div className="d-flex justify-content-between mt-3">
              <label className="col fw-bold me-4" htmlFor="employee_name">
                Nombre
              </label>
              <input
                type="text"
                name="employee_name"
                id="employee_name"
                defaultValue={employeeData.name}
                onChange={(e) =>
                  setEmployeeData({ ...employeeData, name: e.target.value })
                }
              />
            </div>
            {errorData.name !== "" && (
              <div>
                <span className="text-danger">{errorData.name}</span>
              </div>
            )}
            <div className="d-flex justify-content-between mt-3">
              <label className="col fw-bold me-4" htmlFor="employee_salary">
                Salario
              </label>
              <input
                type="number"
                name="employee_salary"
                id="employee_salary"
                defaultValue={employeeData.salary}
                onChange={(e) =>
                  setEmployeeData({ ...employeeData, salary: e.target.value })
                }
              />
            </div>
            {errorData.salary !== "" && (
              <div>
                <span className="text-danger">{errorData.salary}</span>
              </div>
            )}
            <div className="d-flex justify-content-between mt-3">
              <label className="col fw-bold me-4" htmlFor="employee_age">
                Edad
              </label>
              <input
                type="number"
                name="employee_age"
                id="employee_age"
                defaultValue={employeeData.age}
                onChange={(e) =>
                  setEmployeeData({ ...employeeData, age: e.target.value })
                }
              />
            </div>
            {errorData.age !== "" && (
              <div>
                <span className="text-danger">{errorData.age}</span>
              </div>
            )}
            <div className="d-flex w-100 justify-content-between mt-4">
              <button className="btn btn-outline-primary" onClick={backHandler}>
                Volver
              </button>
              <button
                className="btn btn-success ms-4"
                onClick={(e) => submitHandler(e, actionSubmit)}
              >
                Enviar
              </button>
            </div>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default EmployeeForm;
