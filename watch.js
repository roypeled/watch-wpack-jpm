#! /usr/bin/env node

var fs = require('fs');
var watch = require('watch');
var shell = require('shelljs');

function run() {
	
	watch.watchTree('src', function (f, curr, prev) {
        console.log("working on", process.cwd());
		shell.exec("webpack");
        process.chdir('dist/ff');
		shell.exec("add-ff-exports");
		shell.exec("jpm post --post-url http://localhost:8888/");
        process.chdir('../../');
	})

};


run();