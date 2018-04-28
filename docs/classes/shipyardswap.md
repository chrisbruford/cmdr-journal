[cmdr-journal](../README.md) > [ShipyardSwap](../classes/shipyardswap.md)



# Class: ShipyardSwap


When Written: when switching to another ship already stored at this station

## Example:

    {
        "timestamp":"2016-07-21T14:36:06Z",
        "event":"ShipyardSwap",
        "ShipType":"sidewinder",
        "ShipID":10,
        "StoreOldShip":"Asp",
        "StoreShipID":2
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ ShipyardSwap**







## Index

### Properties

* [MarketID](shipyardswap.md#marketid)
* [SellOldShip](shipyardswap.md#selloldship)
* [SellShipID](shipyardswap.md#sellshipid)
* [ShipID](shipyardswap.md#shipid)
* [ShipType](shipyardswap.md#shiptype)
* [StoreOldShip](shipyardswap.md#storeoldship)
* [StoreShipID](shipyardswap.md#storeshipid)
* [event](shipyardswap.md#event)
* [timestamp](shipyardswap.md#timestamp)



---
## Properties
<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/shipyard-swap.ts:19*





___

<a id="selloldship"></a>

### «Optional» SellOldShip

**●  SellOldShip**:  *`string`* 

*Defined in models/shipyard-swap.ts:24*





___

<a id="sellshipid"></a>

### «Optional» SellShipID

**●  SellShipID**:  *`number`* 

*Defined in models/shipyard-swap.ts:25*





___

<a id="shipid"></a>

###  ShipID

**●  ShipID**:  *`number`* 

*Defined in models/shipyard-swap.ts:21*





___

<a id="shiptype"></a>

###  ShipType

**●  ShipType**:  *`string`* 

*Defined in models/shipyard-swap.ts:20*





___

<a id="storeoldship"></a>

### «Optional» StoreOldShip

**●  StoreOldShip**:  *`string`* 

*Defined in models/shipyard-swap.ts:22*





___

<a id="storeshipid"></a>

### «Optional» StoreShipID

**●  StoreShipID**:  *`number`* 

*Defined in models/shipyard-swap.ts:23*





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


