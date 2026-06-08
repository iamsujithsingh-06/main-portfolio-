const http = require('http');
const ports = [5173, 5174, 5175];
const filename = '/sujith_.jpeg';
let pidx = 0;

function tryPort() {
  if (pidx >= ports.length) {
    console.error('NOT_FOUND_ON_PORTS');
    process.exit(2);
  }
  const port = ports[pidx];
  let attempts = 0;

  function tryFetch() {
    attempts++;
    const req = http.get({ host: '127.0.0.1', port: port, path: '/' }, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => {
        if (d.includes(filename)) {
          console.log('FOUND http://localhost:' + port);
          process.exit(0);
        } else {
          console.error('PAGE_OK_BUT_IMAGE_NOT_FOUND on port ' + port);
          process.exit(3);
        }
      });
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
