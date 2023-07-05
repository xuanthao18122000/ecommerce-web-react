import React from "react";
import Logo from "../../assets/images/logo.svg";
import '@/styles/style.css';
const Header = () => {
	return (
		<div className="pageWrapper">
			<div className="top-header">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 col-sm-8 col-md-5 col-lg-4">
							<div className="language-dropdown">
								<span className="language-dd">English</span>
								<ul id="language">
									<li className="">German</li>
									<li className="">French</li>
								</ul>
							</div>
							<p className="phone-no">
								<i className="anm anm-phone-s"></i> +440 0(111) 044 833
							</p>
						</div>
						<div className="col-sm-4 col-md-4 col-lg-4 d-md-block d-lg-block text-center">
							Worldwide Express Shipping
						</div>
						<div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
							<span className="user-menu d-block d-lg-none">
								<i className="anm anm-user-al" aria-hidden="true"></i>
							</span>
							<ul className="customer-links list-inline">
								<li>
									<a href="login.html">Login</a>
								</li>
								<li>
									<a href="register.html">Create Account</a>
								</li>
								<li>
									<a href="wishlist.html">Wishlist</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="header-wrap classicHeader animated d-flex">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="logo col-md-2 col-lg-2 d-none d-lg-block">
							<a href="index.html">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/United_technologies_logo.svg/1024px-United_technologies_logo.svg.png"
									alt="Logo"
									title="Logo"
									style={{ width: "50%" }}
								/>
							</a>
						</div>
						<div className="col-2 col-sm-3 col-md-3 col-lg-8">
							<div className="d-block d-lg-none">
								<button
									type="button"
									className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
								>
									<i className="icon anm anm-times-l"></i>
									<i className="anm anm-bars-r"></i>
								</button>
							</div>
							<nav className="grid__item" id="AccessibleNav">
								<ul id="siteNav" className="site-nav medium center hidearrow">
									<li className="lvl1 parent megamenu">
										<a href="#">
											Home <i className="anm anm-angle-down-l"></i>
										</a>
									</li>
									<li className="lvl1 parent megamenu">
										<a href="#">
											Shop <i className="anm anm-angle-down-l"></i>
										</a>
									</li>
									<li className="lvl1 parent megamenu">
										<a href="#">
											Product <i className="anm anm-angle-down-l"></i>
										</a>
									</li>
									<li className="lvl1 parent dropdown">
										<a href="#">
											Pages <i className="anm anm-angle-down-l"></i>
										</a>
										<ul className="dropdown">
											<li>
												<a href="cart-variant1.html" className="site-nav">
													Cart Page <i className="anm anm-angle-right-l"></i>
												</a>
												<ul className="dropdown">
													<li>
														<a href="cart-variant1.html" className="site-nav">
															Cart Variant1
														</a>
													</li>
													<li>
														<a href="cart-variant2.html" className="site-nav">
															Cart Variant2
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="compare-variant1.html" className="site-nav">
													Compare Product{" "}
													<i className="anm anm-angle-right-l"></i>
												</a>
												<ul className="dropdown">
													<li>
														<a
															href="compare-variant1.html"
															className="site-nav"
														>
															Compare Variant1
														</a>
													</li>
													<li>
														<a
															href="compare-variant2.html"
															className="site-nav"
														>
															Compare Variant2
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="checkout.html" className="site-nav">
													Checkout
												</a>
											</li>
											<li>
												<a href="about-us.html" className="site-nav">
													About Us <span className="lbl nm_label1">New</span>{" "}
												</a>
											</li>
											<li>
												<a href="contact-us.html" className="site-nav">
													Contact Us
												</a>
											</li>
											<li>
												<a href="faqs.html" className="site-nav">
													FAQs
												</a>
											</li>
											<li>
												<a href="lookbook1.html" className="site-nav">
													Lookbook<i className="anm anm-angle-right-l"></i>
												</a>
												<ul>
													<li>
														<a href="lookbook1.html" className="site-nav">
															Style 1
														</a>
													</li>
													<li>
														<a href="lookbook2.html" className="site-nav">
															Style 2
														</a>
													</li>
												</ul>
											</li>
											<li>
												<a href="404.html" className="site-nav">
													404
												</a>
											</li>
											<li>
												<a href="coming-soon.html" className="site-nav">
													Coming soon <span className="lbl nm_label1">New</span>{" "}
												</a>
											</li>
										</ul>
									</li>
									<li className="lvl1 parent dropdown">
										<a href="#">
											Blog <i className="anm anm-angle-down-l"></i>
										</a>
										<ul className="dropdown">
											<li>
												<a href="blog-left-sidebar.html" className="site-nav">
													Left Sidebar
												</a>
											</li>
											<li>
												<a href="blog-right-sidebar.html" className="site-nav">
													Right Sidebar
												</a>
											</li>
											<li>
												<a href="blog-fullwidth.html" className="site-nav">
													Fullwidth
												</a>
											</li>
											<li>
												<a href="blog-grid-view.html" className="site-nav">
													Gridview
												</a>
											</li>
											<li>
												<a href="blog-article.html" className="site-nav">
													Article
												</a>
											</li>
										</ul>
									</li>
									<li className="lvl1">
										<a href="#">
											<b>Buy Now!</b> <i className="anm anm-angle-down-l"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-4 col-sm-3 col-md-3 col-lg-2">
							<div className="site-cart">
								<a href="#;" className="site-header__cart" title="Cart">
									<i className="icon anm anm-bag-l"></i>
									<span
										id="CartCount"
										className="site-header__cart-count"
										data-cart-render="item_count"
									>
										2
									</span>
								</a>
								<div id="header-cart" className="block block-cart">
									<ul className="mini-products-list">
										<li className="item">
											<a className="product-image" href="#">
												<img
													src="assets/images/product-images/cape-dress-1.jpg"
													alt="3/4 Sleeve Kimono Dress"
													title=""
												/>
											</a>
											<div className="product-details">
												<a href="#" className="remove">
													<i className="anm anm-times-l" aria-hidden="true"></i>
												</a>
												<a href="#" className="edit-i remove">
													<i className="anm anm-edit" aria-hidden="true"></i>
												</a>
												<a className="pName" href="cart.html">
													Sleeve Kimono Dress
												</a>
												<div className="variant-cart">Black / XL</div>
												<div className="wrapQtyBtn">
													<div className="qtyField">
														<span className="label">Qty:</span>
														<a className="qtyBtn minus" href="">
															<i
																className="fa anm anm-minus-r"
																aria-hidden="true"
															></i>
														</a>
														<input
															type="text"
															className="product-form__input qty"
														/>
														<a className="qtyBtn plus" href="">
															<i
																className="fa anm anm-plus-r"
																aria-hidden="true"
															></i>
														</a>
													</div>
												</div>
												<div className="priceRow">
													<div className="product-price">
														<span className="money">$59.00</span>
													</div>
												</div>
											</div>
										</li>
										<li className="item">
											<a className="product-image" href="#">
												<img
													src="assets/images/product-images/cape-dress-2.jpg"
													alt="Elastic Waist Dress - Black / Small"
													title=""
												/>
											</a>
											<div className="product-details">
												<a href="#" className="remove">
													<i className="anm anm-times-l" aria-hidden="true"></i>
												</a>
												<a href="#" className="edit-i remove">
													<i className="anm anm-edit" aria-hidden="true"></i>
												</a>
												<a className="pName" href="cart.html">
													Elastic Waist Dress
												</a>
												<div className="variant-cart">Gray / XXL</div>
												<div className="wrapQtyBtn">
													<div className="qtyField">
														<span className="label">Qty:</span>
														<a className="qtyBtn minus" href="">
															<i
																className="fa anm anm-minus-r"
																aria-hidden="true"
															></i>
														</a>
														<input
															type="text"
															className="product-form__input qty"
														/>
														<a className="qtyBtn plus" href="">
															<i
																className="fa anm anm-plus-r"
																aria-hidden="true"
															></i>
														</a>
													</div>
												</div>
												<div className="priceRow">
													<div className="product-price">
														<span className="money">$99.00</span>
													</div>
												</div>
											</div>
										</li>
									</ul>
									<div className="total">
										<div className="total-in">
											<span className="label">Cart Subtotal:</span>
											<span className="product-price">
												<span className="money">$748.00</span>
											</span>
										</div>
										<div className="buttonSet text-center">
											<a
												href="cart.html"
												className="btn btn-secondary btn--small"
											>
												View Cart
											</a>
											<a
												href="checkout.html"
												className="btn btn-secondary btn--small"
											>
												Checkout
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="site-header__search">
								<button type="button" className="search-trigger">
									<i className="icon anm anm-search-l"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
