import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import PurchasedItemCard from './PurchasedItemCard/PurchasedItemCard';
import Badge from '@mui/material/Badge';
import { Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useAppSelector } from '../../app/hooks';
import { selectAllProducts, selectChecked } from '../shopSlice';
import { reducer } from '../utils';

const drawerWidth = 460;

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function ShoppingCart() {
  const [open, setOpen] = React.useState(false);
  const allProducts = useAppSelector(selectAllProducts)
  const checked :any= useAppSelector(selectChecked)

  const data = allProducts.filter((i:any) => checked.find((item :any) => item.id === i.id))
  const  quantity = (id :string) :any => checked.find((i :any) => i.id === id).quantity

  const cartQuantity = checked.map((i:any) => parseInt(i.quantity)).reduce(reducer)

  const prices = data.map((i:any) => i.details.price * quantity(i.id))
  const price :number = prices.length ? prices.reduce(reducer) : 0

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="end"
        sx={{
          position: "absolute",
          top: 8,
          right: 16,
          ...(open && { display: "none" }),
        }}
      >
        <ShoppingCartIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>

        <IconButton aria-label="cart">
          <Badge badgeContent={cartQuantity} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <Divider />
        {data.map((item: any) => (
          <PurchasedItemCard
            key={item.id}
            name={item.name}
            price={(item.details.price * parseInt(quantity(item.id))).toFixed(2)}
            size={item.details.size}
            quantity={quantity(item.id)}
            imgUrl={item.details.image}
            id={item.id}
          />
        ))}
        <Card sx={{ display: "flex", overflow: "visible" , backgroundColor : '#84b9ba'}}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h4" color="text.secondary">
                Sub Total : ${price.toFixed(2)}
              </Typography>
              <Button variant="contained">Checkout</Button>
            </CardContent>
          </Box>
        </Card>
      </Drawer>
    </Box>
  );
}
