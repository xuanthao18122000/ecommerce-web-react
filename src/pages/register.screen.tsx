"use client";
import { registerApi } from "@/services/auth.service";
import React, {  useState } from "react";
const RegisterScreen = () => {
	const [formValues, setFormValues] = useState({
		fullName: "",
		email: "",
		password: "",
		repeatPassword: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async () => {
		console.log(formValues);
		if(!formValues.email || !formValues.password || !formValues.fullName || !formValues.repeatPassword  ) {
			console.log("Vui long nhap day du thong tin");
			return // toast.error("Email/PPassword is reqired!")
		}
		if(formValues.password !== formValues.repeatPassword) {
			console.log("Repeat password wrong");
			return // toast.error("Email/PPassword is reqired!")
		}
		let response = await registerApi(formValues);
		console.log(">>> Check response: ", response)
	};

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
							<div
								id="CustomerLoginForm"
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
												onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })}
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
												onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
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
												onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}

											/>
										</div>
									</div>
									<div className="col-12 col-sm-12 col-md-12 col-lg-12">
										<div className="form-group mb-3">
											<label className="mb-2">Repeat password</label>
											<input
												type="password"
												defaultValue=""
												name="customer[repeatPassword]"
												placeholder=""
												id="CustomerPassword"
												className=""
												onChange={(e) => setFormValues({ ...formValues, repeatPassword: e.target.value })}

											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="text-center col-12 col-sm-12 col-md-12 col-lg-12">
										<input
											type="submit"
											onClick={handleSubmit}
											disabled={ formValues.email && formValues.password && formValues.fullName  ? false: true}
											className="btn mb-3"
											defaultValue="Create"
										/>
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

export default RegisterScreen;
