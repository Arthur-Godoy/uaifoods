import Navbar from "./components/navbar/NavBar";
import SkeletonProductCard from './components/skeletonProductCard/SkeletonProductCard';
import ProductCard from './components/productCard/ProductCard';
import { Grid, Skeleton,Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './app.module.css';
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      {loading?(
        <div className={styles.skeleton}>
          <Skeleton height={200}/>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <SkeletonProductCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <SkeletonProductCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <SkeletonProductCard />
            </Grid>
          </Grid>
 
        </div>
      ):(
        <>
        <Navbar/>
          <section className={styles.principal}>
            <Typography variant={'h5'} component={'h2'} className={styles.semiTitle}>Hamburguers</Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <Link to={'/product'} style={{textDecoration:'none'}}>
                  <ProductCard title="Nine's Burguer" img="./assets/hamburguer.jpg" ingredients='Pão de Brioche com gergilin, Hamburguer de 200g recheado com mussarela, farofa de bacon, cebola caramelizada, maionese caseira' price={25.00}/>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
                <Link to={'/product'} style={{textDecoration:'none'}}>
                  <ProductCard title="Nine's Burguer" img="./assets/hamburguer.jpg" ingredients='Pão de Brioche com gergilin, Hamburguer de 200g recheado com mussarela, farofa de bacon, cebola caramelizada, maionese caseira' price={25.00}/>
                </Link>
              </Grid>
              <Grid item xs={12} md={4}>
                <Link to={'/product'} style={{textDecoration:'none'}}>
                  <ProductCard title="Nine's Burguer" img="./assets/hamburguer.jpg" ingredients='Pão de Brioche com gergilin, Hamburguer de 200g recheado com mussarela, farofa de bacon, cebola caramelizada, maionese caseira' price={25.00}/>
                </Link>
              </Grid>
            </Grid>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
