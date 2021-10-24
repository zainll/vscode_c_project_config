"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const vscode = require("vscode");
const fs = require("fs-extra");
const path = require("path");
const vscode_ui_1 = require("./vscode-ui");
class Project {
    constructor(context) {
        this.directories = new Array('.vscode', 'build', 'include', 'lib', 'src', 'script', 'tests');
        this.context = context;
    }
    createFiles({ type, location }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasksPath = path.join(this.context.extensionPath, 'templates', 'tasks.json');
                const launchPath = path.join(this.context.extensionPath, 'templates', 'launch.json');
                const settingsPath = path.join(this.context.extensionPath, 'templates', 'settings.json');
                
                const mainPath = path.join(this.context.extensionPath, 'templates', type, `main.${type}`);
                const mainCMakeListsfilePath = path.join(this.context.extensionPath, 'templates', type, 'CMakeLists.txt');               
                const sumfilePath = path.join(this.context.extensionPath, 'templates', type, 'AddTwoNumber.c');             
                const sumHeaderfilePath = path.join(this.context.extensionPath, 'templates', 'include', 'AddTwoNumber.h');             

                const makefilePath = path.join(this.context.extensionPath, 'templates', type, 'Makefile');
                const CMakeListsfilePath = path.join(this.context.extensionPath, 'templates', 'CMakeLists.txt');

                const testsCMakeListsfilePath = path.join(this.context.extensionPath, 'templates', 'tests', 'CMakeLists.txt');
                const testsMainfilePath = path.join(this.context.extensionPath, 'templates', 'tests', 'Test.cpp');

                fs.writeFileSync(path.join(location, '.vscode', 'tasks.json'), fs.readFileSync(tasksPath, 'utf-8'));
                fs.writeFileSync(path.join(location, '.vscode', 'launch.json'), fs.readFileSync(launchPath, 'utf-8'));
                fs.writeFileSync(path.join(location, '.vscode', 'settings.json'), fs.readFileSync(settingsPath, 'utf-8'));
                fs.writeFileSync(path.join(location, 'src', `main.${type}`), fs.readFileSync(mainPath, 'utf-8'));
                fs.writeFileSync(path.join(location, 'src', 'CMakeLists.txt'), fs.readFileSync(mainCMakeListsfilePath, 'utf-8'));
                fs.writeFileSync(path.join(location, 'src', 'AddTwoNumber.c'), fs.readFileSync(sumfilePath, 'utf-8'));
                fs.writeFileSync(path.join(location, 'include', 'AddTwoNumber.h'), fs.readFileSync(sumHeaderfilePath, 'utf-8'));

                fs.writeFileSync(path.join(location, 'Makefile'), fs.readFileSync(makefilePath, 'utf-8'));
                fs.writeFileSync(path.join(location, 'CMakeLists.txt'), fs.readFileSync(CMakeListsfilePath, 'utf-8'));
                
                fs.writeFileSync(path.join(location, 'tests', 'CMakeLists.txt'), fs.readFileSync(testsCMakeListsfilePath, 'utf-8'));
                fs.writeFileSync(path.join(location, 'tests', 'Test.cpp'), fs.readFileSync(testsMainfilePath, 'utf-8'));
                
                vscode.workspace.openTextDocument(path.join(location, 'src', 'main.cpp'))
                    .then(doc => vscode.window.showTextDocument(doc, { preview: false }));
                
                const batfilePath = path.join(this.context.extensionPath, 'templates', 'script');
                const scriptPath = path.join(location, 'script')
                fs.copy(batfilePath, scriptPath, function (err) { 
                    if (err){ 
                        console.log('An error occured while copying the folder.') 
                        return console.error(err) 
                    } 
                    console.log('Copy completed!') 
                    });

                const gtestfilePath = path.join(this.context.extensionPath, 'templates', 'tests', 'googletest');
                const resultPath = path.join(location, 'tests', 'googletest')
                fs.copy(gtestfilePath, resultPath, function (err) { 
                    if (err){ 
                        console.log('An error occured while copying the folder.') 
                        return console.error(err) 
                    } 
                    console.log('Copy completed!') 
                    });
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    createFolders(location) {
        return __awaiter(this, void 0, void 0, function* () {
            this.directories.forEach((dir) => {
                try {
                    fs.ensureDirSync(path.join(location, dir));
                }
                catch (err) {
                    console.error(err);
                }
            });
        });
    }
    createProject(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield vscode_ui_1.VSCodeUI.openDialogForFolder();
            if (result && result.fsPath) {
                yield vscode.commands.executeCommand('vscode.openFolder', result);
                yield this.createFolders(result.fsPath);
                yield this.createFiles({ type, location: result.fsPath });
            }
        });
    }
}
exports.Project = Project;
//# sourceMappingURL=project.js.map