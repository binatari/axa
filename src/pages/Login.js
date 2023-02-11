import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import ImageLight from "../assets/img/login-office.jpeg";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import { GithubIcon, TwitterIcon } from "../icons";
import { Label, Input, Button } from "@windmill/react-ui";
import { api } from "../utils/queries";
import { toast } from "react-toastify";

function Login() {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    identifier: "",
    password: "",
  });
  const history = useHistory();
  const onChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const initiateLogin = async () => {
    setLoading(true);
    localStorage.removeItem('token')
    await api
      .post("/auth/local", userInfo)
      .then((res) => {
        sessionStorage.setItem('token', res.data.jwt)
        if(res.data.user.confirmed){
          history.push("/app/dashboard");
        return res.data;
        }
        
        return res.data;
      })
      .catch((err) => {
        toast( err?.response?.data?.error?.message || 'An error occured please try again')
        console.log(err)})
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  name='identifier'
                  onChange={onChange}
                  placeholder="john@doe.com"
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  onChange={onChange}
                  name='password'
                  placeholder="***************"
                />
              </Label>

              <Button
                className="mt-4"
                block
                onClick={() => initiateLogin()}
              >
                {!loading ? "Log in" : "Loading..."}
              </Button>

              <hr className="my-8" />

              {/* <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
              <Button className="mt-4" block layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button> */}

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
