# Frontend rules (React)

- Exported hooks → row in `docs/context/fe-utils.md`, name `use*`
- Exported components → row in `docs/context/fe-components.md`
- API clients → row in `docs/context/fe-services.md`
- Every export → colocated test file in the same folder (see `rules-testing.md`)

## Design system

- Paths, theme, and tiers → `docs/context/fe-design-system.md`
- UI tasks: run **`fe-design-navigator`** before **`fe-dev`**
- **Base components** — `Base<Name>` in `components/Base<Name>/`; listed in fe-design-system **base** table
- **Extending components** — fe-design-system **extending** table with `extends_base` set
- **No extending component without a base** — create/register the base first
- Read order: theme/colors → base components → extending → page shell
