const
  Express = require('express'),
  Server = Express();

const PORT = 36669;

Server.use(Express.static('public'));

Server.listen(PORT, console.log('Running o.Out!'))

