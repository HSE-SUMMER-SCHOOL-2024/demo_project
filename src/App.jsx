import Home from "./pages/home/Home";
import style from './app.module.css'
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter";

const App = () => {
  return (
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  )
}

export default App
