import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Timer from './timer';
import DogData from './dogData';

class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '{}'
        };
        this.myStyle = {
            width: '500px',
            border: 'solid 2px #ff0000'
        };
    }

    componentDidMount() {
        this.props.$http.get('https://dog.ceo/api/breeds/list/all').then(res => {
            this.setState({data: res.data});
        });
    }

    render() {
        return (
            <div>
                <input style={this.myStyle} placeholder={this.props.thing} />
                <div>
                    <Timer />
                </div>
                <DogData data={this.state.data} />
            </div>
        );
    }
}

Component1.propTypes = {
    thing: PropTypes.string
};

export default Component1;
