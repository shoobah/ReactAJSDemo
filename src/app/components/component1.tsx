import * as React from 'react';

import {Timer} from './timer';
import {DogData} from './dogData';
import {IHttpService} from '../../../node_modules/@types/angular/index';

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

export default Component1;
