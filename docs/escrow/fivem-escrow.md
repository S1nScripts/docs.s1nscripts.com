---
sidebar_position: 0
title: FiveM Assets Escrow
sidebar_label: FiveM Assets Escrow
---
![S1nScripts Banner](https://media.discordapp.net/attachments/791405808587636806/1095223445161246810/45r-01.png?width=1439&height=399)

## FiveM Asset Escrow Errors

If you encounter the following errors:

- `You lack the required entitlement to use X`
- `Failed to verify protected resource X`
- `Error parsing script @Y in resource X: @Y: syntax error near ...`

Here's how you can troubleshoot each one of these errors :

### You lack the required entitlement to use X

To resolve this issue, make sure that your server's license key is owned by the same keymaster account that owns the asset. If it is, restart your server. If not, transfer the asset to the same account as your server's license key.

### Failed to verify protected resource X

If you come across this error, it indicates that the files were damaged during the download process. This problem frequently arises while using FileZilla as it tends to corrupt the files. To prevent this issue, consider using an alternative FTP client like WinSCP.

### Error parsing script @Y in resource X: @Y: syntax error near ...

This error message indicates that the server artifacts are outdated. In order to resolve this issue, you need to update to the latest <a href="https://runtime.fivem.net/artifacts/fivem/build_server_windows/master">recommended version</a>.

### My script doesn't work and there is no errors in the F8 logs and server console

Try downloading again the script from KeyMaster and put it in your server with an FTP Client different from FileZilla like WinSCP.
Verify that the script doesn't contain any uppercase letters in the script's name.