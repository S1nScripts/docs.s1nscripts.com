---
sidebar_position: 0
title: FiveM Assets Escrow
sidebar_label: FiveM Assets Escrow
---
![S1nScripts Banner ](https://media.discordapp.net/attachments/791405808587636806/1095223445161246810/45r-01.png?width=1439&height=399)

## FiveM Asset Escrow Errors

If you encounter the following errors:

- `You lack the required entitlement to use X`
- `Failed to verify protected resource X`
- `Error parsing script @Y in resource X: @Y: syntax error near '<\‎1>`

Here's how you can troubleshoot each one of these errors :

### You lack the required entitlement to use X

To resolve this issue, make sure that your server's license key is owned by the same keymaster account that owns the asset. If it is, restart your server. If not, transfer the asset to the same account as your server's license key.

### Failed to verify protected resource X

If you encounter this error, it means that files were corrupted during the download process. This issue often occurs when using FileZilla, as it has a tendency to corrupt files. To avoid this, try using a different FTP client, such as WinSCP.

### Error parsing script @Y in resource X: @Y: syntax error near '<\‎1>'

This error indicates that the server artifacts are outdated. To resolve this, update to the latest <a href="https://runtime.fivem.net/artifacts/fivem/build_server_windows/master">recommended version</a>.