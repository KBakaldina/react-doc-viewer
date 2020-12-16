# Before Start

Add some test docs to the src/resources folder like the example doc.js.
Use template:

```
const Doc = {
    type: 'image/jpeg',
    ext: 'jpeg',
    name: 'orange.jpeg',
    src: <here should be a base64 string of file content>,
}

export default Doc;
```

# Start

```bash
$ npm run start
```

Change the 4th import (import Doc from '../../public/docs/doc';) in src/components/App.jsx to the path of file you want to display.
