# React Native Istanbul - Roadmap

This document outlines the planned components and features for the React Native Istanbul UI library, prioritized based on real-world usage in production applications.

## Current Status

✅ **Completed Components:**

- Button - Fully implemented with variants, sizes, states, and icons
- Typography - Complete typography system with variants, sizes, weights, and colors
- Divider - Horizontal and vertical dividers with spacing and text support
- Badge - Status indicators with variants (dot, number, text), positions, and colors
- Chip / Tag - Small labels with variants, sizes, and deletable option
- ProgressBar - Determinate and indeterminate progress indicators
- Spacer - Spacing utility component for vertical and horizontal spacing
- Card - Versatile container with variants, elevation, header, footer, and image support
- Avatar - User profile pictures with fallback options, sizes, and status indicators

## High Priority Components

### 1. Input / TextInput

**Priority:** 🔴 Critical  
**Status:** 📋 Planned

A comprehensive text input component for forms and user input. Essential for any form-based application.

**Features:**

- Variants: default, outlined, filled
- States: error, disabled, focused
- Label and placeholder support
- Helper text and error messages
- Icon support (left/right)
- Password visibility toggle
- Character counter
- Multiline support

**Props:**

- `variant`: "default" | "outlined" | "filled"
- `size`: "sm" | "md" | "lg"
- `error`: boolean
- `disabled`: boolean
- `label`: string
- `placeholder`: string
- `helperText`: string
- `leftIcon`: ReactNode
- `rightIcon`: ReactNode
- `multiline`: boolean
- `secureTextEntry`: boolean

---

### 2. Header / AppBar

**Priority:** 🔴 Critical  
**Status:** 📋 Planned

A navigation header component with back button, title, and action buttons. Used extensively in mobile apps.

**Features:**

- Back button support
- Title and subtitle
- Left and right action buttons
- Customizable height
- Safe area support
- Theme integration

**Props:**

- `title`: string
- `subtitle`?: string
- `showBackButton`?: boolean
- `onBackPress`?: function
- `leftActions`?: ReactNode
- `rightActions`?: ReactNode
- `variant`?: "default" | "transparent"

---

### 3. Bottom Sheet

**Priority:** 🔴 Critical  
**Status:** 📋 Planned

A draggable bottom sheet component for selections, forms, and overlays. Essential for mobile-first design patterns.

**Features:**

- Draggable interaction
- Snap points (sm, md, lg, full, custom)
- Backdrop support with dismiss
- Header with title and close button
- Scrollable content
- Animation support
- Handle indicator

**Props:**

- `visible`: boolean
- `onClose`: function
- `snapPoints`: string[] | number[]
- `title`?: string
- `showCloseButton`?: boolean
- `backdropDismiss`?: boolean
- `enablePanDownToClose`?: boolean

---

### 4. ListItem

**Priority:** 🟡 High  
**Status:** 📋 Planned

A list item component for settings, menus, and data display. Used in settings screens and navigation lists.

**Features:**

- Title and value display
- Icon support (left)
- Chevron/arrow indicator
- Clickable variant
- Divider support
- Customizable styling

**Props:**

- `title`: string
- `value`?: string
- `onPress`: function
- `icon`?: ReactNode
- `showChevron`?: boolean
- `disabled`?: boolean
- `variant`?: "default" | "compact"

---

### 5. Select / Picker

**Priority:** 🟡 High  
**Status:** 📋 Planned

A selection component for choosing from a list of options. Used in forms and settings.

**Features:**

- Single and multiple selection
- Search/filter support
- Custom option rendering
- Disabled options
- Grouped options
- Bottom sheet integration

**Props:**

- `options`: SelectOption[]
- `value`: string | string[]
- `onChange`: function
- `multiple`?: boolean
- `searchable`?: boolean
- `placeholder`?: string
- `disabled`?: boolean

---

## Medium Priority Components

### 6. Switch / Toggle

**Priority:** 🟢 Medium  
**Status:** 📋 Planned

A toggle switch component for on/off states.

**Features:**

- Sizes: sm, md, lg
- Disabled state
- Label and helper text support
- Custom colors

**Props:**

- `value`: boolean
- `onValueChange`: function
- `size`: "sm" | "md" | "lg"
- `disabled`: boolean
- `label`: string
- `helperText`: string
- `color`: ColorKey

---

### 7. Checkbox

**Priority:** 🟢 Medium  
**Status:** 📋 Planned

A checkbox component for multiple selections.

**Features:**

- Checked, unchecked, and indeterminate states
- Label and helper text
- Group checkbox support
- Custom colors

**Props:**

- `checked`: boolean
- `onChange`: function
- `indeterminate`: boolean
- `disabled`: boolean
- `label`: string
- `helperText`: string
- `color`: ColorKey

---

### 8. Radio

**Priority:** 🟢 Medium  
**Status:** 📋 Planned

A radio button component for single selection.

**Features:**

- Group radio support
- Label support
- Disabled state
- Custom colors
- Horizontal/vertical layout

**Props:**

- `selected`: boolean
- `onSelect`: function
- `value`: string | number
- `disabled`: boolean
- `label`: string
- `color`: ColorKey

---

### 9. Modal / Dialog

**Priority:** 🟢 Medium  
**Status:** 📋 Planned

A modal dialog component for overlays and confirmations.

**Features:**

- Sizes: sm, md, lg, fullscreen
- Backdrop support
- Close button
- Animation support
- Scrollable content

**Props:**

- `visible`: boolean
- `onClose`: function
- `size`: "sm" | "md" | "lg" | "fullscreen"
- `title`: string
- `showCloseButton`: boolean
- `backdropDismiss`: boolean

---

## Advanced Components

### 10. Tabs

**Priority:** 🔵 Low  
**Status:** 📋 Planned

A tab navigation component.

**Features:**

- Scrollable tabs
- Icon tabs
- Badge support
- Indicator animation
- Disabled tabs

**Props:**

- `tabs`: TabItem[]
- `activeTab`: number
- `onTabChange`: function
- `scrollable`: boolean
- `indicatorColor`: ColorKey

---

### 11. Accordion

**Priority:** 🔵 Low  
**Status:** 📋 Planned

An expandable/collapsible content section.

**Features:**

- Single or multiple expansion
- Custom header
- Animation
- Disabled state

**Props:**

- `items`: AccordionItem[]
- `multiple`: boolean
- `defaultExpanded`: number | number[]
- `onChange`: function

---

### 12. Skeleton / Shimmer

**Priority:** 🔵 Low  
**Status:** 📋 Planned

Loading placeholders with shimmer animation.

**Features:**

- Text skeleton
- Image skeleton
- Card skeleton
- Customizable animation
- Variants

**Props:**

- `variant`: "text" | "image" | "card" | "custom"
- `width`: number | string
- `height`: number
- `lines`: number
- `animated`: boolean

---

## Additional Features

### Form Components

- Form validation helpers
- Form field wrapper
- Form group component

### Layout Components

- Container
- Stack
- Grid

### Feedback Components

- Toast/Notification
- Alert
- Snackbar

### Data Display

- Table
- Empty State
- Loading State

---

## Implementation Guidelines

### Component Structure

Each component should follow this structure:

```
src/components/
  ComponentName.tsx
  ComponentName.stories.tsx
  index.ts (export)
```

### Requirements

- ✅ Full TypeScript support
- ✅ Theme integration
- ✅ Storybook stories
- ✅ Accessibility support
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Platform-specific optimizations (iOS/Android)

### Testing

- Unit tests for each component
- Visual regression tests
- Accessibility tests

---

## Contributing

If you'd like to contribute a component, please:

1. Check this roadmap to see if it's already planned
2. Create an issue to discuss the component design
3. Follow the existing component patterns
4. Add Storybook stories
5. Update this roadmap when complete

---

**Last Updated:** January 2025
