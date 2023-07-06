import "@/styles/style.css";

export default function DashboardScreen() {
	return (
		<div id="page-content">
			<div className="collection-header mt-5 pt-3">
				<div className="collection-hero">
					<div className="collection-hero__image">
						<img
							className="lazyload"
							data-src="https://totoday-api.mltechsoft.com/media/banner/home/BANNER%20SLIDE%20HOME%203-233ba306-8ee9-4597-9ecd-7e1f62e6e6fc.png"
							src="https://totoday-api.mltechsoft.com/media/banner/home/BANNER%20SLIDE%20HOME%203-233ba306-8ee9-4597-9ecd-7e1f62e6e6fc.png"
							alt="Women"
							title="Women"
						/>
					</div>
				</div>
			</div>

			<div className="section feature-content">
				<div className="container">
					<div className="row">
						<div className="feature-row">
							<div className="col-12 col-sm-12 col-md-6 feature-row__item text-center">
								<img
									className="blur-up lazyload"
									data-src="assets/images/collection/home12-category-bnr1.jpg"
									src="assets/images/collection/home12-category-bnr1.jpg"
									alt="Hot hoodies jackets"
									title="Hot hoodies jackets"
								/>
							</div>
							<div className="col-12 col-sm-12 col-md-6 feature-row__item feature-row__text feature-row__text--left text-left">
								<div className="row-text">
									<h2 className="h2">Hot hoodies jackets</h2>
									<p>Cover up in style with Hot Jackets now only $50</p>
									<a href="#" className="btn">
										SHOP $50 Jackets
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section feature-content">
				<div className="container">
					<div className="row">
						<div className="feature-row">
							<div className="col-12 col-sm-12 col-md-6 feature-row__item feature-row__text feature-row__text--right text-right">
								<div className="row-text">
									<h2 className="h2">Shoes Collection</h2>
									<p>Shoes we can't stop wearing!</p>
									<a href="#" className="btn">
										Shop Now
									</a>
								</div>
							</div>
							<div className="col-12 col-sm-12 col-md-6 feature-row__item text-center">
								<img
									className="blur-up lazyload"
									data-src="assets/images/collection/home12-category-bnr2.jpg"
									src="assets/images/collection/home12-category-bnr2.jpg"
									alt="Shoes Collection"
									title="Shoes Collection"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-12 col-lg-12">
							<div className="section-header text-center">
								<h2 className="h2">Shop these looks</h2>
								<p>Shop from hundreds of collections for a fashionable look.</p>
							</div>
							<div className="productSlider grid-products grid-products-hover-gry">
								<div className="col-12 item">
									<div className="product-image">
										<a
											href="product-layout-1.html"
											className="grid-view-item__link"
										>
											<img
											className="lazyload w-25"
												data-src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												alt="image"
												title="product"
											/>
										</a>
										<form className="variants add" action="#">
											<button className="btn btn-addto-cart" type="button">
												Add To Cart
											</button>
										</form>
										<div className="button-set">
											<a
												href="javascript:void(0)"
												title="Quick View"
												className="quick-view-popup quick-view"
												data-toggle="modal"
												data-target="#content_quickview"
											>
												<i className="icon anm anm-search-plus-r"></i>
											</a>
											<div className="wishlist-btn">
												<a
													className="wishlist add-to-wishlist"
													href="wishlist.html"
												>
													<i className="icon anm anm-heart-l"></i>
												</a>
											</div>
											<div className="compare-btn">
												<a
													className="compare add-to-compare"
													href="compare.html"
													title="Add to Compare"
												>
													<i className="icon anm anm-random-r"></i>
												</a>
											</div>
										</div>
									</div>
									<div className="product-details text-center">
										<div className="product-name">
											<a href="product-layout-1.html">Block Button Up</a>
										</div>
										<div className="product-price">
											<span className="price">$600.00</span>
										</div>
									</div>
								</div>
								<div className="col-12 item">
									<div className="product-image">
										<div className="grid-view-item__link">
										<img
											className="lazyload w-25"
												data-src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												alt="image"
												title="product"
											/>
										</div>
										<form className="variants add" action="#">
											<button className="btn btn-addto-cart" type="button">
												Select Options
											</button>
										</form>
										<div className="button-set">
											<a
												href="javascript:void(0)"
												title="Quick View"
												className="quick-view-popup quick-view"
												data-toggle="modal"
												data-target="#content_quickview"
											>
												<i className="icon anm anm-search-plus-r"></i>
											</a>
											<div className="wishlist-btn">
												<a
													className="wishlist add-to-wishlist"
													href="wishlist.html"
												>
													<i className="icon anm anm-heart-l"></i>
												</a>
											</div>
											<div className="compare-btn">
												<a
													className="compare add-to-compare"
													href="compare.html"
													title="Add to Compare"
												>
													<i className="icon anm anm-random-r"></i>
												</a>
											</div>
										</div>
									</div>
									<div className="product-details text-center">
										<div className="product-name">
											<a href="product-layout-1.html">Cena Skirt</a>
										</div>
										<div className="product-price">
											<span className="price">$748.00</span>
										</div>
									</div>
								</div>
								<div className="col-12 item">
									<div className="product-image">
										<a
											href="product-layout-1.html"
											className="grid-view-item__link"
										>
											<img
											className="lazyload w-25"
												data-src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												alt="image"
												title="product"
											/>
										</a>
										<form className="variants add">
											<button className="btn btn-addto-cart" type="button">
												Add To Cart
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
												<i className="icon anm anm-search-plus-r"></i>
											</a>
											<div className="wishlist-btn">
												<a
													className="wishlist add-to-wishlist"
													href="wishlist.html"
												>
													<i className="icon anm anm-heart-l"></i>
												</a>
											</div>
											<div className="compare-btn">
												<a
													className="compare add-to-compare"
													href="compare.html"
													title="Add to Compare"
												>
													<i className="icon anm anm-random-r"></i>
												</a>
											</div>
										</div>
									</div>

									<div className="product-details text-center">
										<div className="product-name">
											<a href="product-layout-1.html">Balda Button Pant</a>
										</div>
										<div className="product-price">
											<span className="price">$350.00</span>
										</div>
									</div>
								</div>
								<div className="col-12 item">
									<div className="product-image">
										<a
											href="product-layout-1.html"
											className="grid-view-item__link"
										>
											<img
											className="lazyload w-25"
												data-src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												alt="image"
												title="product"
											/>
										</a>

										<form className="variants add" action="#">
											<button className="btn btn-addto-cart" type="button">
												Add To Cart
											</button>
										</form>
										<div className="button-set">
											<a
												href="javascript:void(0)"
												title="Quick View"
												className="quick-view-popup quick-view"
												data-toggle="modal"
												data-target="#content_quickview"
											>
												<i className="icon anm anm-search-plus-r"></i>
											</a>
											<div className="wishlist-btn">
												<a
													className="wishlist add-to-wishlist"
													href="wishlist.html"
												>
													<i className="icon anm anm-heart-l"></i>
												</a>
											</div>
											<div className="compare-btn">
												<a
													className="compare add-to-compare"
													href="compare.html"
													title="Add to Compare"
												>
													<i className="icon anm anm-random-r"></i>
												</a>
											</div>
										</div>
									</div>
									<div className="product-details text-center">
										<div className="product-name">
											<a href="product-layout-1.html">Cape Dress</a>
										</div>
										<div className="product-price">
											<span className="old-price">$900.00</span>
											<span className="price">$788.00</span>
										</div>
									</div>
								</div>
								<div className="col-12 item">
									<div className="product-image">
										<a
											href="product-layout-1.html"
											className="grid-view-item__link"
										>
											<img
											className="lazyload w-25"
												data-src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												alt="image"
												title="product"
											/>
										</a>
										<form className="variants add" action="#">
											<button className="btn btn-addto-cart" type="button">
												Select Options
											</button>
										</form>
										<div className="button-set">
											<a
												href="javascript:void(0)"
												title="Quick View"
												className="quick-view-popup quick-view"
												data-toggle="modal"
												data-target="#content_quickview"
											>
												<i className="icon anm anm-search-plus-r"></i>
											</a>
											<div className="wishlist-btn">
												<a
													className="wishlist add-to-wishlist"
													href="wishlist.html"
												>
													<i className="icon anm anm-heart-l"></i>
												</a>
											</div>
											<div className="compare-btn">
												<a
													className="compare add-to-compare"
													href="compare.html"
													title="Add to Compare"
												>
													<i className="icon anm anm-random-r"></i>
												</a>
											</div>
										</div>
									</div>
									<div className="product-details text-center">
										<div className="product-name">
											<a href="product-layout-1.html">Paper Dress</a>
										</div>
										<div className="product-price">
											<span className="price">$450.00</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section feature-content">
				<div className="container">
					<div className="row">
						<div className="feature-row">
							<div className="col-12 col-sm-12 col-md-6 feature-row__item text-center">
							<img
											className="lazyload w-25"
												data-src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												src="https://bizweb.dktcdn.net/thumb/1024x1024/100/399/392/products/ls.png"
												alt="image"
												title="product"
											/>
							</div>
							<div className="col-12 col-sm-12 col-md-6 feature-row__item feature-row__text feature-row__text--left text-left">
								<div className="row-text">
									<h2 className="h2">Nuke New Arrivals</h2>
									<p>Fresh arrivals are here to take over your closet!</p>
									<a href="#" className="btn">
										Explore Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
