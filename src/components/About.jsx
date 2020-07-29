import React, { Fragment } from 'react'


const About = () => {
    return ( 
        <Fragment>
            <section id="about" className="site-section section-about text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <h2>About</h2>
                            <img src="img/lines.svg" className="img-lines" alt="lines" />
                            <p>Hello! I'm Hamid, a full stuck developer, a Python enthusiast, and a guy slighty obsessed for code quality. Also I'm a data analyst. I’m currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch.</p>
                            <a href="#" className="btn btn-fill" target="_blank" download>Download my cv</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="site-section section-skills">
                <div className="container">
                    <div className="text-center">
                        <h3>My Skills</h3>
                        <img src="img/lines.svg" className="img-lines" alt="lines" />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="skill">
                                <h4>Python</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-transitiongoal="100"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <h4>Html/css</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-transitiongoal="75"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="skill">
                                <h4>Javascript</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-transitiongoal="82"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <h4>Redux</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-transitiongoal="66"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="skill">
                                <h4>Reactjs</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-transitiongoal="97"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <h4>Java</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-transitiongoal="45"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default About;