import * as React from 'react';
import * as c3 from 'c3';
import 'c3/c3.css';

export interface C3TestProps {
    indata: c3.Data
}

export class C3Test extends React.Component<C3TestProps, any> {
    componentDidMount(){
        c3.generate({
            bindto: "#chart",
            data: this.props.indata,
            axis: {
                y2: {
                    show: true
                }
            }
        });
    }

    render() {
        return <div id="chart" />;
    }
}
