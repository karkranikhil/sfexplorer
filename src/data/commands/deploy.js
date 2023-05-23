const DEPLOY = [
    {
      value: 'deploy',
      label: 'Deploy a project interactively to any Salesforce environment.',
      usage:"sf deploy [--interactive]",
      flags:`FLAGS
--interactive  Force the CLI to prompt for all deployment inputs.`,
      description:`Deploy a project interactively to any Salesforce environment.

This command must be run from within a project.

The command first analyzes your project, your active or logged-into environments, and local defaults to determine what to deploy and where to deploy it. The command then prompts you for information about this particular deployment and provides intelligent choices based on its analysis.

For example, if your local project contains a source directory with metadata files in source format, the command asks if you want to deploy that Salesforce app to an org. The command lists your connected orgs and asks which one you want to deploy to. The list of orgs starts with scratch orgs, ordered by expiration date with the most recently created one first, and then Dev Hub and production orgs ordered by name. If the command finds Apex tests, it asks if you want to run them and at which level.

The command stores your responses in the "deploy-options.json" file in your local project directory and uses them as defaults when you rerun the command. Specify --interactive to force the command to reprompt.

Use this command for quick and simple deploys. For more complicated deployments, use the environment-specific commands, such as "sf deploy metadata", that provide additional flags. `,
      examples: [
        {
          "title":'Deploy a project and use stored values from a previous command run',
          "command":"sf deploy"
        },
        {
          "title":'Reprompt for all deployment inputs',
          "command":"sf deploy --interactive"
        }
      ]
    },
    {
      value: 'deploy-functions',
      label: 'Deploy a Salesforce Function to an org from your local project.',
      usage:"sf deploy functions -o <value> [--json] [-b <value>] [--force] [-q]",
      flags:`FLAGS
-b, --branch=<value>         Deploy the latest commit from a branch different from the currently active branch.
-o, --connected-org=<value>  (required) Username or alias for the org that the compute environment should be connected
                              to.
-q, --quiet                  Limit the amount of output displayed from the deploy process.
--force                      Ignore warnings and overwrite remote repository (not allowed in production).

GLOBAL FLAGS
--json  Format output as json.`,
      description:` Deploy a Salesforce Function to an org from your local project.

You must run this command from within a git repository. Only committed changes to Functions are deployed. The active branch is deployed unless specified otherwise with '--branch'.`,
      examples: [
        {
          "title":'Deploy a Salesforce Function',
          "command":"sf deploy functions --connected-org org-alias"
        },
        {
          "title":'Deploy to "deploy-branch"',
          "command":"sf deploy functions --connected-org org-alias --branch deploy-branch"
        },
        {
          "title":'Overwrite the remote repository',
          "command":"sf deploy functions --connected-org org-alias --force"
        }
      ]
    },
    {
      value: 'deploy-metadata',
      label: 'Deploy metadata to an org from your local project.',
      usage:"sf deploy metadata [--json] [-a <value>] [--async | -w <value>] [--concise | --verbose] [--dry-run] [-c] [-r] [-g] [-x <value> | -d <value> | -m <value> | --metadata-dir <value>] [--single-package ] [-o <value>] [-t <value>][-l NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg]",
      flags:`FLAGS
-a, --api-version=<value>    Target API version for the deploy.
-c, --ignore-conflicts       Ignore conflicts and deploy local files, even if they overwrite changes in the org.
-d, --source-dir=<value>...  Path to the local source files to deploy.
-g, --ignore-warnings        Ignore warnings and allow a deployment to complete successfully.
-l, --test-level=<option>    [default: NoTestRun] Deployment Apex testing level.
                            <options: NoTestRun|RunSpecifiedTests|RunLocalTests|RunAllTestsInOrg>
-m, --metadata=<value>...    Metadata component names to deploy.
-o, --target-org=<value>     Login username or alias for the target org.
-r, --ignore-errors          Ignore any errors and don’t roll back deployment.
-t, --tests=<value>...       Apex tests to run when --test-level is RunSpecifiedTests.
-w, --wait=<minutes>         Number of minutes to wait for command to complete and display results.
-x, --manifest=<value>       Full file path for manifest (package.xml) of components to deploy.
--async                      Run the command asynchronously.
--concise                    Show concise output of the deploy result.
--dry-run                    Validate deploy and run Apex tests but don’t save to the org.
--metadata-dir=<value>       Root of directory or zip file of metadata formatted files to deploy.
--single-package             Indicates that the metadata zip file points to a directory structure for a single
                            package.
--verbose                    Show verbose output of the deploy result.
    
GLOBAL FLAGS
--json  Format output as json.`,
      description:`Deploy metadata to an org from your local project.

You must run this command from within a project.

Metadata components are deployed in source format by default. Deploy them in metadata format by specifying the --metadata-dir flag, which specifies the root directory or ZIP file that contains the metadata formatted files you want to deploy.

If your org allows source tracking, then this command tracks the changes in your source. Some orgs, such as production org, never allow source tracking. You can also use the "--no-track-source" flag when you create a scratch or sandbox org to disable source tracking.

To deploy multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --manifest and --source-dir.`,
      examples: [
        {
          "title":'Deploy local changes not in the org',
          "command":"sf deploy metadata"
        },
        {
          "title":'Deploy the source files in a directory',
          "command":"sf deploy metadata  --source-dir path/to/source"
        },
        {
          "title":'Deploy a specific Apex class and the objects whose source is in a directory (both examples are equivalent)',
          "command":"sf deploy metadata --source-dir path/to/apex/classes/MyClass.cls path/to/source/objects \n\nsf deploy metadata --source-dir path/to/apex/classes/MyClass.cls --source-dir path/to/source/objects"
        },
        {
          "title":'Deploy all Apex classes',
          "command":"sf deploy metadata --metadata ApexClass"
        },
        {
          "title":'Deploy a specific Apex class',
          "command":"sf deploy metadata --metadata ApexClass:MyApexClass"
        },
        {
          "title":'Deploy all custom objects and Apex classes (both examples are equivalent)',
          "command":"sf deploy metadata --metadata CustomObject ApexClass \n\nsf deploy metadata --metadata CustomObject --metadata ApexClass"
        },
        {
          "title":'Deploy all Apex classes and a profile that has a space in its name',
          "command":"sf deploy metadata --metadata ApexClass --metadata 'Profile:My Profile'"
        },
        {
          "title":'Deploy all components listed in a manifest',
          "command":"sf deploy metadata --manifest path/to/package.xml"
        },
        {
          "title":'Run the tests that aren’t in any managed packages as part of a deployment',
          "command":"sf deploy metadata --metadata ApexClass --test-level RunLocalTests"
        },
      ]
    },
    {
      value: 'deploy-metadata-cancel',
      label: 'Cancel a deploy operation',
      usage:"sf deploy metadata cancel [--json] [--async | -w <value>] [-i <value>] [-r]",
      flags:`FLAGS
-i, --job-id=<value>   Job ID of the deploy operation you want to cancel.
-r, --use-most-recent  Use the job ID of the most recent deploy operation.
-w, --wait=<minutes>   Number of minutes to wait for the command to complete and display results.
--async                Run the command asynchronously.

GLOBAL FLAGS
--json  Format output as json.`,
      description:`Cancel a deploy operation.

Use this command to cancel a deploy operation that hasn't yet completed in the org. Deploy operations include standard
deploys, quick deploys, deploy validations, and deploy cancellations.

Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most
recent deploy operation.`,
      examples: [
        {
          "title":'Cancel a deploy operation using a job ID',
          "command":"sf deploy metadata cancel --job-id 0Af0x000017yLUFCA2"
        },
        {
          "title":'Cancel the most recent deploy operation',
          "command":"sf deploy metadata cancel --use-most-recent"
        }
      ]
    },
    {
      value: 'deploy-metadata-quick',
      label: 'Quickly deploy a validated deployment to an org.',
      usage:"sf deploy metadata quick [--json] [--async | -w <value>] [--concise | --verbose] [-i <value>] [-o <value>] [-r]",
      flags:`FLAGS
-i, --job-id=<value>      Job ID of the deployment you want to quick deploy.
-o, --target-org=<value>  Login username or alias for the target org.
-r, --use-most-recent     Use the job ID of the most recently validated deployment.
-w, --wait=<minutes>      Number of minutes to wait for the command to complete and display results.
--async                   Run the command asynchronously.
--concise                 Show concise output of the deploy result.
--verbose                 Show verbose output of the deploy result.

GLOBAL FLAGS
--json  Format output as json.`,
      description:`Quickly deploy a validated deployment to an org.

Before you run this command, first create a validated deployment with the "sf deploy metadata validate" command, which
returns a job ID. Validated deployments haven't been deployed to the org yet; you deploy them with this command.
Either pass the job ID to this command or use the --use-most-recent flag to use the job ID of the most recently
validated deployment. For the quick deploy to succeed, the associated validated deployment must also have succeeded.

Executing this quick deploy command takes less time than a standard deploy because it skips running Apex tests. These
tests were previously run as part of the validation. Validating first and then running a quick deploy is useful if the
deployment to your production org take several hours and you don’t want to risk a failed deploy.

This command doesn't support source-tracking. The source you deploy overwrites the corresponding metadata in your org.
This command doesn't attempt to merge your source with the versions in your org.
    `,
      examples: [
        {
          "title":'Run a quick deploy to your default org using a job ID',
          "command":"sf deploy metadata quick --job-id 0Af0x000017yLUFCA2"
        },
        {
          "title":'Asynchronously run a quick deploy of the most recently validated deployment to an org with alias "my-prod-org"',
          "command":"sf deploy metadata quick --async --use-most-recent --target-org my-prod-org"
        }
      ]
    },
    {
      value: 'deploy-metadata-metadata',
      label: 'Check the status of a deploy operation.',
      usage:"sf deploy metadata report [--json] [-i <value>] [-r]",
      flags:`FLAGS
-i, --job-id=<value>   Job ID of the deploy operation you want to check the status of.
-r, --use-most-recent  Use the job ID of the most recent deploy operation.

GLOBAL FLAGS
--json  Format output as json.`,
      description:`Check the status of a deploy operation.

Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations.

Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most
recent deploy operation.
    `,
      examples: [
        {
          "title":'Check the status using a job ID',
          "command":"sf deploy metadata report --job-id 0Af0x000017yLUFCA2"
        },
        {
          "title":'Check the status of the most recent deploy operation',
          "command":"sf deploy metadata report --use-most-recent"
        }
      ]
    },
    {
      value: 'deploy-metadata-resume',
      label: 'Resume watching a deploy operation.',
      usage:"sf deploy metadata resume [--json] [--concise | --verbose] [-i <value>] [-r] [-w <value>]",
      flags:`FLAGS
-i, --job-id=<value>   Job ID of the deploy operation you want to resume.
-r, --use-most-recent  Use the job ID of the most recent deploy operation.
-w, --wait=<minutes>   Number of minutes to wait for the command to complete and display results.
--concise              Show concise output of the deploy operation result.
--verbose              Show verbose output of the deploy operation result.

GLOBAL FLAGS
--json  Format output as json.`,
      description:`Resume watching a deploy operation.

Use this command to resume watching a deploy operation if the original command times out or you specified the --async
flag. Deploy operations include standard deploys, quick deploys, deploy validations, and deploy cancellations. This
command doesn't resume the original operation itself, because the operation always continues after you've started it,
regardless of whether you're watching it or not.

Run this command by either passing it a job ID or specifying the --use-most-recent flag to use the job ID of the most
recent deploy operation.
    `,
      examples: [
        {
          "title":'Resume watching a deploy operation using a job ID',
          "command":"sf deploy metadata resume --job-id 0Af0x000017yLUFCA2"
        },
        {
          "title":'Resume watching the most recent deploy operation',
          "command":"sf deploy metadata resume --use-most-recent"
        }
      ]
    },
    {
      value: 'deploy-metadata-validate',
      label: 'Validate a metadata deployment without actually executing it.',
      usage:"sf deploy metadata validate [--json] [-a <value>] [--async] [--concise | --verbose] [-x <value>] [-m <value>] [-d <value>][--single-package --metadata-dir <value>] [-o <value>] [-t <value>] [-l RunAllTestsInOrg|RunLocalTests|RunSpecifiedTests] [-w <value>]",
      flags:`FLAGS
-a, --api-version=<value>    Target API version for the validation.
-d, --source-dir=<value>...  Path to the local source files to validate for deployment.
-l, --test-level=<option>    [default: RunLocalTests] Deployment Apex testing level.
                            <options: RunAllTestsInOrg|RunLocalTests|RunSpecifiedTests>
-m, --metadata=<value>...    Metadata component names to validate for deployment.
-o, --target-org=<value>     Login username or alias for the target org.
-t, --tests=<value>...       Apex tests to run when --test-level is RunSpecifiedTests.
-w, --wait=<minutes>         Number of minutes to wait for the command to complete and display results.
-x, --manifest=<value>       Full file path for manifest (package.xml) of components to validate for deployment.
--async                      Run the command asynchronously.
--concise                    Show concise output of the validation result.
--metadata-dir=<value>       Root of directory or zip file of metadata formatted files to deploy.
--single-package             Indicates that the metadata zip file points to a directory structure for a single
                            package.
--verbose                    Show verbose output of the validation result.

GLOBAL FLAGS
--json  Format output as json.`,
      description:`Validate a metadata deployment without actually executing it.

Use this command to verify whether a deployment will succeed without actually deploying the metadata to your org. This command is similar to "sf deploy metadata", except you're required to run Apex tests, and the command returns a job ID rather than executing the deployment. If the validation succeeds, then you pass this job ID to the "sf deploy metadata quick" command to actually deploy the metadata. This quick deploy takes less time because it skips running Apex tests.

The job ID is valid for 10 days from when you started the validation. Validating first is useful if the deployment to your production org take several hours and you don't want to risk a failed deploy.

You must run this command from within a project.

This command doesn't support source-tracking. When you quick deploy with the resulting job ID, the source you deploy overwrites the corresponding metadata in your org.

To validate the deployment of multiple metadata components, either set multiple --metadata <name> flags or a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --manifest and --source-dir.
    `,
      examples: [
        {
          "title":'Validate the deployment of all source files in a directory to the default org',
          "command":"sf deploy metadata validate --source-dir path/to/source"
        },
        {
          "title":'Asynchronously validate the deployment and run all tests in the org with alias "my-prod-org"; command immediately returns the job ID',
          "command":"sf deploy metadata validate --source-dir path/to/source --async --test-level RunAllTestsInOrg --target-org \ my-prod-org"
        },{
          "title":'Validate the deployment of all components listed in a manifest',
          "command":"sf deploy metadata validate --manifest path/to/package.xml"
        },

        
      ],
      CONFIG_VARIABLE:[
        {
          "name":"target-org",
          "description":"Username or alias of the org that all commands run against by default. (sf only)"
        },
        {
          "name":"org-api-version",
          "description":"API version of your project. Default: API version of your Dev Hub org"
        }]
    }
  ]

export default DEPLOY