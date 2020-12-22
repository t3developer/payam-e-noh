import React, {useState} from 'react';
import Heading from "../uiStyle/Heading";
import Swiper from 'react-id-swiper';

import fnewsImg2 from '../../doc/img/feature/feature2.jpg';
import fnewsImg3 from '../../doc/img/feature/feature3.jpg';
import fnewsImg4 from '../../doc/img/feature/feature4.jpg';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";

import './index.scss';

const FeatureNews = ({className, data}) => {
    const [swiper, setSwiper] = useState(null);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    const params = {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    };
    return (
        <div className={`feature_carousel_area mb40 ${className ? className : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Heading title="Feature News"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        { data.length !== 0 && (
                            <div className="feature_carousel nav_style1">
                                <Swiper getSwiper={setSwiper} {...params}>
                                    {data.map((item, i) => (
                                        <div key={i} className="single_post post_type6 post_type7">
                                            <div className="post_img gradient1">
                                                <Link to="/"><img src={item.image} alt="thumb"/></Link>
                                            </div>
                                            <div className="single_post_text">
                                                <div className="meta5"><Link to="/">{item.category_id.name}</Link>
                                                    <Link to="/">{item.submitDate}</Link>
                                                </div>
                                                <h4>
                                                    <Link to="/post1">{item.title}</Link>
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </Swiper>
                                <div className="navBtns">
                                    <div onClick={goPrev} className="navBtn prevtBtn"><FontAwesome name="angle-left"/></div>
                                    <div onClick={goNext} className="navBtn nextBtn"><FontAwesome name="angle-right"/></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureNews;
