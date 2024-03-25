import { Injectable } from "@angular/core";

/**
 * Custom Log Service for logging the appropriate message.
 */
@Injectable()
export class LogService {
  log(msg: string, className?: string, ...optionalParams: any[]): void {
    console.log(
      `%c${new Date()} [LOG - ${LogData.ALL.getLevel()}] ${msg} - ${className} ${optionalParams}`,
      `color: ${LogData.ALL.getColor()}`
    );
  }

  debug(msg: string, className?: string, ...optionalParams: any[]): void {
    console.debug(
      `%c${new Date()} [DEBUG - ${LogData.DEBUG.getLevel()}] ${msg} - ${className} ${optionalParams}`,
      `color: ${LogData.DEBUG.getColor()}`
    );
  }

  info(msg: string, className?: string, ...optionalParams: any[]): void {
    console.info(
      `%c${new Date()} [INFO - ${LogData.INFO.getLevel()}] ${msg} - ${className} ${optionalParams}`,
      `color: ${LogData.INFO.getColor()}`
    );
  }

  warn(msg: string, className?: string, ...optionalParams: any[]): void {
    console.warn(
      `%c${new Date()} [WARN - ${LogData.WARN.getLevel()}] ${msg} - ${className} ${optionalParams}`,
      `color: ${LogData.WARN.getColor()}`
    );
  }

  error(msg: string, className?: string, ...optionalParams: any[]): void {
    console.error(
      `%c${new Date()} [ERROR - ${LogData.ERROR.getLevel()}] ${msg} - ${className} ${optionalParams}`,
      `color: ${LogData.ERROR.getColor()}`
    );
  }
}

class LogData {
  public static ALL: LogData = new LogData(0, "");
  public static DEBUG: LogData = new LogData(1, "#138625");
  public static INFO: LogData = new LogData(2, "#4677d0");
  public static WARN: LogData = new LogData(3, "#ff8800");
  public static ERROR: LogData = new LogData(4, "#b41f1f");

  private readonly level: number;
  private readonly color: string;

  private constructor(level: number, color: string) {
    this.level = level;
    this.color = color;
  }

  public getLevel(): number {
    return this.level;
  }

  public getColor(): string {
    return this.color;
  }
}
