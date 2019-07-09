import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

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
    website_url?: string
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
                website_url: ""
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
                    <a 
                        href={brewery.website_url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {brewery.website_url}
                    </a>
                </div>
            );
        } else {
            return <p>...Loading</p>
        }
        
    };
};

export default BreweryDetails;