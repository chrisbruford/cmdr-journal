# CMDR-JOURNAL

This is a simple library of Models, Enums and Types for the CMDR Journal exposed by Elite Dangerous

## Install

```
$ npm install cmdr-journal
```

## Usage

Import the package into your project

```javascript
//ECMAScript
let cmdrJournal = require('cmdr-journal');
```
```javascript
//TypeScript
import * as cmdrJournal from 'cmdr-journal';
```

Use the models and enums as you wish

```javascript
let interdiction = new cmdrJournal.Interdicton()
```
## A note

The classes available in this library reflect [the documentation as provided by Frontier](https://forums.frontier.co.uk/showthread.php/275151-Commanders-log-manual-and-data-sample) where you can also find examples and some additional descriptions.

Classes have been implemented according to their event value.

Enums have been implemented with sensible names (where possible) and string values that reflect the value as provided by Frontier.