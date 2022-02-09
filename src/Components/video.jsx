function Video() {
    return (
        <section className="video">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-12">
                        <div className="video__content">
                            <span className="video__slogan mb3">YOUR ROAD TO SUCCESS</span>
                            <h2 className="video__title">Our SEO services will help you to dominate the search engines</h2>
                        </div>
                        <div className="video__img">
                            <img src={process.env.PUBLIC_URL + '/imgs/seo-07.png'} alt="video" />
                            <div className="video__btn">
                                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary" id='VideoLink'>
                                    <i class="fas fa-play-circle"></i>
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/fCsEDcgSidk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video__features">
                            <div className="lists">
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
        </section>
    );
}
export default Video;