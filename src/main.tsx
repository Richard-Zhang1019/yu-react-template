import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import Loading from '@/components/Loading'
import store from './store'

import './assets/style/base.less'
import 'antd/dist/antd.less'
import 'antd/dist/antd.variable.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>
)
