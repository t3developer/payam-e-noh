import React, {Component} from 'react';
import {Link} from "react-router-dom";
import WidgetTab from "../WidgetTab";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import FontAwesome from "../uiStyle/FontAwesome";
import './style.scss';
import moment from 'moment';
import JPlayer, {
    BrowserUnsupported,
    BufferBar,
    CurrentTime,
    Download,
    Duration,
    FullScreen,
    Gui,
    Mute,
    Play,
    PlayBar,
    Poster,
    SeekBar,
    Title,
    Video,
    VolumeBar,
} from 'react-jplayer';
import JPlaylist, {
    initializeOptions,
    MediaLink,
    Next,
    Playlist,
    Previous,
    Remove,
    Repeat,
    Shuffle,
    Title as PlaylistTitle,
    TogglePlaylist,
} from 'react-jplaylist';

class PostGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jPlayerOptions: {
                id: 'VideoPlaylist',
                verticalVolume: true,
                fullScreen: false
            },
            jPlaylistOptions: {
                hidePlaylist: true,
                playlist: [],
                loop: true
            },
            articles: {
                related: [],
                latest: []
            }
        }
    }

    componentWillMount() {
        this.fetchPlaylist()
            .then(playlist => {
                console.log('playlist', playlist);
                this.setState({
                    jPlaylistOptions: {
                        ...this.state.jPlaylistOptions,
                        playlist: playlist
                    }
                });

                initializeOptions(this.state.jPlayerOptions, this.state.jPlaylistOptions);
            });

        this.fetchRelatedArticles()
            .then(articles => {
                articles.map((article) => {
                    article.submitDate = moment(article.createdAt).format('lll');
                    article.imagePath = {
                        uri: article.image,
                    };
                });
                this.setState({
                    articles: {
                        ...this.state.articles,
                        related: articles
                    }
                });

                console.log('related', this.state.articles.related);
            });

        this.fetchLatestArticles()
            .then(articles => {
                articles.map((article) => {
                    article.submitDate = moment(article.createdAt).format('lll');
                    article.imagePath = {
                        uri: article.image,
                    };
                });
                this.setState({
                    articles: {
                        ...this.state.articles,
                        latest: articles
                    }
                });

                console.log('latest', this.state.articles.latest);
            });

        initializeOptions(this.state.jPlayerOptions, this.state.jPlaylistOptions);
    }

    fetchPlaylist = async () => {
        const now = new Date().toString();
        const response = await fetch(`/api/v1/active_videos?now=${encodeURIComponent(now)}`);
        const responsePlaylist = await response.json()
        let playlist = [];

        if (responsePlaylist.length) {
            responsePlaylist.forEach((item, index) => {
                playlist.push({
                    id: index,
                    sources: {
                        m4v: item.path,
                    }
                });
            })
        }

        return playlist;
    }

    fetchRelatedArticles = async () => {
        const now = new Date().toString();
        const response = await fetch(`/api/v1/active_articles?now=${encodeURIComponent(now)}`);
        return await response.json();
    }

    fetchLatestArticles = async () => {
        const response = await fetch(`/api/v1/latest_articles`);
        return await response.json();
    }

    render() {
        const {className} = this.props;

        return (
            <div className={`post_gallary_area mb40 ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-xl-8">
                                    <JPlaylist id={this.state.jPlayerOptions.id}>
                                            <JPlayer className="jp-sleek">
                                                <div className="jp-media-container">
                                                    <Poster />
                                                    <Video />
                                                </div>
                                                <Gui>
                                                    <div className="jp-controls jp-icon-controls">
                                                        {/*<Previous><i className="fa fa-step-backward" /></Previous>*/}
                                                        <Play><i className="fa">{/* Icon set in css */}</i></Play>
                                                        {/*<Next><i className="fa fa-step-forward" /></Next>*/}
                                                        {/*<Repeat>*/}
                                                        {/*  <i className="fa">/!* Icon set in css *!/</i>*/}
                                                        {/*  <i className="fa fa-repeat" />*/}
                                                        {/*</Repeat>*/}
                                                        {/*<Shuffle><i className="fa fa-random" /></Shuffle>*/}
                                                        <div className="jp-progress">
                                                            <SeekBar>
                                                                <BufferBar />
                                                                <PlayBar />
                                                                <CurrentTime />
                                                                <Duration />
                                                            </SeekBar>
                                                        </div>
                                                        <div className="jp-volume-container">
                                                            <Mute>
                                                                <i className="fa">{/* Icon set in css */}</i>
                                                            </Mute>
                                                            <div className="jp-volume-slider">
                                                                <div className="jp-volume-bar-container">
                                                                    <VolumeBar />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*<div className="jp-playlist-container">*/}
                                                        {/*  <Playlist>*/}
                                                        {/*    <Remove />*/}
                                                        {/*    <MediaLink>*/}
                                                        {/*      <PlaylistTitle />*/}
                                                        {/*    </MediaLink>*/}
                                                        {/*  </Playlist>*/}
                                                        {/*  <TogglePlaylist><i className="fa fa-ellipsis-h" /></TogglePlaylist>*/}
                                                        {/*</div>*/}
                                                        <FullScreen><i className="fa fa-expand" /></FullScreen>
                                                        <Download><i className="fa fa-download" /></Download>
                                                        <div className="jp-title-container">
                                                            <Title />
                                                        </div>
                                                    </div>
                                                    <BrowserUnsupported />
                                                </Gui>
                                            </JPlayer>
                                        </JPlaylist>
                                </div>
                                <div className="col-xl-4">
                                    <WidgetTab dark={true} data={this.state.articles}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostGallery;
