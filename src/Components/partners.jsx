function Partner() {
    const partnerData = [
        {
            id: 1,
            img: 'omlo/imgs/brand-1.png'
        },
        {
            id: 2,
            img: 'omlo/imgs/brand-2.png'
        },
        {
            id: 3,
            img: 'omlo/imgs/brand-3.png'
        },
        {
            id: 4,
            img: 'omlo/imgs/brand-4.png'
        },
        {
            id: 5,
            img: 'omlo/imgs/brand-5.png'
        },
        {
            id: 6,
            img: 'omlo/imgs/brand-6.png'
        },
        {
            id: 7,
            img: 'omlo/imgs/brand-7.png'
        },
        {
            id: 8,
            img: 'omlo/imgs/brand-8.png'
        },
        {
            id: 9,
            img: 'omlo/imgs/brand-9.png'
        },
        {
            id: 10,
            img: 'omlo/imgs/brand-8.png'
        }
    ]
    return (
        <section className="partner">
            <div className="container">
                <div className="row justify-contnet-center">
                    <div className="col-lg-12">
                        <div className="partner-title">
                            <h3>This guys are using OLMO and they are more than happier ever</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {partnerData.map(partner => (
                        <div className="col-lg-4 col-sm-6">
                            <div className="partner-img">
                                <a href="omlo">
                                    <img src={partner.img} alt="partner logo" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Partner;