import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet';
import {
    defaultSrcWebm
} from '../../modules/player'

const About = props => (
  <div>
      <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="ABOUT"
      >
          <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <h1>אודות</h1>
    <p>{props.webm}</p>
  </div>
)

const mapStateToProps = state => ({
    count: state.counter.count,
    webm: state.player.defaultSrcWebm,
    fullState: state
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)
