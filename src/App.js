import { Outlet } from "react-router-dom";
import {Provider} from "react-redux"
import appStore from "./store/appStore";
function App() {
  return (
    <Provider store={appStore}>
    <Outlet></Outlet>
    </Provider>
  );
}

export default App;
