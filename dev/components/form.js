import React from "react";
import PropTypes from "prop-types";
import InputAutoComplete from "./inputautocomplete";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: this.props.locations,
            country: 'México',
            degrees: 'celsius',
            cityId: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAutoComplete = this.handleAutoComplete.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({
          [target.name]: target.value
        });
    };

    handleAutoComplete(value) {
        this.setState({
            cityId: value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
        var data = {
            country: this.state.country,
            degrees: this.state.degrees,
            cityId: this.state.cityId
        };
        this.props.handleForm(data);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="my-auto w-100 py-4">
                <div class="card w-100 bg-primary p-4 mx-auto">
                    <div class="card-body">
                        <hgroup className="d-flex flex-column">
                            <span className="h2">Configuración</span>
                            <span className="h3 d-none">Ingresa los siguientes datos para configurar la aplicación</span>
                        </hgroup>
                        <div className="row my-4 text-left">
                            <div className="d-none col-12">
                                <div className="form-group my-3">
                                    <label htmlFor="country">País</label>
                                    <input
                                        type="text"
                                        readOnly
                                        className="form-control-plaintext"
                                        name="country"
                                        id="country"
                                        value="Mexico"
                                        onChange={this.handleInputChange}
                                    />
                                    <small id="countrySmall" className="form-text">Este campo es unico ya que solo mostramos el clima de Mexico.</small>
                                </div>
                            </div>
                            <div className="col-12">
                                <InputAutoComplete 
                                    getInputData={this.handleAutoComplete}
                                    locations={this.state.locations}
                                />
                            </div>
                            <div className="col-12">
                                <div className="form-group my-3">
                                    <legend>Grados:</legend>
                                    <div className="custom-control custom-radio">
                                        <input
                                            className="custom-control-input"
                                            type="radio"
                                            id="celsius"
                                            name="degrees"
                                            value="celsius"
                                            checked={this.state.degrees === 'celsius'}
                                            onChange={this.handleInputChange}
                                        />
                                        <label className="custom-control-label" htmlFor="celsius">Centigrados</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input
                                            className="custom-control-input"
                                            type="radio"
                                            id="fahrenheit"
                                            name="degrees"
                                            value="fahrenheit"
                                            checked={this.state.degrees === 'fahrenheit'}
                                            onChange={this.handleInputChange}
                                        />
                                        <label className="custom-control-label" htmlFor="fahrenheit">Fahrenheit</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group my-auto">
                            <button type="submit" className="btn btn-outline-white">Ver clima</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
Form.propTypes = {
    country: PropTypes.string,
    degrees: PropTypes.string,
    cityId: PropTypes.string
};
export default Form;