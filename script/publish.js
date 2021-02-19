const exec = require('execa')
const fs = require('fs-extra')
const prettier = require('prettier');
const semver = require('semver')

function reWritePkg () {
    const pkg = require('../package.json')
    pkg.version = 
    fs.writeFileSync(
        path.resolve(projectPath, 'package.json'),
        // 删除一个包之后 json会多了一些空行。sortPackage 可以删除掉并且排序
        // prettier 会容忍一个空行
        prettier.format(JSON.stringify(sortPackage(projectPkg)), {
          parser: 'json',
        }),
      );
}

function publish () {
    const gitArgs = [`clone`, githubUrl, `--depth=1`]
    exec(
        `npm`,
        gitArgs,
        process.env.TEST
          ? {}
          : {
              stdout: process.stdout,
              stderr: process.stderr,
              stdin: process.stdin,
            },
      )
}


reWritePkg()
publish()

