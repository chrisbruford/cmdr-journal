[cmdr-journal](../README.md) > [MarketSell](../classes/marketsell.md)



# Class: MarketSell


When Written: when selling goods in the market

## Example

    {
        "timestamp":"2016-06-10T14:32:03Z",
        "event":"MarketSell",
        "Type":"agriculturalmedicines",
        "Count":3,
        "SellPrice":1360,
        "TotalSale":4080,
        "AvgPricePaid":304
    }

    {
        "event":"MarketSell",
        "Type":"mineraloil",
        "Count":9,
        "SellPrice":72,
        "TotalSale":648,
        "AvgPricePaid":0,
        "StolenGoods":true,
        "BlackMarket":true
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ MarketSell**







## Index

### Properties

* [AvgPricePaid](marketsell.md#avgpricepaid)
* [BlackMarket](marketsell.md#blackmarket)
* [Count](marketsell.md#count)
* [IllegalGoods](marketsell.md#illegalgoods)
* [SellPrice](marketsell.md#sellprice)
* [StolenGoods](marketsell.md#stolengoods)
* [TotalSale](marketsell.md#totalsale)
* [Type](marketsell.md#type)
* [event](marketsell.md#event)
* [timestamp](marketsell.md#timestamp)



---
## Properties
<a id="avgpricepaid"></a>

###  AvgPricePaid

**●  AvgPricePaid**:  *`number`* 

*Defined in models/market-sell.ts:38*





___

<a id="blackmarket"></a>

### «Optional» BlackMarket

**●  BlackMarket**:  *`boolean`* 

*Defined in models/market-sell.ts:41*





___

<a id="count"></a>

###  Count

**●  Count**:  *`number`* 

*Defined in models/market-sell.ts:35*





___

<a id="illegalgoods"></a>

### «Optional» IllegalGoods

**●  IllegalGoods**:  *`boolean`* 

*Defined in models/market-sell.ts:39*





___

<a id="sellprice"></a>

###  SellPrice

**●  SellPrice**:  *`number`* 

*Defined in models/market-sell.ts:36*





___

<a id="stolengoods"></a>

### «Optional» StolenGoods

**●  StolenGoods**:  *`boolean`* 

*Defined in models/market-sell.ts:40*





___

<a id="totalsale"></a>

###  TotalSale

**●  TotalSale**:  *`number`* 

*Defined in models/market-sell.ts:37*





___

<a id="type"></a>

###  Type

**●  Type**:  *`string`* 

*Defined in models/market-sell.ts:34*





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


