### Questions and tasks

1. How many bytes do we need to send the following text without encoding and
including spaces and newlines (\r\n)?

    a)
    ```
    us
    ```

    b)
    ```
    first well have even way
    ```

    c)
    ```
    first well
    have even way
    ```

2. How many bytes do we need to send the same text values from point 1 with the implemented dictionary encoding? 

3. Extend the existing solution to allow **orange** to send text messages to **kiwi** composed
of the given words and codes. Input text example:

```
first
well have
way us any
```

_Hint: You could read the text from a text file using https://nodejs.dev/learn/reading-files-with-nodejs
or using a string variable. Example:'_
```js
const text = 'first\r\nhave any\r\nway';
```


