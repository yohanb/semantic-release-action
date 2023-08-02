import path from 'path';
import core from '@actions/core';
import outputs from './outputs.json';

/**
 * setUpJob
 * @returns {Promise<void>}
 */
export default async () => {
  // set outputs default
  core.setOutput(outputs.new_release_published, 'false');

  core.debug('action_workspace: ' + path.resolve(__dirname, '..'));
  core.debug('process.cwd: ' + process.cwd());

  return Promise.resolve();
};
