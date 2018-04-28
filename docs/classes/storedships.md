[cmdr-journal](../README.md) > [StoredShips](../classes/storedships.md)



# Class: StoredShips


When written: when visiting shipyard

## Example

    {
        "timestamp":"2017-10-04T10:07:21Z",
        "event":"StoredShips",
        "StationName":"Jameson Memorial",
        "StarSystem":"Shinrarta Dezhra",
        "ShipsHere":[
            {
                "ShipID":64,
                "ShipType":"sidewinder",
                "Value":567962
            },
            {
                "ShipID":20,
                "ShipType":"empire_eagle",
                "Value":6373956
            }
        ],
        "ShipsRemote":[
            {
                "ShipID":0,
                "ShipType":"CobraMkIII",
                "StarSystem":"Beta-1 Tucanae",
                "TransferPrice":3777,
                "TransferTime":1590,
                "Value":9464239
            }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ StoredShips**







## Index

### Properties

* [MarketID](storedships.md#marketid)
* [ShipsHere](storedships.md#shipshere)
* [ShipsRemote](storedships.md#shipsremote)
* [StarSystem](storedships.md#starsystem)
* [StationName](storedships.md#stationname)
* [event](storedships.md#event)
* [timestamp](storedships.md#timestamp)



---
## Properties
<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/stored-ships.ts:40*





___

<a id="shipshere"></a>

###  ShipsHere

**●  ShipsHere**:  *`object`[]* 

*Defined in models/stored-ships.ts:43*





___

<a id="shipsremote"></a>

###  ShipsRemote

**●  ShipsRemote**:  *`object`[]* 

*Defined in models/stored-ships.ts:50*





___

<a id="starsystem"></a>

###  StarSystem

**●  StarSystem**:  *`string`* 

*Defined in models/stored-ships.ts:42*





___

<a id="stationname"></a>

###  StationName

**●  StationName**:  *`string`* 

*Defined in models/stored-ships.ts:41*





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


