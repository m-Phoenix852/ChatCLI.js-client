const tools = require('./tools.js');
const chalk = require('chalk');

module.exports = (socket, io) => {
    socket.on('connect', () => {
        console.log(chalk.green('Connected to websocket!'));
        var messageInputStream = tools.promptForMessage(socket);
    })
    
    socket.on('user-joined', (username) => console.log(`${chalk.green("[+]")} ${username}`));
    socket.on('user-left', (username) => console.log(`${chalk.red("[-]")} ${username}`));
    socket.on('message', message => {
        tools.printMessage(message);
    })

    socket.on('disconnect', () => {
        console.log(chalk.red(`Disconnected from websocket! Check your internet connection!`));
    })

    socket.on("clientError", err => {
        console.error(chalk.red("System [ERROR]: ") + err);
    })
}