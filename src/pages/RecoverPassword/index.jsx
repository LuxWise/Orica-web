import React from "react";
import logo from "../../assets/Orica.svg";
import axios from "axios";
import { input } from "../../components/input/index.jsx";
import { buttom } from "../../components/buttom/index.jsx";
import { URL } from "../../routes/constans.js";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const RecoverPassword = () => {
  const [user, setUsername] = React.useState("");
  const nav = useNavigate();

  const onSubmit = () => {
    event.preventDefault();
    axios
      .post(`${URL}/recoverPassword`, { user })
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        enqueueSnackbar("check your email", {
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
        <span className="text-4xl font-[500] font-bo">Recover password</span>
      </div>
      <div className="flex flex-col gap-10">
        <input.InputLog text="Email" input={setUsername} value={user} />
      </div>
      <div className="flex my-5 mx-10  lg:my-10 items-center justify-center">
        <div className="flex flex-col w-[450px]">
          <span className="text-sm lg:text-base font-bo">
            Forgot your password?
          </span>
          <span className="text-sm lg:text-base font-bo">
            Don't worry, we're here to help! Enter your email address below and
            we'll send you a link to reset your password
          </span>
        </div>
      </div>
      <div className="flex my-20 lg:my-14 items-center justify-center gap-20">
        <buttom.ButtomSubmit text="Recover" onSubmit={onSubmit} />
      </div>
    </section>
  );
};

export default RecoverPassword;
