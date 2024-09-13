import { Link } from "react-router-dom";
import { useState } from "react";
import {
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import {
  Search as SearchIcon,
  Add as AddIcon,
  Event as EventIcon,
  FilterList as FilterListIcon,
  LocationOn as LocationOnIcon,
  Business as BusinessIcon,
  Hub as HubIcon,
  NearMe as NearMeIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import logo from "./img.jpg";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "column",
        boxShadow: 1,
        backgroundColor: "#fff",
        padding: 2,
        position: "fixed",
        left: "0",
        right: "0",
        zIndex: 3000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          alignItems: "center",
          maxWidth: 1200,
          margin: "auto",
        }}
      >
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: 50 }} />
        </Link>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f4f4f4",
              borderRadius: "10px",
              padding: "2px",
              boxShadow: 3,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: 16 }}
              placeholder="Search for Topic, Event or Location"
            />
            <IconButton>
              <SearchIcon sx={{ color: "#0a3d62" }} />
            </IconButton>
          </Box>
          <IconButton
            onClick={handleMenuOpen}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          mx: 20,
          height: 4,
          backgroundImage:
            "linear-gradient(to right, #c06c84, #6c5b7b, #355c7d)",
          border: "none", // Ensure no border is applied
          display: { xs: "none", md: "block" }, // Hide on small screens and show on medium screens and up
        }}
      />
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1200,
          margin: "auto",
          mt: 2,
          position: "f",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          {[
            { to: "/Near-event", icon: <NearMeIcon />, text: "Near Event" },
            {
              to: "/create-filter",
              icon: <FilterListIcon />,
              text: "Create Filter",
            },
            { to: "/events", icon: <EventIcon />, text: "Events" },
            { to: "/top", icon: <AddIcon />, text: "Top 100" },
            { to: "/venue", icon: <LocationOnIcon />, text: "Venues" },
            { to: "/company", icon: <BusinessIcon />, text: "Companies" },
            { to: "/hub", icon: <HubIcon />, text: "Hub" },
          ].map(({ to, icon, text }) => (
            <Link
              key={to}
              to={to}
              style={{
                textDecoration: "none",
                color: "#0a3d62",
                display: "flex",
                alignItems: "center",
                "&:hover": { color: "#3dc1d3" },
              }}
            >
              {icon}
              <Typography sx={{ ml: 1, "&:hover": { color: "#3dc1d3" } }}>
                {text}
              </Typography>
            </Link>
          ))}
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 3, height: 33, backgroundColor: "black" }}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link
            to="/add-event-home"
            style={{
              textDecoration: "none",
              color: "#0a3d62",
              display: "flex",
              alignItems: "center",
              "&:hover": { color: "#3dc1d3" },
            }}
          >
            <AddIcon />
            <Typography
              sx={{
                ml: 1,
                fontWeight: "bold",
                "&:hover": { color: "#3dc1d3" },
              }}
            >
              Add Event
            </Typography>
          </Link>

          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0a3d62",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#3dc1d3",
                },
              }}
            >
              Login
            </Button>
          </Link>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{ display: { xs: "block", md: "none" }, mt: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            p: 1,
            backgroundColor: "#fff",
          }}
        >
          <IconButton onClick={handleMenuClose} sx={{ color: "red" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        {[
          { to: "/Near-event", icon: <NearMeIcon />, text: "Near Event" },
          {
            to: "/create-filter",
            icon: <FilterListIcon />,
            text: "Create Filter",
          },
          { to: "/events", icon: <EventIcon />, text: "Events" },
          { to: "/top", icon: <AddIcon />, text: "Top 100" },
          { to: "/venue", icon: <LocationOnIcon />, text: "Venues" },
          { to: "/company", icon: <BusinessIcon />, text: "Companies" },
          { to: "/hub", icon: <HubIcon />, text: "Hub" },
          { to: "/addevent", icon: <AddIcon />, text: "Add Event" },
        ].map(({ to, icon, text }) => (
          <MenuItem key={to} onClick={handleMenuClose}>
            <Link
              to={to}
              style={{
                textDecoration: "none",
                color: "#0a3d62",
                display: "flex",
                alignItems: "center",
                "&:hover": { color: "#3dc1d3" },
              }}
            >
              {icon}
              <Typography sx={{ ml: 1, "&:hover": { color: "#3dc1d3" } }}>
                {text}
              </Typography>
            </Link>
          </MenuItem>
        ))}
        <MenuItem onClick={handleMenuClose}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0a3d62",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#3dc1d3",
                },
              }}
            >
              Login
            </Button>
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
