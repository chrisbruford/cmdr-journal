[cmdr-journal](../README.md) > [ModuleSwap](../classes/moduleswap.md)



# Class: ModuleSwap


When Written: when moving a module to a different slot on the ship

## Example

    {
        "timestamp":"2016-06-10T14:32:03Z",
        "event":"ModuleSwap",
        "FromSlot":"MediumHardpoint1",
        "ToSlot":"MediumHardpoint2",
        "FromItem":"hpt_pulselaser_fixed_medium",
        "ToItem":"hpt_multicannon_gimbal_medium",
        "Ship":"cobramkiii",
        "ShipID":1
    }

    {
        "timestamp":"2016-06-10T14:32:03Z",
        "event":"ModuleSwap",
        "FromSlot":"SmallHardpoint2",
        "ToSlot":"SmallHardpoint1",
        "FromItem":"hpt_pulselaserburst_fixed_small_scatter",
        "ToItem":"Null",
        "Ship":"cobramkiii",
        "ShipID":1
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ ModuleSwap**







## Index

### Properties

* [FromItem](moduleswap.md#fromitem)
* [FromSlot](moduleswap.md#fromslot)
* [MarketID](moduleswap.md#marketid)
* [Ship](moduleswap.md#ship)
* [ShipID](moduleswap.md#shipid)
* [ToItem](moduleswap.md#toitem)
* [ToSlot](moduleswap.md#toslot)
* [event](moduleswap.md#event)
* [timestamp](moduleswap.md#timestamp)



---
## Properties
<a id="fromitem"></a>

###  FromItem

**●  FromItem**:  *`string`* 

*Defined in models/module-swap.ts:37*





___

<a id="fromslot"></a>

###  FromSlot

**●  FromSlot**:  *`string`* 

*Defined in models/module-swap.ts:35*





___

<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/module-swap.ts:34*





___

<a id="ship"></a>

###  Ship

**●  Ship**:  *`string`* 

*Defined in models/module-swap.ts:39*





___

<a id="shipid"></a>

###  ShipID

**●  ShipID**:  *`number`* 

*Defined in models/module-swap.ts:40*





___

<a id="toitem"></a>

###  ToItem

**●  ToItem**:  *`string`* 

*Defined in models/module-swap.ts:38*





___

<a id="toslot"></a>

###  ToSlot

**●  ToSlot**:  *`string`* 

*Defined in models/module-swap.ts:36*





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


