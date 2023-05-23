const LOGOUT = [
    {
      value: 'logout',
      label: 'Log out interactively from environments, such as Salesforce orgs and compute environments.',
      usage:"sf logout [--json] [--no-prompt]",
      flags:`FLAGS
--no-prompt  Don't prompt for confirmation; logs you out of all environments.

GLOBAL FLAGS
--json  Format output as json.`,
      description:`Log out interactively from environments, such as Salesforce orgs and compute environments.

By default, the command prompts you to select which environments you want to log out of. Use --no-prompt to not be prompted and log out of all environments.

Be careful! If you log out of a scratch org without having access to its password, you can't access the scratch org again, either through the CLI or the Salesforce UI.`,
      examples: [
        {
          "title":'Interactively select the environments to log out of',
          "command":"sf logout"
        },
        {
          "title":'Log out of all environments, without being prompted',
          "command":"sf logout --no-prompt"
        }
      ]
    },
    {
        value: 'logout-org',
        label: 'Log out of a specified Salesforce org.',
        usage:"sf logout org -o <value> [--json] [--no-prompt]",
        flags:`FLAGS
-o, --target-org=<value>  (required) Org alias or username to log out of.
--no-prompt               Don't prompt for confirmation.

GLOBAL FLAGS
--json  Format output as json.`,
        description:` Log out of a specified Salesforce org.

By default, the command prompts you to confirm that you want to log out of the specified org. Use --no-prompt to not be prompted.

Be careful! If you log out of a scratch org without having access to its password, you can't access the scratch org again, either through the CLI or the Salesforce UI.`,
        examples: [
          {
            "title":'Log out of an org with alias "ci-org"',
            "command":"sf logout org --target-org ci-org"
          },
          {
            "title":"If your org doesn't have an alias, specify the username that you used when you logged into it",
            "command":"sf logout org --target-org jdoe@example.org"
          }
        ],
        CONFIG_VARIABLE:[
            {
              "name":"apiVersion",
              "description":"API version of your project. Default: API version of your Dev Hub org. (sfdx only)"
            },
            {
              "name":"instanceUrl",
              "description":"URL of the Salesforce instance hosting your org. Default: https://login.salesforce.com. (sfdx only)"
            },
            {
                "name":"target-org",
                "description":"Username or alias of the org that all commands run against by default. (sf only)"
              }]
      },
      {
        value: 'logout-functions',
        label: 'Log out of your Salesforce Functions account.',
        usage:"sf logout functions [--json]",
        flags:`GLOBAL FLAGS
--json  Format output as json.`,
        examples: [
          {
            "title":'Log out',
            "command":"sf logout functions"
          }
        ]
    }
  ]

export default LOGOUT