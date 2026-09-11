#Mathematics #Further #Statistics 

A contingency table is a way of showing observed categorical data on a table 
For example a table showing type of ticket and age group : 

|                      | Child | Adult | Senior |
| -------------------- | ----- | ----- | ------ |
| **Zoo**              | 22    | 15    | 17     |
| **Theme park**       | 45    | 39    | 26     |
| **Combined one-day** | 70    | 80    | 34     |
| **Combined two-day** | 56    | 78    | 18     |
Degrees of freedom $v$ of such a table is (rows - 1) $\times$ (columns - 1) so in this case $v=6$ 
Can use a calculator in stats menu by doing TEST > CHI > 2WAY then entering in a matrix 
This will calculate expected frequency, degrees of freedom, the p-value and $\chi^2$ 

To calculate expected frequency manually e.g. from a two-way table 
Assuming the two events are independent so expected frequency = $P(A)\times P(B)\times n$ 

Each cell has a $\chi^2$ contribution $\frac{(f_o-f_e)^2}{f_e}$ where $f_o$ is observed and $f_e$ is expected frequency 
Can make a table of contributions to see which cells differ more or less than expected 
Too see if higher or lower then expected, compare observed and expected frequency tables 
Can make conclusion based on this by referencing the numbers 

If any expected frequency of any cell is less than 5, must combine column or row with another 

## Hypothesis Testing 

The $\chi^2$ test statistic measures how much variation is between expected and observed frequencies 
The test statistic $X^2=\sum \frac{(f_o-f_e)^2}{f_e}$ (the sum of all contributions) 
The p-value (top row of table) is the significance level 
The p-value given on the calculator is the minimum significance level to reject $H_0$ 

$H_0:$ No association between (table labels) or (table labels) are independent 
$H_1:$ Some association between (table labels) or (table labels) are not independent 
Write down degrees of freedom, significance level and critical value (from table in formula book) 
Calculate $X^2$ and compare to critical value (critical value denoted $(\chi^2_v)_p$) 
If $X^2$ > critical value then reject $H_0$ and so some association 

## Hypothesis Testing for Goodness of Fit 

Use to test if a given model (binomial, uniform or Poisson) is a good fit 
If data used to estimate $p$ or $\lambda$ for binomial or Poisson then subtract 1 from degrees of freedom 
When merging classes, need to reduce degrees of freedom 
So degrees of freedom $v$ = number of classes - 1 - number of estimated parameters 

How to set up for binomial test : 
- Go to stats menu and enter data in list 1 and frequency in list 2 
- Go to binomial distribution (Bpd) with input to list 1 output to list 3 
- Hover over list 4, OPTN > LIST > List then set to "List 3 $\times$ n" where $n$ is the total frequency 
- List 4 is now expected frequencies 
- Adjust lists 2 and 4 of observed and expected frequencies so expected frequency > 5 
- Go to TEST > CHI > GOF and set frequency columns and the correct degrees of freedom 
- Set CNTRB to list 5 ($\chi^2$ contribution) 

For a Poisson test : 
- Same steps but last value in table is the probability of that number or more 
- Do this by manually calculating 1 - sum of all probabilities before  

For a uniform test, all probabilities are the same so expected frequency of all is frequency $\div$ $n$ 

$H_0:$ The given model fits the data / The given model is suitable 
$H_1:$ The given model does not fit the data / The given model is not suitable 
Hypothesis same as for $\chi^2$ from here 
If $X^2$ > critical value then reject $H_0$ and so model not a good fit 
