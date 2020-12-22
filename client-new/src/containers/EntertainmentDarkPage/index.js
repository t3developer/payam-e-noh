import React, {Component, Fragment} from 'react';
import BreadCrumb from "../../components/BreadCrumb";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import WidgetTab from "../../components/WidgetTab";
import WidgetTrendingNews from "../../components/WidgetTrendingNews";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import EntertainmentNews from "../../components/EntertainmentNews";
import moment from "moment";
import BusinessNews from "../../components/BusinessNews";

class EntertainmentDarkPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            entertainments: []
        }
    }

    componentWillMount() {
        this.fetchRelatedArticles('Entertainment').then((articles) => {
            console.log('business', articles);
            articles.map((article) => {
                article.submitDate = moment(article.createdAt).format('lll');
                article.imagePath = {
                    uri: article.image,
                };
            });
            this.setState({
                entertainments: articles
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
                <BreadCrumb title="Entertainment"/>
                <div className="archives padding-top-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-8">
                                <div className="row">
                                    <div className="col-12 align-self-center">
                                        <div className="categories_title">
                                            <h5>Category: <Link to="/">Entertainment</Link></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="entertrainment_carousel">
                                    <div className="entertrainment_item">
                                        <div className="row justify-content-center">
                                            <BusinessNews headerHide={true} businessNews={this.state.entertainments}/>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="row">*/}
                                {/*    <div className="col-12">*/}
                                {/*        <div className="cpagination">*/}
                                {/*            <nav aria-label="Page navigation example">*/}
                                {/*                <ul className="pagination">*/}
                                {/*                    <li className="page-item">*/}
                                {/*                        <Link className="page-link" to="/" aria-label="Previous">*/}
                                {/*                                <span aria-hidden="true"><FontAwesome*/}
                                {/*                                    name="caret-left"/></span>*/}
                                {/*                        </Link>*/}
                                {/*                    </li>*/}
                                {/*                    <li className="page-item">*/}
                                {/*                        <Link className="page-link" to="/">1</Link>*/}
                                {/*                    </li>*/}
                                {/*                    <li className="page-item">*/}
                                {/*                        <Link className="page-link" to="/">..</Link>*/}
                                {/*                    </li>*/}
                                {/*                    <li className="page-item">*/}
                                {/*                        <Link className="page-link" to="/">5</Link>*/}
                                {/*                    </li>*/}
                                {/*                    <li className="page-item">*/}
                                {/*                        <Link className="page-link" to="/" aria-label="Next">*/}
                                {/*                                <span aria-hidden="true"><FontAwesome*/}
                                {/*                                    name="caret-right"/></span>*/}
                                {/*                        </Link>*/}
                                {/*                    </li>*/}
                                {/*                </ul>*/}
                                {/*            </nav>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            {/*<div className="col-md-6 col-lg-4">*/}
                            {/*    <WidgetTab dark={true}/>*/}
                            {/*    <WidgetTrendingNews dark={true}/>*/}
                            {/*    <NewsLetter/>*/}
                            {/*    <FollowUs title="Follow Us"/>*/}
                            {/*    <div className="banner2 mb30">*/}
                            {/*        <Link to="/">*/}
                            {/*            <img src={banner2} alt="thumb"/>*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className="space-70"/>
                {/*<BannerSection className="parimay_bg padding5050"/>*/}
            </Fragment>
        );
    }
}

export default EntertainmentDarkPage;
