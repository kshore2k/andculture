import React from 'react';
import bottle from '../img/bottle.png';
import './styles/MapMarker.css';

interface IProps {
    lat: number,
    lng: number,
    brewery: {
        name: string,
        street: string,
        phone: string
    }
}

interface IState {
    mouseOver: boolean
}

class MapMarker extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            mouseOver: false
        };
    };

    onHover = () => {
        this.setState(prevState => ({
            mouseOver: !prevState.mouseOver
        }));
    };

    render() {
        return (
            <div>
                <img 
                    id="marker-img"
                    src={bottle} 
                    alt="bottle"
                    onMouseEnter={this.onHover}
                    onMouseLeave={this.onHover}
                />
                { this.state.mouseOver ? (
                    <div id="detail-popup">
                        <h3>{this.props.brewery.name}</h3>
                        <p>{this.props.brewery.street}</p>
                        <p>Phone: {this.props.brewery.phone}</p>
                    </div>
                ) : null }
            </div>
        );
    };
};

export default MapMarker;