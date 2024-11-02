import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'sweetalert2/dist/sweetalert2.js'
import {RouterProvider} from "react-router-dom";
import router from "./routers/router.jsx";
import { Provider } from 'react-redux'
import store from "./redux/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store} >
          <RouterProvider router={router} />
      </Provider>
  </StrictMode>,
)
