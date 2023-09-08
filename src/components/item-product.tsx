"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import axios from "axios";
import useAxios from "axios-hooks";

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
interface ItemProductProps {
	product: Product;
}

const ItemProduct: React.FC<ItemProductProps> = ({ product }) => {
	const addToCart = async () => {
		const cartsJson = localStorage.getItem("cart");
		let carts;

		if (cartsJson !== null) {
			carts = JSON.parse(cartsJson);
		} else {
			carts = [];
		}

		let isProductExist = false;
		for (let item of carts) {
			if (item.id == product.id) {
				isProductExist = true;
				item.quantity += 1;
			}
		}
		
		if (!isProductExist) {
			//@ts-ignore
			product["quantity"] = 1;
			carts.push(product);
		}

		localStorage.setItem("cart", JSON.stringify(carts));
	};

	return (
		<div className="col-6 col-sm-6 col-md-4 col-lg-3 item">
			<div className="product-image">
				<a href="#">
					<img
						className="primary"
						data-src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
						src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
						alt="image"
						title="product"
					/>

					<img
						className="hover"
						data-src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
						src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
						alt="image"
						title="product"
					/>

					<div className="product-labels rectangular">
						<span className="lbl on-sale">-16%</span>{" "}
						<span className="lbl pr-label1">new</span>
					</div>
				</a>

				<div className="saleTime desktop" data-countdown="2022/03/01" />

				<form className="variants add" action="#">
					<button
						onClick={addToCart}
						className="btn btn-addto-cart"
						type="button"
					>
						Add to Cart
					</button>
				</form>
				<div className="button-set">
					<a
						href=""
						title="Quick View"
						className="quick-view-popup quick-view"
						data-toggle="modal"
						data-target="#content_quickview"
					>
						<i className="icon anm anm-search-plus-r" />
					</a>
					<div className="wishlist-btn">
						<a
							className="wishlist add-to-wishlist"
							href="#"
							title="Add to Wishlist"
						>
							<i className="icon anm anm-heart-l" />
						</a>
					</div>
					<div className="compare-btn">
						<a
							className="compare add-to-compare"
							href="compare.html"
							title="Add to Compare"
						>
							<i className="icon anm anm-random-r" />
						</a>
					</div>
				</div>
			</div>

			<div className="product-details text-center">
				<div className="product-name">
					<a href="#">{product.name}</a>
				</div>

				<div className="product-price">
					<span className="old-price">$500.00</span>
					<span className="price">${product.price}</span>
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
							src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
							alt="image"
						/>
					</li>
					<li className="swatch medium rounded">
						<img
							src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
							alt="image"
						/>
					</li>
					<li className="swatch medium rounded">
						<img
							src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
							alt="image"
						/>
					</li>
					<li className="swatch medium rounded">
						<img
							src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
							alt="image"
						/>
					</li>
					<li className="swatch medium rounded">
						<img
							src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
							alt="image"
						/>
					</li>
					<li className="swatch medium rounded">
						<img
							src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
							alt="image"
						/>
					</li>
				</ul>
			</div>

			<div className="timermobile">
				<div className="saleTime desktop" data-countdown="2022/03/01" />
			</div>
		</div>
	);
};

export default ItemProduct;
