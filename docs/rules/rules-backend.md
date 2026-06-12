# Backend rules (FastAPI)

- Routes → row in `docs/context/api-list.md`
- Services → discoverable via index; shared types in `docs/context/types.md`
- Routes thin: parse → call service → return
- Every public function → colocated pytest beside its module (see `rules-testing.md`)
