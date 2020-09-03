#!/usr/bin/env node

let shell  = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let templates = require('./templates/folder.js')
let files = require('./templates/files')
let store = require('./templates/store')
let appStore = require('./templates/appModel')
let generator = require('./templates/generator')

const logo = 'https://xen.io/_nuxt/img/9f23252.png'

let appName = process.argv[2]
let appDirectory = `${process.cwd()}/${appName}`

const run = async () => {
	let success = await createXenReactApp()
	if(!success) {
		console.log('Something went wrong while trying to create a new xen react app using create-xen-react-app'.red)
		return false;
	}
	await cdIntoNewApp()
	await installDevDependencyPackages()
	await installDependencyPackages()
	await copyFolderToRepo()
	await copyComponentGenerator()
	await copyImages()
	await updateStoreFolder()
	await updateModels()
	await updateTemplates()
	console.log(`Successfully created ${appName} repo`.green)
	console.log('Run your repo with below command'.yellow)
	console.log(`cd ${appName}`.cyan)
	console.log('yarn start'.cyan)
}



const createXenReactApp = () => {
	return new Promise(resolve => {
		if(appName){
			const pattern = '^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-._~]*$'
			const regex = RegExp(pattern)
			if(regex.test(appName)){
				shell.exec(`mkdir ${appName}`,  (code) => {
					console.log('Exited with code', code)
					console.log('Created xen react app')
					resolve(true)
				})
			}else {
				console.log("\nName does not match the above pattern".red.bgWhite)
				console.log("\nPlease enter your app name as per following patter".red.bgWhite)
				console.log(`\n${pattern}`.red.bgWhite)
				resolve(false)
			}
		}else {
			console.log("\nNo app name was provided".red)
			console.log("\nProvide an app name in the following format: ")
			console.log("\ncreate-xen-react-app ", "app-name\n".cyan)
			resolve(false)
		}
	})
}

const cdIntoNewApp = () => {
	return new Promise(resolve => {
		shell.cd(`${appName}/`)
		console.log('Initializing npm'.cyan)
		shell.exec(`npm init -y`, () => {
			console.log('npm initialization finished'. green)
			resolve()})
	})
}

const installDevDependencyPackages = () => {
	return new Promise(resolve => {
		
		console.log("\nInstalling devDependencies \n".cyan)
		shell.exec(
			`yarn add @babel/core @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env @babel/preset-react babel-loader babel-plugin-transform-remove-console copy-webpack-plugin css-loader file-loader html-webpack-plugin node-sass sass-loader style-loader url-loader webpack webpack-cli webpack-dev-server plop --dev `, () => {
			console.log("\nFinished devDependencies installation\n".green)
			resolve()
		})
	})
}

const installDependencyPackages = () => {
	return new Promise(resolve => {
		console.log("\nInstalling dependencies \n".cyan)
		shell.exec(
			`yarn add react react-dom react-redux react-router-dom @rematch/core @rematch/select @material-ui/core @material-ui/icons @material-ui/lab @material-ui/pickers material-ui-phone-number mui-datatables classnames prop-types react-select chroma-js`, () => {
			console.log("\nFinished dependencies installation\n".green)
			updateNpmScripts()
			resolve()
		})
	})
}

const updateNpmScripts = () => {
	const file  = fs.readFileSync('package.json')
	const content = JSON.parse(file)
	const updatedScripts = {
		"create": "webpack",
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production",
    "test": "echo \"Error: no test specified\" && exit 1",
		"generate": 'plop'
	}
	content.scripts = updatedScripts
	fs.writeFileSync('package.json', JSON.stringify(content,null,2))
}

const copyImages = () => {
	return new Promise(resolve => {
		shell.cd(`src/`)
		shell.exec(`curl ${logo} > logo.png`, () => {
			resolve()
		})
		shell.exec(`mkdir assets`)
		shell.exec(`mkdir components`)
	})
}

const updateStoreFolder = () => {
	return new Promise(resolve => {
		shell.exec(`mkdir store`, () => {
			Object.keys(store).forEach((storeFile, i) => {
				fs.writeFile(`${appDirectory}/src/store/${storeFile}`, store[storeFile], function(err) {
					if(err) { return console.log(err)}
				})
			})
			resolve()})
	})
}

const updateModels = () => {
	return new Promise(resolve => {
		shell.exec('mkdir models')
		shell.cd('models/')
		shell.exec('mkdir App', () => {
			Object.keys(appStore).forEach((file, i) => {
				fs.writeFile(`${appDirectory}/src/models/App/${file}`, appStore[file], function(err) {
					if(err) { return console.log(err)}
				})
			})
			resolve()
		})
	})
}

const copyFolderToRepo = () => {
	return new Promise(resolve => {
		shell.exec(`mkdir src`, () => {
			Object.keys(templates).forEach((fileName, i) => {
					fs.writeFile(`${appDirectory}/src/${fileName}`, templates[fileName], function(err) {
						if(err) { return console.log(err)}
						// res()
					})
			})
			resolve()})
	})
}

const copyComponentGenerator = () => {
	return new Promise(resolve => {
		shell.exec(`mkdir generator`, () => {
			Object.keys(generator).forEach((fileName, i) => {
				fs.writeFile(`${appDirectory}/generator/${fileName}`, generator[fileName], function(err) {
					if(err) { return console.log(err)}
				})
			})
			resolve()})
	})
}

const updateTemplates = () => {
	return new Promise(resolve => {
		let promises = []
		Object.keys(files).forEach((fileName, i) => {
			Promise[i] = new Promise(res => {
				fs.writeFile(`${appDirectory}/${fileName}`, files[fileName], function(err) {
					if(err) { return console.log(err)}
					res()
				})
			})
		})
		Promise.all(promises).then(() => {resolve()})
	})
}

run()