import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface shopItem {
  id : string;
  name : string;
  details : {
    price : number;
    size : string;
    tag : string;
    image : string;
    type : string;
  };
}

export interface shopState {
  allProducts : Array<shopItem>;
  checkedProducts : Array<shopItem>;
  status: 'idle' | 'loading' | 'failed' | 'succeeded' | 'failed';
  error : string | null | undefined;
}

const initialState :shopState = {
  allProducts: [],
  checkedProducts : [],
  status: 'idle',
  error : null
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    renderProducts : (state, action :PayloadAction<[]>) => {
      action.payload.map((item) => state.allProducts.push(item)) //item never
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched allProducts to the array
        state.allProducts = state.allProducts.concat(action.payload)
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const { renderProducts } = productSlice.actions

export const fetchData = createAsyncThunk('product/fetchProducts', async () => {
  const response = await fetch('https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments')
  return response.json()
})

// selectors
export const selectAllProducts = (state :RootState) => state.products.allProducts;
export const selectStatus = (state :RootState) => state.products.status;

export default productSlice.reducer;
