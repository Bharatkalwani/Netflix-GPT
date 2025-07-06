import { Outlet } from "react-router-dom";
import {Provider} from "react-redux"
import AppInit from './components/shared/AppInit'
import appStore from "./store/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <AppInit />
    <Outlet></Outlet>
    </Provider>
  );
}

export default App;
