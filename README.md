# Krew monorepo

In this repo we maintain the frontend web application for Krew.

# Experimentation

The goal is, to build the same Krew app (web) using different frameworks. So that we can gain experience and measure performance.

Overview of (to be supported) apps and framewerks:

- krew-ui-angular (Angular)
- krew-ui-react (React)
- krew-ui-vue (Vue)
- krew-ui-svelte (Svelte)

## Development

If you wish to develop or contribute to this repo, we suggest the following:

- Clone this repository

```
git clone https://github.com/move4mobile/krew-workspace
cd krew-workspace
```

- Install this project on your computer

```
npm install
```

Advised to use Node version 14 (or higher).

- Run application locally on your computer

```
nx serve <app-name>
```

For example, if you want to run the sample app locally, type

```
nx serve krew-ui-angular
```

Next, open a browser and navigate to http://localhost:4201

Or, if you want to run all apps at the same time, type

```
nx run-many --target=serve --projects=krew-ui-angular,krew-ui-svelte,krew-ui-react
```
