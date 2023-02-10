import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import RouteUnauthenticated from './components/UnauthRoute'
import { AuthContextProvider } from './context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Verify = lazy(() => import('./pages/Verify'))
const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <>
      <Router>
       
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/verify" component={Verify} />
          <Route path="/" component={Home} />

          {/* Place new routes over this */}
          <AuthContextProvider>
          <RouteUnauthenticated path="/app" component={Layout} />
          </AuthContextProvider>
          {/* If you have an index page, you can remothis Redirect */}
          {/* <Redirect exact from="/" to="/login" /> */}
        </Switch>
       
        <ToastContainer/>
      </Router>
    </>
  )
}

export default App
