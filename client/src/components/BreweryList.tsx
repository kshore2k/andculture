import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import IBrewery from './IBrewery';

interface MatchParams {
    url: string;
};

interface IProps extends RouteComponentProps<MatchParams> {
};

interface IState {
    breweries: IBrewery[]
};

class BreweryList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            breweries: []
        };
    };
    

    componentDidMount() {
        fetch('/api/breweries')
            .then(res => res.json())
            .then(data => this.setState({
                breweries: data
            }));
    };

    render() {
        const breweries = this.state.breweries.map( ( brewery ) => {
            return (
                <div key={brewery._id}>
                    <Link 
                        to={`${this.props.match.url}/${brewery._id}`}>
                        {brewery.name}
                    </Link>
                    <p>Brewery type: {brewery.brewery_type}</p>
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