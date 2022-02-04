import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CustomEntriesNumber from "../../components/CustomEntriesNumber/CustomEntriesNumber";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import CustomSearch from "../../components/CustomSearch/CustomSearch";
import CustomTable from "../../components/CustomTable/CustomTable";
import Loading from "../../components/Loading/Loading";
import {
  EmployeeCreateRoute,
  EmployeeDetailRoute,
  EmployeeEditRoute,
  HomeRoute
} from "../../config/routes";
import { getEmployees } from "../../services/Employees";

const titleFields = ["Nombre", "Salario"];

const validFields = ["employee_name", "employee_salary"];

const getListToShow = (listToShow, tablePage, pageEntries) => {
  let listToShowVisible = [];
  let initialEntrie = tablePage * pageEntries - pageEntries;
  if (listToShow !== null) {
    for (
      let i = initialEntrie;
      i < listToShow.length && i < initialEntrie + pageEntries;
      i++
    ) {
      listToShowVisible.push(listToShow[i]);
    }
  }

  return listToShowVisible;
};

const ListaEmpleados = () => {
  const [employees, setEmployees] = useState(null);
  const [filteredList, setFilteredList] = useState([]);
  const [needReload, setNeedReload] = useState(false);
  const [tableOptions, setTableOptions] = useState({
    isSearching: false,
    activePage: 1,
    pageEntries: 5,
  });

  const history = useHistory();

  const listToShow =
    tableOptions.isSearching === true ? filteredList : employees;

  const listToShowVisible = getListToShow(
    listToShow,
    tableOptions.activePage,
    tableOptions.pageEntries
  );

  const totalEntries = listToShow !== null ? listToShow.length : 0;

  useEffect(() => {
    getEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => {
        alert(`La conexión ha fallado ${err}`);
        setNeedReload(true);
      });
  }, []);

  const CreateHandler = () => history.push(EmployeeCreateRoute);

  const EditHandler = (id) =>
    history.push(EmployeeEditRoute.replace(":id", id));

  const DeleteHandler = (id) =>
    history.push(EmployeeDetailRoute.replace(":id", id));

  const SearchHandler = (textSearch) => {
    if (textSearch.length === 0) {
      setTableOptions({ ...tableOptions, isSearching: false });
    } else {
      let filteredList = [];
      employees.map((employee) => {
        if (
          employee.employee_name
            .toLowerCase()
            .includes(textSearch.toLowerCase()) === true
        ) {
          filteredList.push(employee);
        }
        setFilteredList(filteredList);
        setTableOptions({ ...tableOptions, isSearching: true, activePage: 1 });
      });
    }
  };

  const BackHandler = () => history.push(HomeRoute);

  const PaginateHandler = (newActivePage) =>
    setTableOptions({ ...tableOptions, activePage: newActivePage });

  const PageEntriesHandler = (newPageEntries) => {
    setTableOptions({
      ...tableOptions,
      activePage: 1,
      pageEntries: newPageEntries,
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
        {employees === null ? (
          needReload === false ? (
            <Loading />
          ) : (
            <button onClick={() => window.location.reload(false)}>
              Recargar página
            </button>
          )
        ) : (
          <Grid item xs={12} className="m-4 p-4">
            <h1 className="text-center mb-4">Lista de empleados</h1>
            <CustomSearch onChangeHandler={(e) => SearchHandler(e)} />
            <CustomTable
              rowData={listToShowVisible}
              onClickCreate={CreateHandler}
              onClickEdit={(id) => EditHandler(id)}
              onClickDelete={(id) => DeleteHandler(id)}
              onClickBack={() => BackHandler()}
              titleFields={titleFields}
              validFields={validFields}
            >
              <div className="d-flex justify-content-between align-items-center">
                <CustomEntriesNumber
                  minValue={5}
                  maxValue={25}
                  onChangeHandler={(e) => PageEntriesHandler(e)}
                />
                <CustomPagination
                  pageEntries={tableOptions.pageEntries}
                  totalEntries={totalEntries}
                  activePage={tableOptions.activePage}
                  clickButtonHandler={(page) => PaginateHandler(page)}
                />
              </div>
            </CustomTable>
          </Grid>
        )}
      </Paper>
    </Grid>
  );
};

export default ListaEmpleados;
