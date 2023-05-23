const CONFIG = [
    {
      value: 'config-get',
      label: 'Get the value of a configuration variable.',
      usage:"config get [--json] [--verbose]",
      flags:`FLAGS
 --verbose  Display whether the configuration variables are set locally or globally.
    
GLOBAL FLAGS
--json  Format output as json.
    `,
      description:`Get the value of a configuration variable.

Run "sf config list" to see all the configuration variables you've set. Global configuration variable are always
displayed; local ones are displayed if you run the command in a project directory. Run "sf config set" to set a
configuration variable.`,
      examples: [
        {
          "title":'Get the value of the "target-org" configuration variable.',
          "command":"sf config get target-org"
        },
        {
          "title":"Get multiple configuration variables and display whether they're set locally or globally",
          "command":"sf config get target-org api-version --verbose"
        }
      ]
    },
    {
      value: 'config-list',
      label: 'List the configuration variables',
      usage:"sf config list [--json]",
      flags:`GLOBAL FLAGS
--json  Format output as json.
    `,
      description:`List the configuration variables that you've previously set.

Global configuration variables apply to any directory and are always displayed. If you run this command from a project
directory, local configuration variables are also displayed.
    `,
      examples:[
        {
          "title":'List both global configuration variables and those local to your project',
          "command":"sf config list"
        }
      ] 
    },
    {
      value: 'config-set',
      label: 'Set one or more configuration variables',
      usage:"sf config set [--json] [-g]",
      flags:`FLAGS
-g, --global  Set the configuration variables globally, so they can be used from any directory.

GLOBAL FLAGS
--json  Format output as json.
    `,
      description:`Set one or more configuration variables, such as your default org.

Use configuration variables to set CLI defaults, such as your default org or the API version you want the CLI to use.
For example, if you set the "target-org" configuration variable, you don't need to specify it as a "sf deploy
metadata" flag if you're deploying to your default org.

Local configuration variables apply only to your current project. Global variables, specified with the --global flag,
apply in any directory.

The resolution order if you've set a flag value in multiple ways is as follows:

1. Flag value specified at the command line.

2. Local (project-level) configuration variable.

3. Global configuration variable.

Run "sf config list" to see the configuration variables you've already set and their level (local or global).
    `,
      examples: [
        {
          "title":'Set the local target-org configuration variable to an org username',
          "command":"sf config set target-org=me@my.org"
        },
        {
          "title":'Set the local target-org configuration variable to an alias',
          "command":"sf config set target-org=my-scratch-org"
        },
        {
          "title":'Set the global target-org configuration variable',
          "command":"sf config set --global target-org=my-scratch-org"
        }
      ],
      CONFIG_VARIABLE:[
        {
          "name":"apiVersion",
          "description":"API version of your project. Default: API version of your Dev Hub org. (sfdx only)"
        },
        {
          "name":"disableTelemetry",
          "description":"Disables the collection of usage and user environment information, etc. Default: false. (sfdx only)"
        },
        {
          "name":"instanceUrl",
          "description":"URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com. (sfdx only)"
        },
        {
          "name":"maxQueryLimit",
          "description":"Maximum number of Salesforce records returned by a CLI command. Default: 10,000. (sfdx only)"
        },
        {
          "name":"restDeploy",
          "description":"Whether deployments use the Metadata REST API (true) or SOAP API (false, default value). (sfdx only)"
        },
        {
          "name":"target-org ",
          "description":"Username or alias of the org that all commands run against by default. (sf only)"
        },
        {
          "name":"target-dev-hub ",
          "description":"Username or alias of your default Dev Hub org. (sf only)"
        }    
           
      ]
    },
    {
      value: 'config-unset',
      label: 'Unset local or global configuration variables.',
      usage:"sf config unset [--json] [-g]",
      flags:`FLAGS
-g, --global  Unset the configuration variables globally, so they can no longer be used from any directory.

GLOBAL FLAGS
--json  Format output as json.`,
      description:`Unset local or global configuration variables.

Local configuration variables apply only to your current project. Global configuration variables apply in any
directory. `,
      examples: [
        {
          "title":'Unset the local "target-org" configuration variable',
          "command":"sf config unset target-org"
        },
        {
          "title":'Unset multiple configuration variables globally',
          "command":"sf config unset target-org api-version --global"
        }
      ],
      CONFIG_VARIABLE:[
        {
          "name":"apiVersion",
          "description":"API version of your project. Default: API version of your Dev Hub org. (sfdx only)"
        },
        {
          "name":"disableTelemetry",
          "description":"Disables the collection of usage and user environment information, etc. Default: false. (sfdx only)"
        },
        {
          "name":"instanceUrl",
          "description":"URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com. (sfdx only)"
        },
        {
          "name":"maxQueryLimit",
          "description":"Maximum number of Salesforce records returned by a CLI command. Default: 10,000. (sfdx only)"
        },
        {
          "name":"restDeploy",
          "description":"Whether deployments use the Metadata REST API (true) or SOAP API (false, default value). (sfdx only)"
        },
        {
          "name":"target-org ",
          "description":"Username or alias of the org that all commands run against by default. (sf only)"
        },
        {
          "name":"target-dev-hub ",
          "description":"Username or alias of your default Dev Hub org. (sf only)"
        }    
           
      ]
    }
  ]


  export default CONFIG