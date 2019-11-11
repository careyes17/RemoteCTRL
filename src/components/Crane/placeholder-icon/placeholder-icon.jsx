import React from 'react';
import './placeholder-icon.css'

class PlaceholderIcon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            frame: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8ryhcYSue2LEN0iGFmWaaFsSeO8yk4fmN1IT_5yz3QEzgNpv&s',
        }
    }

    render() {
        return (
            <img src={this.state.frame} className={`${this.props.gridElement} icon`}></img>
        )
    }
}

export default PlaceholderIcon;