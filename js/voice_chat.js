$(function () {
	var peer = new Peer({key: 'e6ff67a4-887b-47fd-9cab-841b8f0346e6'});
	peer.on('open', function(id) {
  	console.log('My peer ID is: ' + id);
});
});