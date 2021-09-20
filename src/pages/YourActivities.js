import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivitieService from "../services/ActivityService";
import Table from "../components/Table";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const YourActivities = () => {
  let YourActivities = [];
  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 225,
    },
    {
      field: "description",
      headerName: "Description",
      width: 300,
    },
    {
      field: "points",
      headerName: "Points",
      width: 120,
    },
    {
      field: "More info",
      headerName: "More info",
      sortable: false,
      width: 120,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <Link
            to={{
              pathname: "/ActivityView/" + params.row.id,
              allActivities: YourActivities,
            }}
          >
            More info
          </Link>
        );
      },
    },
  ];

  // {
  //   field: "Activity Unsubscribe",
  //   headerName: "Un Sub",
  //   sortable: false,
  //   width: 175,
  //   disableClickEventBubbling: true,
  //   renderCell: (params) => {
  //     return (
  //       <Button
  //         variant="outline-danger"
  //         onClick={() => {
  //           handleUnsubscibe(params.row.id);
  //         }}
  //       >
  //         Unsubscribe
  //       </Button>
  //     );
  //   },
  // },

  const handleUnsubscibe = (activityId) => {
    // TODO: unsubscribe from activity
  };
  // TODO: get employee id to be posted
  const setRows = async () => {
    return ActivitieService.getYours({ employeeId: 1 }).then((res) => {
      YourActivities = res.data;
      const result = res.data.map((obj, i) => ({
        id: obj.id,
        name: obj.name,
        description: obj.description,
        points: obj.totalPoints,
        moreinfo: <Link href="/">Link</Link>,
      }));
      console.log("result", result);
      console.log(YourActivities);
      return result;
    });
  };
  return <Table name="YourActivities" columns={columns} onMount={setRows} />;
};

export default YourActivities;
