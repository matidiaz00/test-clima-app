import React from "react";
import PropTypes from "prop-types";

class MainCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ifMiniCFooter: false
        };
    };
    render() {
        return (
            <section id="maincircle" className="text-shadow circles circle-lg shadow-sm rounded-circle d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column align-items-center flex-wrap">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="h1 my-auto after-degrees font-weight-light text-shadow-light">
                            {
                                (this.props.degrees === "celsius") ? 
                                this.props.singleLocation[this.props.selectDay].HiTempC
                                : this.props.singleLocation[this.props.selectDay].HiTempF
                            }
                        </span>
                        <div className="border-left border-white pl-3 ml-2 d-flex flex-column align-items-center flex-wrap">
                            <span className="h3 my-auto after-degrees">
                                {
                                    (this.props.degrees === "celsius") ? 
                                    this.props.singleLocation[this.props.selectDay].HiTempC
                                    : this.props.singleLocation[this.props.selectDay].HiTempF
                                }
                            </span>
                            <span className="h3 my-auto after-degrees opacity">
                                {
                                    (this.props.degrees === "celsius") ? 
                                    this.props.singleLocation[this.props.selectDay].LowTempC
                                    : this.props.singleLocation[this.props.selectDay].LowTempF
                                }
                            </span>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center flex-wrap">
                        <span>{this.props.singleLocation[this.props.selectDay].SkyText}</span>
                        <span>RealFeel 
                            <span className="after-degrees">
                                {
                                    (this.props.degrees === "celsius") ? 
                                    this.props.singleLocation[this.props.selectDay].LowTempC
                                    : this.props.singleLocation[this.props.selectDay].LowTempF
                                }
                            </span>
                        </span>
                    </div>
                </div>
            </section>
        );
    }
}
MainCircle.propTypes = {
    ifMiniCFooter: PropTypes.bool
};
export default MainCircle;