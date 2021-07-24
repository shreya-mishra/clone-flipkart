import React, { useContext, useEffect, useState } from "react";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
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
const SingleCart = () => {
  const { cart, setCart } = useContext(NewContext);
  const classes = useStyles();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, []);
  return (
    <>
      <h1>You Total Amount is {price}</h1>
      {cart.map((cartProd) => {
        return (
          <div key={cartProd.id} className='single__product'>
            <img className='product__image' src={cartProd.image} alt='img' />
            <p>Rs. {cartProd.price}</p>
            <span>{cartProd.name}</span>
            <ThemeProvider theme={theme}>
              <Button
                onClick={() =>
                  setCart(cart.filter((c) => c.id !== cartProd.id))
                }
                className={classes.margin}
                variant='contained'
                color='primary'
                style={{ width: "70%" }}>
                Remove From Cart
              </Button>
            </ThemeProvider>
          </div>
        );
      })}
    </>
  );
};

export default SingleCart;
