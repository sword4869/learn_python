- [1. Writing code comments](#1-writing-code-comments)
  - [1.1. Active and passive voice](#11-active-and-passive-voice)
  - [1.2. lazy repeat](#12-lazy-repeat)
  - [1.3. business purpose](#13-business-purpose)
  - [1.4. out-of-date](#14-out-of-date)
  - [1.5. explain unidiomatic code](#15-explain-unidiomatic-code)
  - [1.6. link back to the source](#16-link-back-to-the-source)

---

# 1. Writing code comments 

## 1.1. Active and passive voice

The actor comes first in an active voice. For example: "CSS paints the background."

With a passive voice, the actor comes last. That means our actor — CSS in this case — comes at the end like this: "The background is painted by CSS."

But that doesn’t mean you should always strive for an active voice. Switching from one to the other — even in the same paragraph — can make your content flow more seamlessly from one sentence to another if used effectively

## 1.2. lazy repeat

Remember that the purpose of a comment is to add value to a piece of code, not to repeat it. What makes these examples "lazy" is that they merely restate what the code is obviously doing. 
```
const age = 32 // Initialize `age` to 32

filter: blur(32px); /* Create a blur effect with a 32px radius */
```

Even it's ok not to write useless comments.

## 1.3. business purpose

It does not describe the data structure on the surface of the code, but the business purpose behind the code.
```
function sortWords(citites){}   // sort words from A to Z

function sortWords(citites){}   // sort cities from A to Z
```
```
red *= 1.2 // Apply a 'reddish' effect to the image
```


## 1.4. out-of-date

David wants to sort a list of strings alphabetically from A to Z, so he does the obvious in JavaScript:
```
cities = sortWords(cities) // sort cities from A to Z
```
David then realizes that sortWords() actually sorts lists from Z to A. That’s not a problem, as he can simply reverse the output:
```
cities = sortWords(cities) // sort cities from A to Z
cities = reverse(cities)
```

Unfortunately, David didn’t update his code comment.

Change your comments the same time you change the code.

## 1.5. explain unidiomatic code

Sometimes, the natural way of doing things isn't right. Programmers might have to "break" the standards a bit, but when they do, it' s advisable to leave a little comment explaining their rationale:

```
 function addSetEntry(set, value) {    
  /* Don't return `set.add` because it's not chainable in IE 11. */  
  set.add(value);
  return set;
}
```
If you were responsible for reviewing this code, you may have been tempted to correct it without that comment there explaining what' s up.

## 1.6. link back to the source

So, you just found a solution to your problem on StackOverflow. After copy-pasting that code, it’s sometimes a good thing to keep a link to the answer that helped you out so you can come back to it for future reference.

```
// Adds handling for legacy browsers
// https://stackoverflow.com/a/XXXXXXX
```