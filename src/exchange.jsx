import { hot } from "react-hot-loader";
import React from 'react';

class ExchangeApp extends React.Component {
    
    constructor(props) {
        super(props);
        this.currencies = ["AUD", "CAD", "CHF", "CNY", "INR", "USD", "EUR", "GBP", "JPY", "NZD", "ILS", "RUB"];
        this.state = {
            base: 'ILS',
            other: 'USD',
            value: 0,
            converted: 0
        }
    }

    makeSelection = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    changeValue = (event) => {
        this.setState({
            value: event.target.value
        }, this.recalculate);
    }

    recalculate = () => {
        const value = parseFloat(this.state.value);
        if(isNaN(value)) {
            return;
        }
    }

    render() {
        return (
            <div>
                <div>
                    <select onChange={this.makeSelection} name="base" value={this.state.base}>{this.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                    </select>
                    <input value={this.state.value} onChange={this.changeValue} />
                </div>

                <div>
                    <select onChange={this.makeSelection} name="other" value={this.state.other}>{this.currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
                    </select>
                    <input disabled={true} value={this.state.converted} />
                </div>
            </div>
        );
    }
};

export default hot(module)(ExchangeApp);