[cmdr-journal](../README.md) > [Cargo](../classes/cargo.md)



# Class: Cargo


When written: at startup, note this is now written slightly later in startup, after we have initialised missions, so we can detect if any cargo came from an abandoned delivery mission

## Example

    {
        "timestamp":"2017-02-10T14:25:51Z",
        "event":"Cargo", "Inventory":[
            {
                "Name":"syntheticmeat",
                "Count":2,
                "Stolen": 0
            },
            {
                "Name":"evacuationshelter",
                "Count":1,
                "Stolen": 0
            },
            {
                "Name":"progenitorcells",
                "Count":3,
                "Stolen": 3
            },
            {
                "Name":"bioreducinglichen",
                "Count":1,
                "Stolen": 0
            },
            {
                "Name":"neofabricinsulation",
                "Count":2,
                "Stolen": 0
            }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Cargo**







## Index

### Properties

* [Inventory](cargo.md#inventory)
* [event](cargo.md#event)
* [timestamp](cargo.md#timestamp)



---
## Properties
<a id="inventory"></a>

###  Inventory

**●  Inventory**:  *`object`[]* 

*Defined in models/cargo.ts:41*





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


