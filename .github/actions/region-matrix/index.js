const core = require('@actions/core');

const regionsMap = {
  'env1': 'region-1',
  'env2': 'region-2',
  'env3': 'region-3',
  'env4': 'region-4',
  'env5': 'region-5',
};

const inputRegions = core.getInput('regions', { required: true }).split(' ');
const selectedRegions = Object.entries(regionsMap).reduce((result, [key, val]) => {
  if (inputRegions.includes(key)) {
    return [...result, val];
  } else {
    return result;
  }
}, []);
console.log(selectedRegions);
core.setOutput('regions', JSON.stringify(selectedRegions));