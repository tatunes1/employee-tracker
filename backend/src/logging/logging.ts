export default class Logging{
  public static log = (args: any) => { this.info(args); };

  public static info = (args: any) => {
    console.log(`[${new Date().toISOString()}] [INFO]`,  args);
  }

  public static warn = (args: any) => {
    console.log(`[${new Date().toLocaleDateString()}] [WARN]`, args);
  }

  public static error = (args: any) => {
    console.log(`[${new Date().toLocaleDateString()}] [Error]`, args);

  }
}
