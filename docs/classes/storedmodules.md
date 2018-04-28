[cmdr-journal](../README.md) > [StoredModules](../classes/storedmodules.md)



# Class: StoredModules


When written: when first visiting Outfitting, and when the set of stored modules has changed

"EngineerModifications", "Level" and "Quality" only appear for an engineered module

The InTransit value only appears (with value true) if the module is being transferred. In this case, the system, market, transfer cost and transfer time are not written.

## Example

    {
        "timestamp":"2018-01-31T10:55:16Z",
        "event":"StoredModules",
        "MarketID":128676487,
        "StationName":"Farseer Inc",
        "StarSystem":"Deciat",
        "Items":[
            { 0
                "Name":"$int_engine_size3_class5_name",
                "Name_Localised":"Thrusters",
                "StorageSlot":57,
                "StarSystem":"Deciat",
                "MarketID":128676487,
                "TransferCost":0,
                "TransferTime":0,
                "BuyPrice":495215,
                "Hot":false,
                "EngineerModifications":"Engine_Dirty",
                "Level":1,
                "Quality":0.000000
            },
            {
                "Name":"$int_hyperdrive_size6_class5_name;",
                "Name_Localised":"FSD",
                "StorageSlot":59,
                "StarSystem":"Shinrarta Dezhra",
                "MarketID":128666762,
                "TransferCost":79680,
                "TransferTime":1317,
                "BuyPrice":12620035,
                "Hot":false,
                "EngineerModifications":"FSD_LongRange",
                "Level":5,
                "Quality":0.000000
            }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ StoredModules**







## Index

### Properties

* [Items](storedmodules.md#items)
* [MarketID](storedmodules.md#marketid)
* [event](storedmodules.md#event)
* [timestamp](storedmodules.md#timestamp)



---
## Properties
<a id="items"></a>

###  Items

**●  Items**:  *`object`[]* 

*Defined in models/stored-modules.ts:54*





___

<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/stored-modules.ts:53*





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


