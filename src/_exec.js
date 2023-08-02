import util from 'util';
export default util.promisify(require('child_process').exec);
