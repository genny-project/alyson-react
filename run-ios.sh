#!/bin/bash
echo "Running ios project from ==========>>>>>>>>>  "; 
pwd 
pathd="./node_modules"  


if [ -d "$pathd" ]; then
        echo "node_modules exists running the app now"
	echo "if you get an error run npm install and try running the script again"
	echo "=============================== npm install to install dependencies"	
	echo "ready to brew Genny ios"
	echo "🍻 🍻 🍻 🍻 🍻 🍻 "
	sleep 4 
	npm run start ios
	echo "exits"
else 
	echo "node_modules doesnot exists installing them now ==========>>>>>>>>>>>>>>>>" 
	echo " Ready to brew Genny ios alyson-native"
	echo "🍻 🍻 🍻 🍻 🍻 🍻 🍻 🍻 🍻 🍻 🍻 🍻"
	sleep 4 
	npm install 
	npm run start-ios
	
fi
