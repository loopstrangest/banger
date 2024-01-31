<!-- @format -->

1. Banger is a web app that is a word game with hidden rules. It uses MUI components wherever possible.
2. Every hidden rule is of the format: "Include unique english words that..."
   2a. Examples: Include unique english words that have one a and one e and no other vowels. Include unique english words that have three consecutive letters such as "rst", "stu". Include unique english words that start and end with the same letter.
3. For each level, the user is shown a text box. Ten levels total.
   3a. They enter up to 280 characters into the text box and then click the send icon to send this post.
   3b. The textbox includes a circular visual indicator that shows how many out of 280 characters have been typed.
   3c. Sending a post and adding more characters is disabled when the number of characters in the box is 280.
4. A popup will then briefly show the result of their post.
   4a. If 0 unique english words fit the rule, the result is: "👎 No."
   4b. If 1, the result is "🔥 Good!"
   4c. If 2, the result is "🔥🔥 Great!!"
   4d. If 3, the result is "🔥🔥🔥 Awesome!!!"
   4e. If 4, the result is "🔥🔥🔥🔥 Outstanding!!!!"
   4f. If 5 or more, the result is "🔥🔥🔥🔥🔥 BANGER"
5. After the popup disappears, the text box clears out.
6. Each sent post will be stored in a two column table below the text box. The columns are the emoji(s) and a the first 100 characters of the message. Click to expand a row to see the full message.
7. Layout: flex column, single column, with a roman numeral for the level number, then the textbox + 280 indicator + send icon, then the table of previous posts.
8. The first time gets a 🔥🔥🔥🔥🔥 BANGER, a star icon sits on the roman numeral level number, and a right arrow button appear to let the user go to the next level.
9. After the user completes level ten, a congratulatory message is shown, along with links to the app creator's twitter, website, and buy me a coffee, and an option to play the "Expert Levels", which has 3 additional harder levels.
10. Localstorage will be used to keep track of some data so the user can leave and revisit.
    10a. banger_post: An object with key of level number and values of pairs of the post text and post result.
    10b. banger_level: The latest level the user has reached. Default is 1.
