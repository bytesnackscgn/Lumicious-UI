# Lumicious UI Documentation

Lumicious is a high-scalable Glassmorphism UI framework for Vue 3. It is designed to be highly extendable, similar to Quasar.js, but with a hard-coded focus on premium aesthetics.

## 🎨 Design Philosophy: Glassmorphism

The core of Lumicious is the "frosted glass" look. Every component should follow these three rules:

1.  **Transparency & Blur**: Use `backdrop-filter: blur(12px)` and semi-transparent backgrounds.
2.  **Edge Definition**: Every glass element should have a thin, semi-transparent border (`1px solid rgba(255,255,255,0.2)`) to define its geometry against busy backgrounds.
3.  **Reflex Effects**: Subtle gradients and "shines" should be used to simulate light hitting the surface.

## 📁 Component Directory Structure

Each component is organized into its own folder:

```bash
src/components/[ComponentName]/
├── L[ComponentName].vue  # The main Vue component
├── index.ts              # Exports the component
└── [ExtraHelpers].ts     # Logic specific to this component
```

## 🛠️ Developing a Component

To maintain consistency, follow the **L-Prefix** convention.

### Example Template

```vue
<script setup lang="ts">
// Use defineProps with defaults
// Use Tailwind 4 @utility 'glass' where possible
</script>

<template>
  <div class="glass ...">
    <!-- Slot-based architecture for maximum extensibility -->
    <slot />
  </div>
</template>
```

## 🔌 Plugins & Services

Lumicious features global plugins accessible via `this.$lNotify`, `this.$lDark`, etc.

- **Notify**: Toast system.
- **DarkMode**: Global theme switching.
- **LoadingBar**: Global top-progress bar.

## 📐 Base Styles

The design system is governed by `src/index.css`. We use **Tailwind 4**'s CSS-first theme configuration.

- `--glass-blur`: 12px
- `--color-glass-white`: rgba(255, 255, 255, 0.1)
- `--shadow-glass`: 0 8px 32px 0 rgba(0, 0, 0, 0.37)
