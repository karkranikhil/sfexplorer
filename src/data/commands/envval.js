const ENVVAL = [
    {
      value: 'env-create-compute',
      label: 'Create a compute environment for use with Salesforce Functions.',
      usage:"sf env create compute [--json] [-o <value>] [-a <value>]",
      flags:`FLAGS
-a, --alias=<value>          Alias for the created environment.
-o, --connected-org=<value>  Username or alias for the org that the compute environment should be connected to.

GLOBAL FLAGS
--json  Format output as json.`,
    description:`Create a compute environment for use with Salesforce Functions.

Compute environments must be connected to a Salesforce org. By default the command uses your local environment's connected org. Use the '--connected-org' flag to specify a specific org. Run 'sf env list' to see a list of environments.
  `,
      examples: [
        {
          "title":'Create a compute environment to run Salesforce Functions',
          "command":'sf env create compute'
        },
        {
          "title":'Connect the environment to a specific org',
          "command":'sf env create compute --connected-org=org-alias'
        },
        {
          "title":'Create an alias for the compute environment',
          "command":'sf env create compute --alias environment-alias'
        }
      ]
    },
    {
      value: 'env-create-sandbox',
      label: 'Create a sandbox org.',
      usage:"sf env create sandbox [--json] [-f <value> | -n <value> | -l Developer|Developer_Pro|Partial|Full] [-s] [-a <value>][-w <value> | --async] [-i <value> | ] [-c <value> | ] [-o <value>] [--no-prompt] [--no-track-source]",
      flags:`FLAGS
-a, --alias=<value>                                        Alias for the sandbox org.
-c, --clone=<value>                                        Name of the sandbox org to clone.
-f, --definition-file=<value>                              Path to a sandbox definition file.
-i, --poll-interval=<seconds>                              Number of seconds to wait between retries.
-l, --license-type=(Developer|Developer_Pro|Partial|Full)  [default: Developer] Type of sandbox license.
-n, --name=<value>                                         Name of the sandbox org.
-o, --target-org=<value>                                   Username or alias of the production org that contains the sandbox license.
-s, --set-default                                          Set the sandbox org as your default org.
-w, --wait=<minutes>                                       Number of minutes to wait for the sandbox org to be ready.
--async                                                    Request the sandbox creation, but don't wait for it to complete.
--no-prompt                                                Don't prompt for confirmation about the sandboxconfiguration.
--no-track-source                                          Do not use source tracking for this sandbox.

GLOBAL FLAGS
--json  Format output as json.`,
    description:`Create a sandbox org.

There are two ways to create a sandbox org: specify a definition file that contains the sandbox options or use the --name and --license-type flags to specify the two required options. If you want to set an option other than name or license type, such as apexClassId, you must use a definition file.
  `,
      examples: [
        {
          "title":'Create a sandbox org using a definition file and give it the alias "MyDevSandbox". The production org that contains the sandbox license has the alias "prodOrg".',
          "command":'sf env create sandbox -f config/dev-sandbox-def.json --alias MyDevSandbox --target-org prodOrg'
        },
        {
          "title":' Create a sandbox org by directly specifying its name and type of license (Developer) instead of using a definition file. Set the sandbox org as your default.',
          "command":'sf env create sandbox --name mysandbox --license-type Developer --alias MyDevSandbox --target-org prodOrg \ --set-default'
        }
      ]
    },
    {
      value: 'env-create-scratch',
      label: 'Create a scratch org.',
      usage:"sf env create scratch [--json] [-a <value>] [--async] [-d] [-f <value>] [-v <value>] [-c] [-e developer|enterprise|group|professional|partner-developer|partner-enterprise|partner-group|partner-professional] [-m] [-y <value>] [-w <value>] [--api-version <value>] [-i <value>] [-t]",
      flags:`FLAGS
-a, --alias=<value>            Alias for the scratch org.
-d, --set-default              Set the scratch org as your default org
-e, --edition=<option>         Salesforce edition of the scratch org. <options: developer|enterprise|group|professional|partner-developer|partner-enterprise|partner-group|partner-professional>
-f, --definition-file=<value>  Path to a scratch org definition file.
-i, --client-id=<value>        Consumer key of the Dev Hub connected app.
-t, --[no-]track-source        Use source tracking for this scratch org. Set --no-track-source to disable source tracking.
-v, --target-dev-hub=<value>   Username or alias of the Dev Hub org.
-w, --wait=<minutes>           Number of minutes to wait for the scratch org to be ready.
-y, --duration-days=<days>     Number of days before the org expires.
--api-version=<value>          Override the api version used for api requests made by this command
--async                        Request the org, but don't wait for it to complete.

PACKAGING FLAGS
-c, --no-ancestors  Don't include second-generation managed package (2GP) ancestors in the scratch org.
-m, --no-namespace  Create the scratch org with no namespace, even if the Dev Hub has a namespace.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Create a scratch org.

There are two ways to create a scratch org: specify a definition file that contains the options or use the --edition flag to specify the one required option. If you want to set options other than the edition, such as org features or settings, you must use a definition file.

You must specify a Dev Hub to create a scratch org, either with the --target-dev-hub flag or by setting your default Dev Hub with the target-dev-hub configuration variable.
  `,
      examples: [
        {
          "title":'Create a Developer edition scratch org using your default Dev Hub and give the scratch org an alias',
          "command":'sf env create scratch --edition=developer --alias my-scratch-org'
        },
        {
          "title":'Specify the Dev Hub using its alias and a scratch org definition file. Set the scratch org as your default and specify that it expires in 3 days',
          "command":'sf env create scratch --target-dev-hub=MyHub --definition-file config/project-scratch-def.json --set-default \ --duration-days 3'
        }
      ]
    },
    {
      value: 'env-delete',
      label: 'Delete an environment.',
      usage:"sf env delete [--json] [-e <value> | ] [--confirm <value>]",
      flags:`FLAGS
-e, --target-compute=<value>  Environment name.
--confirm=name...             Confirmation name.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Delete an environment.

You must include the name of the environment to delete using '--target-compute'. Run 'sf env list' to see a list of environments.

Running this command will prompt a confirmation. If you want to skip this confirmation, use the '--confirm' flag and the environment alias to skip confirmation.
  `,
      examples: [
        {
          "title":'Delete a compute environment',
          "command":'sf env delete --target-compute environment-alias'
        },
        {
          "title":'Delete without a confirmation step',
          "command":'sf env delete --target-compute environment-alias --confirm environment-alias'
        }
      ]
    },
    {
      value: 'env-delete-sandbox',
      label: 'Delete a sandbox.',
      usage:"sf env delete sandbox [--json] [-o <value>] [-p]",
      flags:`FLAGS
-o, --target-org=<value>  Sandbox alias or login user.
-p, --no-prompt           Don't prompt the user to confirm the deletion.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Delete a sandbox.

Specify a sandbox with either the username you used when you logged into it with "sf login", or the alias you gave the sandbox when you created it. Run "sf env list" to view all your environments, including sandboxes, and their aliases.
  `,
      examples: [
        {
          "title":'Delete a sandbox with alias my-sandbox',
          "command":'sf env delete sandbox --target-org=my-sandbox'
        },
        {
          "title":'Specify a username instead of an alias',
          "command":'sf env delete sandbox --target-org=myusername@example.com.qa'
        },
        {
          "title":'Delete the sandbox without prompting to confirm',
          "command":'sf env delete sandbox --target-org=my-sandbox --no-prompt'
        }
      ]
    },
    {
      value: 'env-delete-scratch',
      label: 'Delete a scratch org',
      usage:"sf env delete sandbox [--json] [-o <value>] [-p]",
      flags:`FLAGS
-o, --target-org=<value>  Scratch org alias or login user.
-p, --no-prompt           Don't prompt the user to confirm the deletion.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Delete a scratch org.

Specify a scratch org with either the username you used when you logged into it with "sf login", or the alias you gave the scratch org when you created it. Run "sf env list" to view all your environments, including scratch orgs, and their aliases.
  `,
      examples: [
        {
          "title":'Delete a scratch org with alias my-scratch-org',
          "command":'sf env delete scratch --target-org=my-scratch-org'
        },
        {
          "title":'Specify a username instead of an alias',
          "command":'sf env delete scratch --target-org=test-123456-abcdefg@example.com'
        },
        {
          "title":'Delete the scratch org without prompting to confirm',
          "command":'sf env delete scratch --target-org=my-scratch-org --no-prompt'
        }
      ]
    },
    {
      value: 'env-display',
      label: 'Display details about an environment.',
      usage:"sf env display [--json] [-e <value>]",
      flags:`FLAGS
-e, --target-env=<value>  Environment alias or login user.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Display details about an environment.

Specify an environment with either the username you used when you logged into the environment with "sf login", or the alias you gave the environment when you created it. Run "sf env list" to view all your environments and their aliases.

Output depends on the type of environment. For example, scratch org details include the access token, alias, username of the associated Dev Hub, the creation and expiration date, the generated scratch org username, and more. Compute environment details include the alias, connected orgs, creation date, project name, and more.
  `,
      examples: [
        {
          "title":'Display details about a scratch org with alias my-scratch-org',
          "command":'sf env display --target-env=my-scratch-org'
        },
        {
          "title":'Specify a username instead of an alias',
          "command":'sf env display --target-env=test-123456-abcdefg@example.com'
        },
        {
          "title":'Specify JSON format and redirect output into a file',
          "command":'sf env display --target-env=my-scratch-org --json > tmp/MyOrdDesc.json'
        }
      ]
    },
    {
      value: 'env-list',
      label: 'List the environments you’ve created or logged into.',
      usage:"sf env list [--json] [-a] [--columns <value>] [--csv] [--filter <value>] [--no-header] [--no-truncate] [--output csv|json|yaml] [--sort <value>]",
      flags:`FLAGS
-a, --all             Show all environments, even inactive ones.
--columns=<value>...  List of columns to display.
--csv                 Output in csv format [alias: --output=csv]
--filter=<value>      Filter property by partial string matching.
--no-header           Hide table header from output.
--no-truncate         Don't truncate output to fit screen.
--output=<option>     Format in which to display the output.<options: csv|json|yaml>
--sort=<value>        Column to sort by (prepend '-' for descending).

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`List the environments you've created or logged into.

By default, the command displays active environments. For orgs, active means unexpired scratch orgs and orgs you're currently logged into.

Output is displayed in multiple tables, one for each environment type. For example, the Salesforce Orgs table lists the non-scratch orgs you're logged into, such as sandboxes, Dev Hubs, production orgs, and so on. Scratch orgs and compute environments get their own tables.

The two org tables show similar information, such as aliases, information about the org, and how you authorized (logged into) it, such as with a web browser or JWT. The scratch org table also shows the expiration date. For non-scratch orgs, the Username column refers to the user you logged into the org with. For scratch orgs it refers to the username that was generated for you when you created the scratch org. Your default scratch org or Dev Hub org is indicated with the "target-org" or "target-dev-hub" configuration variable, respectively, in the Config column.

The compute environment table shows the alias, information about the connected orgs, the project name, and more.

Use the table manipulation flags, such as --filter and --sort, to change how the data is displayed.

Run "sf env display" to view details about a specific environment.
  `,
      examples: [
        {
          "title":'List all active environments',
          "command":'sf env list'
        },
        {
          "title":'List both active and inactive environments',
          "command":'sf env list --all'
        },
        {
          "title":'Filter the output to list only orgs you authorized using a web browser; "Auth Method" is the name of a column',
          "command":'sf env list --filter "Auth Method=web"'
        },
        {
          "title":'Display only the Aliases column and sort the aliases in descending order',
          "command":'sf env list --sort "-Aliases" --columns "Aliases"'
        },
        {
          "title":"Don't truncate the displayed output and instead wrap text that's wider than your terminal",
          "command":'sf env list --no-truncate'
        },
        {
          "title":"Display only the table data, not the headers, in comma-separated value (csv) format",
          "command":'sf env list --csv --no-header'
        }
      ]
    },
    {
      value: 'env-log',
      label: 'Stream log output for an environment.',
      usage:"sf env log [-e <value> | ] [-n <value>]",
      flags:`FLAGS
-e, --target-compute=<value>  Compute environment name to retrieve logs.
-n, --num=<value>             Number of lines to display.
    `,
      examples: [
        {
          "title":'Stream log output',
          "command":'sf env log --target-compute environment-alias'
        }
      ]
    },
    {
      value: 'env-log-tail',
      label: 'Stream log output for an environment.',
      usage:"sf env log tail [-e <value> | ]",
      flags:`FLAGS
-e, --target-compute=<value>  Compute environment name to retrieve logs.
    
    `,
      examples: [
        {
          "title":'Stream log output',
          "command":'sf env log tail --target-compute environment-alias'
        }
      ]
    },
    {
      value: 'env-logdrain-add',
      label: 'Add log drain to a specified environment.',
      usage:"sf env logdrain add [--json] [-e <value> | ] [-l <value> | ]",
      flags:`FLAGS
-e, --target-compute=<value>  Environment name.
-l, --drain-url=<value>       Endpoint that will receive sent logs.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Add log drain to a specified environment.

Both '--target-compute' and '--url' are required flags. '--url' should be a HTTP or HTTPS URL that can receive the log drain messages.
  `,
      examples: [
        {
          "title":'Add a log drain',
          "command":'sf env logdrain add --target-compute environment-name --url https://path/to/logdrain'
        }
      ]
    },
    {
      value: 'env-logdrain-list',
      label: 'List log drains connected to a specified environment.',
      usage:"sf env logdrain list [--json] [-e <value> | ]",
      flags:`FLAGS
-e, --target-compute=<value>  Environment name.

GLOBAL FLAGS
--json  Format output as json.
    `,
      examples: [
        {
          "title":'List log drains',
          "command":'sf env logdrain list --target-compute environment-alias'
        },
        {
          "title":'List log drains as json',
          "command":'sf env logdrain list --target-compute environment-alias --json'
        }
      ]
    },
    {
      value: 'env-logdrain-remove',
      label: 'Remove log drain from a specified environment.',
      usage:"sf env logdrain remove [--json] [-e <value> | ] [-l <value> | ]",
      flags:`FLAGS
-e, --target-compute=<value>  Environment name.
-l, --drain-url=<value>       Log drain url to remove.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Remove log drain from a specified environment.

Both '--target-compute' and '--drain-url' are required flags.
  `,
      examples: [
        {
          "title":'Remove a logdrain',
          "command":'sf env logdrain remove --target-compute environment-alias --url https://path/to/logdrain'
        }
      ]
    },
    {
      value: 'env-open',
      label: 'Open an environment in a web browser.',
      usage:"sf env open [--json] [-p <value>] [-r] [-e <value>] [--browser <value>]",
      flags:`FLAGS
-e, --target-env=<value>  Login user or alias of the environment to open.
-p, --path=<value>        Path to append to the end of the login URL.
-r, --url-only            Display the URL, but don’t launch it in a browser.
--browser=<value>         Browser in which to open the environment.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Open an environment in a web browser.

You can open the following types of environments in a web browser: scratch orgs, sandboxes, Dev Hubs, and production orgs. Run "sf env list" to view your environments and their aliases and login usernames.

Each of your environments is associated with an instance URL, such as https://login.salesforce.com. To open a specific web page, specify the portion of the URL after "<URL>/" with the --path flag, such as /apex/YourPage to open a Visualforce page.
  `,
      examples: [
        {
          "title":'Open the Visualforce page /apex/StartHere in a scratch org with alias test-org',
          "command":'sf env open --target-env test-org --path /apex/StartHere'
        },
        {
          "title":"View the URL but don't launch it in a browser",
          "command":'sf env open --target-env test-org --path /apex/StartHere --url-only'
        },
        {
          "title":'Open the environment in the Google Chrome browser',
          "command":'sf env open --target-env test-org --path /apex/StartHere --browser chrome'
        }
      ]
    },
    {
      value: 'env-resume-sandbox',
      label: "Check the status of a sandbox creation, and log in to it if it's ready.",
      usage:"sf env resume sandbox [--json] [-w <value>] [-n <value> | -i <value>] [-l] [-o <value>]",
      flags:`FLAGS
-i, --job-id=<value>      Job ID of the incomplete sandbox creation that you want to check the status of.
-l, --use-most-recent     Use the most recent sandbox create request.
-n, --name=<value>        Name of the sandbox org.
-o, --target-org=<value>  Username or alias of the production org that contains the sandbox license.
-w, --wait=<minutes>      Number of minutes to wait for the sandbox org to be ready.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Check the status of a sandbox creation, and log in to it if it's ready.

Sandbox creation can take a long time. If the original "sf env create sandbox" command either times out, or you specified the --async flag, the command displays a job ID. Use this job ID to check whether the sandbox creation is complete, and if it is, the command then logs into it.

You can also use the sandbox name to check the status or the --use-most-recent flag to use the job ID of the most recent sandbox creation.
  `,
      examples: [
        {
          "title":'Check the status of a sandbox creation using its name and specify a production org with alias "prodOrg"',
          "command":'sf env resume sandbox --name mysandbox --target-org prodOrg'
        },
        {
          "title":"Check the status using the job ID",
          "command":'sf env resume sandbox --job-id 0GRxxxxxxxx'
        },
        {
          "title":'Check the status of the most recent sandbox create request',
          "command":'sf env resume sandbox --use-most-recent'
        }
      ]
    },
    {
      value: 'env-resume-scratch',
      label: "Resume the creation of an incomplete scratch org.",
      usage:"sf env resume scratch [--json] [-i <value>] [-r]",
      flags:`FLAGS
-i, --job-id=<value>   Job ID of the incomplete scratch org create that you want to resume.
-r, --use-most-recent  Use the job ID of the most recent incomplete scratch org.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Resume the creation of an incomplete scratch org.

When the original "sf env create scratch" command either times out or is run with the --async flag, it displays a job ID.

Run this command by either passing it a job ID or using the --use-most-recent flag to specify the most recent incomplete scratch org.
  `,
      examples: [
        {
          "title":'Resume a scratch org create with a job ID',
          "command":'sf env resume scratch --job-id 2SR3u0000008fBDGAY'
        },
        {
          "title":"Resume your most recent incomplete scratch org",
          "command":'sf env resume scratch --use-most-recent'
        }
      ]
    },
    {
      value: 'env-var-get',
      label: "Display a single config variable for an environment.",
      usage:"sf env var get [KEY] [--json] [-e <value> | ]",
      flags:`FLAGS
-e, --target-compute=<value>  Environment name.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Display a single config variable for an environment.

You must provide the '--target-compute' flag and the key to retrieve.
  `,
      examples: [
        {
          "title":'Get a config variable',
          "command":'sf env var get [KEY] --target-compute environment-alias'
        }
      ]
    },
    {
      value: 'env-var-list',
      label: "List your environment's config vars in a table.",
      usage:"sf env var list [--json] [-e <value> | ]",
      flags:`FLAGS
-e, --target-compute=<value>  Environment name.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:` List your environment's config vars in a table.

Use the '--json' flag to return config vars in JSON format.
  `,
      examples: [
        {
          "title":'List config vars',
          "command":'sf env var list --target-compute environment-alias'
        },
        {
          "title":'List in JSON format',
          "command":'sf env var list --target-compute environment-alias --json'
        }
      ]
    },
    {
      value: 'env-var-unset',
      label: "Unset a single config value for an environment.",
      usage:"sf env var unset [--json] [-e <value> | ]",
      flags:`FLAGS
-e, --target-compute=<value>  Environment name.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Unset a single config value for an environment.

Run 'sf env var list' to see a list of config values that can be unset.
  `,
      examples: [
        {
          "title":'Unset a value',
          "command":'sf env var unset --target-compute environment-alias'
        }
      ]
    },
    {
      value: 'env-var-set',
      label: "Set a single config value for an environment.",
      usage:"sf env var set [--json] [-e <value> | ]",
      flags:`FLAGS
-e, --target-compute=<value>  Environment name.

GLOBAL FLAGS
--json  Format output as json.
    `,
    description:`Unset a single config value for an environment.

Run 'sf env var list' to see a list of config values that can be unset.
  `,
      examples: [
        {
          "title":'Set a config value',
          "command":'sf env var set [KEY]=[VALUE] --target-compute environment-alias'
        }
      ]
    }
  ]

  export default ENVVAL