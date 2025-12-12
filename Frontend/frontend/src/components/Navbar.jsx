import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Fraud Detection", path: "/fraud" },
    { text: "Loan Form", path: "/loan" },
    { text: "Chatbot", path: "/chatbot" },
    { text: "Admin Logs", path: "/logs" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ background: "#1976d2" }}>
        <Toolbar>
          {/* Logo / Title */}
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/dashboard")}
          >
            Loan Credit System
          </Typography>

          {/* Desktop Menu Buttons */}
          <div className="desktop-menu" style={{ display: "flex", gap: "10px" }}>
            {menuItems.map((item) => (
              <Button key={item.text} color="inherit" onClick={() => navigate(item.path)}>
                {item.text}
              </Button>
            ))}
            <Button color="inherit" onClick={() => navigate("/")}>
              Logout
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 200 }}>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => { navigate(item.path); setOpen(false); }}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem button onClick={() => { navigate("/"); setOpen(false); }}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
