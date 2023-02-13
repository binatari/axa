import React from "react";

import CTA from "../components/CTA";
import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import {
  Input,
  HelperText,
  Label,
  Select,
  Textarea,
  Button,
} from "@windmill/react-ui";
import { api } from "../utils/queries";
import { useState } from "react";
import { toast } from "react-toastify";

const Settings = () => {
  const [password, setPassword] = useState({
    currentPassword: "",
    password: "",
    passwordConfirmation: "",
  });
  
  const [dusk, setDesk] = useState("");
  const [message, setMessage] = useState("");
  const ChangePassword = async () => {
    await api
      .post("/auth/change-password", {
        ...password,
      })
      .then((res) => {
        toast("Password changed successfully");
        return res;
      })
      .catch((err) => {
        toast(
          err?.response?.data?.error?.message ||
            "An error occured please try again"
        );
      });
  };

  const ChangeCurrency = async () => {
    await api
      .post("/auth/change-password", {
        ...password,
      })
      .then((res) => {
        toast("Password changed successfully");
        return res;
      })
      .catch((err) => {
        toast(
          err?.response?.data?.error?.message ||
            "An error occured please try again"
        );
      });
  };

  const sendMessage = async () => {
    await api
      .post("/supports", {
        data:{
            message
        }

      })
      .then((res) => {
        toast("You have contacted support, your request will be attended to shortly");
        return res;
      })
      .catch((err) => {
        toast(
          err?.response?.data?.error?.message ||
            "An error occured please try again"
        );
      });
  };

  const passwordOnchange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <PageTitle>Settings</PageTitle>
      <SectionTitle>Change password</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        {/* <Label>
          <span>Name</span>
          <Input className="mt-1" placeholder="Jane Doe" />
        </Label> */}

        <Label className="mt-4">
          <span>Name</span>
          <Input disabled className="mt-1" placeholder="Jane Doe" />
        </Label>
        <Label className="mt-4">
          <span>Email</span>
          <Input disabled className="mt-1" placeholder="Jane Doe" />
        </Label>
        <Label className="mt-4">
          <span>Enter old password</span>
          <Input
            onChange={passwordOnchange}
            name="currentPassword"
            className="mt-1"
            placeholder="Jane Doe"
          />
        </Label>
        <Label className="mt-4">
          <span>Enter New Password</span>
          <Input
            onChange={passwordOnchange}
            className="mt-1"
            name="password"
            placeholder="Jane Doe"
          />
        </Label>
        <Label className="mt-4">
          <span>Confirm new password</span>
          <Input
            onChange={passwordOnchange}
            className="mt-1"
            name="passwordConfirmation"
            placeholder="Jane Doe"
          />
        </Label>
        <Label className="mt-4 ">
          <Button
           className='mt-4'
            onClick={ChangePassword}
            disabled={
              !password.password ||
              !password.currentPassword ||
              !password.passwordConfirmation
            }
          >
            ChangePassword
          </Button>
        </Label>
      </div>
      {/* cant change currency as it will cause problems with conversion */}
      {/* 

      <SectionTitle>Change currency</SectionTitle> */}

      {/* <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="mt-4">
          <span>Select currency</span>
          <Select className="mt-1">
            <option>$</option>
            <option>₦</option>
            <option>£</option> 
          </Select>
        </Label>
      </div> */}

      {/* <!-- Inputs with icons --> */}
      <SectionTitle>Contact support</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <Label className="mt-4">
          <span>Message</span>
          <Textarea
            className="mt-1 border"
            rows="3"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </Label>
        <Button className='mt-4' onClick={sendMessage} disabled={!message}>
          Send message
        </Button>
      </div>

      {/* <!-- Inputs with buttons --> */}
    </div>
  );
};

export default Settings;
