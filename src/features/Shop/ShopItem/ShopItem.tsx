import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../../app/hooks';
import { addToCheckout } from '../../shopSlice';

export default function ShopItem({imgUrl, name, id, price} :any) {
  const dispatch = useAppDispatch()
  const handleOnClick = (event :any) => {
    dispatch(addToCheckout(event.target.getAttribute('id')))
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        sx={{objectFit:'contain'}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {price}
        </Typography>
        <Button variant="contained" sx={{mt : 2}} onClick={handleOnClick} id={id}>Add to Cart</Button>
      </CardContent>
    </Card>
  );
}