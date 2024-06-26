import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import {RouterProvider} from "react-router-dom";
import {store} from "./store/store.ts";
import {Provider} from "react-redux";
import {router} from "./routes.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>
)
