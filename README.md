# [Send IT App](https://send-it-app-maverick.herokuapp.com/)

[![Build Status](https://travis-ci.com/despeauxz/send-it-app.svg?branch=develop)](https://travis-ci.com/despeauxz/send-it-app)
[![Coverage Status](https://coveralls.io/repos/github/despeauxz/send-it-app/badge.svg?branch=develop)](https://coveralls.io/github/despeauxz/send-it-app?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/e32cddd2b916ebc7c328/maintainability)](https://codeclimate.com/github/despeauxz/send-it-app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e32cddd2b916ebc7c328/test_coverage)](https://codeclimate.com/github/despeauxz/send-it-app/test_coverage)

SendTI is an application that allows customers to send parcels from a location to a new destination.
## Table of Contents

* [Technologies](#technologies)
* [Features Implemented](#features-implemented)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Development](#development)
  * [Testing](#testing)
* [Limitations](#limitations)
* [Contributing Guide](#contributing-guide)
* [FAQs](#faqs)
* [License](#license)

### Pivotal Tracker

Project is currently being built with the Project Management Tool, Pivotal Tracker.
You can find the template at [https://www.pivotaltracker.com/n/projects/2214598](https://www.pivotaltracker.com/n/projects/2214598)

### Template

Template is hosted at [https://despeauxz.github.io/send-it-app/](https://despeauxz.github.io/send-it-app/)

## Technologies

* [NodeJS](https://nodejs.org/) - Runtime Environment
* [ExpressJs](https://expressjs.com/) - Web Application Framework
* [PostgreSQL](https://www.postgresql.org/) - Object-Relational Database System

### Supporting Packages

#### Linter

* [ESLint](https://eslint.org/) - Linter Tool

#### Compiler

* [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

#### Test Tools

* [Mocha](https://mochajs.org/) - JavaScript Test Framework for API Tests (Backend)
* [Chai](http://chaijs.com/) - TDD/BDD Assertion Library for Node
* [Supertest](https://github.com/visionmedia/supertest) - Super-agent driven
  library for testing node.js HTTP servers
* [Istanbul(nyc)](https://istanbul.js.org/) - Code Coverage Generator

## Getting Started

### Installation

* Install [NodeJS](https://nodejs.org/) and [PostgreSQL](https://www.postgresql.org/) on your computer
* Clone this repository using `git clone https://github.com/despeauxz/sen-it-app
* Use the `.env.example` file to setup your environmental variables and rename the file to `.env`
* Run `npm install` to install all dependencies
* Run `npm run build` to build the project
* Run `npm run start:dev` to start the server
* Navigate to [localhost:8000](http://localhost:8000/) in browser to access the application
