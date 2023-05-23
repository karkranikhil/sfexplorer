import CONFIG from "./commands/config";
import DEPLOY from './commands/deploy'
import GENERATE from './commands/generate'
import ENVVAL from './commands/envval'
import HELP from "./commands/help";
import INFO from "./commands/info";
import LOGIN from "./commands/login";
import LOGOUT from "./commands/logout";
import RETRIEVE from "./commands/retrieve";
import RUN from "./commands/run";
import SEARCH from "./commands/search";
import UPDATE from "./commands/update";
export const secondaryOptions = {
  config: CONFIG,
  deploy:DEPLOY,
  generate:GENERATE,
  envval:ENVVAL,
  help:HELP,
  info:INFO,
  login:LOGIN,
  logout:LOGOUT,
  retrieve:RETRIEVE,
  run:RUN,
  search:SEARCH,
  update:UPDATE
};
