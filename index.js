import exec from './src/_exec';
import path from 'path';
import index from './src/index';

const run = async () => {
  // Install Dependencies
  {
    const {stdout, stderr} = await exec('npm --loglevel error ci --only=prod', {
      cwd: path.resolve(__dirname)
    });
    console.log(stdout);
    if (stderr) {
      return Promise.reject(stderr);
    }
  }

  index();
};

run().catch(console.error);
