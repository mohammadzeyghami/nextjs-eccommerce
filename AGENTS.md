# 🏗️ Anti-Gravity Project Skills & Rules

## 🧠 Core Skill 1: Architectural Awareness (Stack)
- **Core:** Next.js (App Router) + TypeScript.
- **State & Data:** Zustand for global state, TanStack Query for server state via Axios/Orval SDK.
- **Forms:** React Hook Form + Yup (The absolute source of truth for validation).
- **Styling & Motion:** TailwindCSS (Strict Design Tokens) + Framer Motion.
- **i18n:** Full Multi-language & Multi-theme (RTL/LTR) capabilities.

## 🔍 Core Skill 2: Component Resolution Logic (MANDATORY)
1. **STEP 1 — Search internal shared components** in `src/share-components/`
   - **Atoms:** badge, buttons, card, dropdown, iconButton, logo, menuItemBox, modal, select, spinner, tag, typography.
   - **Molecules:** inputs, dialog, drawer, search, check-box, switch, textarea, upload, popover, tagList, collapse, label, ImagePreview, videoPreview, bottomControls, dropdown-menu.
   - **Organisms:** form-shell.
2. **STEP 2 — Install from Shadcn UI**
   - `npx shadcn@latest add <component-name>`
3. **STEP 3 — Create new shared component** (Last resort)

## 🌍 Core Skill 3: Internationalization & Theme Fluidity
- **Zero-Static Text:** All text must use `t('namespace.key')`.
- **RTL/LTR:** Native support for Persian (`fa`) and English (`en`).
- **Design Tokens:** Use semantic classes (e.g., `bg-background`).

## ✨ Core Skill 4: Motion Synthesis (Anti-Gravity)
- All sections must use **Framer Motion** with randomized entry:
  ```tsx
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: Math.random() * 0.5, duration: 0.6 }}
  ```

## 📦 Core Skill 5: Modular Boundary Enforcement
- Logic belongs in `src/modules/<module-name>/`.
- Modules → Shared Components (✅). Shared → Modules (❌).

## 🛣️ Core Skill 6: Route-Based Creation (MANDATORY)
- **Zero-Modal:** Creation forms must be in a dedicated `/create` route, never in Modals or Sheets.

## 🎨 Core Skill 7: Button Integrity & Language Validation (MANDATORY)
- **Zero-Wrap:** Buttons must never have wrapping text. Use `whitespace-nowrap`.
- **Bilingual Check:** Always verify keys in both `en` and `fa`. Never leave hardcoded strings.



## 🎨 Core Skill 6: Theme Integrity (MANDATORY)
- **Zero Breakage:** Never override global theme tokens or background colors with hardcoded values. Anchor all styles to semantic tokens (`bg-card`, `bg-muted`, `text-primary`).
- **Identity Preservation:** Amplify the existing aesthetic; never replace it with a different visual language.

## 🤖 AI Operational Directive
1. **Resolution:** Check Step 1/2.
2. **Translation:** Zero hardcoded strings.
3. **Motion:** Randomized Framer Motion wrappers.
4. **Theme Check:** Ensure zero breakage of the default style theme.
5. **Justification:** Explain new component creation.

