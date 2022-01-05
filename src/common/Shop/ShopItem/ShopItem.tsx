import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

export default function ShopItem({imgUrl, name, size, quantity, price} :any) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {price}
        </Typography>
      </CardContent>
      <Button variant="contained">Add to Cart</Button>
    </Card>
  );
}