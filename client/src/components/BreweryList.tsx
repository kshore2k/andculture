import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import IBrewery from './IBrewery';
import './styles/BreweryList.css';

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

    mapBreweries = () => {
        const mappedBreweries = this.state.breweries.map( ( brewery ) => {
            return (
                <div className="container-brewery" key={brewery._id}>
                    <img src={brewery.image_url} alt="frosty_beer"/>
                    <Link 
                        className="detail-link"
                        to={`${this.props.match.url}/${brewery._id}`}>
                        {brewery.name}
                    </Link>
                    <p>Type: <span>{brewery.brewery_type}</span></p>
                    <p>
                        {`${brewery.street} 
                        ${brewery.city}, 
                        ${brewery.state} 
                        ${brewery.postal_code}`}
                    </p>
                    <a 
                        className="web-link"
                        href={brewery.website_url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {brewery.website_url}
                    </a>
                </div>
            );
        });
        return mappedBreweries;
    };

    render() {
        const breweries = this.mapBreweries();

        return (
            <div id="container-main">
                <h1 id="header">Seattle Breweries</h1>
                <div id="container-breweries">
                    {breweries}
                </div>
            </div>
        );
    };
};

export default BreweryList;