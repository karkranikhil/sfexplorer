const options = [
  { value: 'config', label: 'config' },
  { value: 'deploy', label: 'deploy' },
  { value: 'envval', label: 'env' },
  { value: 'generate', label: 'generate' },
  { value: 'help', label: 'help' },
  { value: 'login', label: 'login' },
  { value: 'logout', label: 'logout' },
  { value: 'plugins', label: 'plugins' },
  { value: 'retrieve', label: 'retrieve' },
  { value: 'run', label: 'run' },
  { value: 'search', label: 'search' },
  { value: 'update', label: 'update' },
  { value: 'version', label: 'version' },
  
 
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
