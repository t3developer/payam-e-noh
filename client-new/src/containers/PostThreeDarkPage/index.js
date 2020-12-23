import React, {Fragment} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import MostShareWidget from "../../components/MostShareWidget";
import FollowUs from "../../components/FollowUs";
import BannerSection from "../../components/BannerSection";
import PostOnePagination from "../../components/PostOnePagination";

// images
import banner2 from "../../doc/img/bg/sidebar-1.png";
import big2 from '../../doc/img/blog/big2.jpg';
import author2 from '../../doc/img/author/author2.png';
import big1 from '../../doc/img/blog/big1.jpg';
import smail1 from '../../doc/img/blog/smail1.jpg';
import single_post1 from '../../doc/img/blog/single_post1.jpg';
import OurBlogSection from "../../components/OurBlogSection";
import BlogComment from "../../components/BlogComment";

import './index.scss';

const PostThreeDarkPage = (props) => {
    console.log(props.location.state.item);
    const item = props.location.state.item;

    return (
        <Fragment>
            <div className="archives post post1">
                <BreadCrumb className="padding-top-30" title="Archive / post 1"/>
                <span className="space-30"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-8">
                            <div className="shadow6">
                                <div className="padding20 dark_footer_bg">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="page_comments">
                                                <ul className="inline">
                                                    <li className="page_category">{item.category_id.name}</li>
                                                    <li><FontAwesome name="comment"/>0</li>
                                                    <li><FontAwesome name="fire"/>0</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-30"/>
                                    <div className="single_post_heading">
                                        <h1>{item.title}</h1>
                                        <div className="space-10"/>
                                        <p>{item.sub_title}</p>
                                    </div>
                                    <div className="space-20"/>
                                    <div className="row">
                                        <div className="col-lg-6 align-self-center">
                                            <div className="author">
                                                <div className="author_img">
                                                    <div className="author_img_wrap">
                                                        <img src={author2} alt="big2"/>
                                                    </div>
                                                </div>
                                                <Link to="/">{item.user_id.name}</Link>
                                                <ul>
                                                    <li><Link to="/">{item.submitDate}</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 align-self-center">
                                            <div className="author_social inline text-right">
                                                <ul>
                                                    <li><Link to="#"><FontAwesome name="twitter"/></Link></li>
                                                    <li><Link to="#"><FontAwesome name="facebook-f"/></Link></li>
                                                    <li><Link to="#"><FontAwesome name="youtube-play"/></Link></li>
                                                    <li><Link to="#"><FontAwesome name="instagram"/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-20"/>
                                </div>
                                <img src={item.image} class="post-img" alt="thumb"/>

                                <div className="padding20 dark_footer_bg">
                                    <div className="space-40"/>
                                    <p>{item.description}
                                    </p>
                                    <div className="space-40"/>
                                    {/*<div className="row">*/}
                                    {/*    <div className="col-12">*/}
                                    {/*        <div className="qhote quote_type3 padding30 text-center">*/}
                                    {/*            <p>I must explain to you how all this mistake idea denouncing*/}
                                    {/*                pleasure and praising pain was born and I will give you a*/}
                                    {/*                complete account of the system, and expound the actual teachings*/}
                                    {/*                of the great explorer of the truth, the master-builder of human*/}
                                    {/*                happiness. .</p>*/}
                                    {/*            <div className="author">*/}
                                    {/*                <div className="author_img">*/}
                                    {/*                    <div className="author_img_wrap">*/}
                                    {/*                        <img src={author2} alt="author2"/>*/}
                                    {/*                    </div>*/}
                                    {/*                </div>*/}
                                    {/*                <Link to="/">Shuvas Chandra</Link>*/}
                                    {/*                <ul>*/}
                                    {/*                    <li>Founder at Seative Digital</li>*/}
                                    {/*                </ul>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="space-40"/>*/}
                                    {/*<p>The next day I came back to my team and said, This is what I just heard, we*/}
                                    {/*    have to get ready, he said. We knew that it wasn’t going to be long before*/}
                                    {/*    we were going to have to deal with it.*/}
                                    {/*    <br/>*/}
                                    {/*    <br/>Mr. Hogan has also leaned on his wife, Yumi Hogan, a Korean*/}
                                    {/*    immigrant, who was also at the governor’s convention, which included*/}
                                    {/*    a dinner at the Korean ambassador’s home. As the first Korean first*/}
                                    {/*    lady in American history, Ms. Hogan has become something of an icon*/}
                                    {/*    in South Korea. I just grabbed my wife and said, Look, you speak*/}
                                    {/*    Korean. You know the president. You know the first lady. You know*/}
                                    {/*    the ambassador. Let’s talk to them in Korean, and tell them we need*/}
                                    {/*    their help. Companies in South Korea said would tests.</p>*/}
                                    {/*<div className="space-40"/>*/}
                                </div>
                                {/*<img src={big2} alt="big2"/>*/}
                                {/*<div className="padding20 dark_footer_bg">*/}
                                {/*    <div className="space-40"/>*/}
                                {/*    <p>In global terms the US has the most Covid-19 cases - more than 245,000.*/}
                                {/*        And on Thursday the US authorities said more than 1,000 had died in the*/}
                                {/*        past 24 hours - the highest daily toll so far in the world.*/}
                                {/*        <br/>*/}
                                {/*        <br/>Hospitals and morgues in New York are struggling to cope with*/}
                                {/*        the pandemic, and New York Governor Andrew Cuomo has warned that*/}
                                {/*        New York risks running out of ventilators for patients in six*/}
                                {/*        days.</p>*/}
                                {/*    <div className="space-40"/>*/}
                                {/*</div>*/}
                            </div>
                            <div className="space-30"/>
                            {/*<PostOnePagination className="next_prv_single padding20 shadow6 next_prv_single3 dark-2"/>*/}
                        </div>
                        {/*<div className="col-md-6 col-lg-4">*/}
                        {/*    <WidgetTab dark={true}/>*/}
                        {/*    <FollowUs title="Follow Us"/>*/}
                        {/*    <WidgetTrendingNews dark={true}/>*/}
                        {/*    <div className="banner2 mb30">*/}
                        {/*        <Link to="/">*/}
                        {/*            <img src={banner2} alt="thumb"/>*/}
                        {/*        </Link>*/}
                        {/*    </div>*/}
                        {/*    <MostShareWidget dark={true} title="Most Share"/>*/}
                        {/*    <NewsLetter/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            <div className="space-60"/>
            {/*<OurBlogSection dark={true}/>*/}
            {/*<div className="space-60"/>*/}
            {/*<BlogComment dark={true}/>*/}
            {/*<div className="space-60"/>*/}
            {/*<BannerSection className="parimay_bg padding5050"/>*/}
        </Fragment>
    )
};

export default PostThreeDarkPage;
