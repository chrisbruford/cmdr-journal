# CMDR-JOURNAL

This is a simple library of Models, Enums and Types for the CMDR Journal exposed by Elite Dangerous

## Install

```
$ npm install cmdr-journal
```

## Usage

Import the package into your project

```javascript
//Import the whole library
//CommonJS
const cj = require('cmdr-journal');
//ES2015
import cj from 'cmdr-journal';

//Or import just what you need
//CommonJS
const fsdJump = require('cmdr-journal').FSDJump;
//ES2015
import { FSDJump } from 'cmdr-journal';
```

Use the models and enums as you wish

```javascript
let interdiction = new cj.Interdicton()
```
## A note

The classes available in this library reflect [the documentation as provided by Frontier](https://forums.frontier.co.uk/showthread.php/275151-Commanders-log-manual-and-data-sample) where you can also find examples and some additional descriptions.

Classes have been implemented according to their event value.

Enums have been implemented with sensible names (where possible) and string values that reflect the value as provided by Frontier.

## Documentation

A full list of Classes and Enums available in this library can be found in [the docs folder](/docs/index.html)