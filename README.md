# Permutations

> The `permutations()` function that takes a `String` or an `Array` and return an `Array` all possible permutations of elements

## Examples


## Syntax

```
permutations(input[, choiceLength, repetition])
```

## Parameters

`input`

* Collection (can only be `String` or `Array`) that contains all possible choices
* Each element in the `Array` or each character in the `String` is treated as a choice

`choiceLength`

* An positive integer that represent the number of choices in a complete selection
* If `choiceLength <= 0`, or `input.length < choiceLength`, then `[]` is returned
* If `choiceLength` is omitted, all possible permutations at all possible `choiceLength` is returned

`repetition`

* A boolean representing whether an item in the collection can be picked more than once
* If `repetition` is omitted, `repetition` defaults to `false`

### Return value

## Description

> Permutations is a way of selecting items from a collection such that the order of the selection matters (as opposed to combinations where the order does not matter)

### ie.

```
'abc' != 'bca' // is considered different
'ab' != 'ba' // is considered different 
'abc' == 'abc' // is considered the same
```


