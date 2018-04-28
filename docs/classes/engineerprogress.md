[cmdr-journal](../README.md) > [EngineerProgress](../classes/engineerprogress.md)



# Class: EngineerProgress


When Written: when a player increases their access to an engineer

## Example

    {
        "timestamp":"2016-06-10T14:32:03Z",
        "event":"EngineerProgress",
        "Progress":"Unlocked",
        "Engineer":"Elvira Martuuk",
        "EngineerID":300160
    }

    {
        "timestamp":"2016-06-10T14:32:03Z",
        "event":"EngineerProgress",
        "Engineer":"Elvira Martuuk",
        "EngineerID":300160,
        "Rank":2
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ EngineerProgress**







## Index

### Properties

* [Engineer](engineerprogress.md#engineer)
* [EngineerID](engineerprogress.md#engineerid)
* [Progress](engineerprogress.md#progress)
* [Rank](engineerprogress.md#rank)
* [event](engineerprogress.md#event)
* [timestamp](engineerprogress.md#timestamp)



---
## Properties
<a id="engineer"></a>

###  Engineer

**●  Engineer**:  *`string`* 

*Defined in models/engineer-progress.ts:28*





___

<a id="engineerid"></a>

###  EngineerID

**●  EngineerID**:  *`number`* 

*Defined in models/engineer-progress.ts:29*





___

<a id="progress"></a>

###  Progress

**●  Progress**:  *"Invited"⎮"Acquainted"⎮"Unlocked"⎮"Barred"* 

*Defined in models/engineer-progress.ts:31*





___

<a id="rank"></a>

###  Rank

**●  Rank**:  *`number`* 

*Defined in models/engineer-progress.ts:30*





___

<a id="event"></a>

###  event

**●  event**:  *`string`* 

*Inherited from [JournalEvent](journalevent.md).[event](journalevent.md#event)*

*Defined in models/journal-event.model.ts:2*





___

<a id="timestamp"></a>

###  timestamp

**●  timestamp**:  *`string`* 

*Inherited from [JournalEvent](journalevent.md).[timestamp](journalevent.md#timestamp)*

*Defined in models/journal-event.model.ts:3*





___


