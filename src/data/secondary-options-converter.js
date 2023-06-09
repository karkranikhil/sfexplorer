import ALIAS from "./commandsConverter/alias";
import AUTH from './commandsConverter/auth'
import AUTOCOMPLETE from './commandsConverter/autocomplete'
import CONFIG from './commandsConverter/config'
import DOCTOR from "./commandsConverter/doctor";
import ANALYTICS from "./commandsConverter/analytics";
import APEX from "./commandsConverter/apex";
import CMDT from "./commandsConverter/cmdt";
import COMMUNITY from "./commandsConverter/community";
import DATA from "./commandsConverter/data";
import LIGHTNING from "./commandsConverter/lightning";
import LIMITS from "./commandsConverter/limits";

import MDAPI from "./commandsConverter/mdapi";
import ORG from "./commandsConverter/org";
import PACKAGE1 from "./commandsConverter/package1";
import PACKAGE from "./commandsConverter/package";
import PROJECT from "./commandsConverter/project";
import SCHEMA from "./commandsConverter/schema";
import SOURCE from "./commandsConverter/source";
import STATICRESOURCE from "./commandsConverter/staticresource";
import USER from "./commandsConverter/user";
import VISUALFORCE from "./commandsConverter/visualforce";

import HELP from "./commandsConverter/help";
import INFO from "./commandsConverter/info";
import SEARCH from "./commandsConverter/search";
import WHICH from "./commandsConverter/which";

export const secondaryOptionsConverter = {
    alias: ALIAS,
    auth:AUTH,
    autocomplete:AUTOCOMPLETE,
    config:CONFIG,
    doctor:DOCTOR,
    analytics:ANALYTICS,
    apex:APEX,
    cmdt:CMDT,
    community:COMMUNITY,
    data:DATA,
    lightning:LIGHTNING,
    limits:LIMITS,
    mdapi:MDAPI,
    org:ORG,
    package1:PACKAGE1,
    package:PACKAGE,
    project:PROJECT,
    schema:SCHEMA,
    source:SOURCE,
    staticresource:STATICRESOURCE,
    user:USER,
    visualforce:VISUALFORCE,
    help:HELP,
    info:INFO,
    search:SEARCH,
    which:WHICH
};