# flowee-chat
Simple module for communicating with the chat of a [Flowee](https://github.com/flowee-ru/api) stream
## Example
```js
const FloweeChat = require('flowee-chat');
const chat = new FloweeChat('ws://flowee.ru/api', '645532b4be16383418ce36cb');
(async () => {
  console.log('Connecting...');
  await chat.connect();
  console.log('Connected!');
  chat.on('message', function(data){
    console.log('New message!', data);
    // New message! {
    //   timestamp: 1684237159,
    //   username: 'AppData 174',
    //   avatar: 'default',
    //   message: 'Тевирп'
    // }
  });
  setTimeout(async () => {
    console.log('Closing the connection...');
    await chat.disconnect();
  }, 15000);
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
