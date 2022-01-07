import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { sortByLowest, sortByHighest } from './utils'
export interface shopItem {
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
  checkedProducts : Array<{id :string | null, quantity : number}>;
  status: 'idle' | 'loading' | 'failed' | 'succeeded' | 'failed';
  error : string | null | undefined;
  filtered : { sizes : string[], type : null | string }
}

type checkedItem = {id:string|null, quantity:number}|undefined

const initialState :shopState = {
  allProducts: [],
  checkedProducts : [{id : null , quantity : 0}],
  status: 'idle',
  error : null,
  filtered : {
    sizes : [],
    type : null
  }
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    orderByPrice : (state, action :PayloadAction<string>) => {
      if (action.payload === 'highToLow') {
        state.allProducts.sort(sortByHighest)
      }
      if (action.payload === 'lowToHigh') {
        state.allProducts.sort(sortByLowest)
      }
    },
    filterBySize : (state, action :PayloadAction<string[]>) => {
      state.filtered.sizes = action.payload
    },
    filterByType : (state, action :PayloadAction<string>) => {
      state.filtered.type = action.payload
    },
    addToCheckout : (state, action :PayloadAction<string>) => {
      if (state.checkedProducts.some(i => i.id === action.payload)) {
        const item :checkedItem = state.checkedProducts.find(i => i.id === action.payload)
        if (item) item.quantity += 1;
      }
      else state.checkedProducts.push({id : action.payload, quantity : 1})

    },
    removeCheckout: (state, action: PayloadAction<string>) => {
      const index = state.checkedProducts.findIndex(i => i.id === action.payload);
      if (state.checkedProducts.some(i => i.id === action.payload)) {
        const item:checkedItem = state.checkedProducts.find(i => i.id === action.payload)
        if (item && item.quantity > 1) item.quantity -= 1;
        else state.checkedProducts.splice(index, 1);
      }
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

export const fetchData = createAsyncThunk('product/fetchProducts', async () => {
  const response = await fetch('https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments')
  return response.json()
})
export const { orderByPrice, filterBySize, filterByType, addToCheckout, removeCheckout } = productSlice.actions;

// selectors
export const selectAllProducts = (state :RootState) => state.products.allProducts;
export const selectStatus = (state :RootState) => state.products.status;
export const selectFiltered = (state :RootState) => state.products.filtered;
export const selectChecked = (state :RootState) => state.products.checkedProducts

export default productSlice.reducer;
