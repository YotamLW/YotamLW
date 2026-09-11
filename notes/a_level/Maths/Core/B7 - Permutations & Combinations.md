#Mathematics #Statistics 

## Permutations 

The number of permutations of $n$ distinct numbers is $n!$ 
The number of permutations of $r$ numbers from $n$ distinct numbers is $^nP_r = \frac{n!}{(n-r)!}$ 

If a number in $n$ is repeated $m$ times then number of permutations is $\frac{n!}{m!}$ 
If another number is repeated $l$ times then number of permutations is $\frac{n!}{m! \times l!}$ 

Bookshelf example : 
- 8 book slots on the bookshelf, 2 red books 
- 2 red books must be side by side, so treat as one object 
- 7 ways of placing the 2 red books in the bookshelf 
- 6! ways of arranging other books 
- 2! ways of arranging red books with themselves 
- So total permutations are $7 \times 6! \times 2!$ 

## Combinations 

When selecting, divide by number of selections as order does not matter 
e.g. if selecting 6 students from a room of 20, number of possibilities is $\frac{20!}{6! \times 14!}$ 
So formula for selecting $r$ items from $n$ is $^nC_r = \frac{^nP_r}{r!} = \frac{n!}{(n-r)!r!}$ 
This formula is the choose function 
This formula also gives the coefficients of binomial expansion 
