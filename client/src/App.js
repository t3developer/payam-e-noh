/* eslint react/prop-types: 0 */
import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
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

class VideoPlaylistComponent extends Component{

  constructor(props) {
    super(props);

    this.state = {
      jPlayerOptions: {
        id: 'VideoPlaylist',
        verticalVolume: true,
        fullScreen: true
      },
      jPlaylistOptions: {
        hidePlaylist: true,
        playlist: [],
        loop: true
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

    initializeOptions(this.state.jPlayerOptions, this.state.jPlaylistOptions);
  }

  fetchPlaylist = async () => {
    const response = await fetch('/api/v1/active_videos');
    const responsePlaylist = await response.json()
    console.log(responsePlaylist);
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

  render(){
    return (
        <JPlaylist id={this.state.jPlayerOptions.id}>
          <JPlayer className="jp-sleek">
            <div className="jp-media-container">
              <Poster />
              <Video />
            </div>
            <Gui>
              <div className="jp-controls jp-icon-controls">
                <Previous><i className="fa fa-step-backward" /></Previous>
                <Play><i className="fa">{/* Icon set in css */}</i></Play>
                <Next><i className="fa fa-step-forward" /></Next>
                <Repeat>
                  <i className="fa">{/* Icon set in css */}</i>
                  <i className="fa fa-repeat" />
                </Repeat>
                <Shuffle><i className="fa fa-random" /></Shuffle>
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
    )
  }
}

export default VideoPlaylistComponent;
