import React from 'react';
import bottle from '../img/bottle.png';

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
                    style={{ height: '50px', width: 'auto' }} 
                    src={bottle} 
                    alt="bottle"
                    onMouseEnter={this.onHover}
                    onMouseLeave={this.onHover}
                />
                { this.state.mouseOver ? (
                    <div style={{ height: '75px', width: '200px', backgroundColor: 'white' }}>
                        <h3>{this.props.brewery.name}</h3>
                        <p>{this.props.brewery.street}</p>
                        <p>Phone: {this.props.brewery.phone}</p>
                    </div>
                ) : null }
            </div>
        )

    };
};

export default MapMarker;