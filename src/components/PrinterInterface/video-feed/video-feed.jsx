import React, {useState} from 'react';
import './video-feed.css'

class VideoFeed extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            frame: 'https://picsum.photos/720/480',
        }
    }
    
    render() {
        this.props.socket.on('printerSendImage', (imageData) => {
            // parse image data
            // display in video stream component
          })

        const update = (frame) => {
            this.setState({
                frame: frame,
            })
        }

        return (
            <img src={this.state.frame} className={`${this.props.gridElement} video`}></img>
        )
    }
}

export default VideoFeed;