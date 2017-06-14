import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {ExamplePage0, ExamplePage1, ExamplePage2, ExamplePage3, ExamplePage4} from './pages/ExamplePages.js';

class Content extends Component {
  constructor(props) {
    super(props);
    const PAGES = [
      {
        name: 'p0',
        text: 'Example Page 0',
        component: <ExamplePage0 />
      },
      {
        name: 'p1',
        text: 'Example Page 1',
        component: <ExamplePage1 />
      },
      {
        name: 'p2',
        text: 'Example Page 2',
        component: <ExamplePage2 />
      },
      {
        name: 'p3',
        text: 'Example Page 3',
        component: <ExamplePage3 />
      },
      {
        name: 'p4',
        text: 'Example Page 4',
        component: <ExamplePage4 />
      },
    ];
    this.state = {currentPage: PAGES[0], pages: PAGES};
    this.setPage = this.setPage.bind(this);
  }

  setPage(name) {
    const pages = this.state.pages.slice();
    for (let i = 0; i < pages.length; i++) {
      if(pages[i].name === name) {
        this.setState({currentPage: pages[i]});
      }
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3 sidebar">
          <Navigation setPage={this.setPage} currentPage={this.state.currentPage} pages={this.state.pages}/>
        </div>
        <div className="col content">
          {
            this.state.currentPage.component
          }
        </div>
      </div>
    );
  }
}

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.setPage(event.target.name);
  }

  render() {
    const pages = this.props.pages;
    let retHtml = [];
    pages.forEach( page => {
      if (page.name === this.props.currentPage.name) {
        retHtml.push (
          <li className="nav-item" key={page.name}>
            <a name={page.name} className="nav-link active" href="" onClick={this.onClick}>{page.text}</a>
          </li>
        );
      } else {
        retHtml.push (
          <li className="nav-item" key={page.name}>
            <a name={page.name} className="nav-link" href="" onClick={this.onClick}>{page.text}</a>
          </li>
        );
      }
    }
    );
    return <ul className="nav nav-pills flex-column sidebar">{retHtml}</ul>;
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header row">
        <hr/>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <footer className="footer">
          <small><a href="https://github.com/sepler/react_navbar_example">https://github.com/sepler/react_navbar_example</a></small>
        </footer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
