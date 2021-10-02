import React from 'react';
import './style.css';
import FunctionHelloWorld, {
  ClassHelloWorld,
  ArrowHelloWorld,
} from './components/Components';

export default function App() {
  return (
    <div>
      <FunctionHelloWorld />
      <ClassHelloWorld />
      <ArrowHelloWorld />
    </div>
  );
}
