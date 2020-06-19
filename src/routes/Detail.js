import React from 'react';
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="about__container">
                    <h3 className="title">{location.state.title}</h3>
                    <p className="sum">{location.state.summary}...</p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;