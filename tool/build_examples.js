"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var baseDirPath = "./src/Assets/Data";
var sourceDirPath = "/Demo";
var destDirPath = "/Code";
fs.readdir(path.join(baseDirPath, sourceDirPath), function (error, componentDirs) {
    componentDirs.forEach(function (componentDir) {
        fs.readdir(path.join(baseDirPath, sourceDirPath, componentDir), function (error, demoFiles) {
            var componentNames = [];
            demoFiles.forEach(function (demoFile) {
                if (demoFile == 'index.ts') {
                    return;
                }
                var data = fs.readFileSync(path.join(baseDirPath, sourceDirPath, componentDir, demoFile), 'utf8');
                var componentName = demoFile.replace('.tsx', '').replace('Demo', 'Code');
                var componentCode = [
                    "const " + componentName + " = () => `",
                    data,
                    "`;",
                    '\n',
                    '\n',
                    "export default " + componentName
                ];
                componentNames.push(componentName);
                if (!fs.existsSync(path.join(baseDirPath, destDirPath, componentDir))) {
                    fs.mkdirSync(path.join(baseDirPath, destDirPath, componentDir));
                }
                fs.writeFileSync(path.join(baseDirPath, destDirPath, componentDir, componentName + ".ts"), componentCode.join(''));
            });
            var indexData = [
                componentNames.map(function (componentName) {
                    return "import " + componentName + " from './" + componentName + "';";
                }).join('\n'),
                "\n",
                "\n",
                "export {" + componentNames.join(', ') + "};"
            ];
            fs.writeFileSync(path.join(path.join(baseDirPath, destDirPath, componentDir, 'index.ts')), indexData.join(''));
        });
    });
});
