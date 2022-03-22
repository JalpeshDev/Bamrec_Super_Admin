import React, { Suspense } from 'react';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import Routes from './router';
import Spinner from './components/Spinner';
import { history } from "./Redux/store";
import Boot from './Redux/boot';
import useLoader from './helper/useLoader';
require('dotenv').config()

function App() {
  const loading = useLoader();
  return (
    <Suspense fallback={<Spinner />}>
      <Spin spinning={loading} size="large">
        <Routes history={history} />
      </Spin>
    </Suspense>
  );
}

Boot()
  .then(() => App())
  .catch((error) => error);

export default App;
