#Mathematics #Further #Extra 

A recurrence relation (or difference equation) is an nth term sequence 
A first order recurrence relation has one previous term e.g. $u_n = u_{n-1}$ 
A second order recurrence relation has two e.g. $u_n = u_{n-1} + u_{n-2}$ or $u_n = u_{n-2}$ 

The limit of a recurrence relation is what $u_n$ tends to as $n\rightarrow\infty$ 
A convergent relation will rend to a constant 
A divergent relation will tend to $\pm\infty$ or will be periodic 
A periodic relation will cycle back to the same values 
Oscillating is when the sequence goes up and down (has minima and maxima) 

Constant coefficients means the coefficients of $u$ terms are constant and do not have $n$ 
Homogenous means there are only $u$ terms 
Linear means all $u$ terms are in powers of 1 

The particular solution is the final sequence that represents the recurrence relation 
The general solution does not contain the coefficients 

## First Order 

For $u_n = a u_{n-1}$ the complementary function will be $u_n = A a^n$ 

For non-homogenous relations a particular trial function needs to be guessed 
Particular trial function needs to be of the same complexity to the non-homogenous part e.g. : 
- For equation $u_n = 2 u_{n-1} + 1$ particular trial function is $A$ 
- For equation $u_n = 2 u_{n-1} + 3 n^2 - 2$ particular trial function is $A n^2 + B n + C$ 
- For equation $u_n = u_{n-1} + 2^n$ particular trial function is $A 2^n$ 
To solve particular trial function, plug back into original equation 

For $u_n = u_{n-1} + 1$, complementary function will be $u_n = A1^n$ so $u_n = A$ which is a constant 
So need to 🎵stick in an extra n🎵 so the trial function is $An + B$ 
Constant terms merge so $u_n = An + B$ 

Example first order relation $u_n = 4n - u_{n-1}$, $u_0 = 4$ : 
- Complementary function = $A(-1)^n$ 
- No constants so no need to 🎵stick in an extra n🎵 
- Particular trial function = $Bn + C$ 
- So together, $u_n = A(-1)^n + Bn + C$ 
- $4n-u_{n-1}=A(-1)^n+Bn+C$ 
- $u_{n-1}=-A(-1)^n+Bn-B+C$ 
- $4n+A(-1)^n-Bn+B-C=A(-1)^n+Bn+C$ 
- $2Bn-B+2C=4n$ 
- So by solving simultaneously can get the general solution $u_n =A(-1)^n+2n+1$ 
- Now for the particular solution, plug in $n=0$ and $u_0=4$ 
- So the particular solution $u_n=3(-1)^n+2n+1$ 

## Second Order #

For $au_n + bu_{n-1} + cu_{n-2} = 0$, create a characteristic equation of $a\lambda^2 + b\lambda + c = 0$ 
The complementary function depends on the values of the roots $\alpha,\beta$ : 
- $\alpha,\beta$ are real and distinct - $u_n=A(\alpha)^n+B(\beta)^n$ 
- $\alpha,\beta$ are real and the same - $u_n=A(\alpha)^n+Bn(\alpha)^n$ 🎵stick in an extra n🎵 
- $\alpha,\beta$ are complex conjugates of the form $re^{\pm i\theta}$ - $u_n=r^n(A\cos(n\theta)+B\sin(n\theta))$ 
