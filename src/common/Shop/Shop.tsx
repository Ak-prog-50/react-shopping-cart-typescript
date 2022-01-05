import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ShopItem from './ShopItem/ShopItem'
import { Container, Typography } from '@mui/material';

const Shop = ({data}:any) => {
    return (
    <Container>
        <Typography variant="h3" gutterBottom component="div" fontSize={33} fontWeight={900} m={4}>
            5 Product(s) found
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            {data.map((item: any) => (
                <Grid item xs={4}>
                <ShopItem
                    name={item.name}
                    price={item.details.price}
                    imgUrl={item.details.image}
                />
                </Grid>
            ))}
            </Grid>
        </Box>
      </Container>
    );
}

export default Shop
