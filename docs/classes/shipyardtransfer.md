[cmdr-journal](../README.md) > [ShipyardTransfer](../classes/shipyardtransfer.md)



# Class: ShipyardTransfer


When Written: when requesting a ship at another station be transported to this station

## Example

    {
        "timestamp":"2016-07-21T15:19:49Z",
        "event":"ShipyardTransfer",
        "ShipType":"SideWinder",
        "ShipID":7,
        "System":"Eranin",
        "Distance":85.639145,
        "TransferPrice":580
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ ShipyardTransfer**







## Index

### Properties

* [Distance](shipyardtransfer.md#distance)
* [MarketID](shipyardtransfer.md#marketid)
* [ShipID](shipyardtransfer.md#shipid)
* [ShipType](shipyardtransfer.md#shiptype)
* [System](shipyardtransfer.md#system)
* [TransferPrice](shipyardtransfer.md#transferprice)
* [TransferTime](shipyardtransfer.md#transfertime)
* [event](shipyardtransfer.md#event)
* [timestamp](shipyardtransfer.md#timestamp)



---
## Properties
<a id="distance"></a>

###  Distance

**●  Distance**:  *`number`* 

*Defined in models/shipyard-transfer.ts:25*





___

<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/shipyard-transfer.ts:21*





___

<a id="shipid"></a>

###  ShipID

**●  ShipID**:  *`number`* 

*Defined in models/shipyard-transfer.ts:23*





___

<a id="shiptype"></a>

###  ShipType

**●  ShipType**:  *`string`* 

*Defined in models/shipyard-transfer.ts:22*





___

<a id="system"></a>

###  System

**●  System**:  *`string`* 

*Defined in models/shipyard-transfer.ts:24*





___

<a id="transferprice"></a>

###  TransferPrice

**●  TransferPrice**:  *`number`* 

*Defined in models/shipyard-transfer.ts:26*





___

<a id="transfertime"></a>

###  TransferTime

**●  TransferTime**:  *`number`* 

*Defined in models/shipyard-transfer.ts:27*





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


