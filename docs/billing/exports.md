---
sidebar_position: 1
title: Exports
sidebar_label: Exports
---

# Billing/Contract System
## Exports

### doesInvoiceExist (server-side only)
Check if an invoice exists in the database.

**Parameters:**
- `referenceId` (string) - The reference ID of the invoice

**Returns:**
- `boolean` - Whether the invoice exists or not

**Example**
```lua
local exists = exports["s1n_billing"]:doesInvoiceExist("INV-123456")

if exists then
    print("Invoice exists")
else
    print("Invoice doesn't exist")
end
```

### createInvoice (server-side only)
Create an invoice

**Parameters:**
- `playerSource` - The player's server ID which is the sender of the invoice
- `dataObject` - The data object of the invoice
  - `receiver` (playerSource) - The source of the player who will receive the invoice
  - `isJob` (boolean) - Whether the sender is sending the invoice with his current job or as a citizen
  - `date` (string) - The date of the invoice (DATETIME format, e.g. `2021-09-01 12:00:00`)
  - `item` (string) - The item of the invoice
  - OPTIONAL `note` (string) - A note for the invoice
  - `amount` (number) - The amount of the invoice

**Returns:**
- `boolean` - Whether the invoice was created successfully or not

**Example**
```lua
-- Replace the playerSource with the source of the player who is sending the invoice
-- Replace the targetPlayerSource with the source of the player who will receive the invoice
local success = exports["s1n_billing"]:createInvoice(senderPlayerSource, {
    receiver = targetPlayerSource,
    isJob = true,
    date = "2021-09-01 12:00:00",
    item = "Repair",
    note = "Car repair",
    amount = 100
})

if success then
    print("Invoice created successfully")
else
    print("Failed to create invoice")
end
```

### getSenderPersonalInvoices (server-side only)
Get the invoices sent and received of a given player

**Parameters:**
- `playerSource` - The player's server ID or nil if `targetIdentifier` is provided
- `dataObject` - The data object 
  - OPTIONAL `targetIdentifier` (string) - The identifier of the player to get the invoices from
  - OPTIONAL `limit` (number) - The limit of invoices to get
  - OPTIONAL `offset` (number) - The offset of invoices to get

**Returns:**
- If an error occurs, it will return `false`
- If the player has no invoices, it will return an empty table
- If the player has invoices, it will return a table with the invoices

**Example**
```lua
-- Replace the playerSource with the source of the player who is sending the invoice
local invoices = exports["s1n_billing"]:getSenderPersonalInvoices(playerSource, {
    limit = 10,
    offset = 0
})

if invoices then
    for _, invoice in ipairs(invoices) do
        print(invoice.referenceId)
    end
else
    print("Failed to get invoices")
end

-- OR, to get the invoices of a specific player using his identifier

local targetInvoices = exports["s1n_billing"]:getSenderPersonalInvoices(nil, {
    targetIdentifier = "steam:110000112345678",
    limit = 10,
    offset = 0
})

if targetInvoices then
    for _, invoice in ipairs(targetInvoices) do
        print(invoice.referenceId)
    end
else
    print("Failed to get invoices")
end
```

### getCompanyInvoices (server-side only)
Get the invoices sent and received of a given company

**Parameters:**
- `playerSource` - The player's server ID who is part of the company

**Returns:**
- If an error occurs, it will return `false`
- If the company has no invoices, it will return an empty table
- If the company has invoices, it will return a table with the invoices

**Example**
```lua
-- Replace the playerSource with the source of the player who is part of the company
local invoices = exports["s1n_billing"]:getCompanyInvoices(playerSource)

if invoices then
    for _, invoice in ipairs(invoices) do
        print(invoice.referenceId)
    end
else
    print("Failed to get invoices")
end
```

### markInvoiceAsPaid (server-side only)
Mark an invoice as paid

**Parameters:**
- `dataObject` - The data object of the invoice
  - `id` (string) - The reference ID of the invoice

**Example**
```lua
exports["s1n_billing"]:markInvoiceAsPaid({
    id = "INV-123456"
})
```

### openBillingMenu (client-side only)
Open the billing menu

**Example**
```lua
exports["s1n_billing"]:openBillingMenu()
```