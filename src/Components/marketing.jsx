function Marketing() {
    const Data = [
        {
            id: 1,
            icon: 'fas fa-chart-line',
            title: 'Advanced Analytics Review',
            desc: 'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor',
        },
        {
            id: 2,
            icon: 'fas fa-envelope-open-text',
            title: 'Email Marketing Campaigns',
            desc: 'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor',
        },
        {
            id: 3,
            icon: 'far fa-file-video',
            title: 'Video Marketing',
            desc: 'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor',
        },
        {
            id: 4,
            icon: 'fas fa-globe',
            title: 'Search Engine Optimization (SEO)',
            desc: 'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor',
        },
        {
            id: 5,
            icon: 'fas fa-mouse',
            title: 'Pay Per Click (PPC)',
            desc: 'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor',
        },
        {
            id: 6,
            icon: 'fas fa-layer-group',
            title: 'Content Marketing',
            desc: 'Porta semper lacus cursus feugiat primis ultrice ligula risus auctor tempus feugiat impedit undo auctor felis augue mauris aoreet tempor',
        }
    ]
    return (
        <section className="marketing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="market-text">
                            <p>MARKET RESEARCH</p>
                            <h2>Integrated marketing solutions that fuel business growth</h2>
                        </div>
                    </div>
                </div>
                <div className="row boxs wow fadeInUp">
                    {Data.map((item) => (
                        <div className="col-lg-6 col-md-6 col-sm-12" key={item.id}>
                            <div className="box">
                                <div className="icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="text">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Marketing;