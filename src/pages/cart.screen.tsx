"use client";
import React, { useEffect, useState } from "react";

type Product = {
	id: number;
	createdAt: string;
	updatedAt: string;
	name: string;
	code: string;
	description: string;
	price: string;
	status: number;
	quantity: number;
	logs: {
		list: [];
	};
};

const CartScreen = () => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const cartsJson = localStorage.getItem("cart");
		const parsedCart = cartsJson ? JSON.parse(cartsJson) : [];

		setCart(parsedCart);
	}, []);

	return (
		<div id="page-content">
			<div className="page section-header text-center">
				<div className="page-title">
					<div className="wrapper">
						<h1 className="page-width">Your cart</h1>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-8 col-lg-8 main-col">
						<form action="#" method="post" className="cart style2">
							<table>
								<thead className="cart__row cart__header">
									<tr>
										<th colSpan={2} className="text-center">
											Product
										</th>
										<th className="text-center">Price</th>
										<th className="text-center">Quantity</th>
										<th className="text-right">Total</th>
										<th className="action">&nbsp;</th>
									</tr>
								</thead>
								<tbody>
									{cart &&
										cart.map((product: Product) => (
											<tr className="cart__row border-bottom line1 cart-flex border-top">
												<td className="cart__image-wrapper cart-flex-item">
													<a href="#">
														<img
															className="cart__image"
															src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
															alt="Elastic Waist Dress - Navy / Small"
														/>
													</a>
												</td>
												<td className="cart__meta small--text-left cart-flex-item">
													<div className="list-view-item__title">
														<a href="#">{product.name} </a>
													</div>
													<div className="cart__meta-text">
														Color: Navy
														<br />
														Size: Small
														<br />
													</div>
												</td>
												<td className="cart__price-wrapper cart-flex-item">
													<span className="money">${product.price}</span>
												</td>
												<td className="cart__update-wrapper cart-flex-item text-right">
													<div className="cart__qty text-center">
														<div className="qtyField">
															<a className="qtyBtn minus" href=";">
																<i className="icon icon-minus" />
															</a>
															<input
																className="cart__qty-input qty"
																type="text"
																name="updates[]"
																id="qty"
																value={product.quantity}
																pattern="[0-9]*"
															/>
															<a className="qtyBtn plus" href=";">
																<i className="icon icon-plus" />
															</a>
														</div>
													</div>
												</td>
												<td className="text-right small--hide cart-price">
													<div>
														<span className="money">{Number(product.price) * product.quantity}</span>
													</div>
												</td>
												<td className="text-center small--hide">
													<a
														href="#"
														className="btn btn--secondary cart__remove"
														title="Remove tem"
													>
														<i className="icon icon anm anm-times-l" />
													</a>
												</td>
											</tr>
										))}
								</tbody>
								<tfoot>
									<tr>
										<td colSpan={3} className="text-left">
											<a
												href="http://annimexweb.com/"
												className="btn--link cart-continue"
											>
												<i className="icon icon-arrow-circle-left" /> Continue
												shopping
											</a>
										</td>
										<td colSpan={3} className="text-right">
											<button
												type="submit"
												name="update"
												className="btn--link cart-update "
											>
												<i className="fa fa-refresh" /> Update
											</button>
										</td>
									</tr>
								</tfoot>
							</table>
							<hr />
						</form>
					</div>
					<div className="col-12 col-sm-12 col-md-4 col-lg-4 cart__footer">
						<div className="cart-note">
							<div className="solid-border">
								<h5>
									<label
										htmlFor="CartSpecialInstructions"
										className="cart-note__label small--text-center"
									>
										Add a note to your order
									</label>
								</h5>
								<textarea
									name="note"
									id="CartSpecialInstructions"
									className="cart-note__input"
									defaultValue={""}
								/>
							</div>
						</div>
						<div className="solid-border">
							<div className="row">
								<span className="col-12 col-sm-6 cart__subtotal-title">
									<strong>Subtotal</strong>
								</span>
								<span className="col-12 col-sm-6 cart__subtotal-title cart__subtotal text-right">
									<span className="money">$735.00</span>
								</span>
							</div>
							<div className="cart__shipping">
								Shipping &amp; taxes calculated at checkout
							</div>
							<p className="cart_tearm">
								<label>
									<input
										type="checkbox"
										name="tearm"
										id="cartTearm"
										className="checkbox me-2"
										defaultValue="tearm"
									/>
									I agree with the terms and conditions
								</label>
							</p>
							<input
								type="submit"
								name="checkout"
								id="cartCheckout"
								className="btn btn--small-wide checkout rounded mb-2"
								defaultValue="Checkout"
							/>
							<div className="payment-img">
								<img src="assets/images/payment-img.jpg" alt="Payment" />
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-8">
							<div>
								<p className="h1 fw-bold ">Billing Information</p>
								<input className="rounded mb-3" placeholder="Name" />
								<input className="rounded mb-3" placeholder="Address" />
								<input className="rounded mb-3" placeholder="Card Number" />
								<select
									className="form-select mb-3"
									aria-label="Default select example"
								>
									<option selected>Choose Method Payment</option>
									<option value="1">Momo</option>
									<option value="2">Onepay</option>
									<option value="3">VNPay</option>
								</select>
								<input className="rounded mb-3" placeholder="Cardholder Name" />
								<button className="rounded px-5 py-2 btn btn-primary">
									Pay Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;
