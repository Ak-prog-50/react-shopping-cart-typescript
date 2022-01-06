import * as React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ShopItem from './ShopItem/ShopItem'
import { Container, Typography, Select, MenuItem, FormControl, InputLabel, Divider } from '@mui/material';
import{ SelectChangeEvent } from '@mui/material/Select';
import Filters from './Filters/Filters';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchData, selectAllProducts, selectStatus, orderByPrice } from '../shopSlice';
import Loading from '../../components/Loading'

const ShopHeader = () => {
    const [order, setOrder] = React.useState<string>();
    const dispatch = useAppDispatch()
    const data = useAppSelector(selectAllProducts) 

    const handleChange = (event: SelectChangeEvent) => {
        setOrder(event.target.value as string)
        dispatch(orderByPrice(event.target.value as string))
    };
    return (
      <Grid container spacing={2} my={4}>
        <Grid item xs={8}>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            fontSize={33}
            fontWeight={900}
          >
            {data.length} Product(s) found
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="order_by">Order By</InputLabel>
            <Select
              labelId="order_by"
              id="order_by_price"
              label="order"
              value={order}
              onChange={handleChange}
            >
              <MenuItem value={'lowToHigh'}>Price Ascending</MenuItem>
              <MenuItem value={'highToLow'}>Price Descending</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
}

const Shop = () => {
  const data = useAppSelector(selectAllProducts)
  const dataLoading = useAppSelector(selectStatus)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (dataLoading === 'idle') {
      dispatch(fetchData())
    }
  }, [])
  
    if (dataLoading === 'loading') {
      return <Loading />
    }

    return (
    <Container>
      <ShopHeader />
      <Filters />
      <Divider sx={{m:4, backgroundColor : '#050503'}}/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
        {data.length && data.map((item: any) => (
            <Grid item xs={4} key={item.id}>
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
