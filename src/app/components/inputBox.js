import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputBox extends Component {
    render() {
        console.log('this.props', this.props)
        
        return <div>{this.props.thing}</div>;
    }
}

InputBox.propTypes = {
    thing: PropTypes.string,
};

export default InputBox;
