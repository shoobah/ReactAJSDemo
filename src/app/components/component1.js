import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Timer from './timer';

class Component1 extends Component {
    constructor(props) {
        super(props);
        this.myStyle = {
            width: '500px',
            border: 'solid 2px #ff0000'
        };
    }
    render() {
        return (
            <div>
                <input style={this.myStyle} placeholder={this.props.thing} />
                <div>
                    <Timer />
                </div>
            </div>
        );
    }
}

Component1.propTypes = {
    thing: PropTypes.string
};

export default Component1;
