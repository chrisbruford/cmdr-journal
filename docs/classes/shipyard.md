[cmdr-journal](../README.md) > [Shipyard](../classes/shipyard.md)



# Class: Shipyard


When written: when accessing shipyard in a station

## Example:

    {
        "timestamp":"2017-10-04T10:01:38Z",
        "event":"Shipyard",
        "MarketID: 128122104,
        "StationName":"Seven Holm",
        "StarSystem":"Tamor",
        "Horizons":true,
        "AllowCobraMkIV":true,
        "PriceList":[
            { "id":128049249, "ShipType":"sidewinder", "ShipPrice":24336 },
            { "id":128049255, "ShipType":"eagle", "ShipPrice":34071 },
            { "id":128049261, "ShipType":"hauler", "ShipPrice":40094 },
            { "id":128049267, "ShipType":"adder", "ShipPrice":66779 },
            { "id":128672138, "ShipType":"empire_eagle", "ShipType_Localised":"Imperial Eagle", "ShipPrice":84283 }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Shipyard**







## Index

### Properties

* [AllowCobraMkIV](shipyard.md#allowcobramkiv)
* [Horizons](shipyard.md#horizons)
* [MarketID](shipyard.md#marketid)
* [Pricelist](shipyard.md#pricelist)
* [StarSystem](shipyard.md#starsystem)
* [StationName](shipyard.md#stationname)
* [event](shipyard.md#event)
* [timestamp](shipyard.md#timestamp)



---
## Properties
<a id="allowcobramkiv"></a>

###  AllowCobraMkIV

**●  AllowCobraMkIV**:  *`boolean`* 

*Defined in models/shipyard.ts:32*





___

<a id="horizons"></a>

###  Horizons

**●  Horizons**:  *`boolean`* 

*Defined in models/shipyard.ts:31*





___

<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/shipyard.ts:28*





___

<a id="pricelist"></a>

###  Pricelist

**●  Pricelist**:  *`object`[]* 

*Defined in models/shipyard.ts:36*



The full price list is written to a separate file, in the same folder as the journal, Shipyard.json




___

<a id="starsystem"></a>

###  StarSystem

**●  StarSystem**:  *`string`* 

*Defined in models/shipyard.ts:30*





___

<a id="stationname"></a>

###  StationName

**●  StationName**:  *`string`* 

*Defined in models/shipyard.ts:29*





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


