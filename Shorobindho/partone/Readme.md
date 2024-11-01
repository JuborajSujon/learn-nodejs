**Node JS Modules** 
- Node module is JS Library
- A set of functions, assets etc for future apps without installation.
- There are three types of modules 
  - custom 
  - built In
  - developers package


**File System Module**
- its a build in modules
- Read, write, create, update, delete, rename any file
- We can use also sync for file system process
- First require http module
```js
const fs = require(fs)
```
- now create any file with data write
```js
fs.writeFile('file_name','set_data',(errors, data)=>{

})
```
- now rename any file name 
```js
fs.rendme('old_file','new_file_name',(errors)=>{

})
```

- now delete any file
```js
fs.unlink('file_name',(errors)=>{

})
```
