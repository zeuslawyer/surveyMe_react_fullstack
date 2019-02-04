import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      This is the users survey dashboard accessed at route /surveys
      <div>
        <Fab
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
