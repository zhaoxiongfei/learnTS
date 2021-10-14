declare module 'jquery';
declare module '*.css';
declare var foo: any;

interface Process1 {
  exitWithLogging(code?: number): void;
  sayHi(message: string): void;
}
declare let process1: Process1;