import React, { Fragment } from 'react'



const Home = () => {
    return (
        <div>
            <div id="hero" className="hero" >
                <div className="row">

                    <div className="container" >
                        <div className="" style={{
                            'margin-top': '30rem',
                            'position': 'absolute',
                            'top': '35%',
                            'left': '2',
                            'transform': 'translateY(-50%)',
                            '-webkit-transform': 'translateY(-50%)',
                            '-ms-transform': 'translateY(-50%)',
                            '-moz-transform': 'translateY(-50%)',
                            '-o-transform': 'translateY(-50%)',
                            'z-index': '2'
                        }}>
                            <h1>Hamid Goudarzi</h1>
                            <div className="page-scroll">
                                <p className="job-title">Full Stack Developer</p>
                                <a href="#contact" className="btn btn-fill ">Hire me</a>
                                <div className="clearfix visible-xxs"></div>
                                <a href="#portfolio" className="btn btn-border">Explore more</a>
                            </div>
                        </div>

                        <div className="col-md-6 text-right">
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;