import React, {Component} from 'react';
import Room from './room';
import fp_img from '../../assets/fp/std_fp.webp';

class Blueprint extends Component {
    constructor(props) {
        super(props);
        this.canvasWidth = props.fp.width;
        this.canvasHeight = props.fp.height;
        this.rooms = props.fp.rooms;


        this.containerStyle = {
            background: `url(${fp_img}) center/cover no-repeat`, // Set the background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: props.fp.width,
            height: props.fp.height,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',    
        };
    }

    render() {
        return (
            <div style={this.containerStyle}>
                <svg width={this.canvasWidth} height={this.canvasHeight}>
                    {this.rooms.map((room, index) => (<Room roomData={room} index={index}/>))}
                </svg>
            </div>
       );
    }
}
export default Blueprint;