`i#Mathematics #Further #Core 

A straight line can be written as $r = a + \lambda d$ where a is a point on the line and d is the vector 
e.g. for the straight line $y = 1 + 2x$, $r = \begin{pmatrix} 0 \\ 1 \end{pmatrix} + \lambda \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ 
For any 3-dimensional line, $r = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} + \lambda \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ 
For any line $r$ connecting $\begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$ to $\begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}$, $r = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} + \lambda \begin{pmatrix} a_1 - b_1 \\ a_2 - b_2 \\ a_3 - b_3 \end{pmatrix}$ 
If two lines $a = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} + \lambda \begin{pmatrix} x_1 \\ y_1 \\ z_1 \end{pmatrix}$ and $b = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix} + \mu \begin{pmatrix} x_2 \\ y_2 \\ z_2 \end{pmatrix}$ intersect, then : 
$a_1 + \lambda x_1 = b_1 + \mu x_2$ etc for simultaneous equations 

Cartesian form of of $r = a + \lambda d$ is $\frac{x - a_1}{d_1} = \frac{y - a_w}{d_2} = \frac{z - a_3}{d_3}$ 
If $d_3 = 0$ then write as $\frac{x - a_1}{d_1} = \frac{y - a_2}{d_2} , z = a_3$ 
If $d_2 = d_3 = 0$ then write as $y - a_2 , z = a_3 \; (x \in \mathbb{R})$ 
Two straight lines in 3D can either be intersecting, parallel or at a skew (parallel planes) 
To find if skewing, check if parallel (same d value) then check if intersecting 

Scalar product / Dot product : $a \cdot b = |a||b| cos \theta$ where $\theta$ is the angle between vectors $a$ and $b$ 
$a \cdot b = a_1 b_1 + a_2 b_2 + a_3 b_3$ and $|a| = \sqrt{a_1^2 + a_2^2 + a_3^2}$ so $\theta = arccos \left( \frac{a_1 b_1 + a_2 b_2 + a_3 b_3}{\sqrt{a_1^2 + a_2^2 + a_3^2} \sqrt{b_1^2 + b_2^2 + b_3^2}}\right)$ 
If $a$ & $b$ are perpendicular then $a \cdot b = 0$ and if they are parallel then $a \cdot b = 1$ 
For dot product both vectors must be facing away from the same point 

Vector product / Cross product : $a \times b = |a||b| \hat n sin \theta$ where $\hat n$ is the perpendicular to $a$ & $b$ 
Use right hand rule to determine which direction $\hat n$ is 
$a \times b$ is also equal to $\begin{vmatrix} i & j & k \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}$ and also $\begin{pmatrix} a_2b_3 - a_3b_2 \\ a_3b_1 - a_1b_3 \\ a_1b_2 - a_2b_1 \end{pmatrix}$ 
A plane is defined as $r = a + \lambda b + \mu c$ where a is a position vector and $b$ & $c$ are not parallel vectors 
Every direction vector of a plane is perpendicular to the normal to the plane 
Another equation is $r \cdot n = a \cdot n$ where $a$ is a position vector and n is the plane's normal vector 
Cartesian equation of a plane is $n_1 x + n_2 y + n_3 z = d$ where $d = a \cdot n$ and $n = \begin{pmatrix} n_1 \\ n_2 \\ n_3 \end{pmatrix}$ (the normal) 
The angle between two intersecting lines ($\theta$) can be either acute or obtuse 
If $cos\theta$ positive then acute else obtuse 
To find $\theta$ between two planes, find angle of intersection of their normal 
The angle of intersection of a line and plane is 90 - angle of intersection of line and normal 

To find closest distance from point to a line find normal and general point on line 
To find point on a plane set 2 variables to 0 and adjust the third to match equation 

A normalised vector is one who's magnitude equals 1 
