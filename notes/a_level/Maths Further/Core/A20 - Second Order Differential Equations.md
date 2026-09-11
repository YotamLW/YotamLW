#Mathematics #Further #Core 

Auxiliary equation of $a \frac{d^2y}{dx^2} + b \frac{dy}{dx} + c y = 0$ is $a \lambda^2 + b \lambda + c = 0$ 
The roots of the auxiliary equation $\alpha, \beta$ make the solution to this differential equation : 
- If $\alpha, \beta$ are real, $y = Ae^{\alpha x} + Be^{\beta x}$ 
- If $\alpha = \beta$, $y = Axe^{\alpha x} + Be^{\alpha x}$ 
- If roots are $a \pm ib$, $y = e^{a x} (A \cos(b x) + B \sin(b x)) = Ce^{a x} \cos(bx + D)$ 

For particular integral $f(x)$ : 
- If $f(x)$ is a polynomial, guess polynomial of same degree (or higher if same as characteristic) 
- If $f(x) = a\sin(qx) + b\cos(qx)$, guess $A\sin(qx) + B\cos(qx)$ 
- If $f(x) = ae^{\alpha x}$, guess $Ae^{\alpha x}$ but if $\alpha$ is a root then 🎶stick in an extra x🎶 

## Simple Harmonic Motion 

Differential equations of the form $\frac{d^2x}{dt^2} = -\omega^2x$, if no minus then it is just a repeat root 
Solution is $x = A\cos(\omega t) + B\sin(\omega t)$ 
Time period $T = \frac{2\pi}{\omega}$ 
Amplitude = $\sqrt{A^2+B^2}$ 

Damped harmonic motion is modelled as $\frac{d^2x}{dt^2}+k\frac{dx}{dt}+\omega^2x=0$ 
Type of damping depending on auxiliary equation : 
- If discriminant > 0 then overdamped, roots are real so $x = Ae^{\alpha t} + Be^{\beta t}$ 
- If discriminant = 0 then critically damped, roots repeated so $x = Ate^{\alpha t} + Be^{\alpha t}$ 
- If discriminant < 0 then underdamped, roots imaginary so $x = Ce^{at} \cos(bt + D)$ 
