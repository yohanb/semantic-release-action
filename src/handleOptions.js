import core from '@actions/core';
import stringToJson from '@cycjimmy/awesome-js-funcs/esm/typeConversion/stringToJson';
import inputs from './inputs.json';

/**
 * Handle Branches Option
 * @returns {{}|{branch: string}}
 */
const handleBranchesOption = () => {
  const branchesOption = {};
  const branches = core.getInput(inputs.branches);
  const branch = core.getInput(inputs.branch);

  core.debug(`branches input: ${branches}`);
  core.debug(`branch input: ${branch}`);

  const semanticVersion = require('semantic-release/package.json').version;
  const semanticMajorVersion = Number(semanticVersion.replace(/\..+/g, ''));
  core.debug(`semanticMajorVersion: ${semanticMajorVersion}`);

  // older than v16
  if (semanticMajorVersion < 16) {
    if (!branch) {
      return branchesOption;
    }

    branchesOption.branch = branch;
    return branchesOption;
  }

  // above v16
  const strNeedConvertToJson = branches || branch || '';

  if (!strNeedConvertToJson) {
    return branchesOption;
  }

  const jsonOrStr = stringToJson('' + strNeedConvertToJson);
  core.debug(`Converted branches attribute: ${JSON.stringify(jsonOrStr)}`);
  branchesOption.branches = jsonOrStr;
  return branchesOption;
};

/**
 * Handle DryRun Option
 * @returns {{}|{dryRun: boolean}}
 */
const handleDryRunOption = () => {
  const dryRun = core.getInput(inputs.dry_run);

  switch (dryRun) {
    case 'true':
      return {dryRun: true};

    case 'false':
      return {dryRun: false};

    default:
      return {};
  }
};

/**
 * Handle Ci Option
 * @returns {{}|{ci: boolean}}
 */
const handleCiOption = () => {
  const ci = core.getInput(inputs.ci);

  switch (ci) {
    case 'true':
      return { ci: true, noCi: false };

    case 'false':
      return { ci: false, noCi: true };

    default:
      return {};
  }
};

/**
 * Handle Extends Option
 * @returns {{}|{extends: Array}|{extends: String}}
 */
const handleExtends = () => {
  const extend = core.getInput(inputs.extends);

  if (extend) {
    const extendModuleNames = extend.split(/\r?\n/)
      .map((name) => name.replace(/(?<!^)@.+/, ''))
    return {
      extends: extendModuleNames
    };
  } else {
    return {};
  }
};

/**
 * Handle TagFormat Option
 * @returns {{}|{tagFormat: String}}
 */
const handleTagFormat = () => {
  const tagFormat = core.getInput(inputs.tag_format);

  if (tagFormat) {
    return {
      tagFormat
    };
  } else {
    return {};
  }
};

export {
  handleBranchesOption,
  handleDryRunOption,
  handleCiOption,
  handleExtends,
  handleTagFormat,
}
