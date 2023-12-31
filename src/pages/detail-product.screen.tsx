"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import axios from "axios";
import useAxios from "axios-hooks";

const DetailScreen = () => {
	return (
		<div id="page-content">
			<div id="MainContent" className="main-content" role="main">
				<div className="bredcrumbWrap">
					<div className="container breadcrumbs">
						<a href="index.html" title="Back to the home page">
							Home
						</a>
						<span aria-hidden="true">›</span>
						<span>Short Description</span>
					</div>
				</div>

				<div
					id="ProductSection-product-template"
					className="product-template__container prstyle1 container"
				>
					<div className="product-single">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="product-details-img">
									<div className="product-thumb">
										<div
											id="gallery"
											className="product-dec-slider-2 product-tab-left"
										>
											<a
												data-image="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												data-zoom-image="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												className="slick-slide slick-cloned"
												data-slick-index={-4}
												aria-hidden="true"
												tabIndex={-1}
											>
												<img
													className=""
													src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
													alt=""
												/>
											</a>
											<a
												data-image="assets/images/product-detail-page/cape-dress-2.jpg"
												data-zoom-image="assets/images/product-detail-page/cape-dress-2.jpg"
												className="slick-slide slick-cloned"
												data-slick-index={-3}
												aria-hidden="true"
												tabIndex={-1}
											>
												<img
													className=""
													src="assets/images/product-detail-page/cape-dress-2.jpg"
													alt=""
												/>
											</a>
											<a
												data-image="assets/images/product-detail-page/cape-dress-3.jpg"
												data-zoom-image="assets/images/product-detail-page/cape-dress-3.jpg"
												className="slick-slide slick-cloned"
												data-slick-index={-2}
												aria-hidden="true"
												tabIndex={-1}
											>
												<img
													className=""
													src="assets/images/product-detail-page/cape-dress-3.jpg"
													alt=""
												/>
											</a>
											<a
												data-image="assets/images/product-detail-page/cape-dress-4.jpg"
												data-zoom-image="assets/images/product-detail-page/cape-dress-4.jpg"
												className="slick-slide slick-cloned"
												data-slick-index={-1}
												aria-hidden="true"
												tabIndex={-1}
											>
												<img
													className=""
													src="assets/images/product-detail-page/cape-dress-4.jpg"
													alt=""
												/>
											</a>
											<a
												data-image="assets/images/product-detail-page/cape-dress-5.jpg"
												data-zoom-image="assets/images/product-detail-page/cape-dress-5.jpg"
												className="slick-slide slick-cloned"
												data-slick-index={0}
												aria-hidden="true"
												tabIndex={-1}
											>
												<img
													className=""
													src="assets/images/product-detail-page/cape-dress-5.jpg"
													alt=""
												/>
											</a>
											<a
												data-image="assets/images/product-detail-page/cape-dress-6.jpg"
												data-zoom-image="assets/images/product-detail-page/cape-dress-6.jpg"
												className="slick-slide slick-cloned"
												data-slick-index={1}
												aria-hidden="true"
												tabIndex={-1}
											>
												<img
													className=""
													src="assets/images/product-detail-page/cape-dress-6.jpg"
													alt=""
												/>
											</a>
											<a
												data-image="assets/images/product-detail-page/cape-dress-7.jpg"
												data-zoom-image="assets/images/product-detail-page/cape-dress-7.jpg"
												className="slick-slide slick-cloned"
												data-slick-index={2}
												aria-hidden="true"
												tabIndex={-1}
											>
												<img
													className=""
													src="assets/images/product-detail-page/cape-dress-7.jpg"
													alt=""
												/>
											</a>
										</div>
									</div>
									<div className="zoompro-wrap product-zoom-right pl-20">
										<div className="zoompro-span">
											<img
												className="zoompro "
												data-zoom-image="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												alt=""
												src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
											/>
										</div>
										<div className="product-labels">
											<span className="lbl on-sale">Sale</span>
											<span className="lbl pr-label1">new</span>
										</div>
										<div className="product-buttons">
											<a
												href="https://www.youtube.com/watch?v=93A2jOW5Mog"
												className="btn popup-video"
												title="View Video"
											>
												<i className="icon anm anm-play-r" aria-hidden="true" />
											</a>
											<a href="#" className="btn prlightbox" title="Zoom">
												<i
													className="icon anm anm-expand-l-arrows"
													aria-hidden="true"
												/>
											</a>
										</div>
									</div>
									<div className="lightboximages">
										<a
											href="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
											data-size="1462x2048"
										/>
										<a
											href="assets/images/product-detail-page/cape-dress-2.jpg"
											data-size="1462x2048"
										/>
										<a
											href="assets/images/product-detail-page/cape-dress-3.jpg"
											data-size="1462x2048"
										/>
										<a
											href="assets/images/product-detail-page/cape-dress-4.jpg"
											data-size="1462x2048"
										/>
										<a
											href="assets/images/product-detail-page/cape-dress-5.jpg"
											data-size="1462x2048"
										/>
										<a
											href="assets/images/product-detail-page/cape-dress-6.jpg"
											data-size="1462x2048"
										/>
										<a
											href="assets/images/product-detail-page/cape-dress-7.jpg"
											data-size="731x1024"
										/>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-12 col-12">
								<div className="product-single__meta">
									<h1 className="product-single__title">Short Description</h1>
									<div className="product-nav clearfix">
										<a href="#" className="next" title="Next">
											<i className="fa fa-angle-right" aria-hidden="true" />
										</a>
									</div>
									<div className="prInfoRow">
										<div className="product-stock">
											{" "}
											<span className="instock ">In Stock</span>{" "}
											<span className="outstock hide">Unavailable</span>{" "}
										</div>
										<div className="product-sku">
											SKU: <span className="variant-sku">19115-rdxs</span>
										</div>
										<div className="product-review">
											<a className="reviewLink" href="#tab2">
												<i className="font-13 fa fa-star" />
												<i className="font-13 fa fa-star" />
												<i className="font-13 fa fa-star" />
												<i className="font-13 fa fa-star-o" />
												<i className="font-13 fa fa-star-o" />
												<span className="spr-badge-caption">6 reviews</span>
											</a>
										</div>
									</div>
									<p className="product-single__price product-single__price-product-template">
										<span className="visually-hidden">Regular price</span>
										<s id="ComparePrice-product-template">
											<span className="money">$600.00</span>
										</s>
										<span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
											<span id="ProductPrice-product-template">
												<span className="money">$500.00</span>
											</span>
										</span>
										<span className="discount-badge">
											{" "}
											<span className="devider">|</span>&nbsp;
											<span>You Save</span>
											<span
												id="SaveAmount-product-template"
												className="product-single__save-amount"
											>
												<span className="money">$100.00</span>
											</span>
											<span className="off">
												(<span>16</span>%)
											</span>
										</span>
									</p>
									<div className="orderMsg" data-user={23} data-time={24}>
										<img src="assets/images/order-icon.jpg" alt="" />{" "}
										<strong className="items">5</strong> sold in last{" "}
										<strong className="time">26</strong> hours
									</div>
								</div>
								<div className="product-single__description rte">
									<ul>
										<li>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit
										</li>
										<li>Sed ut perspiciatis unde omnis iste natus error sit</li>
										<li>
											Neque porro quisquam est qui dolorem ipsum quia dolor
										</li>
										<li>Lorem Ipsum is not simply random text.</li>
									</ul>
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book.
									</p>
								</div>
								<div id="quantity_message">
									Hurry! Only <span className="items">4</span> left in stock.
								</div>
								<form
									method="post"
									action="http://annimexweb.com/cart/add"
									id="product_form_10508262282"
									acceptCharset="UTF-8"
									className="product-form product-form-product-template hidedropdown"
									encType="multipart/form-data"
								>
									<div
										className="swatch clearfix swatch-0 option1"
										data-option-index={0}
									>
										<div className="product-form__item">
											<label className="header">
												Color: <span className="slVariant">Red</span>
											</label>
											<div
												data-value="Black"
												className="swatch-element color black available"
											>
												<input
													className="swatchInput"
													id="swatch-0-black"
													type="radio"
													name="option-0"
													defaultValue="Black"
												/>
												<label
													className="swatchLbl color small"
													htmlFor="swatch-0-black"
													style={{ backgroundColor: "black" }}
													title="Black"
												/>
											</div>
											<div
												data-value="Maroon"
												className="swatch-element color maroon available"
											>
												<input
													className="swatchInput"
													id="swatch-0-maroon"
													type="radio"
													name="option-0"
													defaultValue="Maroon"
												/>
												<label
													className="swatchLbl color small"
													htmlFor="swatch-0-maroon"
													style={{ backgroundColor: "maroon" }}
													title="Maroon"
												/>
											</div>
											<div
												data-value="Blue"
												className="swatch-element color blue available"
											>
												<input
													className="swatchInput"
													id="swatch-0-blue"
													type="radio"
													name="option-0"
													defaultValue="Blue"
												/>
												<label
													className="swatchLbl color small"
													htmlFor="swatch-0-blue"
													style={{ backgroundColor: "blue" }}
													title="Blue"
												/>
											</div>
											<div
												data-value="Dark Green"
												className="swatch-element color dark-green available"
											>
												<input
													className="swatchInput"
													id="swatch-0-dark-green"
													type="radio"
													name="option-0"
													defaultValue="Dark Green"
												/>
												<label
													className="swatchLbl color small"
													htmlFor="swatch-0-dark-green"
													style={{ backgroundColor: "darkgreen" }}
													title="Dark Green"
												/>
											</div>
										</div>
									</div>
									<div
										className="swatch clearfix swatch-1 option2"
										data-option-index={1}
									>
										<div className="product-form__item">
											<label className="header">
												Size: <span className="slVariant">XS</span>
											</label>
											<div
												data-value="XS"
												className="swatch-element xs available"
											>
												<input
													className="swatchInput"
													id="swatch-1-xs"
													type="radio"
													name="option-1"
													defaultValue="XS"
												/>
												<label
													className="swatchLbl medium rectangle"
													htmlFor="swatch-1-xs"
													title="XS"
												>
													XS
												</label>
											</div>
											<div
												data-value="S"
												className="swatch-element s available"
											>
												<input
													className="swatchInput"
													id="swatch-1-s"
													type="radio"
													name="option-1"
													defaultValue="S"
												/>
												<label
													className="swatchLbl medium rectangle"
													htmlFor="swatch-1-s"
													title="S"
												>
													S
												</label>
											</div>
											<div
												data-value="M"
												className="swatch-element m available"
											>
												<input
													className="swatchInput"
													id="swatch-1-m"
													type="radio"
													name="option-1"
													defaultValue="M"
												/>
												<label
													className="swatchLbl medium rectangle"
													htmlFor="swatch-1-m"
													title="M"
												>
													M
												</label>
											</div>
											<div
												data-value="L"
												className="swatch-element l available"
											>
												<input
													className="swatchInput"
													id="swatch-1-l"
													type="radio"
													name="option-1"
													defaultValue="L"
												/>
												<label
													className="swatchLbl medium rectangle"
													htmlFor="swatch-1-l"
													title="L"
												>
													L
												</label>
											</div>
										</div>
									</div>
									<p className="infolinks">
										<a href="#sizechart" className="sizelink btn">
											{" "}
											Size Guide
										</a>{" "}
										<a href="#productInquiry" className="emaillink btn">
											{" "}
											Ask About this Product
										</a>
									</p>

									<div className="product-action clearfix">
										<div className="product-form__item--quantity">
											<div className="wrapQtyBtn">
												<div className="qtyField">
													<a
														className="qtyBtn minus"
														href=""
													>
														<i
															className="fa anm anm-minus-r"
															aria-hidden="true"
														/>
													</a>
													<input
														type="text"
														id="Quantity"
														name="quantity"
														defaultValue={1}
														className="product-form__input qty"
													/>
													<a className="qtyBtn plus" href="">
														<i
															className="fa anm anm-plus-r"
															aria-hidden="true"
														/>
													</a>
												</div>
											</div>
										</div>
										<div className="product-form__item--submit">
											<button
												type="button"
												name="add"
												className="btn product-form__cart-submit"
											>
												<span>Add to cart</span>
											</button>
										</div>
										<div
											className="shopify-payment-button"
											data-shopify="payment-button"
										>
											<button
												type="button"
												className="shopify-payment-button__button shopify-payment-button__button--unbranded"
											>
												Buy it now
											</button>
										</div>
									</div>
								</form>
								<div className="display-table shareRow">
									<div className="display-table-cell medium-up--one-third">
										<div className="wishlist-btn">
											<a
												className="wishlist add-to-wishlist"
												href="#"
												title="Add to Wishlist"
											>
												<i
													className="icon anm anm-heart-l"
													aria-hidden="true"
												/>{" "}
												<span>Add to Wishlist</span>
											</a>
										</div>
									</div>
									<div className="display-table-cell text-right">
										<div className="social-sharing">
											<a
												target="_blank"
												href="#"
												className="btn btn--small btn--secondary btn--share share-facebook"
												title="Share on Facebook"
											>
												<i
													className="fa fa-facebook-square"
													aria-hidden="true"
												/>{" "}
												<span className="share-title" aria-hidden="true">
													Share
												</span>
											</a>
											<a
												target="_blank"
												href="#"
												className="btn btn--small btn--secondary btn--share share-twitter"
												title="Tweet on Twitter"
											>
												<i className="fa fa-twitter" aria-hidden="true" />{" "}
												<span className="share-title" aria-hidden="true">
													Tweet
												</span>
											</a>
											<a
												href="#"
												title="Share on google+"
												className="btn btn--small btn--secondary btn--share"
											>
												<i className="fa fa-google-plus" aria-hidden="true" />{" "}
												<span className="share-title" aria-hidden="true">
													Google+
												</span>
											</a>
											<a
												target="_blank"
												href="#"
												className="btn btn--small btn--secondary btn--share share-pinterest"
												title="Pin on Pinterest"
											>
												<i className="fa fa-pinterest" aria-hidden="true" />{" "}
												<span className="share-title" aria-hidden="true">
													Pin it
												</span>
											</a>
											<a
												href="#"
												className="btn btn--small btn--secondary btn--share share-pinterest"
												title="Share by Email"
												target="_blank"
											>
												<i className="fa fa-envelope" aria-hidden="true" />{" "}
												<span className="share-title" aria-hidden="true">
													Email
												</span>
											</a>
										</div>
									</div>
								</div>
								<p id="freeShipMsg" className="freeShipMsg" data-price={199}>
									<i className="fa fa-truck" aria-hidden="true" /> GETTING
									CLOSER! ONLY{" "}
									<b className="freeShip">
										<span
											className="money"
											data-currency-usd="$199.00"
											data-currency="USD"
										>
											$199.00
										</span>
									</b>{" "}
									AWAY FROM <b>FREE SHIPPING!</b>
								</p>
								<p className="shippingMsg">
									<i className="fa fa-clock-o" aria-hidden="true" /> ESTIMATED
									DELIVERY BETWEEN <b id="fromDate">Wed. May 1</b> and{" "}
									<b id="toDate">Tue. May 7</b>.
								</p>
								<div className="userViewMsg" data-user={20} data-time={11000}>
									<i className="fa fa-users" aria-hidden="true" />{" "}
									<strong className="uersView">14</strong> PEOPLE ARE LOOKING
									FOR THIS PRODUCT
								</div>
							</div>
						</div>
					</div>

					<div className="prFeatures">
						<div className="row">
							<div className="col-12 col-sm-6 col-md-3 col-lg-3 feature">
								<img
									src="assets/images/credit-card.png"
									alt="Safe Payment"
									title="Safe Payment"
								/>
								<div className="details">
									<h3>Safe Payment</h3>Pay with the world's most payment
									methods.
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-3 col-lg-3 feature">
								<img
									src="assets/images/shield.png"
									alt="Confidence"
									title="Confidence"
								/>
								<div className="details">
									<h3>Confidence</h3>Protection covers your purchase and
									personal data.
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-3 col-lg-3 feature">
								<img
									src="assets/images/worldwide.png"
									alt="Worldwide Delivery"
									title="Worldwide Delivery"
								/>
								<div className="details">
									<h3>Worldwide Delivery</h3>FREE &amp; fast shipping to over
									200+ countries &amp; regions.
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-3 col-lg-3 feature">
								<img
									src="assets/images/phone-call.png"
									alt="Hotline"
									title="Hotline"
								/>
								<div className="details">
									<h3>Hotline</h3>Talk to help line for your question on 4141
									456 789, 4125 666 888
								</div>
							</div>
						</div>
					</div>

					<div className="tabs-listing">
						<ul className="product-tabs">
							<li rel="tab1">
								<a className="tablink">Product Details</a>
							</li>
							<li rel="tab2">
								<a className="tablink">Product Reviews</a>
							</li>
							<li rel="tab3">
								<a className="tablink">Size Chart</a>
							</li>
							<li rel="tab4">
								<a className="tablink">Shipping &amp; Returns</a>
							</li>
						</ul>
						<div className="tab-container">
							<div id="tab1" className="tab-content">
								<div className="product-description rte">
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book. It has survived not only five centuries,
										but also the leap into electronic typesetting, remaining
										essentially unchanged.
									</p>
									<ul>
										<li>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit
										</li>
										<li>Sed ut perspiciatis unde omnis iste natus error sit</li>
										<li>
											Neque porro quisquam est qui dolorem ipsum quia dolor
										</li>
										<li>Lorem Ipsum is not simply random text.</li>
										<li>Free theme updates</li>
									</ul>
									<h3>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem
									</h3>
									<p>
										You can change the position of any sections such as slider,
										banner, products, collection and so on by just dragging and
										dropping.&nbsp;
									</p>
									<h3>Lorem Ipsum is not simply random text.</h3>
									<p>
										But I must explain to you how all this mistaken idea of
										denouncing pleasure and praising pain was born and I will
										give you a complete account of the system, and expound the
										actual teachings of the great explorer of the truth, the
										master-builder of human happiness.
									</p>
									<p>
										Change colors, fonts, banners, megamenus and more. Preview
										changes are live before saving them.
									</p>
									<h3>1914 translation by H. Rackham</h3>
									<p>
										But I must explain to you how all this mistaken idea of
										denouncing pleasure and praising pain was born and I will
										give you a complete account of the system, and expound the
										actual teachings of the great explorer of the truth, the
										master-builder of human happiness.
									</p>
									<h3>
										Section 1.10.33 of "de Finibus Bonorum et Malorum", written
										by Cicero in 45 BC
									</h3>
									<p>
										At vero eos et accusamus et iusto odio dignissimos ducimus
										qui blanditiis praesentium voluptatum deleniti atque
										corrupti quos dolores et quas molestias excepturi sint
										occaecati cupiditate non provident, similique sunt in culpa
										qui officia deserunt mollitia animi, id est laborum et
										dolorum fuga.
									</p>
									<h3>
										The standard Lorem Ipsum passage, used since the 1500s
									</h3>
									<p>
										You can use variant style from colors, images or variant
										images. Also available differnt type of design styles and
										size.
									</p>
									<h3>Lorem Ipsum is not simply random text.</h3>
									<p>
										But I must explain to you how all this mistaken idea of
										denouncing pleasure and praising pain was born and I will
										give you a complete account of the system, and expound the
										actual teachings of the great explorer of the truth, the
										master-builder of human happiness.
									</p>
									<h3>Proin ut lacus eget elit molestie posuere.</h3>
									<p>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled.
									</p>
								</div>
							</div>
							<div id="tab2" className="tab-content">
								<div id="shopify-product-reviews">
									<div className="spr-container">
										<div className="spr-header clearfix">
											<div className="spr-summary">
												<span className="product-review">
													<a className="reviewLink">
														<i className="font-13 fa fa-star" />
														<i className="font-13 fa fa-star" />
														<i className="font-13 fa fa-star" />
														<i className="font-13 fa fa-star-o" />
														<i className="font-13 fa fa-star-o" />{" "}
													</a>
													<span className="spr-summary-actions-togglereviews">
														Based on 6 reviews456
													</span>
												</span>
												<span className="spr-summary-actions">
													<a
														href="#"
														className="spr-summary-actions-newreview btn"
													>
														Write a review
													</a>
												</span>
											</div>
										</div>
										<div className="spr-content">
											<div className="spr-form clearfix">
												<form
													method="post"
													action="#"
													id="new-review-form"
													className="new-review-form"
												>
													<h3 className="spr-form-title">Write a review</h3>
													<fieldset className="spr-form-contact">
														<div className="spr-form-contact-name">
															<label
																className="spr-form-label"
																htmlFor="review_author_10508262282"
															>
																Name
															</label>
															<input
																className="spr-form-input spr-form-input-text "
																id="review_author_10508262282"
																type="text"
																name="review[author]"
																defaultValue=""
																placeholder="Enter your name"
															/>
														</div>
														<div className="spr-form-contact-email">
															<label
																className="spr-form-label"
																htmlFor="review_email_10508262282"
															>
																Email
															</label>
															<input
																className="spr-form-input spr-form-input-email "
																id="review_email_10508262282"
																type="email"
																name="review[email]"
																defaultValue=""
																placeholder="john.smith@example.com"
															/>
														</div>
													</fieldset>
													<fieldset className="spr-form-review">
														<div className="spr-form-review-rating">
															<label className="spr-form-label">Rating</label>
															<div className="spr-form-input spr-starrating">
																<div className="product-review">
																	<a className="reviewLink" href="#">
																		<i className="fa fa-star-o" />
																		<i className="font-13 fa fa-star-o" />
																		<i className="font-13 fa fa-star-o" />
																		<i className="font-13 fa fa-star-o" />
																		<i className="font-13 fa fa-star-o" />
																	</a>
																</div>
															</div>
														</div>
														<div className="spr-form-review-title">
															<label
																className="spr-form-label"
																htmlFor="review_title_10508262282"
															>
																Review Title
															</label>
															<input
																className="spr-form-input spr-form-input-text "
																id="review_title_10508262282"
																type="text"
																name="review[title]"
																defaultValue=""
																placeholder="Give your review a title"
															/>
														</div>
														<div className="spr-form-review-body">
															<label
																className="spr-form-label"
																htmlFor="review_body_10508262282"
															>
																Body of Review{" "}
																<span className="spr-form-review-body-charactersremaining">
																	(1500)
																</span>
															</label>
															<div className="spr-form-input">
																<textarea
																	className="spr-form-input spr-form-input-textarea "
																	id="review_body_10508262282"
																	data-product-id={10508262282}
																	name="review[body]"
																	rows={10}
																	placeholder="Write your comments here"
																	defaultValue={""}
																/>
															</div>
														</div>
													</fieldset>
													<fieldset className="spr-form-actions">
														<input
															type="submit"
															className="spr-button spr-button-primary button button-primary btn btn-primary"
															defaultValue="Submit Review"
														/>
													</fieldset>
												</form>
											</div>
											<div className="spr-reviews">
												<div className="spr-review">
													<div className="spr-review-header">
														<span className="product-review spr-starratings spr-review-header-starratings">
															<span className="reviewLink">
																<i className="fa fa-star" />
																<i className="font-13 fa fa-star" />
																<i className="font-13 fa fa-star" />
																<i className="font-13 fa fa-star" />
																<i className="font-13 fa fa-star" />
															</span>
														</span>
														<h3 className="spr-review-header-title">
															Lorem ipsum dolor sit amet
														</h3>
														<span className="spr-review-header-byline">
															<strong>dsacc</strong> on{" "}
															<strong>Apr 09, 2019</strong>
														</span>
													</div>
													<div className="spr-review-content">
														<p className="spr-review-content-body">
															Lorem ipsum dolor sit amet, consectetur adipiscing
															elit, sed do eiusmod tempor incididunt ut labore
															et dolore magna aliqua. Ut enim ad minim veniam,
															quis nostrud exercitation ullamco laboris nisi ut
															aliquip ex ea commodo consequat.
														</p>
													</div>
												</div>
												<div className="spr-review">
													<div className="spr-review-header">
														<span className="product-review spr-starratings spr-review-header-starratings">
															<span className="reviewLink">
																<i className="fa fa-star" />
																<i className="font-13 fa fa-star" />
																<i className="font-13 fa fa-star" />
																<i className="font-13 fa fa-star" />
																<i className="font-13 fa fa-star" />
															</span>
														</span>
														<h3 className="spr-review-header-title">
															Lorem Ipsum is simply dummy text of the printing
														</h3>
														<span className="spr-review-header-byline">
															<strong>larrydude</strong> on{" "}
															<strong>Dec 30, 2018</strong>
														</span>
													</div>
													<div className="spr-review-content">
														<p className="spr-review-content-body">
															Sed ut perspiciatis unde omnis iste natus error
															sit voluptatem accusantium doloremque laudantium,
															totam rem aperiam, eaque ipsa quae ab illo
															inventore veritatis et quasi architecto beatae
															vitae dicta sunt explicabo.
														</p>
													</div>
												</div>
												<div className="spr-review">
													<div className="spr-review-header">
														<span className="product-review spr-starratings spr-review-header-starratings">
															<span className="reviewLink">
																<i className="fa fa-star" />
																<i className="font-13 fa fa-star" />
																<i className="font-13 fa fa-star" />
																<i className="font-13 fa fa-star" />
																<i className="font-13 fa fa-star" />
															</span>
														</span>
														<h3 className="spr-review-header-title">
															Neque porro quisquam est qui dolorem ipsum quia
															dolor sit amet, consectetur, adipisci velit...
														</h3>
														<span className="spr-review-header-byline">
															<strong>quoctri1905</strong> on{" "}
															<strong>Dec 30, 2018</strong>
														</span>
													</div>
													<div className="spr-review-content">
														<p className="spr-review-content-body">
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been the
															industry's standard dummy text ever since the
															1500s, when an unknown printer took a galley of
															type and scrambled.
															<br />
															<br />
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="tab3" className="tab-content">
								<h3>WOMEN'S BODY SIZING CHART</h3>
								<table>
									<tbody>
										<tr>
											<th>Size</th>
											<th>XS</th>
											<th>S</th>
											<th>M</th>
											<th>L</th>
											<th>XL</th>
										</tr>
										<tr>
											<td>Chest</td>
											<td>31" - 33"</td>
											<td>33" - 35"</td>
											<td>35" - 37"</td>
											<td>37" - 39"</td>
											<td>39" - 42"</td>
										</tr>
										<tr>
											<td>Waist</td>
											<td>24" - 26"</td>
											<td>26" - 28"</td>
											<td>28" - 30"</td>
											<td>30" - 32"</td>
											<td>32" - 35"</td>
										</tr>
										<tr>
											<td>Hip</td>
											<td>34" - 36"</td>
											<td>36" - 38"</td>
											<td>38" - 40"</td>
											<td>40" - 42"</td>
											<td>42" - 44"</td>
										</tr>
										<tr>
											<td>Regular inseam</td>
											<td>30"</td>
											<td>30½"</td>
											<td>31"</td>
											<td>31½"</td>
											<td>32"</td>
										</tr>
										<tr>
											<td>Long (Tall) Inseam</td>
											<td>31½"</td>
											<td>32"</td>
											<td>32½"</td>
											<td>33"</td>
											<td>33½"</td>
										</tr>
									</tbody>
								</table>
								<h3>MEN'S BODY SIZING CHART</h3>
								<table>
									<tbody>
										<tr>
											<th>Size</th>
											<th>XS</th>
											<th>S</th>
											<th>M</th>
											<th>L</th>
											<th>XL</th>
											<th>XXL</th>
										</tr>
										<tr>
											<td>Chest</td>
											<td>33" - 36"</td>
											<td>36" - 39"</td>
											<td>39" - 41"</td>
											<td>41" - 43"</td>
											<td>43" - 46"</td>
											<td>46" - 49"</td>
										</tr>
										<tr>
											<td>Waist</td>
											<td>27" - 30"</td>
											<td>30" - 33"</td>
											<td>33" - 35"</td>
											<td>36" - 38"</td>
											<td>38" - 42"</td>
											<td>42" - 45"</td>
										</tr>
										<tr>
											<td>Hip</td>
											<td>33" - 36"</td>
											<td>36" - 39"</td>
											<td>39" - 41"</td>
											<td>41" - 43"</td>
											<td>43" - 46"</td>
											<td>46" - 49"</td>
										</tr>
									</tbody>
								</table>
								<div className="text-center">
									<img src="assets/images/size.jpg" alt="" />
								</div>
							</div>
							<div id="tab4" className="tab-content">
								<h4>Returns Policy</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
									eros justo, accumsan non dui sit amet. Phasellus semper
									volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex
									non, mattis sollicitudin purus. Mauris consequat justo a enim
									interdum, in consequat dolor accumsan. Nulla iaculis diam
									purus, ut vehicula leo efficitur at.
								</p>
								<p>
									Interdum et malesuada fames ac ante ipsum primis in faucibus.
									In blandit nunc enim, sit amet pharetra erat aliquet ac.
								</p>
								<h4>Shipping</h4>
								<p>
									Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui,
									ultrices ut turpis pulvinar. Sed fringilla ex eget lorem
									consectetur, consectetur blandit lacus varius. Duis vel
									scelerisque elit, et vestibulum metus. Integer sit amet
									tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum
									arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique
									dolor eget turpis consequat varius. Quisque a interdum augue.
									Nam ut nibh mauris.
								</p>
							</div>
						</div>
					</div>

					<div className="related-product grid-products">
						<header className="section-header">
							<h2 className="section-header__title text-center h2">
								<span>Related Products</span>
							</h2>
							<p className="sub-heading">
								You can stop autoplay, increase/decrease aniamtion speed and
								number of grid to show and products from store admin.
							</p>
						</header>
						<div className="productPageSlider">
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image1.jpg"
											src="assets/images/product-images/product-image1.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image1-1.jpg"
											src="assets/images/product-images/product-image1-1.jpg"
											alt="image"
											title="product"
										/>

										<div className="product-labels rectangular">
											<span className="lbl on-sale">-16%</span>{" "}
											<span className="lbl pr-label1">new</span>
										</div>
									</a>

									<form className="variants add" action="#" method="post">
										<button
											className="btn btn-addto-cart"
											type="button"
											tabIndex={0}
										>
											Select Options
										</button>
									</form>
									<div className="button-set">
										<a
											href="#"
											title="Quick View"
											className="quick-view"
											tabIndex={0}
										>
											<i className="icon anm anm-search-plus-r" />
										</a>
										<div className="wishlist-btn">
											<a
												className="wishlist add-to-wishlist"
												href="wishlist.html"
											>
												<i className="icon anm anm-heart-l" />
											</a>
										</div>
									</div>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Edna Dress</a>
									</div>

									<div className="product-price">
										<span className="old-price">$500.00</span>
										<span className="price">$600.00</span>
									</div>

									<div className="product-review">
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star-o" />
										<i className="font-13 fa fa-star-o" />
									</div>

									<ul className="swatches">
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant1.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant2.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant3.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant4.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant5.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant6.jpg"
												alt="image"
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image2.jpg"
											src="assets/images/product-images/product-image2.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image2-1.jpg"
											src="assets/images/product-images/product-image2-1.jpg"
											alt="image"
											title="product"
										/>
									</a>

									<form className="variants add" action="#" method="post">
										<button
											className="btn btn-addto-cart"
											type="button"
											tabIndex={0}
										>
											Select Options
										</button>
									</form>
									<div className="button-set">
										<a
											href="#"
											title="Quick View"
											className="quick-view"
											tabIndex={0}
										>
											<i className="icon anm anm-search-plus-r" />
										</a>
										<div className="wishlist-btn">
											<a
												className="wishlist add-to-wishlist"
												href="wishlist.html"
											>
												<i className="icon anm anm-heart-l" />
											</a>
										</div>
									</div>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Elastic Waist Dress</a>
									</div>

									<div className="product-price">
										<span className="price">$748.00</span>
									</div>

									<div className="product-review">
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
									</div>

									<ul className="swatches">
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant2-1.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant2-2.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant2-3.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant2-4.jpg"
												alt="image"
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image3.jpg"
											src="assets/images/product-images/product-image3.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image3-1.jpg"
											src="assets/images/product-images/product-image3-1.jpg"
											alt="image"
											title="product"
										/>

										<div className="product-labels rectangular">
											<span className="lbl pr-label2">Hot</span>
										</div>
									</a>

									<form className="variants add" action="#" method="post">
										<button
											className="btn btn-addto-cart"
											type="button"
											tabIndex={0}
										>
											Select Options
										</button>
									</form>
									<div className="button-set">
										<a
											href="#"
											title="Quick View"
											className="quick-view"
											tabIndex={0}
										>
											<i className="icon anm anm-search-plus-r" />
										</a>
										<div className="wishlist-btn">
											<a
												className="wishlist add-to-wishlist"
												href="wishlist.html"
											>
												<i className="icon anm anm-heart-l" />
											</a>
										</div>
									</div>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">3/4 Sleeve Kimono Dress</a>
									</div>

									<div className="product-price">
										<span className="price">$550.00</span>
									</div>

									<div className="product-review">
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star-o" />
									</div>

									<ul className="swatches">
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant3-1.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant3-2.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant3-3.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant3-4.jpg"
												alt="image"
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image4.jpg"
											src="assets/images/product-images/product-image4.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image4-1.jpg"
											src="assets/images/product-images/product-image4-1.jpg"
											alt="image"
											title="product"
										/>

										<div className="product-labels">
											<span className="lbl on-sale">Sale</span>
										</div>
									</a>

									<form className="variants add" action="#" method="post">
										<button
											className="btn btn-addto-cart"
											type="button"
											tabIndex={0}
										>
											Select Options
										</button>
									</form>
									<div className="button-set">
										<a
											href="#"
											title="Quick View"
											className="quick-view"
											tabIndex={0}
										>
											<i className="icon anm anm-search-plus-r" />
										</a>
										<div className="wishlist-btn">
											<a
												className="wishlist add-to-wishlist"
												href="wishlist.html"
											>
												<i className="icon anm anm-heart-l" />
											</a>
										</div>
									</div>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Cape Dress</a>
									</div>

									<div className="product-price">
										<span className="old-price">$900.00</span>
										<span className="price">$788.00</span>
									</div>

									<div className="product-review">
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star-o" />
										<i className="font-13 fa fa-star-o" />
									</div>

									<ul className="swatches">
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant4-1.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant4-2.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant4-3.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant4-4.jpg"
												alt="image"
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image5.jpg"
											src="assets/images/product-images/product-image5.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image5-1.jpg"
											src="assets/images/product-images/product-image5-1.jpg"
											alt="image"
											title="product"
										/>

										<div className="product-labels">
											<span className="lbl on-sale">Sale</span>
										</div>
									</a>

									<form className="variants add" action="#" method="post">
										<button
											className="btn btn-addto-cart"
											type="button"
											tabIndex={0}
										>
											Select Options
										</button>
									</form>
									<div className="button-set">
										<a
											href="#"
											title="Quick View"
											className="quick-view"
											tabIndex={0}
										>
											<i className="icon anm anm-search-plus-r" />
										</a>
										<div className="wishlist-btn">
											<a
												className="wishlist add-to-wishlist"
												href="wishlist.html"
											>
												<i className="icon anm anm-heart-l" />
											</a>
										</div>
									</div>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Paper Dress</a>
									</div>

									<div className="product-price">
										<span className="price">$550.00</span>
									</div>

									<div className="product-review">
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
									</div>

									<ul className="swatches">
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant3-1.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant3-2.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant3-3.jpg"
												alt="image"
											/>
										</li>
										<li className="swatch medium rounded">
											<img
												src="assets/images/product-images/variant3-4.jpg"
												alt="image"
											/>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image6.jpg"
											src="assets/images/product-images/product-image6.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image6-1.jpg"
											src="assets/images/product-images/product-image6-1.jpg"
											alt="image"
											title="product"
										/>

										<div className="product-labels rectangular">
											<span className="lbl on-sale">-16%</span>{" "}
											<span className="lbl pr-label1">new</span>
										</div>
									</a>

									<form className="variants add" action="#" method="post">
										<button
											className="btn btn-addto-cart"
											type="button"
											tabIndex={0}
										>
											Select Options
										</button>
									</form>
									<div className="button-set">
										<a
											href="#"
											title="Quick View"
											className="quick-view"
											tabIndex={0}
										>
											<i className="icon anm anm-search-plus-r" />
										</a>
										<div className="wishlist-btn">
											<a
												className="wishlist add-to-wishlist"
												href="wishlist.html"
											>
												<i className="icon anm anm-heart-l" />
											</a>
										</div>
									</div>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Zipper Jacket</a>
									</div>

									<div className="product-price">
										<span className="price">$788.00</span>
									</div>

									<div className="product-review">
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star-o" />
										<i className="font-13 fa fa-star-o" />
									</div>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image7.jpg"
											src="assets/images/product-images/product-image7.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image7-1.jpg"
											src="assets/images/product-images/product-image7-1.jpg"
											alt="image"
											title="product"
										/>
									</a>

									<form className="variants add" action="#" method="post">
										<button
											className="btn btn-addto-cart"
											type="button"
											tabIndex={0}
										>
											Select Options
										</button>
									</form>
									<div className="button-set">
										<a
											href="#"
											title="Quick View"
											className="quick-view"
											tabIndex={0}
										>
											<i className="icon anm anm-search-plus-r" />
										</a>
										<div className="wishlist-btn">
											<a
												className="wishlist add-to-wishlist"
												href="wishlist.html"
											>
												<i className="icon anm anm-heart-l" />
											</a>
										</div>
									</div>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Zipper Jacket</a>
									</div>

									<div className="product-price">
										<span className="price">$748.00</span>
									</div>

									<div className="product-review">
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
										<i className="font-13 fa fa-star" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="related-product grid-products">
						<header className="section-header">
							<h2 className="section-header__title text-center h2">
								<span>Recently Viewed Product</span>
							</h2>
							<p className="sub-heading">
								You can manage this section from store admin as describe in
								above section
							</p>
						</header>
						<div className="productPageSlider">
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image6.jpg"
											src="assets/images/product-images/product-image6.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image6-1.jpg"
											src="assets/images/product-images/product-image6-1.jpg"
											alt="image"
											title="product"
										/>

										<div className="product-labels rectangular">
											<span className="lbl on-sale">-16%</span>{" "}
											<span className="lbl pr-label1">new</span>
										</div>
									</a>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Zipper Jacket</a>
									</div>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image7.jpg"
											src="assets/images/product-images/product-image7.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image7-1.jpg"
											src="assets/images/product-images/product-image7-1.jpg"
											alt="image"
											title="product"
										/>
									</a>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Zipper Jacket</a>
									</div>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image8.jpg"
											src="assets/images/product-images/product-image8.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image8-1.jpg"
											src="assets/images/product-images/product-image8-1.jpg"
											alt="image"
											title="product"
										/>
									</a>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Workers Shirt Jacket</a>
									</div>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image9.jpg"
											src="assets/images/product-images/product-image9.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image9-1.jpg"
											src="assets/images/product-images/product-image9-1.jpg"
											alt="image"
											title="product"
										/>
									</a>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Watercolor Sport Jacket in Brown/Blue</a>
									</div>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image10.jpg"
											src="assets/images/product-images/product-image10.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image10-1.jpg"
											src="assets/images/product-images/product-image10-1.jpg"
											alt="image"
											title="product"
										/>
									</a>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Washed Wool Blazer</a>
									</div>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image13.jpg"
											src="assets/images/product-images/product-image13.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image13-1.jpg"
											src="assets/images/product-images/product-image13-1.jpg"
											alt="image"
											title="product"
										/>
									</a>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Ashton Necklace</a>
									</div>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image14.jpg"
											src="assets/images/product-images/product-image14.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image14-1.jpg"
											src="assets/images/product-images/product-image14-1.jpg"
											alt="image"
											title="product"
										/>
									</a>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Ara Ring</a>
									</div>
								</div>
							</div>
							<div className="col-12 item">
								<div className="product-image">
									<a href="#">
										<img
											className="primary "
											data-src="assets/images/product-images/product-image15.jpg"
											src="assets/images/product-images/product-image15.jpg"
											alt="image"
											title="product"
										/>

										<img
											className="hover "
											data-src="assets/images/product-images/product-image15-1.jpg"
											src="assets/images/product-images/product-image15-1.jpg"
											alt="image"
											title="product"
										/>
									</a>
								</div>

								<div className="product-details text-center">
									<div className="product-name">
										<a href="#">Ara Ring</a>
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

export default DetailScreen;
