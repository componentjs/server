
# Component Server

  An example component "registry", aka a server that mimics Github urls.  
  __NOTE:__ this server is not compatible with component 1

## Installation

  First clone the repo then:

```
$ npm install
$ node app
```

  Add the remote address to your app's component.json. Components will default to using github if they cannot be found in the given remotes.

```json
{
  "remotes" : [
    "https://localhost:3000"
  ]
}
```

  Now you can install private components:

```
$ component install example/foo
```

## License

  MIT
