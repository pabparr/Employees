import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForn/EmployeeForm";
import Loading from "../../components/Loading/Loading";
import { EmployeesRoute } from "../../config/routes";
import { getEmployee } from "../../services/Employees";

const EditEmployeeView = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);
  const [needReload, setNeedReload] = useState(false);

  useEffect(() => {
    getEmployee(id)
      .then((res) => setEmployee(res.data))
      .catch((err) => {
        alert(`La conexión ha fallado ${err}`);
        setNeedReload(true);
      });
  }, []);

  const formTitle = "Editar Empleado";

  const formValues = employee == null ? {} : { ...employee };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="mt-4"
    >
      {employee == null ? (
        needReload === false ? (
          <Loading />
        ) : (
          <button onClick={() => window.location.reload(false)}>
            Recargar página
          </button>
        )
      ) : (
        <EmployeeForm
          title={formTitle}
          backUrl={EmployeesRoute}
          values={formValues}
          actionSubmit="edit"
        />
      )}
    </Grid>
  );
};

export default EditEmployeeView;
