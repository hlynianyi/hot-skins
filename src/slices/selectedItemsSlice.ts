import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Skin } from './../interfaces/interfaces';

const selectedItemsAdapter = createEntityAdapter<Skin>();

const initialState = selectedItemsAdapter.getInitialState();

export const selectedItemsSlice = createSlice({
  name: 'selectedCategory',
  initialState,
  reducers: {
    addItem: selectedItemsAdapter.addOne,
    addItems: selectedItemsAdapter.addMany,
    deleteItem: selectedItemsAdapter.removeOne,
    deleteItems: selectedItemsAdapter.removeMany,
    clearItems: selectedItemsAdapter.removeAll,
  },
});

export const selectors = selectedItemsAdapter.getSelectors(
  (state: any) => state.selectedCategoryItems
);
export const { actions } = selectedItemsSlice;
export default selectedItemsSlice.reducer;
