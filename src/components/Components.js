import React from 'react';

export class ClassHelloWorld extends React.Component {
  render() {
    return <h1>Hello, World</h1>;
  }
}

export const FunctionHelloWorld = function () {
  return <h1>Hello, World</h1>;
};

export const ArrowHelloWorld = () => <h1>Hello, World</h1>;

export default FunctionHelloWorld;
