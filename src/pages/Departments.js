import { React, useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import DepartmentService from "../services/DepartmentService";
import SmallCard from "../components/SmallCard";
import "../styles.css";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // TODO: employee id
    DepartmentService.getAll({ employeeId: 1 }).then((res) => {
      console.log(res.data);
      setDepartments(
        res.data.map((obj, i) => ({
          key: i,
          depName: obj.departmentName,
        }))
      );
      //[{      Percentage: 19
      //       departmentName: "python"
      //       employeeId: 1
      //       endDate: "2021-09-15"}, ....]
    });
  }, []);

  return (
    <>
      <div className="container my-5">
        <div
          className="card mx-5"
          style={{
            width: "auto",
            filter: "drop-shadow(0 0 0.2rem #000000)",
          }}
        >
          <h1 className="m-4">My Departments</h1>
          <div className="grid-container grid-container--fit m-5">
            {departments.map((dep) => (
              <SmallCard title={dep.depName} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
