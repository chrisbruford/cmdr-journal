[cmdr-journal](../README.md) > [TechnologyBroker](../classes/technologybroker.md)



# Class: TechnologyBroker


When written: when using the Technology Broker to unlock new purchasable technology

## Example

    {
        "timestamp":"2018-03-02T11:28:44Z",
        "event":"TechnologyBroker",
        "BrokerType":"Human",
        "MarketID":128151032,
        "ItemsUnlocked":[
            {
                "Name":"Hpt_PlasmaShockCannon_Fixed_Medium",
                "Name_Localised":"Shock Cannon"
            }
        ],
        "Commodities":[
            {
                "Name":"iondistributor",
                "Name_Localised":"Ion Distributor",
                "Count":6
            }
        ],
        "Materials":[
            {
                "Name":"vanadium",
                "Count":30,
                "Category":"Raw"
            },
            {
                "Name":"tungsten",
                "Count":30,
                "Category":"Raw"
            },
            {
                "Name":"rhenium",
                "Count":36,
                "Category":"Raw"
            },
            {
                "Name":"technetium",
                "Count":30,
                "Category":"Raw"
            }
        ]
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ TechnologyBroker**







## Index

### Properties

* [BrokerType](technologybroker.md#brokertype)
* [Commodities](technologybroker.md#commodities)
* [ItemsUnlocked](technologybroker.md#itemsunlocked)
* [MarketID](technologybroker.md#marketid)
* [Materials](technologybroker.md#materials)
* [event](technologybroker.md#event)
* [timestamp](technologybroker.md#timestamp)



---
## Properties
<a id="brokertype"></a>

###  BrokerType

**●  BrokerType**:  *`string`* 

*Defined in models/technology-broker.ts:54*





___

<a id="commodities"></a>

###  Commodities

**●  Commodities**:  *`object`[]* 

*Defined in models/technology-broker.ts:57*





___

<a id="itemsunlocked"></a>

###  ItemsUnlocked

**●  ItemsUnlocked**:  *`object`[]* 

*Defined in models/technology-broker.ts:56*





___

<a id="marketid"></a>

###  MarketID

**●  MarketID**:  *`number`* 

*Defined in models/technology-broker.ts:55*





___

<a id="materials"></a>

###  Materials

**●  Materials**:  *`object`[]* 

*Defined in models/technology-broker.ts:62*





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


