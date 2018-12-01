import React from "react";
import PropTypes from "prop-types";
import Autosuggest from 'react-autosuggest';

class InputAutoComplete extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            suggestions: []
        };
    };  
    getSuggestionValue = suggestion => {
        return suggestion.CityId
    };
    renderSuggestion = suggestion => (
        <div>
            {suggestion.Name}
        </div>
    );    
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
        this.props.getInputData(newValue);
    };
    onSuggestionsFetchRequested = ({ value }) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let suggVal;
        if(inputLength === 0) {
            suggVal = []
        } else {
            suggVal = this.props.locations.filter(obj => {
                const inputValue = value.trim().toLowerCase();
                const inputLength = inputValue.length;
                const city = obj.Name.toLowerCase().slice(0, inputLength);
                return city === inputValue;
            });
        }
        this.setState({
            suggestions: suggVal
        });
    };
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Escriba alguna ciudad',
            value,
            onChange: this.onChange
        };
        return (
            <div className="form-group my-3">
                <label htmlFor="city">Ciudad</label>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={this.getSuggestionValue}
                    renderSuggestion={this.renderSuggestion}
                    inputProps={inputProps}
                />
                <small id="citySmall" className="form-text">Escriba algunos caracteres y saldrán mas opciones.</small>
            </div>
        );
    }
};
InputAutoComplete.propTypes = {
    value: PropTypes.string,
    suggestions: PropTypes.func
};
export default InputAutoComplete;