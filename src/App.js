import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import RouteUnauthenticated from "./components/UnauthRoute";
import { AuthContextProvider } from "./context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './css/bg.css';
import ScrollUp from './components/widgets/layout/ScrollUp';

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Verify = lazy(() => import("./pages/Verify"));
const Home = lazy(() => import("./pages/Home"));
const RegLayout = lazy(() => import("./components/Layout/Layout"))

// const Guide = lazy(() => import("./pages/Guide"));

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login">
            <RegLayout>
            <Login/>
            </RegLayout>
          </Route>
          <Route path="/create-account">
          <RegLayout>
            <CreateAccount/>
            </RegLayout>
          </Route>
          <Route path="/forgot-password" >
          <RegLayout>
            <ForgotPassword/>
            </RegLayout>
          </Route>
          <Route path="/verify">
          <RegLayout>
            <Verify/>
            </RegLayout>
          </Route>
          <Route exact path="/">
      
            <Home/>
          
          </Route>
          <AuthContextProvider>
            <RouteUnauthenticated path="/app" component={Layout} />
          </AuthContextProvider>
        
          {/* Place new routes over this */}
        </Switch>

        <ToastContainer />
      </Router>
      <ScrollUp/>
    </>
  );
}

export default App;
