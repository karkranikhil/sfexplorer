const RETRIEVE = [
    {
        value: 'retrieve-metadata',
        label: 'Retrieve metadata from an org to your local project.',
        usage:"sf retrieve metadata [--json] [-a <value>] [-c] [-x <value> | -m <value> | -d <value>] [-n <value>] [--single-package -t <value>] [-o <value>] [-w <value>] [-z ] [--zip-file-name <value> ]",
        flags:`FLAGS
-a, --api-version=<value>          Target API version for the retrieve.
-c, --ignore-conflicts             Ignore conflicts and retrieve and save files to your local filesystem, even if they
                                    overwrite your local changes.
-d, --source-dir=<value>...        File paths for source to retrieve from the org.
-m, --metadata=<value>...          Metadata component names to retrieve.
-n, --package-name=<value>...      Package names to retrieve.
-o, --target-org=<value>           Login username or alias for the target org.
-t, --target-metadata-dir=<value>  Directory that will contain the retrieved metadata format files or ZIP.
-w, --wait=<value>                 Number of minutes to wait for the command to complete and display results to the
                                    terminal window.
-x, --manifest=<value>             File path for the manifest (package.xml) that specifies the components to retrieve.
-z, --unzip                        Extract all files from the retrieved zip file.
--single-package                   Indicates that the zip file points to a directory structure for a single package.
--zip-file-name=<value>            File name to use for the retrieved zip file.

GLOBAL FLAGS
--json  Format output as json.`,
        description:`Retrieve metadata from an org to your local project.

You must run this command from within a project.

Metadata components are retrieved in source format by default. Retrieve them in metadata format by specifying the --target-metadata-dir flag, which retrieves the components into a ZIP file in the specified directory.

If your org allows source tracking, then this command tracks the changes in your source. Some orgs, such as production org, never allow source tracking. You can also use the "--no-track-source" flag when you create a scratch or sandbox org to disable source tracking.

To retrieve multiple metadata components, either use multiple --metadata <name> flags or use a single --metadata flag with multiple names separated by spaces. Enclose names that contain spaces in one set of double quotes. The same syntax applies to --manifest and --source-dir.`,
        examples: [
          {
            "title":'Retrieve remote changes',
            "command":"sf retrieve metadata"
          },
          {
            "title":"Retrieve the source files in a directory",
            "command":"sf retrieve metadata --source-dir path/to/source"
          },
          {
            "title":"Retrieve a specific Apex class and the objects whose source is in a directory (both examples are equivalent)",
            "command":"sf retrieve metadata --source-dir path/to/apex/classes/MyClass.cls path/to/source/objects"
          },
          {
            "title":"Retrieve all Apex classes",
            "command":"sf retrieve metadata --metadata ApexClass"
          },
          {
            "title":"Retrieve a specific Apex class",
            "command":"sf retrieve metadata --metadata ApexClass:MyApexClass"
          },
          {
            "title":"Retrieve all custom objects and Apex classes (both examples are equivalent)",
            "command":"sf retrieve metadata --metadata CustomObject ApexClass"
          },
          {
            "title":"Retrieve all metadata components listed in a manifest",
            "command":"sf retrieve metadata --manifest path/to/package.xml"
          },
          {
            "title":"Retrieve metadata from a package",
            "command":"sf retrieve metadata --package-name MyPackageName"
          },
          {
            "title":"Retrieve metadata from multiple packages, one of which has a space in its name (both examples are equivalent)",
            "command":'sf retrieve metadata --package-name Package1 "PackageName With Spaces" Package3'
          },
          {
            "title":'Retrieve the metadata components listed in the force-app directory, but retrieve them in metadata format into a ZIP file in the "output" directory',
            "command":'sf retrieve metadata --source-dir force-app --target-metadata-dir output'
          },
          {
            "title":'Retrieve in metadata format and automatically extract the contents into the "output" directory',
            "command":'sf retrieve metadata --source-dir force-app --target-metadata-dir output --unzip'
          }
        ],
        CONFIG_VARIABLE:[ {
            "name":"target-org",
            "description":"Username or alias of the org that all commands run against by default. (sf only)"
          },
          {
            "name":"org-api-version",
            "description":"API version of your project. Default: API version of your Dev Hub org."
          }]
    },
    {
        value: 'retrieve-metadata-preview',
        label: 'Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files.',
        usage:"sf retrieve metadata preview [--json] [-c] [-o <value>]",
        flags:`FLAGS
-c, --ignore-conflicts    Ignore conflicts and preview the retrieve of remote components, even if they will overwrite local changes.
-o, --target-org=<value>  Login username or alias for the target org.

GLOBAL FLAGS
--json  Format output as json.`,
        description:`Preview a retrieval to see what will be retrieved from the org, the potential conflicts, and the ignored files.

You must run this command from within a project.

The command outputs a table that describes what will happen if you run the "sf retrieve metadata" command. The table lists the metadata components that will be retrieved and deleted. The table also lists the current conflicts between files in your local project and components in the org. Finally, the table lists the files that won't be retrieved because they're included in your .forceignore file.

If your org allows source tracking, then this command considers conflicts between the org and local. Some orgs, such as production orgs, never allow source tracking. Use the "--no-track-source" flag when you create a scratch or sandbox org to disable source tracking.
        `,
        examples: [
          {
            "title":'Preview the retrieve of all changes from the org',
            "command":"sf retrieve metadata preview"
          },
          {
            "title":"Preview the retrieve when ignoring any conflicts",
            "command":"sf retrieve metadata preview --ignore-conflicts"
          }
        ]
    },
]

export default RETRIEVE