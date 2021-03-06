const exec = require('execa')
const fs = require('fs-extra')
const prettier = require('prettier');
const semver = require('semver')
const semanticRelease = require('semantic-release');
const {WritableStreamBuffer} = require('stream-buffers');

// function publish () {
//     const gitArgs = [`publish`,]
//     exec(
//         `npm`,
//         gitArgs,
//         process.env.TEST
//           ? {}
//           : {
//               stdout: process.stdout,
//               stderr: process.stderr,
//               stdin: process.stdin,
//             },
//       )
// }

async function publish () {
    // const stdoutBuffer = WritableStreamBuffer();
// const stderrBuffer = WritableStreamBuffer();

try {
  const result = await semanticRelease({
    // Core options
    branches: [
      '+([0-9])?(.{+([0-9]),x}).x',
      'main',
      'next',
      'next-major',
      {name: 'beta', prerelease: true},
      {name: 'alpha', prerelease: true}
    ],
    repositoryUrl: 'https://github.com/zongzheng123/zmi.git',
    // Shareable config
    // extends: 'my-shareable-config',
    // Plugin options
    // githubUrl: 'https://my-ghe.com',
    // githubApiPathPrefix: '/api-prefix'
  }, {
    // Run semantic-release from `/path/to/git/repo/root` without having to change local process `cwd` with `process.chdir()`
    // cwd: '/path/to/git/repo/root',
    // Pass the variable `MY_ENV_VAR` to semantic-release without having to modify the local `process.env`
    env: {...process.env, MY_ENV_VAR: 'MY_ENV_VAR_VALUE'},
    // Store stdout and stderr to use later instead of writing to `process.stdout` and `process.stderr`
    // stdout: stdoutBuffer,
    // stderr: stderrBuffer
  });

  if (result) {
    const {lastRelease, commits, nextRelease, releases} = result;

    console.log(`Published ${nextRelease.type} release version ${nextRelease.version} containing ${commits.length} commits.`);

    if (lastRelease.version) {
      console.log(`The last release was "${lastRelease.version}".`);
    }

    for (const release of releases) {
      console.log(`The release was published with plugin "${release.pluginName}".`);
    }
  } else {
    console.log('No release published.');
  }

  // Get stdout and stderr content
//   const logs = stdoutBuffer.getContentsAsString('utf8');
//   const errors = stderrBuffer.getContentsAsString('utf8');
} catch (err) {
  console.error('The automated release failed with %O', err)
}
}

publish()

