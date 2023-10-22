const chalk = require('chalk');

module.exports = (text, type) => {
  switch (type) {
    case "warn":
      process.stderr.write(chalk.hex("#7F00FF")(`\r『 HEAVENLY VOID 』» ERROR « `) + text + '\n');
      break;
    case "error":
      process.stderr.write(chalk.bold.hex("000000").bold(`\r『 HEAVENLY VOID 』» ERROR « `) + text + '\n');
      break;
    case "load":
      process.stderr.write(chalk.red(`\r『 HEAVENLY VOID 』» NEW USER « `) + text + '\n');
      break;
    default:
      process.stderr.write(chalk.magentaBright(`\r『 HEAVENLY VOID 』» ${type.toUpperCase()} « `) + text + '\n');
      break;
  }
};
module.exports.error = (text, type) => {
  process.stderr.write(chalk.bold.hex("#7F00FF").bold(`\r『 HEAVENLY VOID 』» ${type} « `) + text + '\n');
};

module.exports.err = (text, type) => {
  process.stderr.write(chalk.bold.hex("#000000").bold(`\r『 HEAVENLY VOID 』» ${type} « `) + text) + '\n';
};

module.exports.warn = (text, type) => {
  process.stderr.write(chalk.bgYellow.hex("#7F00FF").bold(`\r『 HEAVENLY VOID 』» ${type} « `) + text + '\n');
};

module.exports.master = (text, type) => {
  process.stderr.write(chalk.hex("#000000")(`\r『 HEAVENLY VOID 』» ${type} « `) + text + '\n');
};

module.exports.blue = (text, type) => {
  process.stderr.write(chalk.hex("#7F00FF").bold(`\r『 HEAVENLY VOID 』» ${type} « `) + text + '\n');
};

module.exports.green = (text, type) => {
  process.stderr.write(chalk.green.bold(`\r『 HEAVENLY VOID 』» ${type} « `) + text + '\n');
};

module.exports.pink = (text, type) => {
  process.stderr.write(chalk.hex("#000000").bold(`\r『 HEAVENLY VOID 』» ${type} « `) + text + '\n');
};

module.exports.purple = (text, type) => {
  process.stderr.write(chalk.hex("#7F00FF").bold(`\r『 HEAVENLY VOID 』» ${type} « `) + text + '\n');
};
module.exports.banner = (data) => {
  const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright']
  const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]]
  console.log(color(data));
}
module.exports.loader = (data, option) => {
  switch (option) {
    case "warn":
      process.stderr.write(chalk.hex("#FFFFFF")(`\r» 『 HEAVENLY ZED 』 « `) + data + '\n');
      break;
    case "error":
      process.stderr.write(chalk.bold.hex("#FFFFFF").bold(`\r» 『 HEAVENLY ZED 』 « `) + data + '\n');
      break;
    default:
      process.stderr.write(chalk.magenta(`\r» 『 HEAVENLY ZED 』« `) + data + '\n');
      break;
  }
}
