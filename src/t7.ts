
process1.exitWithLogging = function(...args) {
  console.log('exiting');
  process.exit(...args);
};

process1.sayHi = console.log.bind('Say hi');