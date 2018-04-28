[cmdr-journal](../README.md) > [Outfitting](../classes/outfitting.md)



# Class: Outfitting


Written when accessing the outfitting menu The full parts pricelist is written to a separate file Outfitting.json

## Example

    {
        "timestamp":"2017-10-05T10:11:38Z",
        "event":"Outfitting",
        "MarketID":128678535,
        "StationName":"Black Hide",
        "StarSystem":"Wyrd",
        "Horizons":true,
        "Items":[
            {
                "id":128049382,
                "Name":"hpt_pulselaser_fixed_medium",
                "BuyPrice":16731
            },
            {
                "id":128049383,
                "Name":"hpt_pulselaser_fixed_large",
                "BuyPrice":66924
            },
            {
                "id":128049385,
                "Name":"hpt_pulselaser_gimbal_small",
                "BuyPrice":6275
            },
            {
                "id":128049386,
                "Name":"hpt_pulselaser_gimbal_medium",
                "BuyPrice":33653
            },
            {
                "id":128049388,
                "Name":"hpt_pulselaser_turret_small",
                "BuyPrice":24717
            },
            {
                "id":128681995,
                "Name":"hpt_pulselaser_gimbal_huge",
                "BuyPrice":834269
            }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Outfitting**







## Index

### Properties

* [Horizons](outfitting.md#horizons)
* [Items](outfitting.md#items)
* [MarketID](outfitting.md#marketid)
* [StarSystem](outfitting.md#starsystem)
* [StationName](outfitting.md#stationname)
* [event](outfitting.md#event)
* [timestamp](outfitting.md#timestamp)



---
## Properties
<a id="horizons"></a>

### «Optional» Horizons

**●  Horizons**:  *`boolean`* 

*Defined in models/outfitting.ts:59*



In seperate Outfitting.json file only




___

<a id="items"></a>

### «Optional» Items

**●  Items**:  *`object`[]* 

*Defined in models/outfitting.ts:60*





___

<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/outfitting.ts:53*





___

<a id="starsystem"></a>

###  StarSystem

**●  StarSystem**:  *`string`* 

*Defined in models/outfitting.ts:55*





___

<a id="stationname"></a>

###  StationName

**●  StationName**:  *`string`* 

*Defined in models/outfitting.ts:54*





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


