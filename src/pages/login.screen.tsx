"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import axios from "axios";
import useAxios from "axios-hooks";

const LoginScreen = () => {
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
							<form
								// method="post"
								action="/"
								id="CustomerLoginForm"
								acceptCharset="UTF-8"
								className="contact-form"
							>
								<div className="row mb-5">
									<div className="col-12 col-sm-12 col-md-12 col-lg-12">
										<div className="form-group mb-3">
											<label className="mb-2">Email</label>
											<input
												type="email"
												name="customer[email]"
												placeholder=""
												id="CustomerEmail"
												className=""
												autoCorrect="off"
												autoCapitalize="off"
											/>
										</div>
									</div>
									<div className="col-12 col-sm-12 col-md-12 col-lg-12">
										<div className="form-group">
											<label className="mb-2">Password</label>
											<input
												type="password"
												defaultValue=""
												name="customer[password]"
												placeholder=""
												id="CustomerPassword"
												className=""
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
										<input
											type="submit"
											className="btn mb-3"
											defaultValue="Sign In"
										/>
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
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginScreen;
