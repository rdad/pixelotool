
self.addEventListener('message', function(e) {
	let json = e.data;
  	self.postMessage(json);
}, false);