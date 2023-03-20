# React hook to detect component mount, unmount & re-renders.

## Installation

Using `npm`:

```bash
npm i use-is-rerender --save
```

## Usage

```javascript
import { useRerender } from "use-is-rerender";

const Button = () => {
  useRerender();
  return <button>Click</button>;
};
```

<img src="https://github.com/geobde/useRerender/blob/main/demo.png" width="900" height="500">

## Read More
[React Performance](https://medium.com/@geobde/react-performance-91d84678c613)


## License

[MIT](./LICENSE.md)
