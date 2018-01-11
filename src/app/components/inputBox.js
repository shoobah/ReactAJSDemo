import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputBox extends Component {
    constructor(props){
        super(props)
        this.myStyle = {
            width: '500px',
            border: 'solid 2px #ff0000'
        };
    }
    render() {
        return <input style={this.myStyle} placeholder={this.props.thing} />;
    }
}

InputBox.propTypes = {
    thing: PropTypes.string
};

export default InputBox;
