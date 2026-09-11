#Mathematics #Statistics 

The null hypothesis $H_0$ is the default position which will be rejected in favour of the alternative hypothesis $H_1$ if evidence is strong enough 
Initially assume null hypothesis is true 
The p-value is the probability of obtaining results as or more extreme than the observed results 
The p-value is the probability calculated e.g. $P(X\leq2)$ 
Always say there is or is not sufficient evidence to suggest something in conclusions 

The test statistic is the value obtained from data collection e.g. number of successes 
Significance level is the probability of incorrectly rejecting the null hypothesis 
Critical region is the region of the probability distribution where the null hypothesis is rejected if the test statistic falls within it 
Critical value is the first value to fall within the critical region 
Acceptance region is the region where the null hypothesis is not rejected 

One-tailed if alternative hypothesis is $H_1:p>...$ or $H_1:p<...$ 
Two-tailed if alternative hypothesis is $H_1:p\neq...$ 
If two-tailed, half significance level 

Reject $H_0$ if probability of test statistic is less than significance level 

## Binomial 

For a binomial hypothesis, $H_0$ will always be of the form $p=...$ 
The population parameter $p$ is the original probability stated 
The test statistic is the number of observed successes 

Example : 
Candidate believes they have support of 40% of residents. Test to a 5% significance level if they are overestimating their support. 20 people asked if they support or not. 3 said yes. 
- Population parameter : $p$ = proportion of people who support them which is 0.4 
- Test statistic : $X$ = number of people from sample (of 20) who said yes which is 3 
- $H_0:p=0.4$ and $H_1:p<0.4$ because testing if overestimating so if lower than 0.4 
- Assume $H_0$ so $X\sim B(20, 0.4)$ 
- One-tailed so significance level = 0.05 
- If p-value $P(X\leq 3)<0.05$ then reject $H_0$ 
- 0.0160 < 0.05 so reject $H_0$ 
- There is sufficient evidence to suggest that the candidate is overestimating their support 

## Normal 

The sample means $\bar x$ of size $n$ from $X\sim N(\mu,\sigma^2)$ have distribution $\bar X\sim N(\mu,\frac{\sigma^2}{n})$ 
The population parameter $\mu$ is the original mean value 
The test statistic $\bar x$ is the sample mean 
If $\sigma^2$ is not known then (for large values of $n$) can use sample variance $s^2$ instead 

Example : 
Teacher arrives at school claiming to improve results. Exam results are normally distributed with mean 65 and standard deviation 10. Results of 8 students had mean of 72. Test if there is evidence to a 5% significance level. 
- Population parameter : $\mu$ = original mean which is 65 
- Test statistic : $\bar x$ = sample mean which is 72 
- $H_0:\mu=65$ and $H_1:\mu>65$ because they said they would improve grades 
- Assume $H_0$ so $\bar X\sim N(65,\frac{100}{8})$ as $n=8$ 
- One-tailed so significance level = 0.05 
- If p-value $P(\bar X\geq72)<0.05$ then reject $H_0$ 
- 0.02386 < 0.05 so reject $H_0$ 
- There is sufficient evidence to suggest that the teacher has improved grades 

To find critical / acceptance region, go on distribution mode and load $\bar X$ 
Change probability at the top to appropriate significance level and record $\bar X$ value 
This is the upper / lower bound for the critical and acceptance regions 
For two-tailed tests, there will be an upper and lower bound for acceptance region 

## Correlation / Association 

Correlation is a measure of how close data points lie to a straight line 
Correlation coefficient is denoted as $r$ and is the strength of correlation 
Rank correlation coefficient measures correlation between data ranks and not actual data 
Association refers to a more general relationship between the variables 
Tests will either be about association or correlation 
$H_0:$ There is no association / correlation 
$H_1:$ There is association / correlation 
