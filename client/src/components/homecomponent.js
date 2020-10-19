/* eslint react/prop-types: 0 */
import React, {Component} from 'react';
import './homecomponent.css';

const col={
    width: "50%",
    align: "center"
}


class HomeComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentWillMount() {

    }

    render(){
        const { history } = this.props;

        return (
            <div>
                <header className="s-header">

                    <div className="header-logo d-inline">
                        <a className="site-logo d-inline" href="index.html">
                            <img src="images/logo.png" alt="Homepage"/>
                        </a>

                        <a className="nav-item d-inline " style={col} href="/index.html">
                            <h2 className="d-inline ml-5">News</h2>
                        </a>

                        <a className="nav-item d-inline" href="index.html">
                            <h2 className="d-inline ml-3">Sports</h2>
                        </a>

                        <a className="nav-item d-inline ml-3" href="index.html">
                            <h2 className="d-inline">Entertaintment</h2>
                        </a>
                        <a className="nav-item d-inline" href="index.html">
                            <h2 className="d-inline  ml-3">Categories</h2>
                        </a>

                    </div>


                    <nav className="header-nav">

                        <a href="#0" className="header-nav__close" title="close"><span>Close</span></a>

                        <div className="header-nav__content">
                            <h3>Transcend Studio</h3>

                            <ul className="header-nav__list">
                                <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a>
                                </li>
                                <li><a className="smoothscroll" href="#about" title="about">About</a></li>
                                <li><a className="smoothscroll" href="#services" title="services">Services</a></li>
                                <li><a className="smoothscroll" href="#works" title="works">Works</a></li>
                                <li><a className="smoothscroll" href="#contact" title="contact">Contact</a></li>
                            </ul>

                            <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a
                                href='#0'>voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit
                                veritatis neque reprehenderit.</p>

                            <ul className="header-nav__social">
                                <li>
                                    <a href="#0"><i className="fab fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fab fa-behance"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fab fa-dribbble"></i></a>
                                </li>
                            </ul>

                        </div>

                    </nav>


                    {/* <span class="header-menu-icon"></span> */}
                    <div className="active-cyan-4 mb-4 d-inline col-sm-3 col-md-3 col-lg-3 ml-5 float-right">
                        <input className="form-control d-inline ml-auto " type="text" placeholder="Search"
                               aria-label="Search"/>
                    </div>


                </header>


                <section id="home" className="s-home target-section" data-parallax="scroll"
                         data-image-src="images/hero-bg.jpg">

                    <div className="shadow-overlay"></div>

                    <div className="home-content">

                        <div className="row home-content__main">
                            <h1>
                                Hello friends, Welcome <br/>
                                to Digital TV Network
                            </h1>

                            <p>
                                We let you<br/>
                                feature your content.
                            </p>

                            <button className="home-content-getstarted" onClick={() => history.push("/player")}>Get Started</button>
                        </div>

                    </div>

                    <ul className="home-sidelinks">
                        <li><a className="smoothscroll" href="#about">About<span>who we are</span></a></li>
                        <li><a className="smoothscroll" href="#services">Services<span>what we do</span></a></li>
                        <li><a className="smoothscroll" href="#contact">Contact<span>get in touch</span></a></li>
                    </ul>

                    <ul className="home-social">
                        <li className="home-social-title">Follow Us</li>
                        <li><a href="#0">
                            <i className="fab fa-facebook"></i>
                            <span className="home-social-text">Facebook</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="fab fa-twitter"></i>
                            <span className="home-social-text">Twitter</span>
                        </a></li>
                        <li><a href="#0">
                            <i className="fab fa-linkedin"></i>
                            <span className="home-social-text">LinkedIn</span>
                        </a></li>
                    </ul>

                    <a href="#about" className="home-scroll smoothscroll">
                        <span className="home-scroll__text">Scroll Down</span>
                        <span className="home-scroll__icon"></span>
                    </a>

                </section>


                <section id='about' className="s-about">

                    <div className="row section-header" data-aos="fade-up">
                        <div className="col-full">
                            <h3 className="subhead">Who We Are</h3>
                            <h1 className="display-1">Digital Tv Network is a theme based television.</h1>
                        </div>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-full">
                            <p className="lead">
                                Journalism/media is a wide growing industry all over the world. Payam-e-Nou is digital
                                TV and a journalism website and a smartphone application which is supporting journalists
                                to feature their content.
                            </p>
                        </div>
                    </div>

                    <div className="row">

                        <div className="about-process process block-1-2 block-tab-full">

                            <div className="process__vline-left"></div>
                            <div className="process__vline-right"></div>

                            <div className="col-block process__col" data-item="1" data-aos="fade-up">
                                <div className="process__text">
                                    <h4>Want to get registered ?</h4>

                                    <p>
                                        Go to the top of page and click on "register" and download the app Payam e Nou
                                        from the provided link there and get yourself register through our application
                                        on playstore.
                                    </p>
                                </div>
                            </div>
                            <div className="col-block process__col" data-item="2" data-aos="fade-up">
                                <div className="process__text">
                                    <h4>Digital TV</h4>

                                    <p>
                                        The streaming sever will run twenty four hours. As our system is theme based, so
                                        programs from different categories will be streamed daily. You can check the
                                        time slot of your favourite category on the top of the page in "Categories"
                                        section.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

                <div className="embed-responsive embed-responsive-16by9 ml-5" style={col}>

                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                            allowFullScreen="False"></iframe>
                </div>

                <section id='services' className="s-services light-gray">


                    <div className="row section-header" data-aos="fade-up">
                        <div className="col-full">
                            <h3 className="subhead">What We Do</h3>
                            <h1 className="display-1">We have created this platfrom not only for news but other content
                                as well.</h1>
                        </div>
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-full">
                            <p className="lead">
                                Through app ypu will be able to register yourself as citizen journalists where you will
                                have options to upload your content on the server which will be displayed on our
                                website.
                            </p>
                        </div>
                    </div>

                    <div className="row services-list block-1-3 block-m-1-2 block-tab-full">

                        <div className="col-block service-item " data-aos="fade-up">
                            <div className="service-icon service-icon--brand-identity">
                                <i className="icon-tv"></i>
                            </div>
                            <div className="service-text">
                                <h3 className="h4">Upload</h3>
                                <p>You can upload your content in the form of photo, video, audio and texts.
                                </p>
                            </div>
                        </div>


                    </div>

                </section>


                <section id='works' className="s-works">

                    <div className="row section-header" data-aos="fade-up">
                        <div className="col-full">
                            <h3 className="subhead">Featured Works</h3>
                            <h1 className="display-1">These are latest news of the day.</h1>
                        </div>
                    </div>

                    <div className="row masonry-wrap">
                        <div className="masonry">

                            <div className="masonry__brick" data-aos="fade-up">
                                <div className="item-folio">

                                    <div className="item-folio__thumb">
                                        <a href="images/portfolio/gallery/123.jpg" className="thumb-link" title="Lamp"
                                           data-size="1050x700">
                                            <img src="images/portfolio/123.jpg"
                                                 srcSet="images/portfolio/123.jpg 1x, images/portfolio/123@2x.jpg 2x"
                                                 alt=""/>
                                        </a>
                                    </div>

                                    <div className="item-folio__text">
                                        <h3 className="item-folio__title">
                                            Update
                                        </h3>
                                        <p className="item-folio__cat">
                                            Ghustakh e Rasool
                                        </p>
                                    </div>

                                    <a href="https://www.behance.net/" className="item-folio__project-link"
                                       title="Project link">
                                        Project Link
                                    </a>

                                    <div className="item-folio__caption">
                                        <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
                                            quo.Unde dolorem corrupti neque nisi.</p>
                                    </div>

                                </div>
                            </div>

                            <div className="masonry__brick" data-aos="fade-up">
                                <div className="item-folio">

                                    <div className="item-folio__thumb">
                                        <a href="images/portfolio/gallery/image2.jpg" className="thumb-link" title="PM"
                                           data-size="1050x700">
                                            <img src="images/portfolio/image2.jpg"
                                                 srcSet="images/portfolio/image2.jpg 1x,images/portfolio/PM Imran Khan@2x.jpg 2x"
                                                 alt=""/>
                                        </a>
                                    </div>

                                    <div className="item-folio__text">
                                        <h3 className="item-folio__title">
                                            PM
                                        </h3>
                                        <p className="item-folio__cat">
                                            Imran Khan
                                        </p>
                                    </div>

                                    <a href="https://www.behance.net/" className="item-folio__project-link"
                                       title="Project link">
                                        Project Link
                                    </a>

                                    <span className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                </span>

                                </div>
                            </div>

                            <div className="masonry__brick" data-aos="fade-up">
                                <div className="item-folio">

                                    <div className="item-folio__thumb">
                                        <a href="images/portfolio/gallery/image3.png" className="thumb-link"
                                           title="Transgender" data-size="1050x700">
                                            <img src="images/portfolio/image3.png"
                                                 srcSet="images/portfolio/image3.png 1x, images/portfolio/image3@2x.jpg 2x"
                                                 alt=""/>
                                        </a>
                                    </div>

                                    <div className="item-folio__text">
                                        <h3 className="item-folio__title">
                                            Transgender
                                        </h3>
                                        <p className="item-folio__cat">
                                            First anchor
                                        </p>
                                    </div>

                                    <a href="https://www.behance.net/" className="item-folio__project-link"
                                       title="Project link">
                                        Project Link
                                    </a>

                                    <span className="item-folio__caption">
                    <p>Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi.</p>
                </span>

                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="testimonials-wrap" data-aos="fade-up">

                        <div className="row">
                            <div className="col-full testimonials-header">
                                <h2 className="h1">Feedback</h2>
                            </div>
                        </div>

                        <div className="row testimonials">

                            <div className="col-full testimonials__slider">

                                <div className="testimonials__slide">
                                    <img src="images/avatars/download.jpg" alt="Author image"
                                         className="testimonials__avatar"/>
                                    <p>XYZ.</p>
                                    <div className="testimonials__author">
                                        Javed Ali

                                    </div>
                                </div>

                                <div className="testimonials__slide">
                                    <img src="images/avatars/download.jpg" alt="Author image"
                                         className="testimonials__avatar"/>
                                    <p>ABC</p>
                                    <div className="testimonials__author">
                                        Adnan

                                    </div>
                                </div>

                                <div className="testimonials__slide">
                                    <img src="images/avatars/download.jpg" alt="Author image"
                                         className="testimonials__avatar"/>
                                    <p>LMN</p>
                                    <div className="testimonials__author">
                                        Humayun

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                <section id="contact" className="s-contact">

                    <div className="row section-header" data-aos="fade-up">
                        <div className="col-full">

                            <h1 className="display-1 display-1--light"> Let's turn your idea into something
                                productive.</h1>
                        </div>
                    </div>


                    <div className="row">

                        <div className="col-five tab-full contact-secondary" data-aos="fade-up">
                            <h3 className="subhead subhead--light">Follow Us</h3>

                            <ul className="contact-social">
                                <li>
                                    <a href="#0"><i className="fab fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fab fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fab fa-behance"></i></a>
                                </li>
                                <li>
                                    <a href="#0"><i className="fab fa-dribbble"></i></a>
                                </li>
                            </ul>


                        </div>

                    </div>


                    <div className="cl-go-top">
                        <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon-arrow-up"
                                                                                       aria-hidden="true"></i></a>
                    </div>

                </section>

                <div aria-hidden="true" className="pswp" role="dialog" tabIndex="-1">

                    <div className="pswp__bg"></div>
                    <div className="pswp__scroll-wrap">

                        <div className="pswp__container">
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                        </div>

                        <div className="pswp__ui pswp__ui--hidden">
                            <div className="pswp__top-bar">
                                <div className="pswp__counter"></div>
                                <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                                <button className="pswp__button pswp__button--share" title=
                                    "Share"></button>
                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                                <button className="pswp__button pswp__button--zoom" title=
                                    "Zoom in/out"></button>
                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                <div className="pswp__share-tooltip"></div>
                            </div>
                            <button className="pswp__button pswp__button--arrow--left"
                                    title="Previous (arrow left)"></button>
                            <button className="pswp__button pswp__button--arrow--right" title=
                                "Next (arrow right)"></button>
                            <div className="pswp__caption">
                                <div className="pswp__caption__center"></div>
                            </div>
                        </div>

                    </div>

                </div>


                <div id="preloader">
                    <div id="loader">
                    </div>
                </div>

            </div>
        )
    }
}

export default HomeComponent;
