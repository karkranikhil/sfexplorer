const HELP = [
    {
      value: 'sf-help',
      label: 'Display help for sf.',
      usage:"sf help [COMMAND] [-n]",
      flags:`FLAGS
-n, --nested-commands  Include all nested commands in the output.

ARGUMENTS
COMMAND  Command to show help for.
    `,
      description:`Display help for sf.`
    }
  ]


  export default HELP