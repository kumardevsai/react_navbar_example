import React, { Component } from 'react';

function ret() {
  return (
    <div className="page">
      <h1>{this.constructor.name}</h1>
      <p>
        Edit the content of this page in /src/pages/ExamplePages.js
      </p>
    </div>
  );
}

class ExamplePage0 extends Component {
  render() {
    return ret.apply(this);
  }
}
class ExamplePage1 extends Component {
  render() {
    return ret.apply(this);
  }
}
class ExamplePage2 extends Component {
  render() {
    return ret.apply(this);
  }
}
class ExamplePage3 extends Component {
  render() {
    return ret.apply(this);
  }
}
class ExamplePage4 extends Component {
  render() {
    return ret.apply(this);
  }
}


export {ExamplePage0, ExamplePage1, ExamplePage2, ExamplePage3, ExamplePage4}