---
sidebar_position: 1
title: Config
sidebar_label: Config
---

# Banking System
## Exports

### CreateTransaction
Creates a history transaction for the specified account.

**Parameters:** 
- `account` (table) - Must contain an `iban` field in the table with the account's IBAN as a string.
- `action` (string) - The action that will be displayed in the transaction history.
- `label` (string) - The label that will be displayed in the transaction history.
- `amount` (number) - The amount that will be displayed in the transaction history.
- **OPTIONAL**: `id` (string) - The UUID of the transaction. If not provided, a random UUID will be generated.

**Example**
```lua
local account = {
    iban = 'RO1234567890123456789012'
}
exports['s1n_banking']:CreateTransaction(account, 'deposit', 'Paycheck', 1000)
```

### GetAccountData
Gets the account data for the specified account.

**Parameters:**
- `source` (string) - The target player's server ID.
- `data` (table) - Must contain a `type` field in the table which can be `societyaccount`, `sharedaccount`or `useraccount`.

**Example**
```lua
local account = {
    type = 'useraccount'
}
local accountData = exports['s1n_banking']:GetAccountData(source, account)
```