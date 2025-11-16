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
- TextInput - Comprehensive text input component with variants, states, labels, icons, and validation support
- Toggle - Toggle switch component with sizes, states, and label support
- Checkbox - Checkbox component with checked, unchecked, and indeterminate states

## High Priority Components

### 1. Header / AppBar

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

### 2. Bottom Sheet

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

### 3. ListItem

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

### 4. Select / Picker

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

### 5. Radio

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

### 6. Modal / Dialog

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

### 7. Tabs

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

### 8. Accordion

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

### 9. Skeleton / Shimmer

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

**Last Updated:** January 2025 (Updated - TextInput, Toggle, and Checkbox moved to completed)
