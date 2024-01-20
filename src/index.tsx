import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import init from './init';
import './css/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(init());

reportWebVitals();
