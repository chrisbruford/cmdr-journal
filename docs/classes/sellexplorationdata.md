[cmdr-journal](../README.md) > [SellExplorationData](../classes/sellexplorationdata.md)



# Class: SellExplorationData


When Written: when selling exploration data in Cartographics

## Example:

    {
        "timestamp":"2016-06-10T14:32:03Z",
        "event":"SellExplorationData",
        "Systems":[
            "HIP 78085",
            "Praea Euq NW-W b1-3"
        ],
        "Discovered":[
            "HIP 78085 A",
            "Praea Euq NW-W b1-3",
            "Praea Euq NW-W b1-3 3 a",
            "Praea Euq NW-W b1-3 3"
        ],
        "BaseValue":10822,
        "Bonus":3959
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ SellExplorationData**







## Index

### Properties

* [BaseValue](sellexplorationdata.md#basevalue)
* [Bonus](sellexplorationdata.md#bonus)
* [Discovered](sellexplorationdata.md#discovered)
* [Systems](sellexplorationdata.md#systems)
* [TotalEarnings](sellexplorationdata.md#totalearnings)
* [event](sellexplorationdata.md#event)
* [timestamp](sellexplorationdata.md#timestamp)



---
## Properties
<a id="basevalue"></a>

###  BaseValue

**●  BaseValue**:  *`number`* 

*Defined in [models/journal-event.models.ts:261](https://github.com/chrisbruford/cmdr-journal/blob/52f6f4c/src/models/journal-event.models.ts#L261)*





___

<a id="bonus"></a>

###  Bonus

**●  Bonus**:  *`number`* 

*Defined in [models/journal-event.models.ts:262](https://github.com/chrisbruford/cmdr-journal/blob/52f6f4c/src/models/journal-event.models.ts#L262)*





___

<a id="discovered"></a>

###  Discovered

**●  Discovered**:  *`string`[]* 

*Defined in [models/journal-event.models.ts:260](https://github.com/chrisbruford/cmdr-journal/blob/52f6f4c/src/models/journal-event.models.ts#L260)*





___

<a id="systems"></a>

###  Systems

**●  Systems**:  *`string`[]* 

*Defined in [models/journal-event.models.ts:259](https://github.com/chrisbruford/cmdr-journal/blob/52f6f4c/src/models/journal-event.models.ts#L259)*





___

<a id="totalearnings"></a>

###  TotalEarnings

**●  TotalEarnings**:  *`number`* 

*Defined in [models/journal-event.models.ts:263](https://github.com/chrisbruford/cmdr-journal/blob/52f6f4c/src/models/journal-event.models.ts#L263)*





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


