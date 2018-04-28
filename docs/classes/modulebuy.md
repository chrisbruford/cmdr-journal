[cmdr-journal](../README.md) > [ModuleBuy](../classes/modulebuy.md)



# Class: ModuleBuy


When Written: when buying a module in outfitting

## Example

    {
        "timestamp":"2016-06-10T14:32:03Z",
        "event":"ModuleBuy",
        "Slot":"MediumHardpoint2",
        "SellItem":"hpt_pulselaser_fixed_medium",
        "SellPrice":0,
        "BuyItem":"hpt_multicannon_gimbal_medium",
        "BuyPrice":50018,
        "Ship":"cobramkiii","ShipID":1
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ ModuleBuy**







## Index

### Properties

* [BuyItem](modulebuy.md#buyitem)
* [BuyPrice](modulebuy.md#buyprice)
* [MarketID](modulebuy.md#marketid)
* [SellItem](modulebuy.md#sellitem)
* [SellPrice](modulebuy.md#sellprice)
* [Ship](modulebuy.md#ship)
* [ShipID](modulebuy.md#shipid)
* [Slot](modulebuy.md#slot)
* [StoredItem](modulebuy.md#storeditem)
* [event](modulebuy.md#event)
* [timestamp](modulebuy.md#timestamp)



---
## Properties
<a id="buyitem"></a>

###  BuyItem

**●  BuyItem**:  *`string`* 

*Defined in models/module-buy.ts:24*





___

<a id="buyprice"></a>

###  BuyPrice

**●  BuyPrice**:  *`number`* 

*Defined in models/module-buy.ts:25*





___

<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/module-buy.ts:22*





___

<a id="sellitem"></a>

### «Optional» SellItem

**●  SellItem**:  *`string`* 

*Defined in models/module-buy.ts:35*



if replacing existing module




___

<a id="sellprice"></a>

### «Optional» SellPrice

**●  SellPrice**:  *`number`* 

*Defined in models/module-buy.ts:36*





___

<a id="ship"></a>

###  Ship

**●  Ship**:  *`string`* 

*Defined in models/module-buy.ts:26*





___

<a id="shipid"></a>

###  ShipID

**●  ShipID**:  *`number`* 

*Defined in models/module-buy.ts:27*





___

<a id="slot"></a>

###  Slot

**●  Slot**:  *`string`* 

*Defined in models/module-buy.ts:23*





___

<a id="storeditem"></a>

###  StoredItem

**●  StoredItem**:  *`string`* 

*Defined in models/module-buy.ts:31*



If existing module is stored




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


