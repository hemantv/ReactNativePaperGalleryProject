import * as fs from 'fs';
import * as path from 'path';

const baseDirPath = `./src/Assets/Data`;
const sourceDirPath = `/Demo`;
const destDirPath = `/Code`;

fs.readdir(path.join(baseDirPath, sourceDirPath), (error, componentDirs) => {
    componentDirs.forEach(componentDir => {
        fs.readdir(path.join(baseDirPath, sourceDirPath, componentDir), (error, demoFiles) => {
            const componentNames: string[] = [];

            demoFiles.forEach(demoFile => {
                if (demoFile == 'index.ts') {
                    return;
                }

                const data = fs.readFileSync(path.join(baseDirPath, sourceDirPath, componentDir, demoFile), 'utf8');
                const componentName = demoFile.replace('.tsx', '').replace('Demo', 'Code');
                const componentCode = [
                    `const ${componentName} = () => \``,
                    data,
                    `\`;`,
                    '\n',
                    '\n',
                    `export default ${componentName}`
                ];

                componentNames.push(componentName);

                if (!fs.existsSync(path.join(baseDirPath, destDirPath, componentDir))) {
                    fs.mkdirSync(path.join(baseDirPath, destDirPath, componentDir));
                }
                fs.writeFileSync(path.join(baseDirPath, destDirPath, componentDir, `${componentName}.ts`), componentCode.join(''));
            });

            const indexData = [
                componentNames.map(componentName => {
                    return `import ${componentName} from './${componentName}';`
                }).join('\n'),
                `\n`,
                `\n`,
                `export {${componentNames.join(', ')}};`
            ]
            fs.writeFileSync(path.join(path.join(baseDirPath, destDirPath, componentDir, 'index.ts')), indexData.join(''));
        });
    });
});