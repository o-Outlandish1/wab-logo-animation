const Server = require('express');
const
  HOST = 'o.Outlandish',
  PORT = 36669;

Server.use(express.static('public'));

Server.listen(PORT, 'Running o.Out!')

