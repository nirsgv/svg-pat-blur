import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import VideoElement from '../../components/Video/VideoElement';
import { Helmet } from 'react-helmet';
import {
    playingItem,
    isPlaying,
    defaultSrcWebm,
    defaultSrcMp4,
    playVideo,
    pauseVideo
} from '../../modules/player'

{console.log(this)}

const Item = props => (

<div>
    <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="ITEM"
    >
        <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <h1>פריט</h1>



    <VideoElement />
  </div>
)

const mapStateToProps = state => ({
    webm: state.player.defaultSrcWebm,
    mp4: state.player.defaultSrcMp4,
    isPlaying: state.player.isPlaying
})

const mapDispatchToProps = dispatch => bindActionCreators({
    playVideo,
    pauseVideo
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item)
