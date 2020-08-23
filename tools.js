const chalk = require('chalk');
const readline = require('readline');
const config = require('./config');

module.exports.printMessage = (message) => {
    this.log(`${message.system ? chalk.yellow('System: ') : chalk.bold.hex(chalk.white)(message.author + ': ')}${message.content}`);
}

module.exports.promptForMessage = (socket) => {
    const input = readline.createInterface({
        input: process.stdin,
      });

      input.on("line", async (message) => {
        process.stdout.moveCursor(0, -1);
        process.stdout.clearLine();
        process.stdout.cursorTo(0);

        socket.emit('message', {
            author: config.username,
            content: message
        })
      });

      return input;
}

module.exports.log = (message) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(message);
}