import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Sidebar from "../SideBar";
import './mui.css'
import MenuIcon from "@mui/icons-material/Menu";

export default function MuiSidebar() {
  const [open, setOpen] = React.useState(true); // Set initial state to true

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Sidebar />
    </Box>
  );

  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "rgb(240, 242, 242)", // Removed extra double quote and fixed syntax
      }}
    >
      <Button onClick={toggleDrawer(true)}>
              <MenuIcon className="color"
        />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
