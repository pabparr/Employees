import axios from "axios";

export const getEmployees = async () => {
  const res = await axios.get(
    "http://dummy.restapiexample.com/api/v1/employees"
  );
  return res.data;
};

export const getEmployee = async (id) => {
  const res = await axios.get(
    `http://dummy.restapiexample.com/api/v1/employee/${id}`
  );
  return res.data;
};

export const addEmployee = async (employee) => {
  const headers = {
    Accept: "*/*",
  };
  const res = await axios.post(
    "http://dummy.restapiexample.com/api/v1/create",
    JSON.stringify(employee),
    { headers }
  );

  return res.data;
};

export const updateEmployee = async (id, employee) => {
  const res = await axios.put(
    `http://dummy.restapiexample.com/api/v1/update/${id}`,
    JSON.stringify(employee)
  );
  return res.data;
};

export const deleteEmployee = async (id) => {
  const res = await axios.delete(
    `http://dummy.restapiexample.com/api/v1/delete/${id}`
  );
  return res.data;
};
