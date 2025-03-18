[Codewars Kata Link](https://www.codewars.com/kata/58791aa554a6783827000221)

## Description

### INFO:

Timmy spends a lot of time talking on the phone and he would like to see which friends he talks to the most.

### TASK:

Complete the function `closestFriends` that takes an array `history` as input. Each element of history is a string in the following format `"(000) 000-0000 00:00:00"` where the first part `"(000) 000-0000"` represents the phone number Timmy talked to and the second `"00:00:00"` is the call duration `(hours : minutes : seconds)`. Your job is to find the three contacts Timmy talked to the most and return their names in an array sorted by total call durations.
A global variable phonebook is preloaded and contains all the contacts and their phone numbers.

```plaintext
var phonebook = {
     'John' : '(555) 010-3535',
    'Melissa' : '(442) 130-5165',
  'Jack' : '(333) 010-5135'
    //and so on...
};
```

The input history array will always have at least three different phone numbers.

### EXAMPLE:

```plaintext
var history = ["(555) 010-3535 00:13:24", "(442) 130-5165 01:36:26",
"(333) 010-5135 01:38:24"];
closestFriends(history)  // should return ['Jack','Melissa','John'];
```

Good luck!
