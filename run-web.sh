#!/bin/bash
echo "running the project from"
pwd 

path_node="./node_modules"
if [ -d "$path_node" ]; then 
	echo "###################################################"
	echo "make sure you have latest genny-main up and running"
	echo "make sure you have all the dependencies if they are not installed run npm install"
	echo "npm install do install all the dependencies"
	echo "node_modules exists running the app now"
	echo "exists"
	echo "running the web now 🍺  🍺  🍺  🍺  🍺  🍺  🍺  🍺  🍺  🍺 🍺  🍺  🍺   🍺 "
	npm run start-web

else 
	echo "###################################################"
	echo "node_modules doesnot exists installing now"
	npm install 
	npm run start-web
	echo "Running the web app now ========================>>>>>>>>> 🍺 "
fi

