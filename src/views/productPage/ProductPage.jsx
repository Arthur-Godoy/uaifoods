import React from 'react'
import styles from './productPage.module.css'
import {MdArrowBackIosNew} from 'react-icons/md'
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import AdditionalsForm from '../../components/additionalsForm/AdditionalsForm';
import PayMethods from '../../components/payMethods/PayMethods';

const ProductPage = () => {
  return (
    <div className={styles.generalContainer}>
      <header className={styles.headerContainer}>
        <div>
          <Link to={'/'}><MdArrowBackIosNew className={styles.icon} size={30} /></Link>
          <Typography variant='h5' component='h1' className={styles.titleName}>Nine's Burguer</Typography>
        </div>
        <img src='./assets/hamburguer.jpg' alt='foto do produto selecionado' className={styles.productImg}/>
      </header>
      <section className={styles.contentContainer}>
        <Grid container  spacing={2}>
          <Grid item xs={12} md={6}>
              <Typography variant='h5' component={'h2'} className={styles.semiTitle}>Igredientes</Typography>
              <Typography variant='p' className={styles.text}>Pão de Brioche com gergilin, Hamburguer de 200g recheado com mussarela, farofa de bacon, cebola caramelizada, maionese caseira</Typography>
          </Grid>
          <Grid item xs={12} md={6} spacing={2}>
              <AdditionalsForm/>
          </Grid>
          <Grid item xs={12} md={6} spacing={2}>
            <PayMethods/>
          </Grid>
        </Grid>
      </section>
    </div>
  )
}

export default ProductPage