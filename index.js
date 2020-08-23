const config = require('./config.js');
const socketIOClient = require('socket.io-client');
const chalk = require('chalk');

(async () => {
        console.log(`Awaiting WebSocket connection to ${chalk.bold.hex(chalk.white)(config.server_URL)}...`);

        const socket = socketIOClient(`${config.server_URL}?username=${config.username}`, {autoConnect: true});

        console.log(`\n`)
        require('./events.js')(socket); 
})();
