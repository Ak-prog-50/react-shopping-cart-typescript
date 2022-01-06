import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  status: 'idle',
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    renderProducts : (state, action) => {
      action.payload.map(item => state.allProducts.push(item))
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
export const selectAllProducts = (state) => state.products.allProducts;
export const selectStatus = (state) => state.products.status

export default productSlice.reducer;
