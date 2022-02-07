import React from 'react';
function ScrollUp() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            document.querySelector('.scrollup').classList.add('show');
        } else {
            document.querySelector('.scrollup').classList.remove('show');
        }
    });
    return (
        <a className="scrollup" href='#top'>
            <i className="fa fa-angle-up"></i>
        </a>
    );
}
export default ScrollUp;