import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import IBrewery from './IBrewery';
import './BreweryList.css';
import brewImage from '../img/hellbent.jpg';

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
                <div className="container-brewery" key={brewery._id}>
                    <img src={brewImage} alt="frosty_beer"/>
                    <Link 
                        id="detail-link"
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
                        href={brewery.website_url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {brewery.website_url}
                    </a>
                </div>
            );
        })

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