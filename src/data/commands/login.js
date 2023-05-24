const LOGIN = [
    {
      value: 'login',
      label: 'Log interactively into an environment, such as a Salesforce org.',
      usage:"sf login",
      description:`Log interactively into an environment, such as a Salesforce org.

Logging into an environment authorizes the CLI to run other commands that connect to that environment, such as deploying or retrieving metadata to and from an org.

The command first prompts you to choose an environment from a list of available ones. It then opens a browser to the appropriate login URL, such as https://login.salesforce.com for an org. Then, depending on the environment you choose, the command prompts for other actions, such as giving the environment an alias or setting it as your default.

This command is fully interactive and has no flags other than displaying the command-line help. Each environment has its own specific login command, such as "sf login org", which usually provide more flags than this interactive one. For more information about the interactive prompts from this command, see the help for the environment-specific command, such as "sf login org --help".`,
      examples: [
        {
          "title":'Log in interactively',
          "command":"sf login"
        }
      ]
    },
    {
        value: 'login-functions',
        label: 'Log in to Salesforce Functions.',
        usage:"sf login functions",
        description:`Log in to Salesforce Functions.

This step is required to develop or deploy Salesforce Functions.`,
        examples: [
          {
            "title":'Log in to Salesforce Functions',
            "command":"sf login functions"
          }
        ]
      },
      {
        value: 'login-functions-jwt',
        label: 'Login using JWT instead of default web-based flow. This will authenticate you with both sf and Salesforce Functions.',
        usage:"sf login functions jwt -u <value> -f <value> -i <value> [--json] [-l <value> | ] [-a <value>] [-d] [-v]",
        flags:`FLAGS
-a, --alias=<value>         Alias for the org.
-d, --set-default           Set the org as the default that all org-related commands run against.
-f, --keyfile=<value>       (required) Path to JWT keyfile.
-i, --clientid=<value>      (required) OAuth client ID.
-l, --instance-url=<value>  The login URL of the instance the org lives on.
-u, --username=<value>      (required) Authentication username.
-v, --set-default-dev-hub   Set the org as the default Dev Hub for scratch org creation.

GLOBAL FLAGS
--json  Format output as json.
    `,
        description:`Login using JWT instead of default web-based flow. This will authenticate you with both sf and Salesforce Functions.

Use this command when executing from a script.`,
        examples: [
          {
            "title":'Log in using JWT',
            "command":"sf login functions jwt --username example@username.org --keyfile file.key --clientid 123456"
          },
          {
            "title":'Log in and specify the org alias and URL, set as default org and default Dev Hub, and format output as JSON',
            "command":"sf login functions jwt --username example@username.org --keyfile file.key --clientid 123456 --alias org-alias \\ --set-default --set-default-dev-hub --instance-url https://path/to/instance --json"
          }
        ]
      },
      {
        value: 'login-org',
        label: 'Log in to a Salesforce org using the web server flow.',
        usage:"sf login org [--json] [-a <value>] [-b <value>] [-i <value>] [-l <value>] [-d] [-v]",
        flags:`FLAGS
-a, --alias=<value>         Alias for the org.
-b, --browser=<value>       Browser in which to open the org.
-d, --set-default           Set the org as the default that all org-related commands run against.
-i, --clientid=<value>      OAuth client id (also called consumer key) of your custom connected app.
-l, --instance-url=<value>  [default: https://login.salesforce.com] URL of the instance that the org lives on.
                            (defaults to https://login.salesforce.com)
-v, --set-default-dev-hub   Set the org as the default Dev Hub for scratch org creation.

GLOBAL FLAGS
--json  Format output as json.
    `,
        description:`Log in to a Salesforce org using the web server flow.

Opens a Salesforce instance URL in a web browser so you can enter your credentials and log in to your org. After you log in, you can close the browser window.

Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving a project. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch orgs.

We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when running commands that require it. If you don't set an alias, you use the username that you specified when you logged in to the org. If you run multiple commands that reference the same org, consider setting the org as your default.

Use --set-default for your default scratch org or sandbox, or --set-default-dev-hub for your default Dev Hub.

By default, this command uses the global out-of-the-box connected app in your org. If you need more security or control, such as setting the refresh token timeout or specifying IP ranges, create your own connected app using a digital certificate. Make note of the consumer key (also called cliend id) that's generated for you. Then specify the consumer key with the --clientid flag.`,
        examples: [
          {
            "title":'Run the command with no flags to open the default Salesforce login page (https://login.salesforce.com)',
            "command":"sf login org"
          },
          {
            "title":'Log in to your Dev Hub, set it as your default Dev Hub, and set an alias that you reference later when you create a scratch org',
            "command":"sf login org --set-default-dev-hub --alias dev-hub"
          },
          {
            "title":'Log in to a sandbox and set it as your default org',
            "command":"sf login org --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com --set-default"
          },
          {
            "title":'Use --browser to specify a specific browser, such as Google Chrome',
            "command":"sf login org --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com --set-default \\ --browser chrome"
          },
          {
            "title":'Use your own connected app by specifying its consumer key (also called client ID)',
            "command":"sf login org --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com --set-default \\ --browser chrome --clientid 04580y4051234051"
          }
        ]
      },
      {
        value: 'login-org-jwt',
        label: 'Log in to a Salesforce org using a JSON web token (JWT)',
        usage:"sf login org jwt [--json] [-a <value>] [-l <value>] [-f <value> -u <value> -i <value>] [-d] [-v]",
        flags:`FLAGS
-a, --alias=<value>         Alias for the org.
-d, --set-default           Set the org as the default that all org-related commands run against.
-f, --keyfile=<value>       Path to a file containing the private key.
-i, --clientid=<value>      OAuth client id (also called consumer key) of your custom connected app.
-l, --instance-url=<value>  [default: https://login.salesforce.com] URL of the instance that the org lives on.
-u, --username=<value>      Username of the user logging in.
-v, --set-default-dev-hub   Set the org as the default Dev Hub for scratch org creation.

GLOBAL FLAGS
--json  Format output as json.
    `,
        description:`Log in to a Salesforce org using a JSON web token (JWT).

Use this command in automated environments where you can't interactively log in with a browser, such as in CI/CD scripts.

Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving a project. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch orgs.

Complete these steps before you run this command:

1. Create a digital certificate (also called digital signature) and the private key to sign the certificate. You can use your own key and certificate issued by a certification authority. Or use OpenSSL to create a key and a self-signed digital certificate.

2. Store the private key in a file on your computer. When you run this command, you set the --keyfile flag to this file.

3. Create a custom connected app in your org using the digital certificate. Make note of the consumer key (also called client id) that's generated for you. Be sure the username of the user logging in is approved to use the connected app. When you run this command, you set the --clientid flag to the consumer key.

See https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm for more information.

We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when running commands that require it. If you don’t set an alias, you use the username that you specified when you logged in to the org. If you run multiple commands that reference the same org, consider setting the org as your default. 

Use --set-default for your default scratch org or sandbox, or --set-default-dev-hub for your default Dev Hub.`,
        examples: [
          {
            "title":'Log into an org with username jdoe@example.org and on the default instance URL (https://login.salesforce.org). The private key is stored in the file /Users/jdoe/JWT/server.key and the command uses the connected app with consumer key (client id) 04580y4051234051.',
            "command":"sf login org jwt --username jdoe@example.org --keyfile /Users/jdoe/JWT/server.key --clientid 04580y4051234051"
          },
          {
            "title":'Set the org as the default and give it an alias',
            "command":"sf login org jwt --username jdoe@example.org --keyfile /Users/jdoe/JWT/server.key --clientid 04580y4051234051 \\ --alias ci-org --set-default"
          },
          {
            "title":'Set the org as the default Dev Hub and give it an alias',
            "command":"sf login org jwt --username jdoe@example.org --keyfile /Users/jdoe/JWT/server.key --clientid 04580y4051234051 \\ --alias ci-dev-hub --set-default-dev-hub"
          },
          {
            "title":'Log in to a sandbox using URL https://MyDomainName--SandboxName.sandbox.my.salesforce.com',
            "command":"sf login org jwt --username jdoe@example.org --keyfile /Users/jdoe/JWT/server.key --clientid 04580y4051234051 \\ --alias ci-org --set-default --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com"
          }
        ]
      }
  ]

export default LOGIN