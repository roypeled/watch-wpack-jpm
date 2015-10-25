#! /usr/bin/env node

var fs = require('fs');
var watch = require('watch');
var shell = require('shelljs');

function getParams(){
	var params = {};

    for(var i=0; i<process.argv.length; i++){
        var val = process.argv[i];
        val = val.split(":");
        params[val[0]] = val[1];
    }

    return params;
}

function run() {

	var params = getParams();
	
	watch.watchTree('src', function (f, curr, prev) {
        console.log("working on", process.cwd());
		shell.exec("webpack");
		if(params.env = "ff"){
        	process.chdir('dist/ff');
        	shell.exec("add-ff-exports");
        } else
    		process.chdir('dist/src');		
		shell.exec("jpm post --post-url http://localhost:8888/");
        process.chdir('../../');
	})

};


run();