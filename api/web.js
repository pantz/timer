var connect = require('connect')
  , config = require('./config');

exports = module.exports = init();

function init(){
	var web = connect.createServer(connect.static(config.APP_PATH));
	web.listen(config.APP_PORT);
	console.log('WEB running at `'+config.APP_URL+'` on port '+config.APP_PORT+' in `'+config.MODE+'` mode');
	return web;
}