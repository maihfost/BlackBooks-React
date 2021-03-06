import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/book.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="body1"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="BlackBooks"
              height="25px"
              className={classes.image}
            />
            BlackBooks
          </Typography>
          <div className={classes.grow} />
          {location.pathname == "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                arial-label={2}
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
