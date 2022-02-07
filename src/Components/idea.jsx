function Idea() {
    return (
        <section className="idea">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="idea-content">
                            <div className="slogan">
                                <span>EASIEST TO USE</span>
                            </div>
                            <div className="idea-txts">
                                <h2>One Brilliant Idea For Every Client</h2>
                                <p>
                                    Aliqum mullam blandit tempor sapien gravida at donec ipsum porta justo.
                                    Velna vitae auctor and congue magna impedit luctus dolor volute
                                </p>
                            </div>
                            <button className="btn btn-primary">Pricing & Packages </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="idea-img">
                            <img src={process.env.PUBLIC_URL + '/imgs/seo-06.png'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Idea;