import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

function Dashboard() {
  const fabStyle = {
    margin: 0,
    top: "auto",
    right: 180,
    bottom: 70,
    left: "auto",
    position: "fixed"
  };
  return (
    <div >
      This is the users survey dashboard accessed at route /surveys
      <div className="container">
        <Fab
          style={fabStyle}
          color="secondary"
          aria-label="Add"
          component={Link}
          to="/surveys/new"
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default Dashboard;
