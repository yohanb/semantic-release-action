import core from '@actions/core';
import exec from './_exec';

/**
 * Clean up `.npmrc` file in the repo after releasing
 * @returns {Promise<never>}
 */
export default async () => {
  const {stdout, stderr} = await exec(`rm -f .npmrc`);
  core.debug(stdout);

  if (stderr) {
    return Promise.reject(stderr);
  }
};
