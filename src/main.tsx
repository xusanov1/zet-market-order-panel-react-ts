import { createRoot } from 'react-dom/client';
import { AppRouter } from '@router/index';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { globalThemeConfig } from '@theme/index';
import {store} from '@/stores/store';
import { Provider } from 'react-redux';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <ConfigProvider theme={globalThemeConfig}>
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </ConfigProvider>
);
