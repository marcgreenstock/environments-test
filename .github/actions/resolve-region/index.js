const core = require('@actions/core');

const regionsMap = {
  'env1': 'region-1',
  'env2': 'region-2',
  'env3': 'region-3',
  'env4': 'region-4',
  'env5': 'region-5',
};

const inputRegion = core.getInput('region', { required: true });
core.setOutput('region', JSON.stringify(regionsMap[inputRegion]));