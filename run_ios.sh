#!/bin/bash
echo "Running ios project from "
pwd 
pathd = "./node_modules"  

if [-d "$pathd"]; then 
	npm run start ios 
else 
	echo "node_modules doesnot exists installing them now ==========>>>>>>>>>>>>>>>>" 
	npm install 
	npm run start-ios
fi
