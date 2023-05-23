const GENERATE = [
    {
      value: 'generate-metadata-project',
      label: 'Generate a Salesforce DX project.',
      usage:"sf generate project -n <value> [--json] [-p <value>] [-x] [-s <value>] [-d <value>] [-t standard|empty|analytics]",
      flags:`FLAGS
-d, --output-dir=<value>           [default: .] Directory to store the newly created project files.
-n, --name=<value>                 (required) Name of the generated project.
-p, --default-package-dir=<value>  [default: force-app] Default package directory name.
-s, --namespace=<value>            Project associated namespace.
-t, --template=<option>            [default: standard] Template to use to create the project.
                                    <options: standard|empty|analytics>
-x, --manifest                     Generate a manifest (package.xml) for change-set based development.

GLOBAL FLAGS
--json  Format output as json.`,
    description:`Generate a Salesforce DX project.

A Salesforce DX project has a specific structure and a configuration file (sfdx-project.json) that identifies the directory as a Salesforce DX project. This command generates the basic scaffolding to get you started.

By default, the generated sfdx-project.json file sets the sourceApiVersion property to the default API version currently used by Salesforce CLI. To specify a different version, set the apiVersion configuration variable. For

example:

sf config set apiVersion=53.0 --global
  `,
      examples: [
        {
          "title":'Generate a project called MyProject',
          "command":'sf generate project --name MyProject'
        },
        {
          "title":'Generate the minimum number of files and directories',
          "command":'sf generate project --name MyProject --template empty'
        },
        {
          "title":'Generate the project in /Users/jdoe/sf-projects rather than the current directory',
          "command":'sf generate project --name MyProject --template empty --output-dir /Users/jdoe/sf-projects'
        }
      ]
    },
    {
      value: 'generate-function',
      label: 'Validate a metadata deployment without actually executing it.',
      usage:"sf generate function -l javascript|typescript|java [-n <value> | ]",
      flags:`FLAGS
-l, --language=(javascript|typescript|java)  (required) Language. Can be one of: javascript, typescript, java.
-n, --function-name=<value>                  Function name. Must start with a capital letter.`,
      description:`Create a Salesforce Function with basic scaffolding specific to a given language.
Both '--language' and '--name' are required flags. Function names must start with a capital letter.
    `,
      examples: [
        {
          "title":'Create a JavaScript function',
          "command":"sf generate function --function-name myfunction --language javascript"
        }
      ]
    },
    {
      value: 'generate-metadata',
      label: 'Generate metadata source files for a new custom field on a specified object.',
      usage:"sf generate metadata field -l <value> [-o <value>]",
      flags:`FLAGS
-l, --label=<value>   (required) The field's label.
-o, --object=<value>  The directory that contains the object's source files.
    `,
    description:`Generate metadata source files for a new custom field on a specified object.

This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the field's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other field properties, such as its API name.

You can generate a custom field on either a standard object, such as Account, or a custom object. In both cases, the source files for the object must already exist in your local project before you run this command. If you create a relationship field, the source files for the parent object must also exist in your local directory.  Use the command "sf metadata retrieve -m CustomObject:<object>" to retrieve source files for both standard and custom objects from your org. 

To create a custom object, run the "sf generate metadata sobject" command or use the Object Manager UI in your Salesforce org.`,
      examples: [
        {
          "title":'Create a field with the specified label; the command prompts you for the object',
          "command":"sf generate metadata field --label 'My Field'"
        },
        {
          "title":"Specify the local path to the object's folder",
          "command":"sf generate metadata field --label 'My Field' --object force-app/main/default/objects/MyObject__c"
        }
      ]
    },
    {
      value: 'generate-metadata-platformevent',
      label: 'Generate metadata source files for a new platform event.',
      usage:"sf generate metadata platformevent -l <value>",
      flags:`FLAGS
-l, --label=<value>  (required) The platform event's label.
    `,
    description:`Generate metadata source files for a new platform event.

This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the event's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other event properties, such as its API name.
  `,
      examples: [
        {
          "title":'Create a platform event with the specified label',
          "command":'sf generate metadata platformevent --label "My Platform Event"'
        }
      ]
    },
    {
      value: 'generate-metadata-sobject',
      label: 'Generate metadata source files for a new custom object.',
      usage:"sf generate metadata sobject -l <value> [-f]",
      flags:`FLAGS
-f, --use-default-features  Enable all optional features without prompting.
-l, --label=<value>         (required) The custom object's label.`,
    description:`Generate metadata source files for a new custom object.

This command is interactive and must be run in a Salesforce DX project directory. You're required to specify the object's label with the "--label" flag. The command uses this label to provide intelligent suggestions for other object properties, such as its API name and plural label.

All Salesforce objects are required to have a Name field, so this command also prompts you for the label and type of the Name field. Run the "sf metadata generate field" command to create additional fields for the object.

To reduce the number of prompts, use the "--use-default-features" flag to automatically enable some features, such as reporting and search on the object.
  `,
      examples: [
        {
          "title":'Create a custom object with the specified label and be prompted for additional information',
          "command":'sf generate metadata sobject --label "My Object"'
        },
        {
          "title":'Create a custom object and enable optional features without prompting',
          "command":'sf generate metadata sobject --label "My Object" --use-default-features'
        }
      ]
    },
    {
      value: 'generate-metadata-tab',
      label: 'Generate the metadata source files for a new custom tab on a custom object.',
      usage:"sf generate metadata tab -o <value> -d <value> -i <value> [--json]",
      flags:`FLAGS
-d, --directory=<value>  (required) Path to a "tabs" directory that will contain the source files for your new tab.
-i, --icon=<value>       (required) [default: 1] Number from 1 to 100 that specifies the color scheme and icon for the
                          custom tab.
-o, --object=<value>     (required) API name of the custom object you're generating a tab for.

GLOBAL FLAGS
--json  Format output as json.`,
    description:`Generate the metadata source files for a new custom tab on a custom object.

Custom tabs let you display custom object data or other web content in Salesforce. Custom tabs appear in Salesforce as an item in the app's navigation bar and in the App Launcher.

This command must be run in a Salesforce DX project directory. You must pass all required information to it with the required flags. The source files for the custom object for which you're generating a tab don't need to exist in your local project.
  `,
      examples: [
        {
          "title":'Create a tab on the MyObject__c custom object',
          "command":'sf generate metadata tab --object MyObject__c --icon 54 --directory force-app/main/default/tabs'
        }
      ]
    }
  ]

export default GENERATE