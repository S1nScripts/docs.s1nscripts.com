---
sidebar_position: 1
title: Exports
sidebar_label: Exports
---

# Banking System
## Exports

⚠️ If you're on QBCore and also using qb-banking, you can use qb-banking exports (s1n_banking is synchronized with qb-banking). ⚠️

### CheckOpenUI (client-side only)
If you enabled the debit card system, you can use this export to check if the player has the item in their inventory and it will open the UI if so.

**Example**
```lua
exports["s1n_banking"]:checkOpenUI()
```

### OpenUI (client-side only)
Opens the banking UI for the player to interact with the banking system.

**Example**
```lua
exports["s1n_banking"]:openUI()
```

### CreateTransaction (server-side only)
Creates a history transaction for the specified account. 
It doesn't add or remove money from the account, it's just for logging purposes.

**Parameters:** 
- `account` (table) - Must contain an `iban` field in the table with the account's IBAN as a string.
- `action` (string) - The action that will be displayed in the transaction history.
- `label` (string) - The label that will be displayed in the transaction history.
- `amount` (number) - The amount that will be displayed in the transaction history.

**Example**
```lua
local account = {
    iban = 'RO1234567890123456789012'
}
exports["s1n_banking"]:CreateTransaction(account, "deposit", "Paycheck", 1000)
```

### GetAccountData (server-side only)
Gets the account data for the specified account.

**Parameters:**
- `source` (string) - The target player's server ID.
- `data` (table) - Must contain a `type` field in the table which can be `societyaccount`, `sharedaccount`or `useraccount`.

**Returns:**
If there has been an error, it will return a tuple with the first value being `false` and the second value being the error message. 
If the account data has been found:
- `id` (number) - The ID of the account in the database.
- `iban` (string) - The IBAN of the account.
- `owner` (string) - The owner's framework identifier of the account.
- `type` (string) - The type of the account.
- `history` (table) - The transaction history of the account.
- `balance` (number) - The current balance of the account.
- `members` (table) - The members of the account (if it's a shared account).
- `credit` (table) - The credit data of the account (if there has been at least one credit linked to the account).

**Example**
```lua
local account = {
    type = 'useraccount'
}
local accountData, errorMessage = exports["s1n_banking"]:GetAccountData(playerSource, account)

if not accountData then
    print(errorMessage)
    return
end

print(json.encode(accountData))
```


### **ONLY FOR QBCORE** AddMoneyToSociety (server-side only)
Adds money to the specified society account. (It's meant to replace qb-banking `AddMoney` export)

**Parameters:**
- `societyName` (string) - The name of the society.
- `amount` (number) - The amount to add to the society account.
- `reason` (string) - The reason for adding money to the society account.

**Example**
```lua
exports["s1n_banking"]:AddMoneyToSociety("police", 1000, "Paycheck")
```

### **ONLY FOR QBCORE** RemoveMoneyFromSociety (server-side only)
Removes money from the specified society account. (It's meant to replace qb-banking `RemoveMoney` export)

**Parameters:**
- `societyName` (string) - The name of the society.
- `amount` (number) - The amount to remove from the society account.
- `reason` (string) - The reason for removing money from the society account.

**Example**
```lua
exports['s1n_banking']:RemoveMoneyFromSociety("police", 1000, "Paycheck")
```
