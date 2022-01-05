import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function PurchasedItemCard({imgUrl, name, size, quantity, price} :any) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', overflowY : 'scroll'}}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
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
            {quantity}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}