function Detail () {
    return (
        <>
            <main id="main" className="main-site">
                <div className="container">
                    <div className="wrap-breadcrumb">
                        <ul>
                            <li className="item-link"><a href="#" className="link">home</a></li>
                            <li className="item-link"><span>detail</span></li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 main-content-area">
                            <div className="wrap-product-detail">
                                <div className="detail-media">
                                    <div className="product-gallery">
                                        <ul className="slides">
                                            <li data-thumb="assets/images/products/digital_18.jpg">
                                                <img src="assets/images/products/digital_18.jpg" alt="product thumbnail" />
                                            </li>
                                            <li data-thumb="assets/images/products/digital_17.jpg">
                                                <img src="assets/images/products/digital_17.jpg" alt="product thumbnail" />
                                            </li>
                                            <li data-thumb="assets/images/products/digital_15.jpg">
                                                <img src="assets/images/products/digital_15.jpg" alt="product thumbnail" />
                                            </li>
                                            <li data-thumb="assets/images/products/digital_02.jpg">
                                                <img src="assets/images/products/digital_02.jpg" alt="product thumbnail" />
                                            </li>
                                            <li data-thumb="assets/images/products/digital_08.jpg">
                                                <img src="assets/images/products/digital_08.jpg" alt="product thumbnail" />
                                            </li>
                                            <li data-thumb="assets/images/products/digital_10.jpg">
                                                <img src="assets/images/products/digital_10.jpg" alt="product thumbnail" />
                                            </li>
                                            <li data-thumb="assets/images/products/digital_12.jpg">
                                                <img src="assets/images/products/digital_12.jpg" alt="product thumbnail" />
                                            </li>
                                            <li data-thumb="assets/images/products/digital_14.jpg">
                                                <img src="assets/images/products/digital_14.jpg" alt="product thumbnail" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="detail-info">
                                    <div className="product-rating">
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <a href="#" className="count-review">(05 review)</a>
                                    </div>
                                    <h2 className="product-name">Radiant-360 R6 Wireless Omnidirectional Speaker [White]</h2>
                                    <div className="short-desc">
                                        <ul>
                                            <li>7,9-inch LED-backlit, 130Gb</li>
                                            <li>Dual-core A7 with quad-core graphics</li>
                                            <li>FaceTime HD Camera 7.0 MP Photos</li>
                                        </ul>
                                    </div>
                                    <div className="wrap-social">
                                        <a className="link-socail" href="#"><img src="assets/images/social-list.png" alt="" /></a>
                                    </div>
                                    <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                    <div className="stock-info in-stock">
                                        <p className="availability">Availability: <b>In Stock</b></p>
                                    </div>
                                    <div className="quantity">
                                        <span>Quantity:</span>
                                        <div className="quantity-input">
                                            <input type="text" name="product-quatity" defaultValue={1} data-max={120} pattern="[0-9]*" />
                                            <a className="btn btn-reduce" href="#" />
                                            <a className="btn btn-increase" href="#" />
                                        </div>
                                    </div>
                                    <div className="wrap-butons">
                                        <a href="#" className="btn add-to-cart">Add to Cart</a>
                                        <div className="wrap-btn">
                                            <a href="#" className="btn btn-compare">Add Compare</a>
                                            <a href="#" className="btn btn-wishlist">Add Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="advance-info">
                                    <div className="tab-control normal">
                                        <a href="#description" className="tab-control-item active">description</a>
                                        <a href="#add_infomation" className="tab-control-item">Addtional Infomation</a>
                                        <a href="#review" className="tab-control-item">Reviews</a>
                                    </div>
                                    <div className="tab-contents">
                                        <div className="tab-content-item active" id="description">
                                            <p>Lorem ipsum dolor sit amet, an munere tibique consequat mel, congue albucius no qui, a t everti meliore erroribus sea. ro cum. Sea ne accusata voluptatibus. Ne cum falli dolor voluptua, duo ei sonet choro facilisis, labores officiis torquatos cum ei.</p>
                                            <p>Cum altera mandamus in, mea verear disputationi et. Vel regione discere ut, legere expetenda ut eos. In nam nibh invenire similique. Atqui mollis ea his, ius graecis accommodare te. No eam tota nostrum eque. Est cu nibh clita. Sed an nominavi, et stituto, duo id rebum lucilius. Te eam iisque deseruisse, ipsum euismod his at. Eu putent habemus voluptua sit, sit cu rationibus scripserit, modus taria . </p>
                                            <p>experian soleat maluisset per. Has eu idque similique, et blandit scriptorem tatibus mea. Vis quaeque ocurreret ea.cu bus  scripserit, modus voluptaria ex per.</p>
                                        </div>
                                        <div className="tab-content-item " id="add_infomation">
                                            <table className="shop_attributes">
                                                <tbody>
                                                <tr>
                                                    <th>Weight</th><td className="product_weight">1 kg</td>
                                                </tr>
                                                <tr>
                                                    <th>Dimensions</th><td className="product_dimensions">12 x 15 x 23 cm</td>
                                                </tr>
                                                <tr>
                                                    <th>Color</th><td><p>Black, Blue, Grey, Violet, Yellow</p></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="tab-content-item " id="review">
                                            <div className="wrap-review-form">
                                                <div id="comments">
                                                    <h2 className="woocommerce-Reviews-title">01 review for <span>Radiant-360 R6 Chainsaw Omnidirectional [Orage]</span></h2>
                                                    <ol className="commentlist">
                                                        <li className="comment byuser comment-author-admin bypostauthor even thread-even depth-1" id="li-comment-20">
                                                            <div id="comment-20" className="comment_container">
                                                                <img alt="" src="assets/images/author-avata.jpg" height={80} width={80} />
                                                                <div className="comment-text">
                                                                    <div className="star-rating">
                                                                        <span className="width-80-percent">Rated <strong className="rating">5</strong> out of 5</span>
                                                                    </div>
                                                                    <p className="meta">
                                                                        <strong className="woocommerce-review__author">admin</strong>
                                                                        <span className="woocommerce-review__dash">–</span>
                                                                        <time className="woocommerce-review__published-date" dateTime="2008-02-14 20:00">Tue, Aug 15,  2017</time>
                                                                    </p>
                                                                    <div className="description">
                                                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>{/* #comments */}
                                                <div id="review_form_wrapper">
                                                    <div id="review_form">
                                                        <div id="respond" className="comment-respond">
                                                            <form action="#" method="post" id="commentform" className="comment-form" noValidate>
                                                                <p className="comment-notes">
                                                                    <span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span>
                                                                </p>
                                                                <div className="comment-form-rating">
                                                                    <span>Your rating</span>
                                                                    <p className="stars">
                                                                        <label htmlFor="rated-1" />
                                                                        <input type="radio" id="rated-1" name="rating" defaultValue={1} />
                                                                        <label htmlFor="rated-2" />
                                                                        <input type="radio" id="rated-2" name="rating" defaultValue={2} />
                                                                        <label htmlFor="rated-3" />
                                                                        <input type="radio" id="rated-3" name="rating" defaultValue={3} />
                                                                        <label htmlFor="rated-4" />
                                                                        <input type="radio" id="rated-4" name="rating" defaultValue={4} />
                                                                        <label htmlFor="rated-5" />
                                                                        <input type="radio" id="rated-5" name="rating" defaultValue={5} defaultChecked="checked" />
                                                                    </p>
                                                                </div>
                                                                <p className="comment-form-author">
                                                                    <label htmlFor="author">Name <span className="required">*</span></label>
                                                                    <input id="author" name="author" type="text" defaultValue />
                                                                </p>
                                                                <p className="comment-form-email">
                                                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                                                    <input id="email" name="email" type="email" defaultValue />
                                                                </p>
                                                                <p className="comment-form-comment">
                                                                    <label htmlFor="comment">Your review <span className="required">*</span>
                                                                    </label>
                                                                    <textarea id="comment" name="comment" cols={45} rows={8} defaultValue={""} />
                                                                </p>
                                                                <p className="form-submit">
                                                                    <input name="submit" type="submit" id="submit" className="submit" defaultValue="Submit" />
                                                                </p>
                                                            </form>
                                                        </div>{/* .comment-respond*/}
                                                    </div>{/* #review_form */}
                                                </div>{/* #review_form_wrapper */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/*end main products area*/}
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 sitebar">
                            <div className="widget widget-our-services ">
                                <div className="widget-content">
                                    <ul className="our-services">
                                        <li className="service">
                                            <a className="link-to-service" href="#">
                                                <i className="fa fa-truck" aria-hidden="true" />
                                                <div className="right-content">
                                                    <b className="title">Free Shipping</b>
                                                    <span className="subtitle">On Oder Over $99</span>
                                                    <p className="desc">Lorem Ipsum is simply dummy text of the printing...</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="service">
                                            <a className="link-to-service" href="#">
                                                <i className="fa fa-gift" aria-hidden="true" />
                                                <div className="right-content">
                                                    <b className="title">Special Offer</b>
                                                    <span className="subtitle">Get a gift!</span>
                                                    <p className="desc">Lorem Ipsum is simply dummy text of the printing...</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="service">
                                            <a className="link-to-service" href="#">
                                                <i className="fa fa-reply" aria-hidden="true" />
                                                <div className="right-content">
                                                    <b className="title">Order Return</b>
                                                    <span className="subtitle">Return within 7 days</span>
                                                    <p className="desc">Lorem Ipsum is simply dummy text of the printing...</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>{/* Categories widget*/}
                            <div className="widget mercado-widget widget-product">
                                <h2 className="widget-title">Popular Products</h2>
                                <div className="widget-content">
                                    <ul className="products">
                                        <li className="product-item">
                                            <div className="product product-widget-style">
                                                <div className="thumbnnail">
                                                    <a href="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
                                                        <figure><img src="assets/images/products/digital_01.jpg" alt="" /></figure>
                                                    </a>
                                                </div>
                                                <div className="product-info">
                                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></a>
                                                    <div className="wrap-price"><span className="product-price">$168.00</span></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="product-item">
                                            <div className="product product-widget-style">
                                                <div className="thumbnnail">
                                                    <a href="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
                                                        <figure><img src="assets/images/products/digital_17.jpg" alt="" /></figure>
                                                    </a>
                                                </div>
                                                <div className="product-info">
                                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></a>
                                                    <div className="wrap-price"><span className="product-price">$168.00</span></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="product-item">
                                            <div className="product product-widget-style">
                                                <div className="thumbnnail">
                                                    <a href="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
                                                        <figure><img src="assets/images/products/digital_18.jpg" alt="" /></figure>
                                                    </a>
                                                </div>
                                                <div className="product-info">
                                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></a>
                                                    <div className="wrap-price"><span className="product-price">$168.00</span></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="product-item">
                                            <div className="product product-widget-style">
                                                <div className="thumbnnail">
                                                    <a href="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
                                                        <figure><img src="assets/images/products/digital_20.jpg" alt="" /></figure>
                                                    </a>
                                                </div>
                                                <div className="product-info">
                                                    <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></a>
                                                    <div className="wrap-price"><span className="product-price">$168.00</span></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>{/*end sitebar*/}
                        <div className="single-advance-box col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="wrap-show-advance-info-box style-1 box-in-site">
                                <h3 className="title-box">Related Products</h3>
                                <div className="wrap-products">
                                    <div className="products slide-carousel owl-carousel style-nav-1 equal-container" data-items={5} data-loop="false" data-nav="true" data-dots="false" data-responsive="{&quot;0&quot;:{&quot;items&quot;:&quot;1&quot;},&quot;480&quot;:{&quot;items&quot;:&quot;2&quot;},&quot;768&quot;:{&quot;items&quot;:&quot;3&quot;},&quot;992&quot;:{&quot;items&quot;:&quot;3&quot;},&quot;1200&quot;:{&quot;items&quot;:&quot;5&quot;}}">
                                        <div className="product product-style-2 equal-elem ">
                                            <div className="product-thumnail">
                                                <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                    <figure><img src="assets/images/products/digital_04.jpg" width={214} height={214} alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                                </a>
                                                <div className="group-flash">
                                                    <span className="flash-item new-label">new</span>
                                                </div>
                                                <div className="wrap-btn">
                                                    <a href="#" className="function-link">quick view</a>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                                <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            </div>
                                        </div>
                                        <div className="product product-style-2 equal-elem ">
                                            <div className="product-thumnail">
                                                <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                    <figure><img src="assets/images/products/digital_17.jpg" width={214} height={214} alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                                </a>
                                                <div className="group-flash">
                                                    <span className="flash-item sale-label">sale</span>
                                                </div>
                                                <div className="wrap-btn">
                                                    <a href="#" className="function-link">quick view</a>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                                <div className="wrap-price"><ins><p className="product-price">$168.00</p></ins> <del><p className="product-price">$250.00</p></del></div>
                                            </div>
                                        </div>
                                        <div className="product product-style-2 equal-elem ">
                                            <div className="product-thumnail">
                                                <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                    <figure><img src="assets/images/products/digital_15.jpg" width={214} height={214} alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                                </a>
                                                <div className="group-flash">
                                                    <span className="flash-item new-label">new</span>
                                                    <span className="flash-item sale-label">sale</span>
                                                </div>
                                                <div className="wrap-btn">
                                                    <a href="#" className="function-link">quick view</a>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                                <div className="wrap-price"><ins><p className="product-price">$168.00</p></ins> <del><p className="product-price">$250.00</p></del></div>
                                            </div>
                                        </div>
                                        <div className="product product-style-2 equal-elem ">
                                            <div className="product-thumnail">
                                                <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                    <figure><img src="assets/images/products/digital_01.jpg" width={214} height={214} alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                                </a>
                                                <div className="group-flash">
                                                    <span className="flash-item bestseller-label">Bestseller</span>
                                                </div>
                                                <div className="wrap-btn">
                                                    <a href="#" className="function-link">quick view</a>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                                <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            </div>
                                        </div>
                                        <div className="product product-style-2 equal-elem ">
                                            <div className="product-thumnail">
                                                <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                    <figure><img src="assets/images/products/digital_21.jpg" width={214} height={214} alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                                </a>
                                                <div className="wrap-btn">
                                                    <a href="#" className="function-link">quick view</a>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                                <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            </div>
                                        </div>
                                        <div className="product product-style-2 equal-elem ">
                                            <div className="product-thumnail">
                                                <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                    <figure><img src="assets/images/products/digital_03.jpg" width={214} height={214} alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                                </a>
                                                <div className="group-flash">
                                                    <span className="flash-item sale-label">sale</span>
                                                </div>
                                                <div className="wrap-btn">
                                                    <a href="#" className="function-link">quick view</a>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                                <div className="wrap-price"><ins><p className="product-price">$168.00</p></ins> <del><p className="product-price">$250.00</p></del></div>
                                            </div>
                                        </div>
                                        <div className="product product-style-2 equal-elem ">
                                            <div className="product-thumnail">
                                                <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                    <figure><img src="assets/images/products/digital_04.jpg" width={214} height={214} alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                                </a>
                                                <div className="group-flash">
                                                    <span className="flash-item new-label">new</span>
                                                </div>
                                                <div className="wrap-btn">
                                                    <a href="#" className="function-link">quick view</a>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                                <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            </div>
                                        </div>
                                        <div className="product product-style-2 equal-elem ">
                                            <div className="product-thumnail">
                                                <a href="detail.html" title="T-Shirt Raw Hem Organic Boro Constrast Denim">
                                                    <figure><img src="assets/images/products/digital_05.jpg" width={214} height={214} alt="T-Shirt Raw Hem Organic Boro Constrast Denim" /></figure>
                                                </a>
                                                <div className="group-flash">
                                                    <span className="flash-item bestseller-label">Bestseller</span>
                                                </div>
                                                <div className="wrap-btn">
                                                    <a href="#" className="function-link">quick view</a>
                                                </div>
                                            </div>
                                            <div className="product-info">
                                                <a href="#" className="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker [White]</span></a>
                                                <div className="wrap-price"><span className="product-price">$250.00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*End wrap-products*/}
                            </div>
                        </div>
                    </div>{/*end row*/}
                </div>{/*end container*/}
            </main>
        </>
    )
}


export default Detail