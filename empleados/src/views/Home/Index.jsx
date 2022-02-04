import React from "react";
import { useHistory } from "react-router-dom";
import { EmployeesRoute } from "../../config/routes";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push(EmployeesRoute)}>
        Ver lista de empleados
      </button>
    </div>
  );
};

Home.propTypes = {};

export default Home;
