import React from "react";

class MiniCircles extends React.Component {
    render() {
        let className = 'justify-content-around align-items-center';
        if (this.props.ifMiniCFooter) {
            className += ' pt-4 d-lg-none d-flex';
        } else {
            className += ' w-50 d-none d-lg-flex';
        };
        return (
            <section id="minicircles" className={className}>
                <div className="text-shadow circles circle-sm shadow-sm rounded-circle d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center flex-wrap">
                        <span className="h3 mb-0 after-winds">
                            {this.props.singleLocation[this.props.selectDay].WindSpeedKm}
                        </span>
                        <small>Viento</small>
                    </div>
                </div>
                <div className="text-shadow circles circle-sm shadow-sm rounded-circle d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center flex-wrap">
                        <span className="h3 mb-0 after-percentage">
                            {this.props.singleLocation[this.props.selectDay].RelativeHumidity}
                        </span>
                        <small>Humedad</small>
                    </div>
                </div>
                <div className="text-shadow circles circle-sm shadow-sm rounded-circle d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center flex-wrap">
                        <span className="h3 mb-0 after-millimeters">
                            {this.props.singleLocation[this.props.selectDay].ProbabilityOfPrecip}
                        </span>
                        <small>Precipitaciones</small>
                    </div>
                </div>
            </section>
        );
    }
}

export default MiniCircles;