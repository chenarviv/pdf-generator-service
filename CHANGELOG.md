# Changelog
All notable changes to this project will be documented in this file.

## [1.0.3] - 2019-08-06
Released by: [Chen Arviv](mailto:chenrv1@gmail.com)
## Changes
- Changed networkIdle0 to networkIdle2 to solve timeout bug 

## [1.0.2] - 2019-06-12
Released by: [Chen Arviv](mailto:chenrv1@gmail.com)
## Changes
- Connected Swagger to the service.
- Added a **new property**: 'host'.
- Added a new script "start:dev-prod" in package.json, for swagger to work properly locally and on dev/prod.

## [1.0.1] - 2019-05-28
Released by: [Chen Arviv](mailto:chenrv1@gmail.com)
## Changes
- Had to add a line to dockerfile in order to overcome some bug with jessie dependency:
'RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list'

We should keep that in mind for similar or related errors that may happen in the future.

## [1.0.0] - 2019-03-11
Released by: [Chen Arviv](mailto:chenrv1@gmail.com)
