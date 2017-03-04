/*
  Apps are stand alone apps.
  They need to be wrapped in the markup (with "data-react-app" attr).
  The apps stand for smart objects that handle & cointain the main logic & data to pass to child components
*/

// dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// components
import Heading from '../components/Heading'

// helpers
import HELPERS from '../../helpers/';

class TestComponent extends React.Component {
  constructor() {
    super();
    this.data = [33, 111, 109, 109, 105, 77, 32, 105, 114, 117, 103, 117, 65];
    this.stuff = this.elaborateData(this.data);
    
    this.logData(this.stuff)
  }

  logData(data) {

    const style = [
      'background: #00f2fe',
      'background: linear-gradient(to right top, #4facfe, #00f2fe)',
      'color: #fff',
      'font-family: Helvetica, sans-serif',
      'font-size: 18px',
      'font-size: 5vw',
      'font-weight: bold',
      'padding: 1em 2em'
    ].join(';');
    
    console.log(`\n%c${data}`, style)
  }

  elaborateData(data) {
    return data.map(this.transform).reverse().join('')
  }

  transform(el) {
    return String.fromCodePoint(el)
  }

  render() {
    return (
      <div>
        <Heading title={'Strange error in console. Give a look, please :('} />
      </div>
    );
  }
}

export default TestComponent;
