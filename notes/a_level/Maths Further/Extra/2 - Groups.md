#Mathematics #Further #Extra 

Is in - $\in$ 
Is not in - $\not\in$ 
Subset of - $\subset$ 
Subset of or is - $\subseteq$ 
Not subset of - $\not\subset$ 
Empty set - $\varnothing$ 
Union - $\cup$ 
Intersect - $\cap$ 
Such that - : 

The set of elements not in A is denoted as $A'$ 
The set A excluding elements in B is denoted $A \textbackslash B$ 
The number of elements in a set is denoted as $n(A)$ or $|A|$ 

## Groups 

A binary operation $\circ$ on a set $S$ is a rule which assigns to each ordered pair of elements $x, y \in S$ exactly one element denoted $x \circ y$ 
$(G, \circ)$ is the set $G$ under the binary operation $\circ$ 

A set is a group if it meets the following 4 axioms : 
- The operation is closed 
- The operation is associative 
- There is a single identity element 
- Every element has a unique inverse 
If the group is commutative it is abelian 

A set is closed if the binary operation on any 2 elements results in an element in the set 
If $a \circ (b \circ c) = (a \circ b) \circ c$ then the operation is associative 
The identity element $e$ of a set is one such that $a \circ e = e \circ a = a$ 
The inverse element  $a^{-1}$ of an element is one such that $a \circ a^{-1} = a^{-1} \circ a = e$ 

If $a \circ b = b \circ a$ then the operation is commutative 
Algebra can be done using inverses like algebra with matrices (as may not be commutative) 
For non commutative groups, both cases should be checked to find the identity / inverse 

## Modular Algebra 

$(a + b)$ mod $n = a$ mod $n + b$ mod $n$ 
$(ab)$ mod $n = ((a$ mod $n)(b$ mod $n))$ mod $n$ 
$a^b$ mod $n = (a$ mod $n)^b$ mod $n$ 
Modular arithmetic is associative under addition & multiplication 
For $n \in \mathbb{Z}^+$ 

A group with an addition operation under mod $n$ is denoted as $(\mathbb{Z}_n,\; +_n)$ 

## Composition / Combination / Cayley Table 

Shows all combinations of set operation between every element of the set 
e.g. $(\mathbb{Z}_4,\; +_4)$ : 
![[groups]] 
If table is symmetrical about diagonal line then set is commutative 
Easy to see if set is closed 
Modular addition is associative 
Has an identity element if a row is the same as the heading row (in this case 0 is the identity) 
If intersection of two elements is the identity, those two elements are inverse of each other 
For a set to be a group, every element must appear once in every row and column of the table 

## Cyclic Groups 

for $m,n \in \mathbb{N}$ : 
- $a^n = a \circ a \;...\; \circ \;a$ (n times) 
- $a^{-n} = a^{-1} \circ a^{-1} \;...\; \circ \;a^{-1}$ (n times) 
- $a^0 = e$ 
- $a^m \circ a^n = a^{m + n}$ 
- $(a^m)^n = a^{mn}$ 

Because groups are closed, elements can generate other elements in the group 
If one element can generate the entire group, it is called a generator and the group is cyclic 
e.g. for the group $G \; (\{i,\;-1,\;-i,\;1\},\; \times)$ : 

$1^n$ will always be 1, so it has order 1 
$<1> = \{1\}$ (1 generates the set of elements 1) 
$(-1)^n$ will be either be 1 or -1, so has order 2 
$<-1> = \{1,\; -1\}$ (1 generates the set of elements 1 & -1) 
$i^n$ will cycle through all 4 elements so has order 4 and is a generator 
$<i> = G$ ($i$ generates the Group G) 

$<a>$ will generate a set with all powers of $a$ (including the identity element) 
$<a,b>$ will generate a set with all powers of $a$ and $b$ combined 

The order of an element may be infinite such as in the group $(\mathbb{Z},\; +)$ 
Roots of unity with modulus 1 and rational multiples of $\pi$ generate groups 

## Sub Groups 

The trivial subgroup includes only the identity element : $\{e\}$ 
A proper sub-group is any sub-group that is not the actual group 

The order of a sub-group must be a factor of the order of the finite group (Lagrange's theorem) 
The order of any element must be a factor of the order of the group 
Not every factor of the order of the group will be the order of an element 
A group of prime order will have no non-trivial proper sub groups 
Every group with prime order will be cyclic 
Only need to check closure of a subgroup 

## Isomorphisms 

Isomorphism is when a group $(G,\; \circ)$ is mapped to another group $(H,\; *)$ via a function $f:G\rightarrow H$ 
The element $a$ in $G$ corresponds to the element $f(a)$ in $H$ 
The function $f$ is one such that : 
- The range of $f$ is $H$ 
- $f$ is one-to-one 
- $f(a \circ b) = f(a) * f(b)$ for $a,b \in G$ 
Mapped elements will have the same mapped inverses : $f(a \circ a^{-1}) = f(a) * f(a^{-1}) = f(e)$ 

The order of H is the same as the order of G 
The order of the element $a \in G$ is the same as the order of the element $f(a) \in H$ 
This means the number of elements with a certain order must be the same in both groups 
If 2 groups are cyclic and of the same order they are isomorphic as the generators can be mapped 

The number of isomorphisms depends on the number of each order of element 
The number of isomorphisms also depends on whether or not a generator is defined 
