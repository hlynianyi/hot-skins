import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Skin } from './../interfaces/interfaces';

const itemsAdapter = createEntityAdapter<Skin>();

const initialState = itemsAdapter.getInitialState();

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: itemsAdapter.addOne,
    addItems: itemsAdapter.addMany,
    deleteItem: itemsAdapter.removeOne,
    deleteItems: itemsAdapter.removeMany,
  },
});

export const selectors = itemsAdapter.getSelectors((state: any) => state.items);
export const { actions } = itemsSlice;
export default itemsSlice.reducer;
