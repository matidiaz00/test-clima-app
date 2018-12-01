import React from "react";
import PropTypes from "prop-types";

class DayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (event, DayNumber, bg, index) => {
        event.preventDefault();
        this.setState({
            active: index
        });
        this.props.handleSelectDay(DayNumber, bg);
    };
    render() {
        return (
            <section id="daylist">
                <ul id="list-nav" className="list-unstyled d-flex justify-content-around align-items-start">
                    {
                        this.props.singleLocation.slice(0, 6).map((city, index) =>
                            <li 
                                onClick={() => this.handleClick(event, city.DayNumber, city.bg, index)} 
                                key={index} 
                                className={"d-flex flex-column align-items-center flex-wrap" + ((index === this.state.active) ? ' active' : '')}
                            >
                                <span className="mb-auto font-weight-bold text-uppercase">
                                    {city.Day}
                                </span>
                                <span className="h3 mb-0 py-4">
                                    <i className={city.icon}></i>
                                </span>
                                <span className="h3 mb-2 mt-auto after-degrees">
                                    {
                                        (this.props.degrees === "celsius") ? 
                                        city.HiTempC
                                        : city.HiTempF
                                    }
                                </span>
                                <span className="h3 mb-0 mt-auto after-degrees opacity">
                                    {
                                        (this.props.degrees === "celsius") ? 
                                        city.LowTempC
                                        : city.LowTempF
                                    }
                                </span>
                            </li>
                        )
                    }
                </ul>
            </section>
        );
    }
};
DayList.propTypes = {
    handleClick: PropTypes.func
};
export default DayList;