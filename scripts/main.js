'use strict';

var example = 'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`,~~strikethrough~~ .\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\n *[George Volokitin](https://www.freecodecamp.com/saintgeo23)*';

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      input: example
    };
  },
  onChangeInput: function onChangeInput() {
    this.setState({ input: ReactDOM.findDOMNode(this.refs.input).value });
  },
  createMarkup: function createMarkup(str) {
    var markup = marked(str);
    return { __html: markup };
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'wrapper row' },
      React.createElement(
        'div',
        { className: 'input-box col-xs-10 col-xs-offset-1 col-sm-5' },
        React.createElement(
          'h2',
          { className: 'head' },
          'Common input'
        ),
        React.createElement('textarea', {
          className: 'form-control',
          value: this.state.input,
          ref: 'input',
          onChange: this.onChangeInput
        })
      ),
      React.createElement(
        'div',
        { className: 'output-box col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-0' },
        React.createElement(
          'h2',
          { className: 'head' },
          'Magic output'
        ),
        React.createElement('div', { dangerouslySetInnerHTML: this.createMarkup(this.state.input) })
      )
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('content'));
