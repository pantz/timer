var fs = require('fs')
  , extend = require('extend');

exports = module.exports = loadConfig();

var defaultConfig = {
	API_PORT: 1337,
	APP_PORT: 80,
	BASEPATH: __dirname+'/../'
};

function loadConfig(){
	var config = {};
	var userConfig = JSON.parse(fs.readFileSync(__dirname+'/../config.json'));
	extend(config, userConfig, defaultConfig);
	return config;
}