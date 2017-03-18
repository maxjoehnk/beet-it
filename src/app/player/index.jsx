import React from 'react';
import IconButton from 'material-ui/IconButton';

export class Player extends React.Component {

    componentDidMount() {
        this.player.src = `file://${this.props.track.file}`;
        this.player.play();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.track !== nextProps.track) {
            this.player.src = `file://${nextProps.track.file}`;
        }
        if (nextProps.playing) {
            this.player.play();
        }else {
            this.player.pause();
        }
    }

    handlePlayButton = () => {
        if (this.props.onTogglePlay) {
            this.props.onTogglePlay();
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', width: '100%', height: 56, bottom: 0, margin: '0 auto', borderRadius: 2, background: '#999', zIndex: 1, display: 'flex', flexDirection: 'row' }}>
                <audio ref={audio => this.player = audio}/>
                <IconButton iconClassName={`mdi mdi-${this.props.playing ? 'pause' : 'play'}`} onTouchTap={this.handlePlayButton}/>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <span>{this.props.track.data.title}</span>
                    <span>{this.props.track.data.artist}</span>
                </div>
            </div>
        );
    }
}
