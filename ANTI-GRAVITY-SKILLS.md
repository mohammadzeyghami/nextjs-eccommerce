

# 🧠 Anti-Gravity Development Skills (Master Protocol)

## 🧠 Core Skill 1: Architectural Awareness (Stack)
You possess expert-level proficiency in the following stack. Never deviate to alternative libraries:
* **Core:** Next.js (App Router) + TypeScript.
* **State & Data:** Zustand for global state, TanStack Query for server state via Axios/Orval SDK.
* **Forms:** React Hook Form + **Zod** (The absolute source of truth for validation).
* **Styling & Motion:** TailwindCSS (Strict Design Tokens) + Framer Motion.
* **i18n:** Full Multi-language & Multi-theme (RTL/LTR) capabilities.

## 🔍 Core Skill 2: Component Resolution Logic (MANDATORY)
You are forbidden from generating raw HTML (`div`, `button`, `input`). You must resolve every UI request using this recursive skill set:

1.  **Internal Library Extraction (`src/share-components/`):**
    First, scan for existing components in this order:
    * **Atoms:** badge, buttons, card, dropdown, iconButton, logo, menuItemBox, modal, select, spinner, tag, typography.
    * **Molecules:** inputs, dialog, drawer, search, check-box, switch, textarea, upload, popover, tagList, collapse, label, ImagePreview, videoPreview, bottomControls, dropdown-menu.
    * **Organisms:** form-shell.
2.  **Shadcn Fallback Skill:**
    If the component is not found internally, you must print:
    `⚠️ SHARED COMPONENT NOT FOUND: Proceeding to check Shadcn UI...`
    Then, provide the specific `npx shadcn@latest add <name>` command.
3.  **Last Resort Generation:**
    Only if steps 1 and 2 fail, create a new shared component. You must print:
    `⚠️ SHADCN COMPONENT NOT FOUND: Creating a new shared component as absolute last resort.`

## 🌍 Core Skill 3: Internationalization & Theme Fluidity
* **Zero-Static Text Rule:** You are incapable of outputting hardcoded strings. Every text element must use `t('namespace.key')`.
* **Directional Fluidity:** Every component you build must support both RTL (Persian `fa`) and LTR (English `en`).
* **Semantic Theming:** You do not see HEX/RGB. You only see design tokens (e.g., `bg-background`, `text-primary`, `border-border`).

## ✨ Core Skill 4: Motion Synthesis
* **Life-Like UI:** Every section or major block you output must be wrapped in a Framer Motion component.
* **Randomized Physics:** Apply a randomized "Anti-Gravity" entry effect to every section:
    ```tsx
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: Math.random() * 0.5, duration: 0.6 }}
    ```

## 📦 Core Skill 5: Modular Boundary Enforcement
* **Domain Separation:** Organize logic inside `src/modules/<module-name>/`.
* **Unidirectional Dependency:**
    * Modules → Shared Components (✅ ALLOWED)
    * Shared Components → Modules (❌ FORBIDDEN)

## 🎨 Core Skill 6: Layout & Palette Synchronization
* **Layout Persistence:** Use the existing project layout for all designs. If a specific request seems to require a structural layout change, you **must ask** the user for permission before proceeding.
* **Strict Palette Adherence:** All designs must be rendered using the project's internal theme tokens. No external color logic is permitted.

## 📋 Core Skill 7: Unified Form Synthesis (The Context Protocol)
* **Schema Decoupling:** Use **Zod** as the single source of truth for all form validation and types.
* **State Orchestration:** Initialize forms at the module/page level using `useForm` from React Hook Form.
* **Contextual Injection:** Always wrap form logic with `<FormProvider {...methods}>`.
* **Atomic Consumption:** Use `ControllerInput` (or context-aware equivalents) to consume form state via `useFormContext()`.
* **Zero Prop-Drilling:** You are forbidden from passing `control` or `errors` as props. Sub-components must retrieve these from context.

## 📦 Core Skill 8: Shadcn-First Procurement
* **Anti-Base Directive:** You are strictly forbidden from building standard UI components (Select, Modal, Popover, etc.) from scratch.
* **Mandated Workflow:** 
    1. Check `src/share-components/` -> 2. Install from Shadcn UI -> 3. Hand-code (Absolute Last Resort).
* **Dependency Accountability:** When procurement from Shadcn occurs, you MUST immediately verify and install all required Radix UI or utility dependencies to prevent build-time failures.

## 🤖 AI Operational Directive
For every response involving code, you must execute these steps:
1.  **Resolution Step:** Simulate searching Step 1 and Step 2.
2.  **Layout/Theme Check:** Ensure the code integrates into the current layout and uses the established color palette tokens.
3.  **Translation Check:** Ensure zero hardcoded strings (use `t()`).
4.  **Motion Check:** Verify randomized Framer Motion wrappers are present.
5.  **Justification:** If you create a new component, explain why existing Atoms/Molecules were insufficient.
