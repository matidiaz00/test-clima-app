import React from "react";
import Header from "./header";
import MainCircle from "./maincircle";
import DayList from "./daylist";
import MiniCircles from "./minicircles";
import Form from "./form";
import { setLocationData, setSigleLocationData } from "./setDataAPi";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            ifMiniCFooter: true,
            menuOpen: true,
            dataAPI: [],
            locations: [],
            singleLocation: [],
            country: '',
            degrees: '',
            cityId: '',
            selectDay: 0
        };
        this.handleForm = this.handleForm.bind(this);
        this.handleSelectDay = this.handleSelectDay.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    };

    componentDidMount() {
        fetch("/api/all")
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    isLoaded: true,
                    locations: setLocationData(data),
                    dataAPI: data
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    };

    toggleMenu(value) {
        this.setState({
            menuOpen: value
        });
    };

    handleForm(data) {
        this.setState({
            country: data.country,
            degrees: data.degrees,
            menuOpen: !this.state.menuOpen,
            singleLocation: setSigleLocationData(this.state.dataAPI, data.cityId)
        });
    };

    handleSelectDay(data) {
        this.setState({
            selectDay: Number(data)
        });
    };

    render() {
        let className = 'cloud-rain container h-100 d-flex flex-column align-items-center flex-wrap';
        if (this.state.menuOpen === true) {
            className += ' menuOpen';
        };
        const { error, isLoaded, menuOpen } = this.state;
        if (error) {
            return (
                <div id="main-wrapper" className="container h-100 d-flex flex-column align-items-center flex-wrap">
                    <div className="my-auto w-100 py-4 d-flex flex-column align-items-start flex-wrap">
                        <h3 className="text-center w-100 my-auto">Error: {error.message}</h3>
                    </div>
                </div>
            )
        } else if (!isLoaded) {
            return (
                <div id="main-wrapper" className="container h-100 d-flex flex-column align-items-center flex-wrap">
                    <div className="my-auto w-100 py-4 d-flex flex-column align-items-start flex-wrap">
                        <h3 className="text-center w-100 my-auto">Cargando...</h3>
                    </div>
                </div>
            )
        } else if (!menuOpen) {
            return (
                <div id="main-wrapper" className={className}>
                    <Header
                        singleLocation={this.state.singleLocation} 
                        country={this.state.country} 
                        toggleMenu={this.toggleMenu} 
                        menuOpen={this.state.menuOpen} />
                    <article className="w-100 d-flex justify-content-around align-items-center">
                        <MainCircle 
                            degrees={this.state.degrees}
                            selectDay={this.state.selectDay}
                            singleLocation={this.state.singleLocation} />
                        <MiniCircles 
                            selectDay={this.state.selectDay}
                            singleLocation={this.state.singleLocation} 
                            ifMiniCFooter={!this.state.ifMiniCFooter} />
                    </article>
                    <article className="mt-auto w-100 py-4">
                        <DayList 
                            degrees={this.state.degrees}
                            handleSelectDay={this.handleSelectDay}
                            singleLocation={this.state.singleLocation} />
                        <MiniCircles 
                            selectDay={this.state.selectDay}
                            singleLocation={this.state.singleLocation} 
                            ifMiniCFooter={this.state.ifMiniCFooter} />
                    </article>
                </div>
            );
        } else {
            return (
                <div id="main-wrapper" className={className}>
                    <Form 
                        locations={this.state.locations} 
                        handleForm={this.handleForm} />
                </div>
            );
        }
    }
}

export default App;