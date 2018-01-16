import * as React from 'react';

import {Timer} from './timer';
import {C3Test} from './c3test';

export interface MotherProps {
    thing: string;
}

export interface MotherState {
    data: {};
    chartData: c3.Data;
}

class Mother extends React.Component<MotherProps, MotherState> {
    myStyle: {width: string; border: string};
    constructor(props) {
        super(props);
        this.state = {
            data: '{}',
            chartData: this.getChartData()
        };
        this.myStyle = {
            width: '500px',
            border: 'solid 2px #ff0000'
        };
    }

    something() {
        this.setState({
            chartData: this.getChartData()
        });
        console.log('chartData', this.state.chartData);
    }

    generateRandomData(): c3.Data {
        const r = () => Math.floor(Math.random() * Math.floor(1000));
        let dd : c3.Data = {columns:[]};
        for (let j = 0; j < 4; j++) {
            let d: (string | number | boolean)[] = ['data' + j];
            for (let i = 0; i < 10; i++) {
                d.push(r());
                4;
            }
            dd.columns.push(d);
        }
        return dd;
    }

    getChartData(): c3.Data {
        return this.generateRandomData();
    }

    render() {
        return (
            <div>
                <div>
                    <Timer />
                </div>
                <button onClick={this.something.bind(this)}>Randomize data</button>
                <div style={{backgroundColor: '#fff'}}>
                    <C3Test indata={this.state.chartData} />
                </div>
            </div>
        );
    }
}

export default Mother;
