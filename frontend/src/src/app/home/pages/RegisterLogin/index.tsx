import React from 'react';

interface Props {
    name: string;
}

const MyComponent: React.FC<Props> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};

export default MyComponent;