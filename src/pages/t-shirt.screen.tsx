"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import axios from "axios";
import useAxios from "axios-hooks";
import ItemProduct from "@/components/item-product";

type Product = {
	id: number;
	createdAt: string;
	updatedAt: string;
	name: string;
	code: string;
	description: string;
	price: string;
	status: number;
	logs: {
		list: [];
	};
};

interface ProductResponse {
	code: number;
	success: boolean;
	data: DataProduct;
	msg: string;
}

interface DataProduct {
	list: Product[];
	total: number;
	page: number;
	perPage: number;
}

const TShirtScreen = () => {
	const [products, setProducts] = useState<Product[] | null>(null);
	const [page, setPage] = useState<number>(1);
	const [perPage, setPerPage] = useState<number>(10);

	const [{ data, loading, error }] = useAxios<ProductResponse>({
		baseURL: "http://localhost:3002",
		url: `/products?page=${page}&perPage=${perPage}`,
	});

	useEffect(() => {
		if (data) {
			setProducts(data.data.list);
		}
	}, [data]);

	return (
		<div id="page-content" className="mt-5 pt-5">
			{/* {products &&
				products.map((product) => (
					<div key={product.id} className="product-item">
						<h3>{product.name}</h3>
						<p>{product.description}</p>
						<p>Price: {product.price}</p>
					</div>
				))} */}
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
						<div className="closeFilter d-block">
							<i className="icon icon anm anm-times-l" />
						</div>
						<div className="sidebar_tags">
							<div className="sidebar_widget categories filter-widget">
								<div className="widget-title">
									<h2>Categories</h2>
								</div>
								<div className="widget-content">
									<ul className="sidebar_categories">
										<li className="level1 sub-level">
											<a href="#;" className="site-nav">
												Clothing
											</a>
											<ul className="sublinks">
												<li className="level2">
													<a href="#;" className="site-nav">
														Men
													</a>
												</li>
												<li className="level2">
													<a href="#;" className="site-nav">
														Women
													</a>
												</li>
												<li className="level2">
													<a href="#;" className="site-nav">
														Child
													</a>
												</li>
												<li className="level2">
													<a href="#;" className="site-nav">
														View All Clothing
													</a>
												</li>
											</ul>
										</li>
										<li className="level1 sub-level">
											<a href="#;" className="site-nav">
												Jewellery
											</a>
											<ul className="sublinks">
												<li className="level2">
													<a href="#;" className="site-nav">
														Ring
													</a>
												</li>
												<li className="level2">
													<a href="#;" className="site-nav">
														Neckalses
													</a>
												</li>
												<li className="level2">
													<a href="#;" className="site-nav">
														Eaarings
													</a>
												</li>
												<li className="level2">
													<a href="#;" className="site-nav">
														View All Jewellery
													</a>
												</li>
											</ul>
										</li>
										<li className="lvl-1">
											<a href="#;" className="site-nav">
												Shoes
											</a>
										</li>
										<li className="lvl-1">
											<a href="#;" className="site-nav">
												Accessories
											</a>
										</li>
										<li className="lvl-1">
											<a href="#;" className="site-nav">
												Collections
											</a>
										</li>
										<li className="lvl-1">
											<a href="#;" className="site-nav">
												Sale
											</a>
										</li>
										<li className="lvl-1">
											<a href="#;" className="site-nav">
												Page
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="sidebar_widget filterBox filter-widget">
								<div className="widget-title">
									<h2>Price</h2>
								</div>
								<form action="#" method="post" className="price-filter">
									<div
										id="slider-range"
										className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
									>
										<div className="ui-slider-range ui-widget-header ui-corner-all" />
										<span
											className="ui-slider-handle ui-state-default ui-corner-all"
											tabIndex={0}
										/>
										<span
											className="ui-slider-handle ui-state-default ui-corner-all"
											tabIndex={0}
										/>
									</div>
									<div className="row">
										<div className="col-6">
											<p className="no-margin">
												<input id="amount" type="text" />
											</p>
										</div>
										<div className="col-6 text-right margin-25px-top">
											<button className="btn btn-secondary btn--small">
												filter
											</button>
										</div>
									</div>
								</form>
							</div>

							<div className="sidebar_widget filterBox filter-widget size-swacthes">
								<div className="widget-title">
									<h2>Size</h2>
								</div>
								<div className="filter-color swacth-list">
									<ul>
										<li>
											<span className="swacth-btn checked">X</span>
										</li>
										<li>
											<span className="swacth-btn">XL</span>
										</li>
										<li>
											<span className="swacth-btn">XLL</span>
										</li>
										<li>
											<span className="swacth-btn">M</span>
										</li>
										<li>
											<span className="swacth-btn">L</span>
										</li>
										<li>
											<span className="swacth-btn">S</span>
										</li>
										<li>
											<span className="swacth-btn">XXXL</span>
										</li>
										<li>
											<span className="swacth-btn">XXL</span>
										</li>
										<li>
											<span className="swacth-btn">XS</span>
										</li>
									</ul>
								</div>
							</div>

							<div className="sidebar_widget filterBox filter-widget">
								<div className="widget-title">
									<h2>Brands</h2>
								</div>
								<ul>
									<li>
										<input
											type="checkbox"
											defaultValue="allen-vela"
											id="check1"
										/>
										<label htmlFor="check1">
											<span>
												<span />
											</span>
											Allen Vela
										</label>
									</li>
									<li>
										<input type="checkbox" defaultValue="oxymat" id="check3" />
										<label htmlFor="check3">
											<span>
												<span />
											</span>
											Oxymat
										</label>
									</li>
									<li>
										<input type="checkbox" defaultValue="vanelas" id="check4" />
										<label htmlFor="check4">
											<span>
												<span />
											</span>
											Vanelas
										</label>
									</li>
									<li>
										<input type="checkbox" defaultValue="pagini" id="check5" />
										<label htmlFor="check5">
											<span>
												<span />
											</span>
											Pagini
										</label>
									</li>
									<li>
										<input type="checkbox" defaultValue="monark" id="check6" />
										<label htmlFor="check6">
											<span>
												<span />
											</span>
											Monark
										</label>
									</li>
								</ul>
							</div>

							<div className="sidebar_widget">
								<div className="widget-title">
									<h2>Popular Products</h2>
								</div>
								<div className="widget-content">
									<div className="list list-sidebar-products">
										<div className="grid">
											<div className="grid__item">
												<div className="mini-list-item">
													<div className="mini-view_image">
														<a className="grid-view-item__link" href="#">
															<img
																className="grid-view-item__image"
																src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
																alt=""
															/>
														</a>
													</div>
													<div className="details">
														{" "}
														<a className="grid-view-item__title" href="#">
															Cena Skirt
														</a>
														<div className="grid-view-item__meta">
															<span className="product-price__price">
																<span className="money">$173.60</span>
															</span>
														</div>
													</div>
												</div>
											</div>
											<div className="grid__item">
												<div className="mini-list-item">
													<div className="mini-view_image">
														{" "}
														<a className="grid-view-item__link" href="#">
															<img
																className="grid-view-item__image"
																src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
																alt=""
															/>
														</a>{" "}
													</div>
													<div className="details">
														{" "}
														<a className="grid-view-item__title" href="#">
															Block Button Up
														</a>
														<div className="grid-view-item__meta">
															<span className="product-price__price">
																<span className="money">$378.00</span>
															</span>
														</div>
													</div>
												</div>
											</div>
											<div className="grid__item">
												<div className="mini-list-item">
													<div className="mini-view_image">
														{" "}
														<a className="grid-view-item__link" href="#">
															<img
																className="grid-view-item__image"
																src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
																alt=""
															/>
														</a>{" "}
													</div>
													<div className="details">
														{" "}
														<a className="grid-view-item__title" href="#">
															Balda Button Pant
														</a>
														<div className="grid-view-item__meta">
															<span className="product-price__price">
																<span className="money">$278.60</span>
															</span>
														</div>
													</div>
												</div>
											</div>
											<div className="grid__item">
												<div className="mini-list-item">
													<div className="mini-view_image">
														{" "}
														<a className="grid-view-item__link" href="#">
															<img
																className="grid-view-item__image"
																src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
																alt=""
															/>
														</a>{" "}
													</div>
													<div className="details">
														{" "}
														<a className="grid-view-item__title" href="#">
															Border Dress in Black/Silver
														</a>
														<div className="grid-view-item__meta">
															<span className="product-price__price">
																<span className="money">$228.00</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="sidebar_widget static-banner">
								<img src="assets/images/side-banner-2.jpg" alt="" />
							</div>

							<div className="sidebar_widget">
								<div className="widget-title">
									<h2>Information</h2>
								</div>
								<div className="widget-content">
									<p>
										Use this text to share information about your brand with
										your customers. Describe a product, share announcements, or
										welcome customers to your store.
									</p>
								</div>
							</div>

							<div className="sidebar_widget">
								<div className="widget-title">
									<h2>Product Tags</h2>
								</div>
								<div className="widget-content">
									<ul className="product-tags">
										<li>
											<a
												href="#"
												title="Show products matching tag $100 - $400"
											>
												$100 - $400
											</a>
										</li>
										<li>
											<a
												href="#"
												title="Show products matching tag $400 - $600"
											>
												$400 - $600
											</a>
										</li>
										<li>
											<a
												href="#"
												title="Show products matching tag $600 - $800"
											>
												$600 - $800
											</a>
										</li>
										<li>
											<a href="#" title="Show products matching tag Above $800">
												Above $800
											</a>
										</li>
										<li>
											<a href="#" title="Show products matching tag Allen Vela">
												Allen Vela
											</a>
										</li>
										<li>
											<a href="#" title="Show products matching tag Black">
												Black
											</a>
										</li>
										<li>
											<a href="#" title="Show products matching tag Blue">
												Blue
											</a>
										</li>
										<li>
											<a href="#" title="Show products matching tag Cantitate">
												Cantitate
											</a>
										</li>
										<li>
											<a href="#" title="Show products matching tag Famiza">
												Famiza
											</a>
										</li>
										<li>
											<a href="#" title="Show products matching tag Gray">
												Gray
											</a>
										</li>
										<li>
											<a href="#" title="Show products matching tag Green">
												Green
											</a>
										</li>

										<li>
											<a href="#" title="Show products matching tag jean shop">
												jean shop
											</a>
										</li>
										<li>
											<a href="#" title="Show products matching tag L">
												L
											</a>
										</li>
										<li>
											<a href="#" title="Show products matching tag new">
												new
											</a>
										</li>
									</ul>
									<span className="btn btn--small btnview">View all</span>{" "}
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
						<div className="category-description">
							<h3>Category Description</h3>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing.
							</p>
							<p>
								Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45 BC, making it over 2000 years old. Richard McClintock, a
								Latin professor at Hampden-Sydney College in Virginia, looked up
								one of the more obscure Latin words, consectetur, from a Lorem
								Ipsum passage, and going through the cites of the word in
								classical literature, discovered the undoubtable source.
							</p>
						</div>
						<hr />
						<div className="">
							<button type="button" className="btn btn-filter d-block">
								{" "}
								Product Filters
							</button>
							<div className="toolbar">
								<div className="filters-toolbar-wrapper">
									<div className="row">
										<div className="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
											<a
												href="shop-left-sidebar.html"
												title="Grid View"
												className="change-view change-view--active"
											>
												<img src="assets/images/grid.jpg" alt="Grid" />
											</a>
											<a
												href="shop-listview.html"
												title="List View"
												className="change-view"
											>
												<img src="assets/images/list.jpg" alt="List" />
											</a>
										</div>
										<div className="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
											<span className="filters-toolbar__product-count">
												Showing: 22
											</span>
										</div>
										<div className="col-4 col-md-4 col-lg-4 text-right">
											<div className="filters-toolbar__item">
												<label htmlFor="SortBy" className="hidden">
													Sort
												</label>
												<select
													name="SortBy"
													id="SortBy"
													className="filters-toolbar__input filters-toolbar__input--sort"
												>
													<option value="title-ascending">Sort</option>
													<option>Best Selling</option>
													<option>Alphabetically, A-Z</option>
													<option>Alphabetically, Z-A</option>
													<option>Price, low to high</option>
													<option>Price, high to low</option>
													<option>Date, new to old</option>
													<option>Date, old to new</option>
												</select>
												<input
													className="collection-header__default-sort"
													type="hidden"
													defaultValue="manual"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="grid-products grid--view-items">
								<div className="row">
									{products &&
										products.map((product) => (
													<ItemProduct key={product.id} product={product} />
										))}	
								</div>
							</div>
						</div>
						<div className="infinitpaginOuter">
							<div className="infinitpagin">
								<a href="#" className="btn loadMore">
									Load More
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TShirtScreen;
