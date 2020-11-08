# Stink Reporter Web App

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

- Checkbox whether report address is home address

## [1.0.2] - 2020-10-27

### Fixed

- Do not require address if coordinates are given

### Added

- Status messages are shown in overlay
- Stink information is reset on successfully sent report

### Changed

- Use support@frischluft.wilhelm-gibt-keine-ruh.de as support email

## [1.0.1] - 2020-09-24

### Fixed

- Updated the url of the report service

## [1.0.0] - 2020-09-16

### Added

- A map to display the user's position
- Validation of html5-conformance

### Fixed

- Show error message if position is outside of Wilhelmsruh
- Use stink categories and intensity scale as in SenUVK's template
- UI bugs for safari
- HTML5-conformance

### Removed

- Text display of coordinates

## [0.0.6] - 2020-06-23

### Fixed

- Localisation can be overwritten by manual address input

## [0.0.5] - 2020-06-22

### Fixed

- Show address if localisation is used

## [0.0.4] - 2020-06-22

### Fixed

- Resolve city from location service

## [0.0.3] - 2020-06-21

### Fixed

- Await answer of backend

## [0.0.2] - 2020-06-21

### Fixed

- Use correct longitude from location service

## [0.0.1] - 2020-06-21

### Fixed

- Deploy to correct folder
- Fix message format to backend

## [0.0.0] - 2020-06-21

### Added

- Basic implementation
