import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EmployeeDetail from "../../components/EmployeeDetail/EmployeeDetail";
import Loading from "../../components/Loading/Loading";
import { EmployeesRoute } from "../../config/routes";
import { getEmployee } from "../../services/Employees";

const DetailEmployeeView = (props) => {
  const { id } = useParams();
  const history = useHistory();

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
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="mt-4"
    >
      {employee === null ? (
        needReload === false ? (
          <Loading />
        ) : (
          <button onClick={() => window.location.reload(false)}>
            Recargar página
          </button>
        )
      ) : (
        <EmployeeDetail employee={employee} backUrl={EmployeesRoute} />
      )}
    </Grid>
  );
};

export default DetailEmployeeView;
