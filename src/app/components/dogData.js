import React from 'react';

const generateRows = data => {
    let a = [];
    let key = 0;
    for (const item in data.message) {
        a.push(<li key={key}>{item}</li>);
        key++;
    }
    return a;
};

const dogData = props => {
    return <ul style={{listStyle: 'none'}}>{generateRows(props.data)}</ul>;
};

export default dogData;
