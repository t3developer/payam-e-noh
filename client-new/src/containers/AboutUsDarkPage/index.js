import React, {Fragment, useState} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import EntertainmentNews from "../../components/EntertainmentNews";
import {Fade, Nav, NavItem, TabContent, TabPane} from "reactstrap";
import MostShareWidget from "../../components/MostShareWidget";
import BannerSection from "../../components/BannerSection";
import classnames from 'classnames';

// images
import banner2 from "../../doc/img/bg/sidebar-1.png";
import enter1 from '../../doc/img/entertrainment/enter1.jpg';
import enter2 from '../../doc/img/entertrainment/enter2.jpg';
import enter3 from '../../doc/img/entertrainment/enter3.jpg';
import enter4 from '../../doc/img/entertrainment/enter4.jpg';
import author1 from '../../doc/img/author/author1.png';
import calendar from '../../doc/img/icon/calendar.png';

const AboutUsDarkPage = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    return (
        <Fragment>
            <BreadCrumb className="white" title="Archive">
                <Fragment>
                    <div className="space-50"/>
                    <div className="row">
                        <div className="col-12">
                            <div className="author_about">
                                <div className="author_img">
                                    <div className="author_wrap">
                                        <img src={author1} alt="author1"/>
                                    </div>
                                </div>
                                <div className="author_content"><Link to="/">Payam e Nou</Link>
                                    <ul className="inline">
                                        <li>News Writer</li>
                                        <li>Since: Dec 23, 2020</li>
                                    </ul>
                                </div>
                                <p className="lead">Journalism/media is a wide growing industry all over the world. Payam-e-Nou is digital TV and a journalism website and a smartphone application which is supporting journalists to feature their content.</p>
                                <br/>
                                <h3 className="subhead">What We Do</h3>
                                <p className="lead">We have created this platfrom not only for news but other content as well.</p>
                                <br/>
                                <h3 className="subhead">What Are We</h3>
                                <p className="lead">
                                    Through app you will be able to register yourself as citizen journalists where you will have options to upload your content on the server which will be displayed on our website.
                                </p>
                                <br/>
                                <h3>Digital TV</h3>
                                <p className="lead">
                                    The digital tv will run twenty four hours. As our system is theme based, so programs from different categories will be streamed daily. You can check the time slot of your favourite category on the top of the page in "Categories" section.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-50"/>
                </Fragment>
            </BreadCrumb>
            {/*<div className="archives padding-top-30">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-6 col-lg-8">*/}
            {/*                <div className="row">*/}
            {/*                    <div className="col-10 align-self-center">*/}
            {/*                        <div className="about_post_list">*/}
            {/*                            <Nav tabs>*/}
            {/*                                <NavItem>*/}
            {/*                                    <div*/}
            {/*                                        className={classnames({active: activeTab === '1'})}*/}
            {/*                                        onClick={() => {*/}
            {/*                                            toggle('1');*/}
            {/*                                        }}*/}
            {/*                                    >*/}
            {/*                                        Latest news*/}
            {/*                                    </div>*/}
            {/*                                </NavItem>*/}
            {/*                                <NavItem>*/}
            {/*                                    <div*/}
            {/*                                        className={classnames({active: activeTab === '2'})}*/}
            {/*                                        onClick={() => {*/}
            {/*                                            toggle('2');*/}
            {/*                                        }}*/}
            {/*                                    >*/}
            {/*                                        Popular news*/}
            {/*                                    </div>*/}
            {/*                                </NavItem>*/}
            {/*                            </Nav>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="col-2 text-right align-self-center">*/}
            {/*                        <div className="calender mb20">*/}
            {/*                            <img src={calendar} alt="calendar"/>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="about_posts_tab">*/}
            {/*                    <TabContent activeTab={activeTab}>*/}
            {/*                        <TabPane tabId="1">*/}
            {/*                            <Fade in={activeTab === '1'}>*/}
            {/*                                <div className="row justify-content-center">*/}
            {/*                                    <EntertainmentNews headerHide={true} entertainments={entertainments}/>*/}
            {/*                                </div>*/}
            {/*                            </Fade>*/}
            {/*                        </TabPane>*/}
            {/*                        <TabPane tabId="2">*/}
            {/*                            <Fade in={activeTab === '2'}>*/}
            {/*                                <div className="row justify-content-center">*/}
            {/*                                    <EntertainmentNews headerHide={true} entertainments={entertainments}/>*/}
            {/*                                </div>*/}
            {/*                            </Fade>*/}
            {/*                        </TabPane>*/}
            {/*                    </TabContent>*/}
            {/*                </div>*/}
            {/*                <div className="row">*/}
            {/*                    <div className="col-12">*/}
            {/*                        <div className="cpagination">*/}
            {/*                            <nav aria-label="Page navigation example">*/}
            {/*                                <ul className="pagination">*/}
            {/*                                    <li className="page-item">*/}
            {/*                                        <Link className="page-link" to="/" aria-label="Previous">*/}
            {/*                                                    <span aria-hidden="true"><FontAwesome*/}
            {/*                                                        name="caret-left"/></span>*/}
            {/*                                        </Link>*/}
            {/*                                    </li>*/}
            {/*                                    <li className="page-item">*/}
            {/*                                        <Link className="page-link" to="/">1</Link>*/}
            {/*                                    </li>*/}
            {/*                                    <li className="page-item">*/}
            {/*                                        <Link className="page-link" to="/">..</Link>*/}
            {/*                                    </li>*/}
            {/*                                    <li className="page-item">*/}
            {/*                                        <Link className="page-link" to="/">5</Link>*/}
            {/*                                    </li>*/}
            {/*                                    <li className="page-item">*/}
            {/*                                        <Link className="page-link" to="/" aria-label="Next">*/}
            {/*                                                    <span aria-hidden="true"><FontAwesome*/}
            {/*                                                        name="caret-right"/></span>*/}
            {/*                                        </Link>*/}
            {/*                                    </li>*/}
            {/*                                </ul>*/}
            {/*                            </nav>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-6 col-lg-4">*/}
            {/*                <WidgetTab dark={true}/>*/}
            {/*                <WidgetTrendingNews dark={true}/>*/}
            {/*                <div className="banner2 mb30">*/}
            {/*                    <Link to="/">*/}
            {/*                        <img src={banner2} alt="thumb"/>*/}
            {/*                    </Link>*/}
            {/*                </div>*/}
            {/*                <MostShareWidget dark={true} title="Most Share"/>*/}
            {/*                <NewsLetter/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="space-30"/>
            <BannerSection className="parimay_bg padding5050"/>
            <div className="space-50"/>
        </Fragment>
    )
};

export default AboutUsDarkPage;
