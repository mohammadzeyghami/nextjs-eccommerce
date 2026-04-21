# Project Stack Rules

- nextjs + TypeScript
- TanStack Query (React Query) for data fetching/caching
- Axios + Orval SDK (packages/sdk-fetch/, packages/sdk-query/)
- Zustand for global state (src/store/)
- React Hook Form + Zod for forms and validation
- TailwindCSS for styling (Design Tokens only)
- i18n with src/locales/ (Persian fa + English en)
- RTL support (Persian UI default)

---

## Component Architecture (MANDATORY Resolution Order)
Before creating any component, follow this exact order:

1. **STEP 1 — Search internal shared components** in `src/share-components/`
   - If match exists → USE IT.
   - If not found → Print: `⚠️ SHARED COMPONENT NOT FOUND. Proceeding to check Shadcn UI...`
2. **STEP 2 — Install from Shadcn UI** (https://ui.shadcn.com/docs/components)
   - If found → `npx shadcn@latest add <component-name>`
   - Place in appropriate `src/share-components/` layer.
   - If not found → Print: `⚠️ SHADCN COMPONENT NOT FOUND. Proceeding to create new shared component...`
3. **STEP 3 — Create new shared component** (Last resort)
   - Generic, no domain logic, place in `src/share-components/`.

**Layers in `src/share-components/`:**
- **Atoms:** badge, buttons, card, dropdown, iconButton, logo, menuItemBox, modal, select, spinner, tag, typography.
- **Molecules:** inputs, dialog, drawer, search, check-box, switch, textarea, upload, popover, tagList, collapse, label, ImagePreview, videoPreview, bottomControls, dropdown-menu.
- **Organisms:** form-shell (generic wrappers).

**Module Components (`src/modules/<module>/components/`):**
- Contains business/domain logic. Can import from shared, but shared NEVER imports from modules.

---

## Data Layer — TanStack Query + SDK
- **Flow:** API (SDK) → Module Service → TanStack Query Hook → UI Component.
- **Keys:** Use key factories in `src/lib/react-query/key-factory.ts` or module `keys.ts`. No inline keys.
- **Invalidation:** 
  - Create/Delete: Invalidate `lists()`.
  - Update: Invalidate `lists()` + `detail(id)`.
- **Optimistic Updates:** Must include rollback logic using `onMutate` and `onError`.

---

## Forms — React Hook Form + Zod
- **Schema Location:** `src/modules/<Module>/interfaces/<module>.schema.ts`
- **Pattern:**
```ts
import { z } from "zod";
export const UserFormSchema = z.object({
  name: z.string().trim().min(2).max(50),
  email: z.string().trim().email(),
  age: z.coerce.number().min(1).optional(),
});
export type UserFormValues = z.infer<typeof UserFormSchema>;
```
