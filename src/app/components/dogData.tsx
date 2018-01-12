import * as React from 'react';


const bigFont = {listStyle: 'none', fontSize: '18px', textAlign: 'left'};
const smallFont = {listStyle: 'none', fontSize: '14px', textAlign: 'left'};

const generatSubs = (message, item) => {
    if (message[item].length === 0) return null;
    return <ul style={smallFont}>{message[item].map((item, index) => <li key={'sub-' + index}>{item}</li>)}</ul>;
};

const generateRows = data => {
    let a = [];
    let key = 0;
    for (const item in data.message) {
        a.push(
            <li key={key++}>
                {item}
                {generatSubs(data.message, item)}
            </li>
        );
    }
    return a;
};

export const DogData = props => {
    return <ul style={bigFont}>{generateRows(props.data)}</ul>;
};
