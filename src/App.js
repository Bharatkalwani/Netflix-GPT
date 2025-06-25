import { Outlet } from "react-router-dom";
import Body from "./components/Body"
import {Provider} from "react-redux"
import appStore from "./store/appStore";
function App() {
  return (
    // <Body></Body>
    <Provider store={appStore}>
    <Outlet></Outlet>
    </Provider>
  );
}

export default App;
