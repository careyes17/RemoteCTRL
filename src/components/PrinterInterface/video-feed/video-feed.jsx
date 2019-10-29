import React, {useState} from 'react';
import './video-feed.css'

class VideoFeed extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            frame: 'https://picsum.photos/720/480',
        }
    }
    
    componentWillMount() {
        this.props.socket.on('test', (image) => {
            console.log(this.props.socket.id)
            // parse image data
            var newimage = new Image();
            newimage.src = `data:image/png;base64,${image}`
            // display in video stream component
            // console.log(image)
            this.setState({
                frame: newimage.src,
            })
          })
    }

    render() {
        return (
            <img src={this.state.frame} className={`${this.props.gridElement} video`}></img>
        )
    }
}

export default VideoFeed;