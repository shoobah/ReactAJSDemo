import moment from 'moment';
import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: Date.now()
        };
        moment.locale('sv');
    }

    startTimer() {
        setInterval(() => {
            this.setState({currentTime: Date.now()});
        }, 1000);
    }

    componentDidMount() {
        this.startTimer();
    }

    render() {
        return <div>Time: {moment(this.state.currentTime).format('Y-M-D HH:mm:ss')}</div>;
    }
}

export default Timer;
