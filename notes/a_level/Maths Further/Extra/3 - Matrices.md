#Mathematics #Further #Extra 
$\newcommand{\bm}[1]{\boldsymbol{#1}}$
## Eigenvalues & Eigenvectors 

If $\bm{M} \bm{v} = \lambda \bm{v}$ where $\bm{v} = \begin{pmatrix} x \\ y \end{pmatrix} \neq \bm{0}$ then $\bm{v}$ is an eigenvector and $\lambda$ is an eigenvalue 
Then $\bm{v}$ is an invariant line of the transformation $\bm{M}$ and if $\lambda$ = 1 then it is a line of invariant points 
Only invariant lines passing through the origin will be found 
Equation can be rearranged into $(\bm{M} - \lambda \bm{I}) \begin{pmatrix} x \\ y \end{pmatrix} = \bm{0}$ 
Also $\text{det}(\bm{M} - \lambda \bm{I}) = 0$ so $\begin{vmatrix} a - \lambda & b \\ c & d - \lambda \end{vmatrix} = 0$ 
So the characteristic equation is $\lambda^2 - (a + d) \lambda + ad - bc = 0$ 
The characteristic equation will find the eigenvalues of the matrix $\bm{M}$ 
To find the eigenvectors, plug eigenvalues back into $(\bm{M} - \lambda \bm{I}) \begin{pmatrix} x \\ y \end{pmatrix} = \bm{0}$ 
Same logic for $3 \times 3$ matrices 

## 3D transformations 

All rotations in 3 dimensions will have an eigenvector with eigenvalue 1 (the axis of rotation) 
To find the axis, find the eigenvector for $\lambda$ = 1 
A rotation of 180$^\circ$ will have an eigenvalue of -1 
Matrix so axis of rotation will always pass through the origin 

All reflections in 3D will have eigenvalues of 1 for all vectors that lie on the plane of reflection 
All normal vectors to this plane have eigenvalues of -1 
Matrix so plane will always pass through the origin so point on the plane is (0, 0, 0) 
To find equation of a plane from a matrix, find the normal using $\lambda$ = -1 

Every linear transformation from $\mathbb{R}^3$ to $\mathbb{R}^3$ must have at least 1 invariant line as characteristic equation is cubic so must have at least 1 real root 

## Diagonalisation 

An $n \times n$ matrix $\bm{M}$ with $n$ distinct eigenvectors can be written as $\bm{P} \bm{D} \bm{P}^{-1}$ 
If $\bm{M}$ has eigen values & vectors of $\lambda_1$ & $\begin{pmatrix} a \\ b \end{pmatrix}$ and $\lambda_2$ & $\begin{pmatrix} c \\ d \end{pmatrix}$ then : 
$\bm{P} = \begin{pmatrix} a & c \\ b & d \end{pmatrix}$ and $\bm{D} = \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix}$ 
The column order of corresponding eigen vectors & values matters 

$\bm{M}^n = \bm{P} \bm{D}^n \bm{P}^{-1}$ 
Can find $\bm{P}^{-1}$ using a calculator 

## Cayley-Hamilton Theorem 

Every matrix $\bm{M}$ satisfies its own characteristic equation where $\lambda = \bm{M}$ 

So if $\lambda^2 + 3 \lambda + 2 = 0$ then $\bm{M}^2 + 3 \bm{M} + 2 \bm{I} = \bm{0}$ 
Can also multiply expression by $\bm{M}$ to get $\bm{M}^3 + 3 \bm{M}^2 + 2 \bm{M} = \bm{0}$ 
