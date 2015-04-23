'use strict';
var React = require('react');
var {
  containerStyles,
  overlayContainerStyles,
  settingsIconStyles,
  pauseIconStyles,
  timestampStyles,
  timelineStyles,
  subtitleStyles
} = require('../styles');
var {Snackbar, Slider} = require('material-ui');
var srtToVtt = require('srt-to-vtt');
var reactVtt = require('react-vtt');

var Playback = React.createClass({
    render: function () {
        return (
            <div style={containerStyles}>
                <div style={overlayContainerStyles}>
                    <Snackbar ref="snack" message="We found 'Inception' for you! Enjoy the film!" action="dismiss" openOnMount={true} />
                </div>
                <i style={settingsIconStyles} className="fa fa-bars"></i>
                <i style={pauseIconStyles} className="fa fa-pause"></i>
                <Slider name="timeline" defaultValue={0.32} style={timelineStyles} />
                <h3 style={timestampStyles}>00:24:33</h3>
                <h2 style={subtitleStyles}>
                    I need an architect
                    who's as good as I was.
                </h2>
            </div>
        );
    },
    componentDidMount: function() {
        //the following is a hack to make the snackbar fit into the phone 'emulator' for prototyping
        //aka not needed on a real device
        var node = React.findDOMNode(this.refs.snack);
        node.style.position = 'absolute';
        node.style.bottom = 'default';
        node.style.top = '10px';
        node.style.marginLeft = '74px';
    }
});

module.exports = {Playback};