const http = require('http');
const ports = [5173, 5174, 5175];
const path = '/sujith_.jpeg';
let pidx = 0;

function tryPort() {
  if (pidx >= ports.length) {
    console.error('ASSET_NOT_FOUND_ON_PORTS');
    process.exit(2);
  }
  const port = ports[pidx];
  let attempts = 0;

  function tryFetch() {
    attempts++;
    const req = http.get({ host: '127.0.0.1', port: port, path: path }, (res) => {
      console.log('port', port, 'status', res.statusCode);
      if (res.statusCode === 200) {
        console.log('ASSET_FOUND http://localhost:' + port + path);
        process.exit(0);
      } else {
        pidx++;
        setTimeout(tryPort, 200);
      }
    });

    req.on('error', (err) => {
      if (attempts < 10) {
        setTimeout(tryFetch, 500);
      } else {
        pidx++;
        setTimeout(tryPort, 200);
      }
    });
  }

  tryFetch();
}

tryPort();
