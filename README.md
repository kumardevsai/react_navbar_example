# React Navbar Example

A simple and modular navigation bar built using ReactJS and Bootstrap4


## [Demo](https://sepler.github.io/react_navbar_example/)


## Usage
Edit the const PAGES variable in App.js Content Class
```javascript
const PAGES = [
      {
        name: 'p0',                 // Unique key value
        text: 'Example Page 0',     // Text to be displayed on link
        component: <ExamplePage0 /> // Component to load in content div
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
```
* [Create-React-app](https://github.com/facebookincubator/create-react-app)
* [Bootstrap](https://v4-alpha.getbootstrap.com/)
