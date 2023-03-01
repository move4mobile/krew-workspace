# types

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build types` to build the library.

## Generate based on Open API Spec

Execute the following from the `/config` folder

```bash
openapi-generator-cli generate -i oas.json --skip-validate-spec \
-o ../src/generated \
-g typescript-angular \
--global-property models,modelTests=false,modelDocs=false,supportingFiles=models.ts \
--additional-properties=supportsES6=true
```