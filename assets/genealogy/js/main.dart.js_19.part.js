self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
aL4(d,e,f){var x,w,v,u,t,s,r=e.b
if(r<=0||e.a<=0||f.b<=0||f.a<=0)return C.AU
switch(d.a){case 0:x=f
w=e
break
case 1:v=f.a
u=f.b
t=e.a
x=v/u>t/r?new A.G(t*u/r,u):new A.G(v,r*v/t)
w=e
break
case 2:v=f.a
u=f.b
t=e.a
w=v/u>t/r?new A.G(t,t*u/v):new A.G(r*v/u,r)
x=f
break
case 3:r=e.a
v=f.b
u=f.a
v=r*v/u
w=new A.G(r,v)
x=new A.G(u,v*u/r)
break
case 4:v=f.a
u=f.b
v=r*v/u
w=new A.G(v,r)
x=new A.G(v*u/r,u)
break
case 5:v=e.a
u=f.a
w=new A.G(Math.min(A.y(v),A.y(u)),Math.min(r,A.y(f.b)))
x=w
break
case 6:s=e.a/r
v=f.b
x=r>v?new A.G(v*s,v):e
r=f.a
if(x.a>r)x=new A.G(r,r/s)
w=e
break
default:throw A.c(A.l("`null` encountered as case in a switch expression with a non-nullable enum type."))}return new B.H9(w,x)},
qw:function qw(d,e){this.a=d
this.b=e},
H9:function H9(d,e){this.a=d
this.b=e},
azy(d,e,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(b0.gN(b0))return
x=b0.c
w=b0.a
x-=w
v=b0.d
u=b0.b
v-=u
t=new A.G(x,v)
s=a6.gaK(a6)
s.toString
r=a6.gaL(a6)
r.toString
if(a4==null)a4=C.j8
q=B.aL4(a4,new A.G(s,r).e8(0,b2),t)
p=q.a.T(0,b2)
o=q.b
if(b1!==C.aU&&o.m(0,t))b1=C.aU
n=new A.b1(new A.b3())
n.snV(!1)
if(a1!=null)n.sa91(a1)
n.saw(0,E.Xh(0,0,0,a9))
n.snH(a3)
n.sDc(a7)
m=o.a
l=(x-m)/2
k=o.b
j=(v-k)/2
v=a5?-d.a:d.a
v=w+(l+v*l)
u+=j+d.b*j
i=new A.u(v,u,v+m,u+k)
h=b1!==C.aU||a5
if(h)e.cE(0)
v=b1===C.aU
if(!v)e.ib(0,b0)
if(a5){g=-(w+x/2)
e.aq(0,-g,0)
e.df(0,-1,1)
e.aq(0,g,0)}f=d.acx(p,new A.u(0,0,s,r))
if(v)e.kp(a6,f,i,n)
else for(x=new A.h5(B.ayi(b0,i,b1).a());x.t();)e.kp(a6,f,x.gE(x),n)
if(h)e.cD(0)},
ayi(d,e,f){return A.dk(function(){var x=d,w=e,v=f
var u=0,t=1,s,r,q,p,o,n,m,l,k,j,i,h,g,a0
return function $async$ayi(a1,a2){if(a1===1){s=a2
u=t}while(true)switch(u){case 0:l=w.c
k=w.a
j=l-k
i=w.d
h=w.b
g=i-h
a0=v!==C.e6
if(!a0||v===C.Bj){r=D.d.dD((x.a-k)/j)
q=D.d.f2((x.c-l)/j)}else{r=0
q=0}if(!a0||v===C.Bk){p=D.d.dD((x.b-h)/g)
o=D.d.f2((x.d-i)/g)}else{p=0
o=0}n=r
case 2:if(!(n<=q)){u=4
break}l=n*j,m=p
case 5:if(!(m<=o)){u=7
break}u=8
return w.cU(new A.o(l,m*g))
case 8:case 6:++m
u=5
break
case 7:case 3:++n
u=2
break
case 4:return A.dh()
case 1:return A.di(s)}}},y.b)},
rc:function rc(d,e){this.a=d
this.b=e}},A,C,D,E
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[30],B)
A=c[0]
C=c[41]
D=c[2]
E=c[36]
B.qw.prototype={
j(d){return"BoxFit."+this.b}}
B.H9.prototype={}
B.rc.prototype={
j(d){return"ImageRepeat."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.ia,[B.qw,B.rc])
w(B.H9,A.v)})()
A.c2(b.typeUniverse,JSON.parse("{}"))
var y={b:A.H("u")};(function constants(){C.cO=new B.qw(0,"fill")
C.x1=new B.qw(2,"cover")
C.x2=new B.qw(5,"none")
C.j8=new B.qw(6,"scaleDown")
C.AU=new B.H9(D.r,D.r)
C.e6=new B.rc(0,"repeat")
C.Bj=new B.rc(1,"repeatX")
C.Bk=new B.rc(2,"repeatY")
C.aU=new B.rc(3,"noRepeat")})()}
$__dart_deferred_initializers__["ghLzQI9bU+57TM4nDRVLK4IsByo="] = $__dart_deferred_initializers__.current
