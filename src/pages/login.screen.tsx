"use client";
import { loginApi } from "@/services/auth.service";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!formValues.email || !formValues.password) {
      return toast.warning("Vui lòng nhập đầy đủ email, password!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    try {
      setLoading(true);
      let response = await loginApi(formValues);
      if (response && response?.data) {
        localStorage.setItem("token", response?.data?.data?.token);
        localStorage.setItem(
          "user",
          JSON.stringify(response?.data?.data?.user)
        );

        toast.success("Bạn đã đăng nhập thành công!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            router.push("/");
          },
        });
        setTimeout(() => {
          return setLoading(false);
        }, 5000);
      }
    } catch (error) {
      return toast.error("Sai email hoặc mật khẩu!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div id="page-content">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Login</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
            <div className="mb-4">
              <div id="CustomerLoginForm" className="contact-form">
                <div className="row mb-5">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group mb-3">
                      <label className="mb-2">Email</label>
                      <input
                        type="email"
                        placeholder=""
                        className=""
                        value={formValues.email}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <label className="mb-2">Password</label>
                      <input
                        type="password"
                        placeholder=""
                        className=""
                        value={formValues.password}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
                    <input
                      onClick={handleSubmit}
                      className="btn mb-3 border"
                      value="Sign In"
                      disabled={
                        (formValues.email && formValues.password) || loading
                          ? false
                          : true
                      }
                    />
                    {error && <p className="text-danger">{error}</p>}
                    <p className="mb-4">
                      <a href="#" id="RecoverPassword">
                        Forgot your password?
                      </a>{" "}
                      &nbsp; | &nbsp;
                      <a href="register.html" id="customer_register_link">
                        Create account
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
