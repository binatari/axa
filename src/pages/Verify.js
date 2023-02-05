import React, { useState } from 'react'
import { api } from '../utils/queries';
import { Link, useHistory } from 'react-router-dom';
import { Label, Input, Button } from "@windmill/react-ui";

const Verify = () => {
const [loading, setLoading] = useState(false)
const [otp, setOtp] = useState('')
const history = useHistory()
    const initiateVerification = async (e) =>{
        const userId = localStorage.getItem('id')
        setLoading(true);
        await api
          .post("/auth/verifyEmail", {otp, userId })
          .then((res) => {
            history.push("/app");
            return res.data;
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
    }
    const onChange = (e) => {
      setOtp(e.target.value);
    };
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
    <div className="flex-1 h-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
      <div className="flex flex-col overflow-y-auto md:flex-row">
        <main className="flex items-center w-full justify-center p-6 sm:p-12">
          <div className="w-full">
            <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Verify Email
            </h1>
            <Label>
              <span>Please fill in your otp</span>
              <Input
                className="mt-1"
                type="text"
                value={otp}
                onChange={onChange}
                name='otp'
                placeholder="*******"
              />
            </Label>

            <Button
              className="mt-4"
              block
              onClick={(e) => initiateVerification(e)}
            >
            {loading ? "verifying..." : "verify"}
            </Button>

            <hr className="my-8" />


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
  )
}

export default Verify