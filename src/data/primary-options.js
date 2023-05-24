const options = [
  { value: 'config', label: 'Configuration' },
  { value: 'deploy', label: 'Deploy' },
  { value: 'envval', label: 'Environment' },
  { value: 'generate', label: 'Generate' },
  { value: 'retrieve', label: 'Retrieve' },
  { value: 'help', label: 'Help' },
  { value: 'login', label: 'Login' },
  { value: 'logout', label: 'Logout' },
  // { value: 'plugins', label: 'Plugins' },
  
  { value: 'run', label: 'Run' },
  { value: 'search', label: 'Search' },
  { value: 'update', label: 'Update' },
  // { value: 'version', label: 'Version' },
  
 
];

export const primaryOptions = options.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});
