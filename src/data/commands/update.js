const UPDATE = [
    {
        value: 'update',
        label: 'update the sf CLI',
        usage:"sf update [CHANNEL] [-a] [-v <value> | -i] [--force]",
        flags:`FLAGS
-a, --available        Install a specific version.
-i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
-v, --version=<value>  Install a specific version.
--force                Force a re-download of the requested version.
      `,
      description:`update the sf CLI
      `,
        examples: [
          {
            "title":'Update to the stable channel',
            "command":"sf update stable"
          },
          {
            "title":'Update to a specific version',
            "command":"sf update --version 1.0.0"
          },
          {
            "title":'See available versions',
            "command":"sf update --available"
          }
        ]
    }
]

export default UPDATE