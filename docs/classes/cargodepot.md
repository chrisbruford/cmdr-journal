[cmdr-journal](../README.md) > [CargoDepot](../classes/cargodepot.md)



# Class: CargoDepot


When written: when collecting or delivering cargo for a wing mission, or if a wing member updates progress

The CargoType and Count are included when you collect or deliver gods, they are not included for a wing update.

The Progress value actually represents pending progress for goods in transit: (ItemsCollected-ItemsDelievered)/TotalItemsToDeliver

## Example

    {
        "timestamp":"2018-03-07T15:47:03Z",
        "event":"CargoDepot",
        "MissionID":65394170,
        "UpdateType":"Deliver",
        "CargoType":"BasicMedicines",
        "Count":8,
        "StartMarketID":3228867072,
        "EndMarketID":3534964736,
        "ItemsCollected":16,
        "ItemsDelivered":16,
        "TotalItemsToDeliver":3020,
        "Progress":0.000000
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ CargoDepot**







## Index

### Properties

* [CargoType](cargodepot.md#cargotype)
* [Count](cargodepot.md#count)
* [EndMarketID](cargodepot.md#endmarketid)
* [ItemsCollected](cargodepot.md#itemscollected)
* [ItemsDelivered](cargodepot.md#itemsdelivered)
* [MissionID](cargodepot.md#missionid)
* [Progress](cargodepot.md#progress)
* [StartMarketID](cargodepot.md#startmarketid)
* [TotalItemsToDeliver](cargodepot.md#totalitemstodeliver)
* [UpdateType](cargodepot.md#updatetype)
* [event](cargodepot.md#event)
* [timestamp](cargodepot.md#timestamp)



---
## Properties
<a id="cargotype"></a>

###  CargoType

**●  CargoType**:  *`string`* 

*Defined in models/cargo-depot.ts:32*





___

<a id="count"></a>

###  Count

**●  Count**:  *`number`* 

*Defined in models/cargo-depot.ts:33*





___

<a id="endmarketid"></a>

###  EndMarketID

**●  EndMarketID**:  *`number`* 

*Defined in models/cargo-depot.ts:35*





___

<a id="itemscollected"></a>

###  ItemsCollected

**●  ItemsCollected**:  *`number`* 

*Defined in models/cargo-depot.ts:36*





___

<a id="itemsdelivered"></a>

###  ItemsDelivered

**●  ItemsDelivered**:  *`number`* 

*Defined in models/cargo-depot.ts:37*





___

<a id="missionid"></a>

###  MissionID

**●  MissionID**:  *`number`* 

*Defined in models/cargo-depot.ts:30*





___

<a id="progress"></a>

###  Progress

**●  Progress**:  *`number`* 

*Defined in models/cargo-depot.ts:39*





___

<a id="startmarketid"></a>

###  StartMarketID

**●  StartMarketID**:  *`number`* 

*Defined in models/cargo-depot.ts:34*





___

<a id="totalitemstodeliver"></a>

###  TotalItemsToDeliver

**●  TotalItemsToDeliver**:  *`number`* 

*Defined in models/cargo-depot.ts:38*





___

<a id="updatetype"></a>

###  UpdateType

**●  UpdateType**:  *"Collect"⎮"Deliver"⎮"WingUpdate"* 

*Defined in models/cargo-depot.ts:31*





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


