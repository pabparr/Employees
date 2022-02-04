import React from "react";

const CustomTable = ({
  rowData,
  onClickCreate,
  onClickEdit,
  onClickDelete,
  onClickBack,
  titleFields,
  validFields,
  children,
}) => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            {titleFields.map((title) => (
              <th className="text-center" key={title}>
                {title}
              </th>
            ))}
            <th className="text-center">Operaciones</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row) => (
            <tr className="align-middle" key={row.id}>
              {Object.entries(row).map(([key, value]) => {
                if (validFields.indexOf(key) != -1) {
                  return <td key={key}> {value}</td>;
                }
              })}
              <td>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-warning m-1"
                    onClick={() => onClickEdit(row.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-primary m-1"
                    onClick={() => onClickDelete(row.id)}
                  >
                    Detalle
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {children}
      <br />
      <div className="mt-4 d-flex justify-content-between">
        <button
          className="btn btn-outline-primary"
          onClick={() => onClickBack()}
        >
          Volver a inicio
        </button>
        <button className="btn btn-success" onClick={onClickCreate}>
          Nuevo Empleado
        </button>
      </div>
    </>
  );
};

export default CustomTable;
