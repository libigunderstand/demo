const { 
    addTslintLoader
} = require("customize-cra");

module.exports = function override(config, env) {
    addTslintLoader()
	//do stuff with the webpack config...
	return config;
};
