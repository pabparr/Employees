import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { EmployeesRoute } from "../../config/routes";
import { deleteEmployee } from "../../services/Employees";

const translateFields = (employee) => {
  let translated = {};
  {
    Object.entries(employee).map(([key, value]) => {
      let newKey;
      switch (key) {
        case "employee_name":
          newKey = "Nombre";
          break;
        case "employee_salary":
          newKey = "Salario";
          break;
        case "employee_age":
          newKey = "Edad";
          break;
        default:
          newKey = key;
      }

      translated[newKey] = value;
    });
  }

  return translated;
};

const EmployeeDetail = ({ employee, backUrl }) => {
  const history = useHistory();
  const backHandler = () => history.push(backUrl);
  const translatedEmployee = translateFields(employee);
  const { id } = useParams();

  const handlerDelete = (id) => {
    deleteEmployee(id)
      .then((res) => {
        alert(res.message);
        history.push(EmployeesRoute);
      })
      .catch((err) => {
        alert(err);
      });
  };

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
          <h2 className="text-center mb-4">Detalles de usuario</h2>
          <div>
            {Object.entries(translatedEmployee).map(([key, value]) => (
              <div key={key}>
                <span className="fw-bold">{key}: </span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          <div className="d-flex w-100 justify-content-between mt-4">
            <button className="btn btn-outline-primary" onClick={backHandler}>
              Volver
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handlerDelete(id)}
            >
              Eliminar
            </button>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default EmployeeDetail;
