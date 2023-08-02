import core from '@actions/core';
import {
  handleBranchesOption,
  handleDryRunOption,
  handleCiOption,
  handleExtends,
  handleTagFormat,
}  from './handleOptions';
import setUpJob from './setUpJob.task';
import installSpecifyingVersionSemantic from './installSpecifyingVersionSemantic.task';
import preInstall from './preInstall.task';
import cleanupNpmrc from './cleanupNpmrc.task';
import windUpJob from "./windUpJob.task.js";
import inputs from './inputs.json';
import semanticRelease from 'semantic-release';

/**
 * Release main task
 * @returns {Promise<void>}
 */
const release = async () => {
  if (core.getInput(inputs.working_directory)) {
    process.chdir(core.getInput(inputs.working_directory));
  }
  await setUpJob();
  await installSpecifyingVersionSemantic();
  await preInstall(core.getInput(inputs.extra_plugins));
  await preInstall(core.getInput(inputs.extends));

  const result = await semanticRelease({
    ...handleBranchesOption(),
    ...handleDryRunOption(),
    ...handleCiOption(),
    ...handleExtends(),
    ...handleTagFormat()
  });

  await cleanupNpmrc();
  await windUpJob(result);
};

export default () => {
  core.debug('Initialization successful');
  release().catch(core.setFailed);
};
