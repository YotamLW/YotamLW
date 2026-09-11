#Mathematics #Statistics 

$\sim$ means 'has the distribution' 
Use 'distribution' menu in graphical calculator to model probability distributions 
$X$ is a random variable and $x$ or $r$ are values for the random variable 

A discrete random variable can only take certain values such as integers 
For a discrete uniform distribution : $P(X=x)=\frac{1}{n}$ 

## Binomial 

Situations which give rise to a binomial distribution : 
- Experiment / trial is conducted a fixed number of times 
- Exactly 2 outcomes ; success or failure 
- The probability of success is the same each time 
- The probability of success in any trial is independent of previous trials 
- Random variable of interest is the number of successes 

Denoted $X\sim B(n,p)$ where $n$ is number of trials and $p$ is the probability of success 
The probability of failure $q=1-p$ 
$P(X=x)={}^nC_x\times p^x\times q^{n-x}$ 
Mean $\bar{x}=np$ 

## Normal 

A normal distribution is not appropriate if : 
- Data is categorical 
- Data is skewed 
- Extreme outliers 
Denoted $X\sim N(\mu,\sigma^2)$ where $\mu$ is the mean and $\sigma$ is the standard deviation 
The mean and variance are the limiting values from increasingly large samples 
Area under the normal curve is probability 
A normal curve is symmetric about the mean and its points of inflection are $1\sigma$ from the mean 

Binomial distribution can be approximated as a normal distribution when $p\approx 0.5$ 
A continuity correction is used when a normal distribution is used to model discrete data 
It is used by using upper and lower bounds e.g. $P(X=1)=P(0.5<X<1.5)$ 
Normal distribution is continuous so $P(X>x)=P(X\geq x)$ and $P(X=x)=0$ 
Histograms from increasingly large samples from a normal distribution tend to the normal curve 

Linear transformations of a normal variable will result in another normal variable 
Let $y_i=a+bx_i$ so $\bar{y}=a+b\bar{x}$ and $s^2_y=b^2s^2_x$ 
The standard normal $Z$ has a standard deviation 1 and is centred about the y-axis : $Z\sim N(0,1)$ 
To standardise a normal variable $Z=\frac{X-\mu}{\sigma}$ 
