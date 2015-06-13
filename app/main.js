import Methods from './methods'

var socket = io();
var delegate = new domDelegate.Delegate(document.body);


delegate.on('click', 'div[data-method]', function(e) {
  var method = this.getAttribute('data-method');
  this.style.background = 'green'

  socket.emit('method', method);

  setTimeout(function(){
    this.style.background = 'blue';
  }.bind(this), 600);
});

delegate.on('touchstart', 'div[data-method]', function(e) {
  var method = this.getAttribute('data-method');
  socket.emit('method', method);
});

delegate.on('touchmove', 'div[data-method]', function(e) {
  var method = this.getAttribute('data-method');
  socket.emit('method', method);
});

socket.on('method', function(method){
  console.log(Methods, method);
  Methods[method]()
});
