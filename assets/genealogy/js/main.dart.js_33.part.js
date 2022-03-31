self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
aIk(){throw B.c(B.I("_Namespace"))},
aIz(){throw B.c(B.I("Platform._pathSeparator"))},
V1(d,e,f){var x=J.aE(d)
switch(x.h(d,0)){case 1:return new B.fa(!1,null,null,e+": "+B.d(f))
case 2:return new A.ix(e,f,new A.my(x.h(d,2),x.h(d,1)))
case 3:return new A.ix("File closed",f,null)
default:return new B.ug("Unknown error")}},
auG(d){var x
A.avd()
B.fb(d,"path")
x=A.av_(D.bt.ci(d))
return new A.Om(d,x)},
aqK(d){var x
A.avd()
B.fb(d,"path")
x=A.av_(D.bt.ci(d))
return new A.BH(d,x)},
aI2(){return A.aIk()},
axm(d,e){e[0]=A.aI2()},
av_(d){var x,w,v=d.length
if(v!==0)x=!D.N.gN(d)&&!J.e(D.N.gM(d),0)
else x=!0
if(x){w=new Uint8Array(v+1)
D.N.cz(w,0,v,d)
return w}else return d},
avd(){var x=$.a4.h(0,$.aBq())
return x==null?null:x},
aII(){return A.aIz()},
my:function my(d,e){this.a=d
this.b=e},
Om:function Om(d,e){this.a=d
this.b=e},
nW:function nW(d){this.a=d},
ix:function ix(d,e,f){this.a=d
this.b=e
this.c=f},
BH:function BH(d,e){this.a=d
this.b=e},
ahw:function ahw(d){this.a=d},
ahv:function ahv(d){this.a=d},
ahz:function ahz(){},
ahA:function ahA(d,e,f){this.a=d
this.b=e
this.c=f},
ahB:function ahB(d,e,f){this.a=d
this.b=e
this.c=f},
ahy:function ahy(d){this.a=d},
ahx:function ahx(d,e){this.a=d
this.b=e},
ahD:function ahD(d,e,f){this.a=d
this.b=e
this.c=f},
ahC:function ahC(d,e,f){this.a=d
this.b=e
this.c=f},
asd:function asd(d){this.a=d},
ase:function ase(d,e,f){this.a=d
this.b=e
this.c=f},
asc:function asc(d){this.a=d},
ZW:function ZW(){},
Yx:function Yx(){},
m8:function m8(d,e){this.a=d
this.b=e},
ZS:function ZS(d){this.a=d},
aDI(d,e){return new A.kk(d,e,null)},
kk:function kk(d,e,f){this.c=d
this.d=e
this.a=f},
NK:function NK(d,e){var _=this
_.e=d
_.a=null
_.b=e
_.c=null},
agL:function agL(){},
agM:function agM(d){this.a=d},
aET(d,e){var x=e.a,w=d.a,v=d.b,u=d.c,t=d.d
return C.S6.eD("cropImage",B.aq(["path",x,"left",w,"top",v,"right",u,"bottom",t,"scale",1],y.N,y.K),!1,y.A).b2(0,new A.a1Y(),y.L)},
u7:function u7(d,e){this.a=d
this.b=e},
pR:function pR(d,e){this.a=d
this.b=e},
w8:function w8(d,e){this.c=d
this.a=e},
qJ:function qJ(d,e,f,g,h,i,j,k,l){var _=this
_.d=d
_.f=_.e=$
_.x=_.r=1
_.y=e
_.z=f
_.Q=g
_.ch=h
_.cx=i
_.dy=_.dx=_.db=_.cy=$
_.fy=_.fx=_.fr=null
_.go=j
_.id=0
_.av$=k
_.a=null
_.b=l
_.c=null},
XD:function XD(d){this.a=d},
XC:function XC(){},
XA:function XA(d){this.a=d},
XB:function XB(d){this.a=d},
Xw:function Xw(d){this.a=d},
Xz:function Xz(d,e,f){this.a=d
this.b=e
this.c=f},
Xy:function Xy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xx:function Xx(d,e){this.a=d
this.b=e},
Xu:function Xu(d,e,f){this.a=d
this.b=e
this.c=f},
Xv:function Xv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NL:function NL(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
a1Y:function a1Y(){},
Bn:function Bn(){},
NM:function NM(){}},J,C,B,E,D,F,G,H,I
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[7],A)
J=c[1]
C=c[51]
B=c[0]
E=c[33]
D=c[2]
F=c[34]
G=c[37]
H=c[50]
I=c[36]
A.my.prototype={
j(d){var x,w=this.a
if(w.length!==0){w="OS Error: "+w
x=this.b
if(x!==-1)w=w+", errno = "+J.d6(x)}else{w=this.b
w=w!==-1?"OS Error: errno = "+J.d6(w):"OS Error"}return w.charCodeAt(0)==0?w:w},
$ibD:1}
A.Om.prototype={
gcv(d){return this.a},
j(d){return"Directory: '"+this.a+"'"},
$iwn:1}
A.nW.prototype={}
A.ix.prototype={
j(d){var x,w=this,v="FileSystemException",u=w.a
if(u.length!==0){u=v+(": "+u)
x=w.b
if(x!=null)u+=", path = '"+x+"'"
x=w.c
if(x!=null)u+=" ("+x.j(0)+")"}else{u=w.c
if(u!=null){u=v+(": "+u.j(0))
x=w.b
if(x!=null)u+=", path = '"+x+"'"}else{u=w.b
u=u!=null?v+(": "+u):v}}return u.charCodeAt(0)==0?u:u},
$ibD:1}
A.BH.prototype={
gcv(d){return this.a},
P8(d,e){if(e!==C.jR&&e!==C.e_&&e!==C.AN&&e!==C.jS&&e!==C.AO)return B.a_x(new B.fa(!1,null,null,"Invalid file mode for this operation"),null,y.q)
return A.axm(5,[null,this.b,e.a]).b2(0,new A.ahw(this),y.q)},
m7(d){return this.P8(d,C.jR)},
o1(d){return A.axm(12,[null,this.b]).b2(0,new A.ahv(this),y.S)},
ru(){return this.m7(0).b2(0,new A.ahy(new A.ahz()),y.p)},
ago(d){return this.P8(0,C.e_).b2(0,new A.ahD(this,d,!1),y.L)},
j(d){return"File: '"+B.d(this.a)+"'"},
$ijr:1}
A.ZW.prototype={}
A.Yx.prototype={}
A.m8.prototype={
kM(d){return new B.ct(this,y.X)},
kI(d,e,f){var x=this.iT(e,f),w=e.b
return E.arm(null,x,e.a.a,new A.ZS(this),w)},
iT(d,e){return this.a2H(d,e)},
a2H(d,e){var x=0,w=B.X(y.D),v,u=this,t,s
var $async$iT=B.S(function(f,g){if(f===1)return B.U(g,w)
while(true)switch(x){case 0:t=u.a
x=3
return B.a0(t.ru(),$async$iT)
case 3:s=g
if(s.byteLength===0){$.hY.jc$.vU(d)
throw B.c(B.ae(t.j(0)+" is empty and cannot be loaded as an image."))}v=e.$1(s)
x=1
break
case 1:return B.V(v,w)}})
return B.W($async$iT,w)},
m(d,e){if(e==null)return!1
if(J.a2(e)!==B.F(this))return!1
return e instanceof A.m8&&e.a.a==this.a.a&&e.b===this.b},
gB(d){return B.ac(this.a.a,this.b,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a,D.a)},
j(d){return'FileImage("'+B.d(this.a.a)+'", scale: '+this.b+")"}}
A.kk.prototype={
V(){return new A.NK(new B.aN(null,y.s),D.k)}}
A.NK.prototype={
A(d,e){var x=null,w=B.aW(x,new B.aL(C.Av,new A.w8(new A.m8(this.a.c,1),this.e),x),D.l,x,x,x,x,1/0,x,x,x,x,x),v=B.d8(!1,!0,B.aB("\u53d6\u6d88",x,x,x,B.aD(x,x,D.i,x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x),x,!0,x,x,x,x,x,x,x,x,x,new A.agL(),x,x,x),u=B.FO(x,x,new F.bO(new B.w(4278246229),y.R),x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x),t=y.t
return G.fr(!0,G.h_(x,x,B.aW(x,B.cl(H.c6,B.a([w,new B.aL(C.AD,B.bJ(B.a([v,F.aqr(B.aB("\u786e\u5b9a",x,x,x,B.aD(x,x,D.i,x,x,x,x,x,x,x,x,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),x,x),new A.agM(this),u)],t),D.n,D.b3,D.q),x)],t),D.z,D.Q),D.l,new B.w(4280295456),x,x,x,1/0,x,x,x,x,1/0),x),D.P,!0)},
tH(d){return this.Yo(d)},
Yo(d){var x=0,w=B.X(y.H),v=this,u,t,s,r,q,p
var $async$tH=B.S(function(e,f){if(e===1)return B.U(f,w)
while(true)switch(x){case 0:p=v.e.gat()
if(p.gM9()==null)B.bv("\u88c1\u526a\u4e0d\u6210\u529f")
x=2
return B.a0(A.aET(p.gM9(),d),$async$tH)
case 2:u=f
B.bv(u.gcv(u))
$.a_()
t=y.l
s=$.m
s=(s==null?$.m=new B.M():s).I(0,null,t).db
s.gl(s)
s=y.B
r=$.m
r=(r==null?$.m=new B.M():r).I(0,null,s).gbE()
r=r.gl(r)
r.gfo(r)
r=$.m
t=(r==null?$.m=new B.M():r).I(0,null,t)
r=u.gcv(u)
q=$.m
s=(q==null?$.m=new B.M():q).I(0,null,s).gbE()
s=s.gl(s)
t.agb(s.gfo(s),v.a.d,r)
return B.V(null,w)}})
return B.W($async$tH,w)}}
A.u7.prototype={
j(d){return"_CropAction."+this.b}}
A.pR.prototype={
j(d){return"_CropHandleSide."+this.b}}
A.w8.prototype={
V(){var x=y.i
return new A.qJ(new B.aN(null,y.z),D.al,D.al,D.j,C.iC,C.f5,B.B(x,x),null,D.k)}}
A.qJ.prototype={
gM9(){var x,w,v,u,t,s,r,q=this,p=q.y
if(p.gN(p))p=null
else{p=q.z
x=p.a
w=q.y
v=w.a
u=w.c-v
t=q.r
v=x*u/t-v
s=p.b
r=w.b
w=w.d-r
r=s*w/t-r
t=new B.u(v,r,v+(p.c-x)*u/t,r+(p.d-s)*w/t)
p=t}return p},
a9(){var x,w,v=this,u=null
v.as()
v.a.toString
x=B.aM(u,u,u,0,v)
x.bB()
w=x.b1$
w.b=!0
w.a.push(new A.XD(v))
B.dC(v.e,"_activeController")
v.e=x
x=B.aM(u,u,u,u,v)
x.bB()
w=x.b1$
w.b=!0
w.a.push(v.ga60())
B.dC(v.f,"_settleController")
v.f=x},
k(d){var x,w=this,v=w.fy
if(v!=null){x=w.fr
if(x!=null)x.S(0,v)}B.b(w.e,"_activeController").k(0)
B.b(w.f,"_settleController").k(0)
w.Ud(0)},
a6(){this.Uc()
this.Ig()},
bh(d){var x=this
x.bH(d)
if(!x.a.c.m(0,d.c))x.Ig()
else x.a.toString
x.a.toString},
Ig(){var x,w,v,u,t=this,s=null,r=t.fr,q=t.a.c,p=t.c
p.toString
x=t.fr=q.K(B.ER(p,s))
q=x.a
if(q==null)q=x
p=r==null
if(p)w=s
else{w=r.a
if(w==null)w=r}if(q!==w||!1){v=t.fy
if(v!=null)if(!p)r.S(0,v)
t.a.toString
u=new B.e4(t.ga77(),s,s)
t.fy=u
x.a2(0,u)}},
A(d,e){var x,w,v,u,t=this,s=null,r=t.y
r=!r.gN(r)&&t.fx!=null?t.ga1h():s
x=t.y
x=!x.gN(x)&&t.fx!=null?t.ga1j():s
w=t.y
w=!w.gN(w)&&t.fx!=null?t.ga1f():s
v=t.fx
u=t.x
return new B.eO(D.fP,B.rq(D.bz,B.fh(D.aT,B.hK(s,s,s,new A.NL(v,t.y,u,t.z,t.r,B.b(B.b(t.e,"_activeController").y,"_value"),s),D.r),D.a1,!1,t.d,s,s,s,s,s,s,s,s,s,s,w,r,x,s,s,s,s,s,s,s),s,s,new A.XA(t),s,new A.XB(t)),s)},
Ys(){this.a.toString
var x=B.b(this.e,"_activeController")
x.Q=D.a9
x.eX(0,D.V,D.d_)},
gpe(){var x,w=$.O.u$.Q.h(0,this.d)
if(w==null)return null
x=w.gfc(w)
if(x==null)return null
return y.Y.a(x.X(0,D.Sd))},
a_g(d){var x=$.O.u$.Q.h(0,this.d)
if(x==null)return null
return y.x.a(x.gC()).hO(d)},
a61(){this.ad(new A.Xw(this))},
Xz(d,e,f,g){var x,w,v,u,t
if(e==null||d==null)return D.al
this.a.toString
x=e*g/(d*f)
if(x>1){w=d*f/e/g
x=1}else w=1
v=this.go
u=v.h(0,null)
if(u!=null)v.n(0,u,w)
v=(1-w)/2
t=(1-x)/2
return new B.u(v,t,v+w,t+x)},
a78(d,e){var x,w=this.gpe()
if(w==null)return
x=$.O
if(x!=null)x.z$.push(new A.Xz(this,d,w))
x=$.O
if(x!=null)x.vT()},
a21(d){var x,w,v,u,t,s,r,q,p=this.gpe()
if(d==null||p==null)return C.f5
x=p.a
w=this.z
v=w.a
u=x*v
t=p.b
s=w.b
r=t*s
q=new B.u(u,r,u+x*(w.c-v),r+t*(w.d-s)).eu(-5)
x=q.a-24
w=q.b-24
v=x+48
u=w+48
if(new B.u(x,w,v,u).v(0,d))return C.f6
t=q.c-24
s=t+48
if(new B.u(t,w,s,u).v(0,d))return C.iE
w=q.d-24
u=w+48
if(new B.u(x,w,v,u).v(0,d))return C.f7
if(new B.u(t,w,s,u).v(0,d))return C.iF
return C.f5},
a1i(d){var x=this,w=B.b(x.e,"_activeController")
w.Q=D.a9
w.eX(1,D.V,D.d_)
B.b(x.f,"_settleController").mB(0,!1)
w=d.a
x.Q=w
x.ch=C.iC
x.cx=x.a21(x.a_g(w))
x.cy=x.r
x.db=x.y},
ga34(){var x,w,v,u,t,s,r,q,p=this,o=p.gpe(),n=p.fx
if(o==null||n==null)return null
x=o.a
w=p.z
v=n.gaK(n)
u=p.x
t=o.b
s=p.z
r=n.gaL(n)
q=p.x
p.a.toString
return Math.min(2,Math.max(x*(w.c-w.a)/(v*u),t*(s.d-s.b)/(r*q)))},
a1g(d){var x,w,v,u,t,s,r,q,p=this,o="_settleController"
p.Ys()
x=p.ga34()
if(x==null)return
w=p.r
p.a.toString
v=J.bL(w,x,2)
p.dy=new B.Z(p.r,v,y._)
w=p.db=p.y
u=w.a
t=p.z
s=w.c-u
u=Math.max(Math.min(u,t.a*s/v),t.c*s/v-1)
r=w.b
q=w.d-r
t=Math.max(Math.min(r,t.b*q/v),t.d*q/v-1)
p.dx=new B.t0(w,new B.u(u,t,u+s,t+q))
B.b(p.f,o).sl(0,0)
q=B.b(p.f,o)
q.Q=D.a9
q.eX(1,D.V,C.zB)},
uL(d,e,f,g,h){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j={},i=k.fx
if(i==null)return
x=k.z
w=f==null
v=w?0:f
u=j.a=x.a+v
v=d==null?0:d
t=j.b=x.d+v
v=h==null
s=v?0:h
r=j.c=x.b+s
s=g==null?0:g
q=j.d=x.c+s
p=q-u
s=i.gaK(i)
x=k.y
o=i.gaL(i)
n=k.y
k.a.toString
m=s*(x.c-x.a)*p/(o*(n.d-n.b))
l=k.go.h(0,null)
if((m>=1||p>=1)&&l!=null)if(e===C.f7||e===C.f6){u=q-l
j.a=u
s=q
x=u}else{q=u+l
j.d=q
s=q
x=u}else{s=q
x=u}if(s-x<0.1)if(!w){u=s-0.1
j.a=u
w=s
x=u}else{q=x+0.1
j.d=q
w=q}else w=s
if(t-r<0.1)if(!v){r=t-0.1
j.c=r
s=r
v=t}else{t=r+0.1
j.b=t
s=r
v=t}else{s=r
v=t}k.a.toString
if(x<0){j.a=0
x=k.z
j.d=x.c-x.a}else if(w>1){x=k.z
j.a=1-(x.c-x.a)
j.d=1}if(s<0){j.c=0
x=k.z
j.b=x.d-x.b}else if(v>1){x=k.z
j.c=1-(x.d-x.b)
j.b=1}k.ad(new A.Xx(j,k))},
a71(d,e,f){return this.uL(null,d,e,null,f)},
a72(d,e,f){return this.uL(null,d,null,e,f)},
a7_(d,e,f){return this.uL(d,e,f,null,null)},
a70(d,e,f){return this.uL(d,e,null,f,null)},
a1k(d){var x,w,v,u,t,s=this,r=s.ch
if(r===C.iC)if(s.cx===C.f5){r=s.id===2?C.wl:C.wk
s.ch=r}else{s.ch=C.iD
r=C.iD}if(r===C.iD){x=s.gpe()
if(x==null)return
r=d.b
w=r.X(0,s.Q)
s.Q=r
v=w.a/x.a
u=w.b/x.b
r=s.cx
if(r===C.f6)s.a71(C.f6,v,u)
else if(r===C.iE)s.a72(C.iE,v,u)
else if(r===C.f7)s.a7_(u,C.f7,v)
else if(r===C.iF)s.a70(u,C.iF,v)}else if(r===C.wk){t=s.fx
if(t==null)return
r=d.b
w=r.X(0,s.Q)
s.Q=r
s.ad(new A.Xu(s,w,t))}else if(r===C.wl){t=s.fx
x=s.gpe()
if(t==null||x==null)return
s.ad(new A.Xv(s,d,x,t))}}}
A.NL.prototype={
dG(d){var x=this
return d.b!=x.b||!d.c.m(0,x.c)||d.d!==x.d||!d.e.m(0,x.e)||d.r!==x.r||d.f!=x.f},
aE(d,e){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=5+(e.a-10),k=5+(e.b-10)
d.cE(0)
d.aq(0,5,5)
x=new B.b1(new B.b3())
x.snW(!1)
w=m.b
if(w!=null){v=w.gaK(w)
v.toString
u=w.gaL(w)
u.toString
t=m.c
s=m.f
r=m.d
q=t.a*w.gaK(w)*s*r
t=t.b*w.gaL(w)*s*r
p=w.gaK(w)
o=w.gaL(w)
d.cE(0)
d.ib(0,new B.u(0,0,0+(l-5),0+(k-5)))
d.kp(w,new B.u(0,0,v,u),new B.u(q,t,q+p*s*r,t+o*s*r),x)
d.cD(0)}v=m.r
x.saw(0,E.Xi(0,0,0,0.3*v+0.7*(1-v)))
l-=5
v=m.e
u=v.a
t=l*u
k-=5
s=v.b
r=k*s
u=t+l*(v.c-u)
s=r+k*(v.d-s)
n=new B.u(t,r,u,s)
d.cH(0,new B.u(0,0,l,r),x)
d.cH(0,new B.u(0,s,l,k),x)
d.cH(0,new B.u(0,r,t,s),x)
d.cH(0,new B.u(u,r,l,s),x)
if(!n.gN(n)){m.YX(d,n)
x=new B.b1(new B.b3())
x.snW(!0)
x.saw(0,C.yG)
l=t-5
r-=5
k=l+10
v=r+10
d.ih(0,new B.u(l,r,k,v),x)
u-=5
t=u+10
d.ih(0,new B.u(u,r,t,v),x)
s-=5
v=s+10
d.ih(0,new B.u(u,s,t,v),x)
d.ih(0,new B.u(l,s,k,v),x)}d.cD(0)},
YX(d,e){var x,w,v,u,t,s,r,q,p=this.r
if(p===0)return
x=new B.b1(new B.b3())
x.snW(!1)
x.saw(0,B.aF(D.d.aT(255*(0.8980392156862745*p)),208,208,208))
x.sd7(0,D.a3)
x.sfD(1)
w=B.bN()
p=e.a
v=e.b
w.cr(0,p,v)
u=e.c
w.bp(0,u,v)
t=e.d
w.bp(0,u,t)
w.bp(0,p,t)
w.bp(0,p,v)
for(s=1;s<3;++s){r=p+s*(u-p)/3
w.cr(0,r,v)
w.bp(0,r,t)}for(q=1;q<3;++q){r=v+q*(t-v)/3
w.cr(0,p,r)
w.bp(0,u,r)}d.cc(0,w,x)}}
A.Bn.prototype={
k(d){this.au(0)},
a6(){var x,w=this.c
w.toString
x=!B.b9(w)
w=this.av$
if(w!=null)for(w=B.cG(w,w.r);w.t();)w.d.sbq(0,x)
this.b0()}}
A.NM.prototype={}
var z=a.updateTypes(["axC(@)","aa<cv>(rX)","aa<n>()","aa<jr>(rX)","jr/(rX)","~()","~(ew,C)","~(pf)","~(mM)","~(pg)","jr(@)"])
A.ahw.prototype={
$1(d){var x
d.h(0,0)
x=A.V1(d,"Cannot open file",this.a.a)
throw B.c(x)},
$S:z+0}
A.ahv.prototype={
$1(d){var x
d.h(0,0)
x=A.V1(d,"Cannot retrieve length of file",this.a.a)
throw B.c(x)},
$S:138}
A.ahz.prototype={
$1(d){var x=B.a([],y.a),w=new B.a6($.a4,y.E)
new A.ahA(d,new B.agt(x),new B.az(w,y.Z)).$0()
return w},
$S:z+1}
A.ahA.prototype={
$0(){var x=this,w=x.c
x.a.aeT(0,65536).eh(0,new A.ahB(x.b,x,w),w.gBQ(),y.b)},
$S:0}
A.ahB.prototype={
$1(d){var x=this.a
if(d.length>0){x.H(0,d)
this.b.$0()}else this.c.bU(0,x.afL())},
$S:350}
A.ahy.prototype={
$1(d){return d.o1(0).b2(0,new A.ahx(this.a,d),y.p).dY(d.gvo(d))},
$S:z+1}
A.ahx.prototype={
$1(d){if(d===0)return this.a.$1(this.b)
return this.b.aeT(0,d)},
$S:351}
A.ahD.prototype={
$1(d){var x=this.b
return d.ahh(x,0,x.length).b2(0,new A.ahC(this.a,this.c,d),y.L).dY(d.gvo(d))},
$S:z+3}
A.ahC.prototype={
$1(d){return this.a},
$S:z+4}
A.asd.prototype={
$1(d){var x,w,v
if(y.j.b(d)&&!J.e(J.ak(d,0),0))throw B.c(A.V1(d,"read failed",this.a.a))
x=B.b(this.a.c,"_resourceInfo")
w=J.aE(d)
v=J.bR(w.h(d,1))
x.c=x.c+v;++x.e
x.r=$.atv()+D.f.bO($.atw().gCz(),1000)
return w.h(d,1)},
$S:352}
A.ase.prototype={
$1(d){var x,w,v,u,t=this
if(y.j.b(d)&&!J.e(J.ak(d,0),0))throw B.c(A.V1(d,"writeFrom failed",t.b.a))
x=t.b
w=B.b(x.c,"_resourceInfo")
v=t.a
u=v.a
u.toString
w.d+=u-(t.c-v.b.b);++w.f
w.x=$.atv()+D.f.bO($.atw().gCz(),1000)
return x},
$S:z+0}
A.asc.prototype={
$1(d){if(y.j.b(d)&&!J.e(J.ak(d,0),0))throw B.c(A.V1(d,"length failed",this.a.a))
return d},
$S:138}
A.ZS.prototype={
$0(){var x=this
return B.dk(function(){var w=0,v=1,u
return function $async$$0(d,e){if(d===1){u=e
w=v}while(true)switch(w){case 0:w=2
return B.bd("Path: "+B.d(x.a.a.a))
case 2:return B.dh()
case 1:return B.di(u)}}},y.P)},
$S:16}
A.agL.prototype={
$0(){I.eU($.a_(),null)},
$S:1}
A.agM.prototype={
$0(){var x=this.a
x.tH(x.a.c)},
$S:1}
A.XD.prototype={
$0(){return this.a.ad(new A.XC())},
$S:0}
A.XC.prototype={
$0(){},
$S:0}
A.XA.prototype={
$1(d){return this.a.id++},
$S:43}
A.XB.prototype={
$1(d){return this.a.id=0},
$S:353}
A.Xw.prototype={
$0(){var x,w="_settleController",v=this.a
v.r=B.b(v.dy,"_scaleTween").aN(0,B.b(B.b(v.f,w).y,"_value"))
x=B.b(v.dx,"_viewTween").aN(0,B.b(B.b(v.f,w).y,"_value"))
if(x!=null)v.y=x},
$S:0}
A.Xz.prototype={
$1(d){var x=this.b,w=this.a
w.ad(new A.Xy(w,x.a,x,this.c))},
$S:3}
A.Xy.prototype={
$0(){var x,w,v,u,t=this,s=t.a,r=s.fx=t.b
s.r=t.c.b
x=t.d
w=x.a
x=x.b
s.x=Math.max(w/r.gaK(r),x/r.gaL(r))
v=w/(r.gaK(r)*s.r*s.x)
u=x/(r.gaL(r)*s.r*s.x)
x=r.gaK(r)
s.z=s.Xz(r.gaL(r),x,u,v)
x=(v-1)/2
r=(u-1)/2
s.y=new B.u(x,r,x+v,r+u)},
$S:0}
A.Xx.prototype={
$0(){var x=this.a
this.b.z=new B.u(x.a,x.c,x.d,x.b)},
$S:0}
A.Xu.prototype={
$0(){var x=this.a,w=this.b,v=this.c
x.y=x.y.aq(0,w.a/(v.gaK(v)*x.r*x.x),w.b/(v.gaL(v)*x.r*x.x))},
$S:0}
A.Xv.prototype={
$0(){var x,w,v,u,t,s,r,q=this,p="_startView",o=q.a,n=q.b.d
o.r=B.b(o.cy,"_startScale")*n
x=q.c
n=1-n
w=q.d
v=w.gaK(w)
u=o.r
t=o.x
w=w.gaL(w)
s=o.r
r=o.x
t=B.b(o.db,p).a+x.a*n/(v*u*t)/2
r=B.b(o.db,p).b+x.b*n/(w*s*r)/2
s=B.b(o.db,p)
w=s.c
s=s.a
n=B.b(o.db,p)
o.y=new B.u(t,r,t+(w-s),r+(n.d-n.b))},
$S:0}
A.a1Y.prototype={
$1(d){return A.aqK(d)},
$S:z+10};(function aliases(){var x=A.Bn.prototype
x.Ud=x.k
x.Uc=x.a6})();(function installTearOffs(){var x=a._instance_0i,w=a._instance_0u,v=a._instance_2u,u=a._instance_1u
x(A.BH.prototype,"gp","o1",2)
var t
w(t=A.qJ.prototype,"ga60","a61",5)
v(t,"ga77","a78",6)
u(t,"ga1h","a1i",7)
u(t,"ga1f","a1g",8)
u(t,"ga1j","a1k",9)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.v,[A.my,A.ZW,A.nW,A.ix,A.Yx])
v(A.ZW,[A.Om,A.BH])
v(B.bB,[A.ahw,A.ahv,A.ahz,A.ahB,A.ahy,A.ahx,A.ahD,A.ahC,A.asd,A.ase,A.asc,A.XA,A.XB,A.Xz,A.a1Y])
v(B.cU,[A.ahA,A.ZS,A.agL,A.agM,A.XD,A.XC,A.Xw,A.Xy,A.Xx,A.Xu,A.Xv])
u(A.m8,E.cQ)
v(B.D,[A.kk,A.w8])
v(B.K,[A.NK,A.Bn])
v(B.h6,[A.u7,A.pR])
u(A.NM,A.Bn)
u(A.qJ,A.NM)
u(A.NL,B.m0)
x(A.Bn,B.df)
w(A.NM,A.Yx)})()
B.ce(b.typeUniverse,JSON.parse('{"axC":{"rX":[]},"my":{"bD":[]},"Om":{"wn":[]},"ix":{"bD":[]},"BH":{"jr":[]},"m8":{"cQ":["m8"],"cQ.T":"m8"},"kk":{"D":[],"f":[]},"NK":{"K":["kk*"]},"w8":{"D":[],"f":[]},"qJ":{"K":["w8"]},"NL":{"a9":[]}}'))
var y=(function rtii(){var x=B.G
return{D:x("eN"),P:x("d7"),L:x("jr"),a:x("q<cv>"),t:x("q<f*>"),z:x("aN<K<D>>"),s:x("aN<qJ*>"),j:x("z<@>"),b:x("ad"),K:x("v"),q:x("rX"),x:x("A"),Y:x("H"),N:x("j"),X:x("ct<m8>"),_:x("Z<J>"),p:x("cv"),Z:x("az<cv>"),E:x("a6<cv>"),R:x("bO<w*>"),i:x("J"),A:x("@"),S:x("n"),B:x("ara*"),l:x("lo*"),H:x("~")}})();(function constants(){C.yG=new B.w(4291875024)
C.zB=new B.aw(35e4)
C.Av=new B.ah(15,0,15,0)
C.AD=new B.ah(30,0,30,30)
C.jR=new A.nW(0)
C.e_=new A.nW(1)
C.AN=new A.nW(2)
C.jS=new A.nW(3)
C.AO=new A.nW(4)
C.S6=new B.hV("plugins.lykhonis.com/image_crop",D.aR,null)
C.iC=new A.u7(0,"none")
C.wk=new A.u7(1,"moving")
C.iD=new A.u7(2,"cropping")
C.wl=new A.u7(3,"scaling")
C.f5=new A.pR(0,"none")
C.f6=new A.pR(1,"topLeft")
C.iE=new A.pR(2,"topRight")
C.f7=new A.pR(3,"bottomLeft")
C.iF=new A.pR(4,"bottomRight")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"aPH","atw",()=>{var w=B.awO()
w.p2(0)
return w})
x($,"aPG","atv",()=>B.aDO().a)
x($,"aQs","aBq",()=>new B.v())
x($,"aOA","aAn",()=>A.aII())})()}
$__dart_deferred_initializers__["36f7KcPcIpEPgTr4+XOf++IJRVI="] = $__dart_deferred_initializers__.current
