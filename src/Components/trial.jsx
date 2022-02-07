import { Link } from "react-router-dom";
function Trial() {
    return (
        <div className="trial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="trial-content">
                            <h3>Try OLMO free for 14 days. Start your trial now and pick a plan later</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="trial-btn text-center">
                            <Link className='btn btn-primary' to=''>Get Started Now</Link>
                            <Link to=''>Read The FAQs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Trial;