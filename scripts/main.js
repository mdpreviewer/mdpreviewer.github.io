var app = new Vue({
  el: '#content',
  data: {
    input: 'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**,\n`monospace`,~~strikethrough~~ .\n\nShopping list:\n* apples\n* oranges\n* pears\n\nNumbered list:\n1. apples\n2. oranges\n3. pears\n\n*[George Volokitin](https://www.freecodecamp.com/saintgeo23)*',
  },

  computed: {
    getResult: function () {
      return html = marked(this.input);
    }
  },
});
