const fs = require('fs');
const child_process = require('child_process');
 
for(var i=0; i<3; i++) {
//创建三个子进程
    var workerProcess = child_process.exec('python Final.py '+i, function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });
 
    workerProcess.on('exit', function (code) {
        console.log('111 '+code);
    });
}