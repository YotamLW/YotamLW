#Mathematics #Further #Statistics 

Bivariate data can be random on random (e.g. heights and weights of dogs) or random on non-random (e.g. controlled experiments) 
Cannot perform hypothesis test for random on non-random bivariate data 
Can calculate 2 different regression lines for random on random 
The independent variable (thing you change) goes on the x-axis 

Association is when there appears to be a relationship between two variables 
Correlation is when both variables are random and the relationship is linear 
A bivariate normal distribution is if the data looks like an ellipse 

## Pearson's Moment Correlation Coefficient PMCC ($r$) 

PMCC is only appropriate for linear relationships 
PMCC is denoted by the letter r where $r = \frac{S_{ab}}{\sqrt{S_{aa}S_{bb}}}$ 
$S_{aa}=\sum a^2-\frac{\sum a^2}{n}$ and $S_{ab}=\sum ab-\frac{\sum a\sum b}{n}$ 

Using a calc (short for calculator) enter data into columns 
Set 2Var lists to correct columns 
CALC -> REG -> X -> a + bx for r value 
CALC -> 2-VAR for summary statistics 

## PMCC Hypothesis Testing 

Appropriate to carry out hypothesis testing when data is random on random 
Must be modelling assumption that data is from a bivariate normal distribution 
Not appropriate if data is skewed, bimodal or non-linear 

The population parameter is population PMCC $\rho$ 
The test statistic is the sample PMCC $r$ 
The critical value is the minimum value of PMCC for correlation to be plausible 
$H_0:\rho=0$ (no correlation) and $H_1$ (correlation) 
One tailed if alternative hypothesis is $\rho > 0$ or $\rho < 0$ and two tailed if $\rho ≠ 0$ 
Compare $r$ value to critical value PMCC table in formula book 
If |$r$| > critical value then reject $H_0$ 

PMCC effect sizes : 
- $|r| \approx 0.1$ small effect size 
- $|r| \approx 0.3$ medium effect size 
- $|r| \approx 0.5$ large effect size 

## Spearman's Rank Correlation Coefficient ($r_s$) 

Useful for data with a non-linear relationship 
Only shows association of the data by correlation of their ranks 
To find $r_s$ rank the data then find the rank's PMCC or $r_s = 1 - \frac{6 \sum d^2}{n(n^2 - 1)}$ 

Spearman's test is not appropriate if there is no evidence of a relationship 
Ranking loses information which may affect outcome of hypothesis test 

Hypothesis test : 
The test statistic is the sample $r_s$ 
$H_0 :$ there is no association in the population 
$H_1 :$ there is positive / negative (one-tailed) / an association (two-tailed) between variables 
If $|r_s|$ > critical value then reject $H_0$ 

## Regression Lines 

$y$ on $x$ means $y = mx + c$ 
Always plot lines as dependant on independent ($y$ on $x$) when random on non-random 
Can plot $y$ on $x$ or $x$ on $y$ when random on random 
The two regression lines will intersect at ($\bar x$, $\bar y$) 
To estimate $y$ calculate $y$ on $x$ regression line and vice versa 
For $y$ on $x$ : $y-\bar y=b(x-\bar x)$ 
For $x$ on $y$ : $x-\bar x=b(y-\bar y)$ 

Interpolation means estimating within data range 
Extrapolation means estimating outside the data range 
Linear Regression model unreliable when : 
- Extrapolating 
- Data size is small 
- Weak correlation 
- Predicting independent variable 
- Sample does not represent population 

Residual of a point is observed value - value from regression line (difference in $y$ if $y$ on $x$) 

Use calculator to find regression line where a = y-intercept and b = gradient 
CALC -> REG -> X -> a + bx 

Can check how well line fits by visual comparison or using $r^2$ 
This is the coefficient of determination 
