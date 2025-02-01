[Codewars Kata Link](https://www.codewars.com/kata/550aea365951383698000727)

## Description

Split an array of objects into 2 arrays based on truthiness of a provided property. The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.

Javascript example:

```plaintext
var obj1 = { prop: true },
    obj2 = { prop: false };

split([obj1, obj2], 'prop');
// [[obj1], [obj2]]
```

CoffeeScript example:

```plaintext
obj1 = { prop: true }
obj2 = { prop: false }

split [obj1, obj2], 'prop'
# [[obj1], [obj2]]
```
