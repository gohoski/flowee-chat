# flowee-chat
Simple module for communicating with the chat of a [Flowee](https://github.com/flowee-ru/api) stream
## Example
```js
const FloweeChat = require('flowee-chat');
const chat = new FloweeChat('ws://flowee.ru/api', '645532b4be16383418ce36cb');
(async () => {
  await chat.connect();
  chat.on('message', function(data){
    console.log('New message!', data);
  });
})();
```

# Install
This module requires Node.js >=10.0.0.

Install via `npm`:
```bash
npm install flowee-chat
```
or `yarn`:
```bash
yarn add flowee-chat
```

# Usage
// to-do
