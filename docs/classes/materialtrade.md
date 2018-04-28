[cmdr-journal](../README.md) > [MaterialTrade](../classes/materialtrade.md)



# Class: MaterialTrade


When written: when exchanging materials at the Material trader contact

## Example:

    {
        "timestamp":"2018-02-21T15:23:49Z",
        "event":"MaterialTrade",
        "MarketID":3221397760,
        "TraderType":"encoded",
        "Paid": {
            "Material":"scandatabanks",
            "Material_Localised":"Classified Scan Databanks",
            "Category":"$MICRORESOURCE_CATEGORY_Encoded;",
            "Category_Localised":"Encoded",
            "Quantity":6,
            "Category":"$MICRORESOURCE_CATEGORY_Encoded;",
            "Category_Localised":"Encoded"
        },
        "Received": {
            "Material":"encodedscandata",
            "Material_Localised":
            "Divergent Scan Data",
            "Quantity":1
        }
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ MaterialTrade**







## Index

### Properties

* [MarketID](materialtrade.md#marketid)
* [Paid](materialtrade.md#paid)
* [Received](materialtrade.md#received)
* [TraderType](materialtrade.md#tradertype)
* [event](materialtrade.md#event)
* [timestamp](materialtrade.md#timestamp)



---
## Properties
<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/material-trade.ts:32*





___

<a id="paid"></a>

###  Paid

**●  Paid**:  *`object`* 

*Defined in models/material-trade.ts:34*


#### Type declaration




 Category: `string`






 Category_Localised: `string`






 Material: `string`






 Material_Localised: `string`






 Quantity: `number`







___

<a id="received"></a>

###  Received

**●  Received**:  *`object`* 

*Defined in models/material-trade.ts:41*


#### Type declaration




 Category: `string`






 Category_Localised: `string`






 Material: `string`






 Material_Localised: `string`






 Quantity: `number`







___

<a id="tradertype"></a>

###  TraderType

**●  TraderType**:  *`string`* 

*Defined in models/material-trade.ts:33*





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


