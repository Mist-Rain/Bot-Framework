const { exec } = require('child_process');

exec('python final_project.py '+'新北', function (err, stdout, stderr) {
    console.log(stdout);
});