# React hook to detect component mount, unmount & re-renders.

See [Demo](https://codesandbox.io/s/gallant-hopper-jzjp2w?file=/src/Button.tsx)

## Install

```bash
npm i use-is-rerender --save
```

```bash
yarn add use-is-rerender
```

## Usage

```javascript
import { useRerender } from 'use-is-rerender'

const Button = () => {
  useRerender()
  return <button>Click</button>
}
```

<img src="https://github.com/geobde/useRerender/blob/main/demo.jpg" width="900" height="500">

## Available hook options

Option   | Acceptable&nbsp;Values                                                       | Details
---------|------------------------------------------------------------------------------|---
logProps | <ul><li><code>true</code>&nbsp;**(default)**</li><li><code>false</code></ul> | Can disable props logging    

## Production mode
Hook not working when `NODE_ENV==='production'`


## Read More
[React Performance](https://medium.com/@geobde/react-performance-91d84678c613)

## Contributors
<a href="https://github.com/geobde/useRerender/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=geobde/useRerender&max=400&columns=20" />
</a>
