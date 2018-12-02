# Sweden Prayer Times CLI

[![Build Status](https://flat.badgen.net/travis/risan/sweden-prayer-times-cli)](https://travis-ci.org/risan/sweden-prayer-times-cli)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/sweden-prayer-times-cli)](https://codeclimate.com/github/risan/sweden-prayer-times-cli)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/sweden-prayer-times-cli)](https://codeclimate.com/github/risan/sweden-prayer-times-cli)
[![Latest Stable Version](https://flat.badgen.net/npm/v/sweden-prayer-times-cli)](https://www.npmjs.com/package/sweden-prayer-times-cli)
[![Node Version](https://flat.badgen.net/npm/node/sweden-prayer-times-cli)](https://www.npmjs.com/package/sweden-prayer-times-cli)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/sweden-prayer-times-cli)](https://github.com/risan/sweden-prayer-times-cli/blob/master/LICENSE)

Command line tool to get prayer times in Sweden based on the data from [Islamiska Förbundet](http://www.islamiskaforbundet.se)'s website.

![Sweden Prayer Times CLI](https://media.giphy.com/media/1xmStRJd8tFbsgEOrL/giphy.gif)

## Requirement

* [Node](https://nodejs.org/) version `>= 8.0.0`

## Install

Install the CLI tool globally:

```bash
$ npm install --global sweden-prayer-times-cli

# Or if you use Yarn
$ yarn global add sweden-prayer-times-cli
```

## Usage

```bash
$ sweden-prayer-times --help

  Command line tool to get prayer times in Sweden.

  Usage
    $ sweden-prayer-times <city> [date]

  Arguments
    - city: The name of the city.
    - date (optional): The date to retrieve, default to today's date.

  Examples
    $ sweden-prayer-times Stockholm
    $ sweden-prayer-times Uppsala 2018-08-17
```

## Related

* [sweden-prayer-times](https://github.com/risan/sweden-prayer-times): The JavaScript API for this CLI tool.

## License

MIT © [Risan Bagja Pradana](https://bagja.net)

## Legal

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed by [Islamiska Förbundet](http://www.islamiskaforbundet.se) or any of its affiliates or subsidiaries. This is an independent and unofficial API.
