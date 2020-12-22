import React, {Component, Fragment} from 'react';
import PostCarousel from "../../components/PostCarousel";
import PostGallery from "../../components/PostGallery";
import FeatureNews from "../../components/FeatureNews";
import TrendingNews from "../../components/TrendingNews";
import FollowUs from "../../components/FollowUs";
import MostView from "../../components/MostView";
import MixCarousel from "../../components/MixCarousel";
import VideoPost from "../../components/VideoPost";
import EntertainmentNews from "../../components/EntertainmentNews";
import {Link} from "react-router-dom";
import SportsNews from "../../components/SportsNews";
import BusinessNews from "../../components/BusinessNews";
import MostShareWidget from "../../components/MostShareWidget";
import UpcomingMatches from "../../components/UpcomingMatches";
import NewsLetter from "../../components/NewsLetter";
import CategoriesWidget from "../../components/CategoriesWidget";
import moment from "moment";

class HomeDarkPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            features: [],
            trendings: []
        }
    }

    componentWillMount() {
        this.fetchRelatedArticles('Features').then((articles) => {
            console.log('features', articles);
            articles.map((article) => {
                article.submitDate = moment(article.createdAt).format('lll');
                article.imagePath = {
                    uri: article.image,
                };
            });
            this.setState({
                features: articles
            });
        });

        this.fetchRelatedArticles('Trending').then((articles) => {
            console.log('Trending', articles);
            articles.map((article) => {
                article.submitDate = moment(article.createdAt).format('lll');
                article.imagePath = {
                    uri: article.image,
                };
            });
            this.setState({
                trendings: articles
            });
        });
    }

    fetchRelatedArticles = async (category) => {
        const response = await fetch(`/api/v1/category_articles?category=${JSON.stringify(category)}`);
        return await response.json();
    }

    render() {
        return (
            <Fragment>
                {/*<PostCarousel className="primay_bg dark-v"/>*/}
                <PostGallery className="primay_bg dark-v"/>
                <FeatureNews className="dark-v" data={this.state.features}/>
                {/*<div className="dark-v">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-lg-8">*/}
                {/*                <TrendingNews dark={true}/>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-12 col-lg-4">*/}
                {/*                <FollowUs title="Follow Us"/>*/}
                {/*                <MostView dark={true}/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<MixCarousel dark={true} className="half_dark_bg1"/>*/}
                <VideoPost dark={true} data={this.state.trendings} className="pt30 dark-v half_dark_bg60 mb30"/>
                {/*<div className="entertrainments dark-v">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-lg-8">*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-12">*/}
                {/*                        <div className="heading">*/}
                {/*                            <h2 className="widget-title">Entertrainment News</h2>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                /!*CAROUSEL START*!/*/}
                {/*                <div className="entertrainment_carousel mb30">*/}
                {/*                    <div className="entertrainment_item">*/}
                {/*                        <div className="row justify-content-center">*/}
                {/*                            <EntertainmentNews entertainments={entertainments}/>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <SportsNews dark={true}/>*/}
                {/*                <div className="banner_area mt50 mb60 xs-mt60">*/}
                {/*                    <Link to="/">*/}
                {/*                        <img src={banner1} alt="banner1"/>*/}
                {/*                    </Link>*/}
                {/*                </div>*/}
                {/*                <BusinessNews businessNews={businessNews}/>*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-4">*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-lg-12">*/}
                {/*                        <MostShareWidget dark={true}/>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-lg-12">*/}
                {/*                        <UpcomingMatches dark={true}/>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-lg-12">*/}
                {/*                        <NewsLetter/>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-lg-12">*/}
                {/*                        <CategoriesWidget/>*/}
                {/*                    </div>*/}
                {/*                    <div className="col-lg-12">*/}
                {/*                        <div className="banner2 mb30">*/}
                {/*                            <Link to="/">*/}
                {/*                                <img src={banner2} alt="thumb"/>*/}
                {/*                            </Link>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="space-70"/>
            </Fragment>
        );
    }
}

export default HomeDarkPage;
