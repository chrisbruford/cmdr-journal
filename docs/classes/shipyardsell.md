[cmdr-journal](../README.md) > [ShipyardSell](../classes/shipyardsell.md)



# Class: ShipyardSell


When Written: when selling a ship stored in the shipyard

## Example

    {
        "timestamp":"2016-07-21T15:12:19Z",
        "event":"ShipyardSell",
        "ShipType":"Adder",
        "SellShipID":6,
        "ShipPrice":79027,
        "System":"Eranin"
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ ShipyardSell**







## Index

### Properties

* [MarketID](shipyardsell.md#marketid)
* [SellShipID](shipyardsell.md#sellshipid)
* [ShipPrice](shipyardsell.md#shipprice)
* [ShipType](shipyardsell.md#shiptype)
* [System](shipyardsell.md#system)
* [event](shipyardsell.md#event)
* [timestamp](shipyardsell.md#timestamp)



---
## Properties
<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/shipyard-sell.ts:20*





___

<a id="sellshipid"></a>

###  SellShipID

**●  SellShipID**:  *`number`* 

*Defined in models/shipyard-sell.ts:22*





___

<a id="shipprice"></a>

###  ShipPrice

**●  ShipPrice**:  *`number`* 

*Defined in models/shipyard-sell.ts:23*





___

<a id="shiptype"></a>

###  ShipType

**●  ShipType**:  *`string`* 

*Defined in models/shipyard-sell.ts:21*





___

<a id="system"></a>

### «Optional» System

**●  System**:  *`string`* 

*Defined in models/shipyard-sell.ts:24*





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


