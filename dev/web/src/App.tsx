import { Refine, WelcomePage } from "@refinedev/core";
import PocketBase from "pocketbase"

import { authProvider, dataProvider, liveProvider, AuthOptions } from "refine-pocketbase";
import { ShowRepairOrder } from "./pages/repairOrders/show";
import { EditRepairOrder } from "./pages/repairOrders/edit";
import { ListRepairOrders } from "./pages/repairOrders/list";
import { CreateRepairOrder } from "./pages/repairOrders/create";

const pb = new PocketBase("http://127.0.0.1:8090/")

const authOptions: AuthOptions = {
  loginRedirectTo: "/",
}

function App(): JSX.Element {
  return (
    <Refine 
      dataProvider={dataProvider(pb)}
      authProvider={authProvider(pb)}
      liveProvider={liveProvider(pb)}
    >

      
    </Refine>
  );
}

export default App;
