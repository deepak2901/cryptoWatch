import { styled } from "@mui/material";
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PublicRoute from './components/PublicRoute';
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";

function App() {

  //styling starts here

  const CustomApp = styled("div")(({ theme }) => ({
    backgroundColor: "#031B34",
    color: "white",
    minHeight: "100vh",
  }));

  //styling ends here

  return (
    <BrowserRouter>
      <CustomApp>
        <Header />

        {/* your private and public routes goes here */}

        {/* <Switch>
          <Route path="/login" component={LoginPage} isAuthenticated={false} restricted={true} />
          <Route path="/" component={Register} isAuthenticated={false} restricted={true} />
          <PublicRoute path="/homepage" component={Homepage} isAuthenticated={true} />
          <PublicRoute path="/coins/:id" component={CoinPage} isAuthenticated={true} />
        </Switch> */}

<Switch>
          <PublicRoute path="/homepage" component={Homepage} isAuthenticated={true} />
          <Route path="/login" component={LoginPage} restricted={true} />
          <PublicRoute path="/coins/:id" component={CoinPage} isAuthenticated={true} />
          <Route path="/" component={Register} restricted={true} />
          <Redirect to="/" />
        </Switch>

      </CustomApp>
    </BrowserRouter>
  );
}

export default App;
