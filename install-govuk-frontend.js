const exec = require('child_process').execSync

const packageJson = require('./package.json')

// Check if we've got govuk-frontend installed and install it if not
try {
  require.resolve('govuk-frontend/package.json')
} catch {
  console.log('govuk-frontend not found, installing...')
  exec('npm install --no-save govuk-frontend@' + packageJson.peerDependencies['govuk-frontend'])
}

// Check we've got the right version, and die if we don't
const govPackageJson = require('govuk-frontend/package.json')
if(govPackageJson.version !== packageJson.peerDependencies['govuk-frontend']) {
  console.error('govuk-frontend', govPackageJson.version, 'found. Expected', packageJson.peerDependencies['govuk-frontend'])
  console.error('Please delete node_modules and npm install again.')
  process.exit(1)
}
