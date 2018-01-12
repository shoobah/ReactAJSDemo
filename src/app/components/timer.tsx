import * as React from 'react';
import * as moment from '../../../node_modules/moment/moment'; 

export class Timer extends React.Component {
    state: { currentTime: number; };
    constructor(props) {
        super(props);
        this.state = {
            currentTime: Date.now()
        };
        moment.locale('sv');
    }

    startTimer(me) {
        setInterval(() => {
            me.setState({currentTime: Date.now()});
        }, 1000);
    }

    componentDidMount() {
        this.startTimer(this);
    }

    render() {
        return <div>Time: {moment(this.state.currentTime).format('Y-M-D HH:mm:ss')}</div>;
    }
}
