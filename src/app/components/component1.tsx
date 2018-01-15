import * as React from 'react';

import {Timer} from './timer';
import {DogData} from './dogData';
import {IHttpService} from '../../../node_modules/@types/angular/index';
import {C3Test} from './c3test';

export interface Component1Props {
    thing: string;
    $http: IHttpService;
}

class Component1 extends React.Component<Component1Props, {}> {
    myStyle: {width: string; border: string};
    state: {data: {}};

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

    something() {
        alert('hej');
    }

    componentDidMount() {
        this.props.$http.get('https://dog.ceo/api/breeds/list/all').then(res => {
            this.setState({data: res.data});
        });
    }

    chartdata: c3.Data = {
        columns: [['data1', 30, 200, 100, 400, 150, 250], ['data2', 50, 20, 10, 40, 15, 25]],
        axes: {
            data2: 'y2'
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.something.bind(this)} >HEJ</button>
                <input style={this.myStyle} placeholder={this.props.thing} />
                <div>
                    <Timer />
                </div>
                <C3Test indata={this.chartdata} />
                {/* <DogData data={this.state.data} /> */}
            </div>
        );
    }
}

export default Component1;
