[Codewars Kata Link](https://www.codewars.com/kata/5227129b316b56d50d0003b7)

## Description

You have to write an algorithm that flatten an arrays structure to 2 levels. It means that each array under the second level will be merge to its parent. Only two levels are kept.

Empty arrays are ignored.

```plaintext
array = [1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18];
return [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18]

array = [1,[2, 3, [], [4, [], 5]]]
return [1,[2,3,4,5]]
```
