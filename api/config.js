var fs = require('fs')
  , extend = require('xtend');

var defaultConfig = {
	MODE: 'debug',
	API_PORT: 1337,
	APP_PORT: 80,
	APP_URL: 'localhost',
	BASE_PATH: __dirname+'/../',
	APP_PATH: __dirname+'/../app/',
	API_PATH: __dirname+'/'
};

exports = module.exports = loadConfig();

function loadConfig(){
	var userConfig = JSON.parse(fs.readFileSync(defaultConfig.BASE_PATH+'config.json'));
	var config = extend(true, defaultConfig, userConfig);
	return config;
}