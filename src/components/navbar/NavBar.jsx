import { Grid } from '@mui/material';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <Grid container>
          <Grid item xs={12} sm={3} className={styles.imgContainer}>
            <img src="./assets/logo.png" alt="Logo UaiFoods" />
          </Grid>
          <Grid item xs={12} sm={9} className={styles.linksContainer}>
              <Link to="/hamburguers" className={styles.links}>Hamburguer</Link>
              <Link to="/pizza" className={styles.links}>Pizza</Link>
              <Link to="/cart" className={styles.links}>Onde Estamos</Link>
              <AiOutlineShoppingCart className={styles.cartIcon}/>
          </Grid>
        </Grid>
      </header>
    </>
  )
}

export default Navbar;