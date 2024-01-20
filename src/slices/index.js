import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import selectedCategoryItemsReducer from './selectedItemsSlice';

export default configureStore({
  reducer: {
    items: itemsReducer,
    selectedCategoryItems: selectedCategoryItemsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
