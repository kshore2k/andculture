import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SimpleMap from './SimpleMap';

interface MatchParams {
    id: string
};

interface IProps extends RouteComponentProps<MatchParams> {
};

interface IBrewery {
    id: number,
    name: string,
    brewery_type: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    website_url?: string,
    phone: string,
    longitude: string,
    latitude: string
};

interface IState {
    brewery: IBrewery
};

class BreweryDetails extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            brewery: {
                id: 0,
                name: "",
                brewery_type: "",
                street: "",
                city: "",
                state: "",
                postal_code: "",
                website_url: "",
                phone: "",
                longitude: "",
                latitude: ""
            }
        };
    };


    componentDidMount() {
        fetch(`https://api.openbrewerydb.org/breweries/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({
                brewery: data
            }));
    };

    render() {
        const brewery = this.state.brewery;

        if(brewery.id !== 0) {
            return (
                <div>
                    <h1>{brewery.name}</h1>
                    <p>
                        {`${brewery.street} 
                        ${brewery.city}, 
                        ${brewery.state} 
                        ${brewery.postal_code}`}
                    </p>
                    {brewery.website_url !== "" ? (
                        <a 
                            href={brewery.website_url}
                            target="_blank"
                            rel="noopener noreferrer">
                            {brewery.website_url}
                        </a>
                    ) : (
                        <p>No Website Available</p>
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
                        <p>No Map Available</p>
                    )}
                </div>
            );
        } else {
            return <p>...Loading</p>
        }
        
    };
};

export default BreweryDetails;