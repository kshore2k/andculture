import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import IBrewery from './IBrewery';
import SimpleMap from './SimpleMap';
import './styles/BreweryDetails.css';

interface MatchParams {
    id: string
};

interface IProps extends RouteComponentProps<MatchParams> {
};

interface IState {
    brewery: IBrewery
};

class BreweryDetails extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            brewery: {
                _id: 0,
                name: "",
                brewery_type: "",
                street: "",
                city: "",
                state: "",
                postal_code: "",
                website_url: "",
                image_url: "",
                phone: "",
                longitude: "",
                latitude: ""
            }
        };
    };


    componentDidMount() {
        fetch(`/api/breweries/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({
                brewery: data
            }));
    };

    render() {
        const brewery = this.state.brewery;

        if(brewery._id !== 0) {
            return (
                <div id="container-details">
                    <h1>{brewery.name}</h1>
                    <p id="address">
                        {`${brewery.street} 
                        ${brewery.city}, 
                        ${brewery.state} 
                        ${brewery.postal_code}`}
                    </p>
                    {brewery.website_url !== "" ? (
                        <span>Click to visit -> 
                            <a 
                                className="site-link"
                                href={brewery.website_url}
                                target="_blank"
                                rel="noopener noreferrer">
                                {brewery.website_url}
                            </a>
                        </span>
                    ) : (
                        <p className="null-msg">No Website Available</p>
                    )}
                    {brewery.latitude !== null && brewery.longitude !== null ? (
                        <SimpleMap 
                            center={{ 
                                lat: parseFloat(brewery.latitude), 
                                lng: parseFloat(brewery.longitude) 
                            }}
                            brewery={{ 
                                name: brewery.name,
                                street: brewery.street,
                                phone: brewery.phone
                            }}
                        />
                    ) : (
                        <p className="null-msg">No Map Available</p>
                    )}
                </div>
            );
        } else {
            return <p>...Loading</p>
        }  
    };
};

export default BreweryDetails;