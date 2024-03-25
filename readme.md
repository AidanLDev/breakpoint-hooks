# Breakpoint-hooks

## Installation

```
npm i breakpoint-hooks
pnpm add breakpoint-hooks
yarn add breakpoint-hooks
```

## Usage

### Import the hook

```
import { useIsMobile } from "breakpoint-hooks";
```

### Call the hook within your client side functional component and use it to conditionally render some content

```
// "use client" Next/React 19+ users only <----
export default function myFunctionalComponent() {
  const isMobile = useIsMobile();

  return (
    <>
      <h1>Greatest website</h1>
      //Some mobile only stuff
      {isMobile && (
        <p>
          Only mobile users can read this cool paragraph
        </p>
        )}
    </h1>
  )
}
```

_Note that in next.js 14+ OR React 19, you will need to use this in a client component so use the `use client` directive at the top of your component_

## Available hooks

```
useIsMobile
useIsTablet
```
