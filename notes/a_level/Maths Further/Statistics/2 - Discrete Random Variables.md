#Mathematics #Further #Statistics 

Discrete random variables can only take certain values e.g. integers 
The sample space is the set of all possible values the variable could take 
The random variable is denoted as $X$ and the possible values it can take are denoted $x$ 

Expected mean $E(X)=\mu=\sum{x_ip_i}$ and represents the expected value of $X$ 
Variance $\text{Var}(X)=E(X^2)-E(X)^2=E((X-\mu)^2)$ and represents the variance of $X$ 
Standard deviation = $\sqrt{\text{Var}(X)}$ 

$E(aX+b)=aE(X)+b$ 
$E(aX\pm bY)=aE(X)\pm bE(Y)$ for independent variables 
$\text{Var}(aX+b)=a^2\text{Var}(X)$ 
$\text{Var}(aX\pm bY)=a^2\text{Var}(X)+b^2\text{Var}(Y)$ for independent variables 

## Uniform 

Discrete uniform distribution appropriate when there is a fair spinner or uniform distribution 
For uniform distribution over $1,2,...,n$ : 
Derivation of $E(X)$ : 
- $E(X)=\sum kp$ and $p=\frac{1}{n}$ 
- $E(X)=\frac{1}{n}\sum k$ 
- $E(X)=\frac{1}{n}\times\frac{1}{2}n(n+1)$ 
- $E(X)=\frac{n+1}{2}$ 
Derivation of $\text{Var}(X)$ : 
- $\text{Var}(X)=\sum k^2p-(\sum kp)^2$ 
- $\text{Var}(X)=\frac{1}{n}\sum k^2-\left(\frac{n+1}{2}\right)^2$ 
- $\text{Var}(X)=\frac{1}{n}\times\frac{1}{6}n(n+1)(2n+1)-\frac{(n+1)^2}{4}$ 
- $\text{Var}(X)=\frac{1}{12}(n+1)(2(2n+1)-3(n+1))$ 
- $\text{Var}(X)=\frac{1}{12}(n+1)(n-1)$ 
- $\text{Var}(X)=\frac{n^2-1}{12}$ 

## Binomial 

Mean $\mu=np$ because $E(X_i)=0\times(1-p)+1\times(p)=p$ 
Variance $\sigma^2=npq$ because $\text{Var}(X_i)=0^2\times(1-p)+1^2\times(p)-p^2=p-p^2=pq$ 

## Poisson 

Poisson distribution is an appropriate model when modelling number of events occurring in a fixed interval of time when events occur randomly and independently at a constant average rate $\lambda$ 
Suitable if $\lambda\approx E(X)\approx\text{Var}(X)$ but assume $\lambda=E(X)=\text{Var}(X)$ 
Denoted as $X\sim \text{Po}(\lambda)$ where $\lambda$ is the rate of something 
If a binomial model is suitable and $n$ is large and $p$ is small, then Poisson model is also suitable 
If $X\sim \text{Po}(\lambda)$ and $Y\sim \text{Po}(\mu)$ then $X+Y\sim \text{Po}(\lambda+\mu)$ if $X,Y$ are independent 

## Geometric 

Requirements for geometric distribution : 
- Successive independent trials 
- Only two possible outcomes, success or failure (Bernoulli trials) 
- Constant probability of success and failure 
If above true then number of trials to obtain first success $X\sim \text{Geo}(p)$ 
$P(X=x)=pq^{x-1}$ and $P(X>x)=q^x$ 
$E(X)=\frac{1}{p}$ and $\text{Var}(X)=\frac{q}{p^2}$ 
