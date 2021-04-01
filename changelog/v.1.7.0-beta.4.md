Version **1.7.0-beta.3** _to_ **1.7.0-beta.4**

What's Updated
==============

\[ networks \]
--------------

GET _`/networks/{networkId}/firmwareUpgrades`_

> \- Response property `timezone` value added

> \- Response property `products` value added

> \- Summary changed from `Get current maintenance window for a network` to `Get firmware upgrade information for a network`

* * *

PUT _`/networks/{networkId}/firmwareUpgrades`_

> \- Summary changed from `Update current maintenance window for a network` to `Update firmware upgrade information for a network`

* * *

POST _`/networks/{networkId}/firmwareUpgrades/rollbacks`_

> \- Optional property `toVersion` Added

* * *

\[ wireless \]
--------------

GET _`/networks/{networkId}/wireless/clients/healthScores`_

> \- Response property `clientId` value added

> \- Response property `clientId` value added

* * *

GET _`/networks/{networkId}/wireless/clients/{clientId}/healthScores`_

> \- Response property `clientId` value added

* * *

PUT _`/networks/{networkId}/wireless/ssids/{number}`_

> \- Optional property `baseDistinguishedName` Added

> \- Optional property `serverCaCertificate` Added

> \- Property `adaptivePolicyGroupId` Deleted

> \- Optional property `oauth` Added

> \- Optional property `localRadius` Added

> \- Optional property `dnsRewrite` Added

* * *

PATH _`/networks/{networkId}/wireless/ssids/{number}/vpn`_

> \- Path added  
>   
> \- New endpoint
> 
> #### List the VPN settings for the SSID.
> 
> **GET** `/networks/{networkId}/wireless/ssids/{number}/vpn`  
> 
>     {
>         "splitTunnel": {
>             "enabled": true,
>             "rules": [
>                 {
>                     "protocol": "any",
>                     "destCidr": "1.1.1.1/32",
>                     "destPort": "any",
>                     "policy": "allow",
>                     "comment": "split tunnel rule 1"
>                 },
>                 {
>                     "destCidr": "foo.com",
>                     "destPort": "any",
>                     "policy": "deny",
>                     "comment": "split tunnel rule 2"
>                 }
>             ]
>         }
>     }
> 
> * * *
> 
>   
> \- New endpoint
> 
> #### Update the VPN settings for the SSID
> 
> **PUT** `/networks/{networkId}/wireless/ssids/{number}/vpn`  
> 
>     {
>         "splitTunnel": {
>             "enabled": true,
>             "rules": [
>                 {
>                     "protocol": "any",
>                     "destCidr": "1.1.1.1/32",
>                     "destPort": "any",
>                     "policy": "allow",
>                     "comment": "split tunnel rule 1"
>                 },
>                 {
>                     "destCidr": "foo.com",
>                     "destPort": "any",
>                     "policy": "deny",
>                     "comment": "split tunnel rule 2"
>                 }
>             ]
>         }
>     }
> 
> * * *

* * *