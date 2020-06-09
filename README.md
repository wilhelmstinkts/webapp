# Stink Reporter Web App

This is a simple web application meant to report when it smelled of what where.
The user-generated reports are sent to the competent authority and saved anonymously by [Stink Reporter Backend](https://github.com/wilhelmstinkts/StinkReporter).

## Environment settings

Environment settings are set via the [environment.js file](./src/environment.js).

| Variable name | Default | Description                                                                                    |
| ------------- | ------- | ---------------------------------------------------------------------------------------------- |
| isTest        | true    | Toggles if the app is carried out in a test environment where no actual backend calls are made |
