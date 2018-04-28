[cmdr-journal](../README.md) > [EngineerContribution](../classes/engineercontribution.md)



# Class: EngineerContribution


When written: when offering items cash or bounties to an Engineer to gain access

## Example

    {
        "timestamp":"2017-05-24T10:41:51Z",
        "event":"EngineerContribution",
        "Engineer":"Elvira Martuuk",
        "EngineerID":300160,
        "Type":"Commodity",
        "Commodity":"soontillrelics",
        "Quantity":2,
        "TotalQuantity":3
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ EngineerContribution**







## Index

### Properties

* [Commodity](engineercontribution.md#commodity)
* [Engineer](engineercontribution.md#engineer)
* [EngineerID](engineercontribution.md#engineerid)
* [Faction](engineercontribution.md#faction)
* [Material](engineercontribution.md#material)
* [Quantity](engineercontribution.md#quantity)
* [TotalQuantity](engineercontribution.md#totalquantity)
* [Type](engineercontribution.md#type)
* [event](engineercontribution.md#event)
* [timestamp](engineercontribution.md#timestamp)



---
## Properties
<a id="commodity"></a>

### «Optional» Commodity

**●  Commodity**:  *`string`* 

*Defined in models/engineer-contribution.ts:26*





___

<a id="engineer"></a>

###  Engineer

**●  Engineer**:  *`string`* 

*Defined in models/engineer-contribution.ts:23*





___

<a id="engineerid"></a>

###  EngineerID

**●  EngineerID**:  *`number`* 

*Defined in models/engineer-contribution.ts:24*





___

<a id="faction"></a>

### «Optional» Faction

**●  Faction**:  *`string`* 

*Defined in models/engineer-contribution.ts:28*





___

<a id="material"></a>

### «Optional» Material

**●  Material**:  *`string`* 

*Defined in models/engineer-contribution.ts:27*





___

<a id="quantity"></a>

###  Quantity

**●  Quantity**:  *`number`* 

*Defined in models/engineer-contribution.ts:29*





___

<a id="totalquantity"></a>

###  TotalQuantity

**●  TotalQuantity**:  *`number`* 

*Defined in models/engineer-contribution.ts:30*





___

<a id="type"></a>

###  Type

**●  Type**:  *"Commodity"⎮"materials"⎮"Credits"⎮"Bond"⎮"Bounty"* 

*Defined in models/engineer-contribution.ts:25*





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


