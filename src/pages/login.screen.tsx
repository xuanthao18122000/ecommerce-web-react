"use client";

import { loginApi, loginFacebookApi, loginGoogleApi } from "@/services/auth.service";
import useAxios from "axios-hooks";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

// import { useRouter } from "next/router";

const LoginScreen = () => {
	// const router = useRouter();
	const [formValues, setFormValues] = useState<ILoginPayload>({ email: "", password: "" });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async () => {
		console.log(formValues);
		if(!formValues?.email || !formValues?.password) {
			console.log("Vui long nhap day du email, password");
			return // toast.error("Email/PPassword is reqired!")
		}
		let response = await loginApi(formValues);
		console.log(">>> Check response: ", response)
	};

	const responseGoogle = (response: any) => {
    console.log(response);
  };

	const responseFacebook = (response: any) => {
    console.log(response);
  };

	const responseFacebookFailed = async () => {
		
	};

	return (
		<div id="page-content">
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
							<div className="d-flex justify-content-between align-items-center mb-4">
								{/* <button onClick={responseGoogle} className="py-3 bg-danger text-white rounded text-center" style={{ width: '48%' }}>Google</button> */}
								<GoogleLogin
									clientId='129029747488-fml7lldggf1j165dr9ciar8278k3aug8.apps.googleusercontent.com'
									buttonText="Login with Google"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={"single_host_origin"}
								/>
								<FacebookLogin
									appId="315598537513872"
									// fields="name,picture" // Specify the fields you need
									callback={responseFacebook}
								/>
								{/* <button onClick={loginFacebook} className="py-3 bg-primary text-white rounded text-center" style={{ width: '48%' }}>Facebook</button> */}
							</div>
							<div id="CustomerLoginForm" className="contact-form">
								<div className="row mb-5">
									<div className="col-12 col-sm-12 col-md-12 col-lg-12">
										<div className="form-group mb-3">
											<label className="mb-2">Email</label>
											<input
												type="email"
												placeholder=""
												className="rounded"
												value={formValues?.email}
												onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
											/>
										</div>
									</div>
									<div className="col-12 col-sm-12 col-md-12 col-lg-12">
										<div className="form-group">
											<label className="mb-2">Password</label>
											<input
												type="password"
												placeholder=""
												className="rounded"
												value={formValues?.password}
												onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
										<input onClick={handleSubmit} className="btn mb-3 border rounded py-3" value="Sign In" disabled={ formValues?.email && formValues?.password ? false: true} />
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
