import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const NewActivities = () => {
  let newActivities = [];
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 225,
    },
    {
      field: "description",
      headerName: "Description",
      width: 500,
    },
    {
      field: "points",
      headerName: "Points",
      width: 120,
    },
    {
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
              allActivities: newActivities,
            }}
          >
            More info
          </Link>
        );
      },
    },
  ];

  const setRows = async () => {
    return ActivitieService.getNew().then((res) => {
      newActivities = res.data;
      const result = res.data.map((obj, i) => ({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        points: obj.totalPoints,
        moreinfo: <Link href="/">Link</Link>,
      }));
      console.log("result", result);
      console.log(newActivities);
      return result;
    });
  };
  return <Table name="New Activities" columns={columns} onMount={setRows} />;
};

export default NewActivities;
