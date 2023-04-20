import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuOutlinedIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <a style={{ textDecoration: "none", color: "black" }} href="#hero">
            Home
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a style={{ textDecoration: "none", color: "black" }} href="#about">
            About
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a style={{ textDecoration: "none", color: "black" }} href="#about">
            Resume
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="#portfolio"
          >
            Portfolio
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="#services"
          >
            Services
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
