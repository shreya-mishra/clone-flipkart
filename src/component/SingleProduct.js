import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useContext } from "react";
import "../App.css";
import { NewContext } from "./Context";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    primary: blue,
  },
});
const SingleProduct = () => {
  const { cart, setCart, categoryFilter } = useContext(NewContext);
  const classes = useStyles();
  return (
    <>
      {categoryFilter.map((prod) => {
        return (
          <div key={prod.id} className='single__product'>
            <img className='product__image' src={prod.image} alt='img' />
            <p>Rs. {prod.price}</p>
            <span>{prod.name}</span>

            <ThemeProvider theme={theme}>
              {cart.some((i) => i.id === prod.id) ? (
                <Button
                  disabled
                  className={classes.margin}
                  variant='contained'
                  color='primary'
                  style={{ width: "70%" }}>
                  Add To Cart
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    setCart([...cart, prod]);
                  }}
                  className={classes.margin}
                  variant='contained'
                  color='primary'
                  style={{ width: "70%" }}>
                  Add To Cart
                </Button>
              )}
            </ThemeProvider>
          </div>
        );
      })}
    </>
  );
};

export default SingleProduct;
