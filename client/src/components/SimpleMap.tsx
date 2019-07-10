import React from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import MapMarker from './MapMarker';

interface IProps {
    center: Coords,
    zoom: number,
    brewery: {
        name: string,
        street: string,
        phone: string
    }
};

interface IState {
    center: Coords,
    zoom: number
};

class SimpleMap extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            center: {
                lat: 47.60,
                lng: 122.33
            },
            zoom: 15
        };
    };

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };

    componentDidMount() {
        if(this.props.center) {
            this.setState({
                center: {
                    lat: this.props.center.lat,
                    lng: this.props.center.lng
                }
            });
        };
    };
  
    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'API KEY HERE' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    center={this.state.center}
                    zoom={this.state.zoom}>

                    <MapMarker 
                        lat={this.state.center.lat} 
                        lng={this.state.center.lng} 
                        brewery={this.props.brewery}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}
  
export default SimpleMap;