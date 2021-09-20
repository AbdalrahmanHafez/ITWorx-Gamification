import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";
import Table from "../components/Table";
import { Link } from "react-router-dom";
// const columns = [
//   {
//     field: "name",
//     headerName: "Name",
//     width: 125,
//   },
//   {
//     field: "description",
//     headerName: "Description",
//     width: 420,
//   },
//   {
//     field: "points",
//     headerName: "Points",
//     width: 120,
//   },
//   {
//     field: "",
//     headerName: "More info",
//     sortable: false,
//     width: 100,
//     disableClickEventBubbling: true,
//     renderCell: (params) => {
//       return (
//         <Link
//           to={{
//             pathname: "/ActivityView/" + params.row.id,
//             allActivities: newActivities,
//           }}
//         >
//           More info
//         </Link>
//       );
//     },
//   },
// ];

const NewActivities = () => {
  let newActivities = [];
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1.25,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 3.5,
    },
    {
      field: "points",
      headerName: "Points",
      flex: 1.25,
    },
    {
      field: "",
      headerName: "More info",
      sortable: false,
      flex: 1,
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
