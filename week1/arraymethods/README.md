<!-- Array Methods
push - puts new item on end of array
pop - takes lst item off the end of the array
shift - takes first item off the front of array
unshift - puts item on front of array
concat - immutable so assign to new variable -->
slice splice sort

slice - immutable - takes out determined items either from an item or between 2 items
slice(2) slice(2,4)

splice The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:
...  spreads out items in an array useful for concat arrays so don't end up with array in an array
