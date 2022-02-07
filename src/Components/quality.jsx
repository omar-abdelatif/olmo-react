function Quality() {
    return (
        <div className="quality">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="quality-txts">
                            <p>QUICK AND SECURE</p>
                            <h2>Committed to top quality and results</h2>
                            <ul>
                                <li>
                                    Fringilla risus, luctus mauris auctor euismod an iaculis luctus magna purus pretium ligula
                                    purus and quaerat sapien rutrum mauris auctor
                                </li>
                                <li>
                                    Nemo ipsam egestas volute turpis dolores ligula and aliquam quaerat at sodales sapien purus
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="quality-img">
                            <img src={process.env.PUBLIC_URL + '/imgs/seo-01.png'} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Quality;