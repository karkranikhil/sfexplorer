const RUN = [
    {
        value: 'run-functions',
        label: 'Send a cloud event to a function.',
        usage:"sf run function [--json] [-l <value> | ] [-H <value>] [-p <value>] [-s] [-o <value>]",
        flags:`FLAGS
-H, --headers=<value>...     Set headers.
-l, --function-url=<value>   URL of the function to run.
-o, --connected-org=<value>  Username or alias for the target org; overrides default target org.
-p, --payload=<value>        Set the payload of the cloudevent as a JSON object or a path to a file via @file.json.
-s, --structured             Set the cloudevent to be emitted as a structured JSON cloudevent.

GLOBAL FLAGS
--json  Format output as json.
      `,
        examples: [
          {
            "title":'Run a function',
            "command":"sf run function --url http://path/to/function"
          },
          {
            "title":'Run a function with a payload and a JSON response',
            "command":"sf run function --url http://path/to/function --payload '@file.json' --structured"
          }
        ]
    },
    {
        value: 'run-functions-start',
        label: 'Build and run a Salesforce Function.',
        usage:"sf run function start [-b <value>] [-l javascript|typescript|java|auto] [-p <value>] [-v]",
        flags:`FLAGS
-b, --debug-port=<value>                          [default: 9229] Port for remote debugging.
-l, --language=(javascript|typescript|java|auto)  [default: auto] The language that the function runs in.
-p, --port=<value>                                [default: 8080] Port for running the function.
-v, --verbose                                     Output additional logs.
      
      `,
      description:`Build and run a Salesforce Function.

Run this command from the directory of your Salesforce Functions project.

This command will run the target function locally (on the same operating system as this CLI), just like the 'local' subcommand.

Previously, this command ran functions in a container. Container mode is still supported via the 'container' subcommand. Arguments relevant to container mode are still accepted, but are deprecated, ignored, and will be dropped in a future release.`,
        examples: [
          {
            "title":'Build a function and start the invoker',
            "command":"sf run function start"
          },
          {
            "title":'Start the invoker with a specific language and port',
            "command":"sf run function start --port 5000 --language javascript"
          }
        ]
    },
    {
        value: 'run-functions-start-container',
        label: 'Build and run a Salesforce Function in a container.',
        usage:"sf run function start container [-p <value>] [-b <value>] [--clear-cache] [--no-pull] [-e <value>] [--network <value>] [-v]",
        flags:`FLAGS
-b, --debug-port=<value>  [default: 9229] Port for remote debugging.
-e, --env=<value>...      Set environment variables (provided during build and run).
-p, --port=<value>        [default: 8080] Port for running the function.
-v, --verbose             Output additional logs.
--clear-cache             Clear associated cache before executing.
--network=<value>         Connect and build containers to a network. This can be useful to build containers which
                            require a local resource.
--no-pull                 Skip pulling builder image before use.
      
      `,
      description:`Build and run a Salesforce Function in a container.

Run this command from the directory of your Salesforce Functions project.
      `,
        examples: [
          {
            "title":'Build and run a function',
            "command":"sf run function start container"
          },
          {
            "title":'Run a function on a specific port with additional logs',
            "command":"sf run function start container --port 5000 --verbose"
          },
          {
            "title":'Add environment variables and specify a network',
            "command":"sf run function start container --env KEY=VALUE --network host"
          }
        ]
    },
    {
        value: 'run-functions-start-local',
        label: 'Build and run a Salesforce Function locally.',
        usage:"sf run function start local [-p <value>] [-b <value>] [-l javascript|typescript|java|auto]",
        flags:`FLAGS
-b, --debug-port=<value>                          [default: 9229] Port to use for debbugging the function.
-l, --language=(javascript|typescript|java|auto)  [default: auto] The language that the function runs in.
-p, --port=<value>                                [default: 8080] Port to bind the invoker to.
      `,
      description:`Build and run a Salesforce Function locally.
      `,
        examples: [
          {
            "title":'Build a function and start the invoker',
            "command":"sf run function start local"
          },
          {
            "title":'Start the invoker with a specific language and port',
            "command":"sf run function start local --port 5000 --language javascript"
          }
        ]
    }

]

export default RUN