# React hook to detect component mount, unmount & re-renders.

## Installation

Using `npm`:

```bash
npm i use-is-rerender --save
```

## Usage

Import the hook:

```javascript
import { useRerender } from "use-is-rerender";
```

### Full example

```
import { useRerender } from 'use-is-rerender'

const Button = () => {
  useRerender()
  return <button>Click</button>
}

```

## Built With

[React](https://reactjs.org/)

## License

[MIT](./LICENSE.md)
