export function overrideConsoleLog() {
    const oldLog = console.log;
    const logger = document.getElementById('console-log') as HTMLElement;

    console.log = function (...args: any[]) {
        args.forEach((message) => {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        });
        oldLog.apply(console, args);
    };
}