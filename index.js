var { WebSocket } = require('ws'), EventEmitter = require('events');
let server, user;
const util = require("util");

function FloweeChat(serverURL, id) {
	if (!serverURL || !id)
		return new Error("You need to specify the server's WebSocket API URL and the user's id, see the docs");
	server = serverURL;
	user = id;
}
util.inherits(FloweeChat, EventEmitter);
FloweeChat.prototype.on('message', function() {});
FloweeChat.prototype.connect = () => {
	return new Promise((resolve, reject) => {
		this.client = new WebSocket(server + '/users/' + user + '/ws');
		this.client.on('error', reject);
		this.client.on('open', () => {
			this.client.send('ping');
			resolve();
		});
		
		this.client.on('message', data => {
			const message = data.toString('utf8');
			if (message.includes('|')) {
				const params = message.split('|');
				const data = {
					timestamp: +params[0],
					username: Buffer.from(params[1], 'base64').toString('utf8'),
					avatar: params[2],
					message: Buffer.from(params[3], 'base64').toString('utf8')
				};
				FloweeChat.prototype.emit('message', data);
			}
		});
	})
};

module.exports = FloweeChat;