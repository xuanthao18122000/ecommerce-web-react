"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import axios from "axios";
import useAxios from "axios-hooks";

const RegisterScreen = () => {
	return (
		<div id="page-content">
			<div className="page section-header text-center">
				<div className="page-title">
					<div className="wrapper">
						<h1 className="page-width">Create an Account</h1>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-6 col-lg-6 main-col offset-md-3">
						<div className="mb-4">
							<form
								// method="post"
								action="/login"
								id="CustomerLoginForm"
								acceptCharset="UTF-8"
								className="contact-form"
							>
								<div className="row mb-4">
									<div className="col-12 col-sm-12 col-md-12 col-lg-12">
										<div className="form-group mb-3">
											<label className="mb-2">Full Name</label>
											<input
												type="text"
												name="customer[first_name]"
												placeholder=""
												id="FirstName"
											/>
										</div>
									</div>
									<div className="col-12 col-sm-12 col-md-12 col-lg-12">
										<div className="mb-3">
											<label htmlFor="CustomerEmail">Email</label>
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
										<div className="mb-3">
											<label htmlFor="CustomerPassword">Password</label>
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
									<div className="col-12 col-sm-12 col-md-12 col-lg-12">
										<div className="form-group mb-3">
											<label className="mb-2">Repeat password</label>
											<input
												type="text"
												name="customer[last_name]"
												placeholder=""
												id="LastName"
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
										<input
											type="submit"
											className="btn mb-3"
											defaultValue="Create"
										/>
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

export default RegisterScreen;
