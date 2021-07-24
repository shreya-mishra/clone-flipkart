import React, { useContext } from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Button, Container } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { NewContext } from "./Context";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },

  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    backgroundColor: "white",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 67),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2874F0",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    color: "black",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const theme = createTheme({
  palette: {
    primary: blue,
  },
});
const Header = () => {
  const classes = useStyles();
  let history = useHistory();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    // setAnchorEl(event.currentTarget);
    history.push("/cart");
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}>
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      {/* <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Person />
        </IconButton>
        <p>Shreya</p>
      </MenuItem> */}
      <Button
        // onClick={() => setCart(cart.filter((c) => c.id !== cartProd.id))}
        className={classes.margin}
        variant='contained'
        color='primary'
        style={{ width: "70%" }}>
        Login
      </Button>
      <MenuItem>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <KeyboardArrowDownIcon />
        </IconButton>
        <p>More</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'>
          <ShoppingCart />
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );
  const { cart } = useContext(NewContext);

  return (
    <div className={classes.grow}>
      <AppBar position='static' style={{ backgroundColor: "#2874F0" }}>
        <Container>
          <Toolbar>
            <Typography className={classes.title} variant='h6' noWrap>
              <a style={{ textDecoration: "none", color: "white" }} href='/'>
                <i>FlipKart</i>
              </a>
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search for products, brands and more'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {/* <IconButton
                aria-label='show 17 new notifications'
                color='inherit'>
                <p>shreya</p>
                <KeyboardArrowDownIcon />
              </IconButton> */}
              <Button
                // onClick={() => setCart(cart.filter((c) => c.id !== cartProd.id))}
                className={classes.margin}
                variant='contained'
                color='primary'
                style={{ width: "70%" }}>
                Login
              </Button>
              <IconButton
                aria-label='show 17 new notifications'
                color='inherit'>
                <p>more</p>
                <KeyboardArrowDownIcon />
              </IconButton>
              <IconButton
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleProfileMenuOpen}
                color='inherit'>
                <Badge badgeContent={cart.length} color='secondary'>
                  <ShoppingCart />
                </Badge>
                <p>cart</p>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label='show more'
                // style={{hover:""}}
                aria-controls={mobileMenuId}
                aria-haspopup='true'
                onClick={handleMobileMenuOpen}
                color='inherit'>
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </div>
  );
};
export default Header;
