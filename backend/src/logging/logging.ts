import chalk from 'chalk';

export default class Logging{
  public static log = (args: any) => { this.info(args); };

  public static info = (args: any) => {
    console.log(chalk.blue(`[${new Date().toISOString()}] [INFO]`, 
    typeof(args)==='string' ? chalk.blueBright(args): args));
  }

  public static warn = (args: any) => {
    console.log(chalk.yellow(`[${new Date().toLocaleDateString()}] [WARN]`, 
    typeof(args)==='string' ? chalk.yellowBright(args): args));
  }

  public static error = (args: any) => {
    console.log(chalk.red(`[${new Date().toLocaleDateString()}] [Error]`, 
    typeof(args)==='string' ? chalk.redBright(args): args));
  }
}
