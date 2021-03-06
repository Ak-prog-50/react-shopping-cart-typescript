import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../../app/hooks';
import { removeCheckout } from '../../shopSlice';
import { Button } from '@mui/material';

export default function PurchasedItemCard({imgUrl, name, size, quantity, price, id} :any) {
  const dispatch = useAppDispatch()
  const handleRemove = (event :any) => {
    dispatch(removeCheckout(event.target.getAttribute('id')))
  }

  return (
    <Card sx={{ display: 'flex', overflow : 'visible'}}>
      <CardMedia
        component="img"
        sx={{ width: 151, objectFit : 'contain' }}
        image={imgUrl}
        alt={name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {size}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Quantity : {quantity}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            ${price}
          </Typography>
          <Button onClick={handleRemove} id={id}>remove</Button>
        </CardContent>
      </Box>
    </Card>
  );
}