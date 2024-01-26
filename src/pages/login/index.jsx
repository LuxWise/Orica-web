import React from "react";
import logo from "../../assets/Orica.svg";
import key from "../../assets/key.svg";
import axios from "axios";
import { input } from "../../components/input/index.jsx";
import { buttom } from "../../components/buttom/index.jsx";
import { URL } from "../../routes/constans.js";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const Login = () => {
  const [user, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const nav = useNavigate();

  const onSubmit = () => {
    event.preventDefault();
    axios
      .post(`${URL}/login`, { user, password })
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        enqueueSnackbar("user or password invalid", {
          autoHideDuration: 2000,
          style: {
            backgroundColor: "#028bca",
            fontWeight: "500",
            borderRadius: "7px",
          },
        });
      });
  };

  return (
    <section className="w-screen h-screen bg-white">
      <SnackbarProvider />
      <img className="Logo" src={logo} />
      <div className="flex mt-28 mb-14 lg:my-6 items-center justify-center">
        <span className="text-4xl font-[600] font-bo">Welcome</span>
      </div>
      <div className="flex flex-col gap-10">
        <input.InputLog text="Email" input={setUsername} value={user} />
        <input.InputLog text="Password" input={setPassword} value={password} />
      </div>
      <div className="flex my-20 lg:my-14 items-center justify-center gap-20">
        <buttom.ButtomSubmit text="Sing in" onSubmit={onSubmit} />
      </div>
      <div className="flex mt-5 items-center justify-center gap-20">
        <div className="hidden lg:block w-80 h-1 bg-[#0099CC]" />
        <img className="key" src={key} />
        <div className="hidden lg:block w-80 h-1 bg-[#0099CC]" />
      </div>
      <div
        className="flex mt-12 items-center justify-center cursor-pointer"
        onClick={() => nav("/recover")}
      >
        <span className="text-lg text-[#4D4D4D] font-bo">
          ¿Forgot your password?
        </span>
      </div>
    </section>
  );
};

export default Login;
