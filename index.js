const config = require('./config.js');
const socketIOClient = require('socket.io-client');
const chalk = require('chalk');
const consoleIO = require('console-read-write');

(async () => {
        let auth = await consoleIO.ask(chalk.gray("Enter password (Leave blank for default): "));
        let server = await consoleIO.ask(chalk.gray("Enter server URL (Leave blank for default): "));
        
        if(auth === '' || auth === null || typeof auth === 'undefined') auth = config.password;
        if(server === '' || server === null || typeof server === 'undefined') server = config.server_URL;

        console.log(`Awaiting WebSocket connection to ${chalk.bold.hex(chalk.white)(server)}...`);
        
        const socket = socketIOClient(`${server}?username=${config.username}&auth=${auth}`, {autoConnect: true});

        console.log(`\n`)
        require('./events.js')(socket); 
})();
