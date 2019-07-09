import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    url: string;
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
    breweries: IBrewery[]
};

class BreweryList extends React.Component<IProps, IState> {
    state: IState = {
        breweries: []
    };

    componentDidMount() {
        fetch('https://api.openbrewerydb.org/breweries?by_city=seattle')
            .then(res => res.json())
            .then(data => this.setState({
                breweries: data
            }));
    };

    render() {
        const breweries = this.state.breweries.map( ( brewery ) => {
            return (
                <div key={brewery.id}>
                    <Link 
                        to={`${this.props.match.url}/${brewery.id}`}>
                        {brewery.name}
                    </Link>
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
        })

        return (
            <div>
                {breweries}
            </div>
        );
    };
};

export default BreweryList;