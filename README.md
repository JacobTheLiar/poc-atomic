## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Way of work

## preparing project 
Install bun
```bash
curl -fsSL https://bun.sh/install | bash
```

reload bash to make it available 
```bash
source /home/jakub/.bashrc
```

install angular cli if not available
```bash
bun install -g @angular/cli
```

Go to the project folder and create a new one
```bash
ng new hsh-poc-atomic --create-application --minimal --package-manager "bun" --skip-tests --inline-template
 false --inline-style false --standalone --style "scss"
```
* `--create-application` - crate project in `src` directory;
* `--minimal` - create workspace without testing frameworks;
* `--package-manager "bun"` - set the package manager to `bun`, which was installed on startup;
* `--skip-tests` - disable creation spec files when creates new components;
* `--inline-template false` - enable generation of html template as separate `html` file;
* `--inline-style false` - same as above, scss styles will be stored in a separate `scss` file;
* `--standalone` - disable modules, each component will be set as standalone;
* `--style "scss"` - set the default styles to `scss`

The next step is to open the project in the IDE, and then modify  the `angular.json` file. We need to add a parameter that allows us to create new components with ChangeDetection set to OnPush by default.
add new property `"changeDetection": "OnPush"` in `"@schematics/angular:component"` property
* 
```json
...
  "projects": {
    "hsh-poc-atomic": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "skipTests": true,
          "changeDetection": "OnPush" <-- here
        },
        "@schematics/angular:class": {
          "skipTests": true
        },
...
```

https://www.softouch.on.ca/kb/data/Atomic%20Design.pdf