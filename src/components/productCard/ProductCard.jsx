import { Box, Stack, Typography } from '@mui/material'
import styles from './productCard.module.css'

const ProductCard = ({title, price, img, ingredients}) => {
    return(
            <Box className={styles.container}>
                <Stack direction="row" spacing={1}>
                    <img src={img} alt="Foto do Produto" className={styles.productPhoto}/>
                    <div className={styles.textContainer}>
                        <Typography className={styles.title}>{title}</Typography>
                        <Typography className={styles.ingredients}>{ingredients}</Typography>
                        <Typography className={styles.price}>R${price}</Typography>
                    </div>
                </Stack>
            </Box>
    )
}

export default ProductCard;

