import React from 'react';
function AnalyticsReview() {
    return (
        <section className="analytics">
            <div className="container">
                <div className="row top">
                    <div className="col-lg-6">
                        <div className="top-img wow fadeInRight">
                            <img src={process.env.PUBLIC_URL + '/imgs/seo-04.png'} alt="Analytics" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="top-text wow fadeInLeft">
                            <p>QUICK AND SECURE</p>
                            <h2>First page rankings. First name basis</h2>
                            <p>
                                Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia
                                laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
                            </p>
                            <p>
                                Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia
                                laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row bottom wow fadeInLeft">
                    <div className="col-lg-6 order-last order-md-2">
                        <div className="bottom-text wow fadeInRight">
                            <h4>Advanced Analytics Review</h4>
                            <p>
                                Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and
                                cubilia laoreet augue and luctus magna dolor luctus at egestas sapien vitae
                                nemo egestas volute and turpis dolores aliquam quaerat sodales a sapien
                            </p>
                            <div className="smll-txt">
                                <h4>Improve Your Website Ranking Fast</h4>
                                <ul className="simple-list">
                                    <li>
                                        Fringilla risus, luctus mauris auctor euismod an iaculis luctus
                                        magna purus pretium ligula purus and quaerat
                                    </li>
                                    <li>
                                        Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-first order-md-2">
                        <div className="bottom-img">
                            <img src={process.env.PUBLIC_URL + '/imgs/seo-03.png'} alt="Analytics" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default AnalyticsReview;