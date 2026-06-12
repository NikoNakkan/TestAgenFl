---
name: index-curator
description: "Deprecated alias — use flow-end-validator for task closure."
---

# Index curator (deprecated)

Use **[flow-end-validator.agent.md](flow-end-validator.agent.md)** instead.

The closing agent is now **flow-end-validator** — it runs `code_index_refresh.py`, validates graph↔MD linkage, checks `missing_tests`, and signs off `state.yaml`.

Only edit `scripts/code_index_*.py` here if the validator reports an **indexer/parser gap** — otherwise dispatch `flow-end-validator`.
