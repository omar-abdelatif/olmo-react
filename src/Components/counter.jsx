import React from 'react';
function Counter() {
    const counter = [
        {
            id: 1,
            count: '65',
            desc: 'Porta justo integer and velna vitae auctor',
            symbol: 'k',
            class: 'counter-count'
        },
        {
            id: 2,
            count: '54',
            desc: 'Porta justo integer and velna vitae auctor',
            symbol: '%',
            class: 'counter-clients'
        },
        {
            id: 3,
            count: '500',
            desc: 'Sagittis congue augue egestas an egestas',
            symbol: '$',
            class: 'counter-price'
        }
    ]
    const projects = setInterval(projectDone, 100);
    const clients = setInterval(happyClients, 100);
    const coffee = setInterval(coffeePrice, 10);
    let count1 = 1;
    let count2 = 2;
    let count3 = 3;
    function projectDone() {
        count1++;
        document.querySelector('.counter-count').innerHTML = count1;
        if (count1 === 65) {
            clearInterval(projects)
        }
    }
    function happyClients() {
        count2++;
        document.querySelector('.counter-clients').innerHTML = count2;
        if (count2 === 54) {
            clearInterval(clients)
        }
    }
    function coffeePrice() {
        count3++;
        document.querySelector('.counter-price').innerHTML = count3;
        if (count3 === 500) {
            clearInterval(coffee)
        }
    }
    return (
        <React.Fragment>
            <section className="counter">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        {counter.map(item => (
                            <div className="col-lg-4" key={item.id}>
                                <div className="counter-item">
                                    <div className="counter-item__count">
                                        <span className={item.class}>{item.count}</span>
                                        <span>{item.symbol}</span>
                                    </div>
                                    <div className="counter-item__desc">
                                        <span>{item.desc}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <hr className="splitter" />
        </React.Fragment>
    );
}
export default Counter;