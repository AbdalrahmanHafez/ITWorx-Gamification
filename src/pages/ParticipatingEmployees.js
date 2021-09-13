import { React, useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const ParticipatingEmployees = () => {
  const setRows = async () => {
    return ActivitieService.getAll().then((res) => {
      allActivities = res.data;
      const result = res.data.map((obj, i) => ({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        points: obj.totalPoints,
        moreinfo: <Link href="/">Link</Link>,
      }));
      console.log("result", result);
      console.log(allActivities);
      return result;
    });
  };

  const rows = [
    {
      name: "Ahmed",
      CompActivities: ["act1", "act2", "act3"],
      points: [100, 200, 300],
    },
  ];

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 225,
    },
    {
      field: "Completed Activities",
      headerName: "Completed Activities",
      width: 500,
    },
    {
      field: "points",
      headerName: "Points",
      width: 120,
    },
    /* {
            field: "",
            headerName: "More info",
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <Link
                        to={{
                            pathname: "/ActivityView/" + params.row.id,
                            allActivities: allActivities,
                        }}
                    >
                        More info
                    </Link>
                );
            },
        }, */
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",

      overflowX: "auto",
    },
  }));

  const sample = [
    { name: "apple", detail: ["a", "b", "c", "d"], filterable: true },
    { name: "banana", detail: ["a", "b"] },
  ];

  const classes = useStyles();

  return (
    <>
      <Table
        name="Participating Employees"
        columns={columns}
        onMount={setRows}
      />
    </>
  );
};

export default ParticipatingEmployees;
