function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-texts">
                            <div className="hero-title">
                                <h1>Get more sales with SEO, PPC, and Email Marketing</h1>
                            </div>
                            <div className="hero-form">
                                <form action="" method="post">
                                    <div className="inputs">
                                        <input type="text" className='form-control' placeholder='Enter Your Name*' />
                                        <input type="email" className='form-control' placeholder='Enter Your Email*' />
                                        <button type='submit' className="btn btn-primary">Get Started Now</button>
                                    </div>
                                </form>
                                <div className="hero-footer">
                                    <div className="hero-footer-text">
                                        <span>Free 30 days trial</span>
                                        <span> | </span>
                                        <span>Exclusive Support</span>
                                        <span> | </span>
                                        <span>No Fees</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-img wow fadeInLeft">
                            <img src={process.env.PUBLIC_URL + '/imgs/hero-18-img.png'} alt="hero img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;