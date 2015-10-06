#! /usr/bin/env node

var fs = require('fs');
var watch = require('watch');
var shell = require('shelljs');

function run() {
	
	watch.watchTree('src', function (f, curr, prev) {
		shell.exec("cd src/");
		shell.exec("webpack");
		shell.exec("cd ../dist/ff/");
		shell.exec("add-ff-exports");
		shell.exec("jpm post --post-url http://localhost:8888/");
		shell.exec("cd ../../");
	})

};


run();