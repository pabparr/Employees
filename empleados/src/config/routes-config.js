import CreateEmployeeView from "../views/Employees/Create";
import DetailEmployeeView from "../views/Employees/Detail";
import EditEmployeeView from "../views/Employees/Edit";
import ListaEmpleados from "../views/Employees/Index";
import Home from "../views/Home/Index";
import {
  EmployeeCreateRoute, EmployeeDetailRoute, EmployeeEditRoute, EmployeesRoute, HomeRoute
} from "./routes";

const routes = [
  { path: HomeRoute, component: Home, exact: true },
  { path: EmployeesRoute, component: ListaEmpleados, exact: true },
  { path: EmployeeCreateRoute, component: CreateEmployeeView, exact: true },
  { path: EmployeeEditRoute, component: EditEmployeeView, exact: true },
  { path: EmployeeDetailRoute, component: DetailEmployeeView, exact: true },
];

export default routes;
