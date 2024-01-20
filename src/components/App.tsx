import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import routes from './../routes';
import Router from './Router';
import { actions as itemsActions } from '../slices/itemsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitData = async () => {
      try {
        const itemsResponse = await axios.get(routes.getAll());
        dispatch(itemsActions.addItems(itemsResponse.data));
      } catch (err: any) {
        throw new Error('Fetching data Error:', err);
      }
    };
    fetchInitData();
  }, [dispatch]);

  return <Router />;
};

export default App;
