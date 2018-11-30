import React from "react";
import Autosuggest from 'react-autosuggest';

class InputAutoComplete extends React.Component {
    constructor() {
        super();
    
        // Autosuggest is a controlled component.
        // This means that you need to provide an input value
        // and an onChange handler that updates this value (see below).
        // Suggestions also need to be provided to the Autosuggest,
        // and they are initially empty because the Autosuggest is closed.
        this.state = {
            value: '',
            suggestions: []
        };
    };
    
    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    getSuggestionValue = suggestion => {
        return suggestion.CityId
    };
    
    // Use your imagination to render suggestions.
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
    
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
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
    
    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Escriba alguna ciudad',
            value,
            onChange: this.onChange
        };

        // Finally, render it!
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
}
export default InputAutoComplete;