# Hie UI

A minimalist React component library with modern design principles, built with TypeScript and Tailwind CSS.

![Version](https://img.shields.io/npm/v/hie-ui)
![License](https://img.shields.io/npm/l/hie-ui)

## Features

- 🎨 **Modern Design** - Clean, minimalist aesthetics with attention to typography and spacing
- 🌗 **Dark Mode** - Built-in dark mode support
- 📱 **Responsive** - Mobile-first components that work across all screen sizes
- ♿ **Accessible** - ARIA-compliant components for better accessibility
- 🔧 **Customizable** - Easy to customize using Tailwind CSS
- 📦 **Lightweight** - Minimal dependencies and tree-shakeable exports


## Installation

```bash
npm install hie-ui
```

## Quick Start
1. Configure Tailwind CSS:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/hie-ui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#171717",
          dark: "#ffffff"
        },
        background: {
          DEFAULT: "#ffffff", 
          dark: "#171717"
        }
      }
    }
  }
}
```

2. Use components:

```tsx
mport { Button, Text, Card } from 'hie-ui'
function App() {
return (
<Card padding="medium">
<Text variant="h1">Hello World</Text>
<Text variant="body">Welcome to Hie UI</Text>
<Button variant="solid">Get Started</Button>
</Card>
)
}
```

## Documentation

### Typography

```tsx
<Text variant="h1">Heading 1</Text>
<Text variant="h2">Heading 2</Text>
<Text variant="body">Body text</Text>
```

### Buttons

```tsx
<Button variant="solid">Primary</Button>
<Button variant="outline">Secondary</Button>
```

### Layouts

```tsx
<Container>
<Grid columns={2} gap={4}>
<Card padding="medium">Content</Card>
</Grid>
</Container>
```

### Cards

```tsx
<Card padding="medium">Content</Card>
```

## Development

```bash
npm install
npm run dev
npm run build
```

## Example

Check out the [examples](./examples) directory:

```bash
cd examples
npm install
npm run dev
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © [Hiep Tran](https://github.com/e6a5)