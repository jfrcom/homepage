---
title: LubeLogger
description: LubeLogger Widget Configuration
---

Learn more about [LubeLogger](https://github.com/hargata/lubelog) (v1.3.7 or higher is required).

The widget comes in two 'flavors', one shows data for all vehicles or for just a specific vehicle with the `vehicleID` parameter.

Allowed fields: `["vehicles", "serviceRecords", "reminders"]`.
For the single-vehicle version: `["vehicle", "serviceRecords", "reminders", "nextReminder"]`.

```yaml
widget:
  type: lubelogger
  url: https://lubelogger.host.or.ip
  username: lubeloggerusername
  password: lubeloggerpassword
  vehicleID: 1 # optional, changes to single-vehicle version
```

Alternatively, authenticate with a LubeLogger API key:

```yaml
widget:
  type: lubelogger
  url: https://lubelogger.host.or.ip
  apiKey: "{{HOMEPAGE_VAR_LUBELOGGER_API_KEY}}"
  vehicleID: 1 # optional, changes to single-vehicle version
```

API key authentication requires LubeLogger v1.5.8 or later. The API key is sent in the `x-api-key` header. If `apiKey` and username/password are both configured, `apiKey` takes precedence and username/password are not sent.
