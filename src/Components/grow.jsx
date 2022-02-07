import React from 'react';
function Grow() {
    return (
        <React.Fragment>
            <section className="grow">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="grow-upper-txts">
                                <div className="grow-title">
                                    <h2>Ready to Grow Your Business</h2>
                                    <p>
                                        Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus,
                                        blandit and cursus varius and magnis sapien
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="grow-img wow fadeInRight">
                                <img src={process.env.PUBLIC_URL + '/imgs/seo-05.png'} alt="grow-img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="grow-txts wow fadeInLeft">
                                <h4>Right Strategies and Implementations</h4>
                                <p>
                                    Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia
                                    laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas
                                    volute and turpis dolores aliquam quaerat sodales a sapien
                                </p>
                                <div className="down-list">
                                    <h4>Higher Rankings. Relevant Visitors</h4>
                                    <ul className="listaya">
                                        <li>
                                            Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna
                                            purus pretium ligula purus and quaerat
                                        </li>
                                        <li>
                                            Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-last order-md-2">
                            <div className="grow-txts wow fadeInRight m">
                                <div className="down-list">
                                    <h4>Higher Rankings. Relevant Visitors</h4>
                                    <ul className="listaya">
                                        <li>
                                            Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna
                                            purus pretium ligula purus and quaerat
                                        </li>
                                        <li>
                                            Quaerat sodales sapien euismod purus blandit
                                        </li>
                                        <li>
                                            Nemo ipsam egestas volute turpis dolores undo ultrice aliquam quaerat at sodales sapien purus
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="grow-img wow fadeInLeft">
                                <img src={process.env.PUBLIC_URL + '/imgs/seo-02.png'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="splitter" />
        </React.Fragment>
    );
}
export default Grow;