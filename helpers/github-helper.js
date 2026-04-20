const { execSync } = require('child_process');

const gitHasChanges = () => {
  try {
    const output = execSync('git status --porcelain').toString().trim();
    
    return output !== '';
  } catch (error) {
    console.error('Error checking Git status:', error);
    return false;
  }
}

module.exports = { gitHasChanges };

