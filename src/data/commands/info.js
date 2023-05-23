const INFO = [
    {
      value: 'sf-info',
      label: 'Display Salesforce CLI release notes on the command line.',
      usage:"sf info releasenotes display [-v <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]",
      flags:`FLAGS
-v, --version=<value>   CLI version or tag for which to display release notes.
--json  format output as json
--loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for this command invocation
    `,
      description:`Display Salesforce CLI release notes on the command line.`,
      examples: [
        {
          "title":'Display release notes for the currently installed CLI version',
          "command":'sf info releasenotes display'
        },
        {
            "title":'Display release notes for CLI version 7.120.0',
            "command":'sf info releasenotes display --version 7.120.0'
          },
          {
            "title":' Display release notes for the CLI version that corresponds to a tag (stable, stable-rc, latest, latest-rc, rc)',
            "command":'sf info releasenotes display --version latest'
          }
      ]
    }
  ]


  export default INFO