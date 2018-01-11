import React from 'react';

const generateRows = data => {
    let a = [];
    for (const item in data.message) {
        a.push(<li>{item}</li>);
    }
    return a;
};

const dogData = props => {
    return <table style={{listStyle:'none'}}>{generateRows(props.data)}</table>;
};

export default dogData;
