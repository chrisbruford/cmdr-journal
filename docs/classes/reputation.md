[cmdr-journal](../README.md) > [Reputation](../classes/reputation.md)



# Class: Reputation


When written: at startup (after Rank and Progress)

Note thresholds: -100.. -90: hostile  
-90.. -35: unfriendly  
-35..+ 4: neutral  
+4..+35: cordial  
+35..+90: friendly  
+90..+100: allied  

## Example

    {
        "timestamp":"2018-03-24T10:10:38Z",
        "event":"Reputation",
        "Empire":75.000000,
        "Federation":75.937500,
        "Independent":75.000000,
        "Alliance":74.068703
    }

## Hierarchy


 [JournalEvent](journalevent.md)

**↳ Reputation**







## Index

### Properties

* [Alliance](reputation.md#alliance)
* [Empire](reputation.md#empire)
* [Federation](reputation.md#federation)
* [Independent](reputation.md#independent)
* [event](reputation.md#event)
* [timestamp](reputation.md#timestamp)



---
## Properties
<a id="alliance"></a>

###  Alliance

**●  Alliance**:  *`number`* 

*Defined in models/reputation.ts:31*





___

<a id="empire"></a>

###  Empire

**●  Empire**:  *`number`* 

*Defined in models/reputation.ts:28*





___

<a id="federation"></a>

###  Federation

**●  Federation**:  *`number`* 

*Defined in models/reputation.ts:29*





___

<a id="independent"></a>

###  Independent

**●  Independent**:  *`number`* 

*Defined in models/reputation.ts:30*





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


