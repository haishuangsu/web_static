self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={Me:function Me(d,e){this.a=d
this.b=e},
ll(d){return new B.u7(!0,d,null)},
u7:function u7(d,e,f){this.r=d
this.y=e
this.a=f},
aaw:function aaw(d,e,f){this.a=d
this.b=e
this.c=f},
vT:function vT(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Ed:function Ed(d,e,f,g,h,i){var _=this
_.E=d
_.q=e
_.a4=f
_.aB=g
_.q$=h
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=i
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},
am_:function am_(d,e){this.a=d
this.b=e},
alZ:function alZ(d,e){this.a=d
this.b=e},
Fu:function Fu(){},
mI(d,e,f,g){return new B.JA(f,e,g,d,null)},
JA:function JA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aNr(d,e,f){var w,v
switch(e.a){case 0:w=d.X(x.g)
w.toString
v=E.aqB(w.f)
return v
case 1:return C.aJ
default:throw A.c(A.l(y.b))}}},C,A,D,E,F,G
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[29],B)
C=c[2]
A=c[0]
D=c[41]
E=c[33]
F=c[40]
G=c[70]
B.Me.prototype={
j(d){return"ScrollViewKeyboardDismissBehavior."+this.b}}
B.u7.prototype={
w(d,e){var w,v,u,t=null,s={},r=B.aNr(e,C.br,!1)
s.a=this.y
w=this.r
v=w?A.l8(e):t
u=D.asl(r,v,C.a5,!1,t,t,t,t,new B.aaw(s,this,r))
return w&&v!=null?new A.tC(t,u,t):u}}
B.vT.prototype={
aQ(d){var w=new B.Ed(this.e,this.f,this.r,A.aw(),null,A.aw())
w.gaC()
w.fr=!0
w.sbh(null)
return w},
aT(d,e){var w
e.sdz(this.e)
e.sbK(0,this.f)
w=this.r
if(w!==e.a4){e.a4=w
e.aD()
e.ap()}}}
B.Ed.prototype={
sdz(d){if(d===this.E)return
this.E=d
this.a_()},
sbK(d,e){var w=this,v=w.q
if(e==v)return
if(w.b!=null)v.G(0,w.gup())
w.q=e
if(w.b!=null)e.a2(0,w.gup())
w.a_()},
a2v(){this.aD()
this.ap()},
ep(d){if(!(d.e instanceof A.iV))d.e=new A.iV()},
aq(d){this.W3(d)
this.q.a2(0,this.gup())},
al(d){this.q.G(0,this.gup())
this.W4(0)},
gaC(){return!0},
ga6R(){switch(A.bz(this.E).a){case 0:return this.rx.a
case 1:return this.rx.b
default:throw A.c(A.l(y.b))}},
ga3q(){var w=this,v=w.q$
if(v==null)return 0
switch(A.bz(w.E).a){case 0:return Math.max(0,v.rx.a-w.rx.a)
case 1:return Math.max(0,v.rx.b-w.rx.b)
default:throw A.c(A.l(y.b))}},
IE(d){switch(A.bz(this.E).a){case 0:return new A.ar(0,1/0,d.c,d.d)
case 1:return new A.ar(d.a,d.b,0,1/0)
default:throw A.c(A.l(y.b))}},
cb(d){var w=this.q$
if(w==null)return new A.L(C.f.U(0,d.a,d.b),C.f.U(0,d.c,d.d))
return d.bT(w.i1(this.IE(d)))},
bO(){var w=this,v=x.a.a(A.t.prototype.ga7.call(w)),u=w.q$
if(u==null)w.rx=new A.L(C.f.U(0,v.a,v.b),C.f.U(0,v.c,v.d))
else{u.cu(0,w.IE(v),!0)
u=w.q$.rx
u.toString
w.rx=v.bT(u)}w.q.lM(w.ga6R())
w.q.lL(0,w.ga3q())},
pN(d){var w=this
switch(w.E.a){case 0:return new A.o(0,d-w.q$.rx.b+w.rx.b)
case 2:return new A.o(0,-d)
case 3:return new A.o(d-w.q$.rx.a+w.rx.a,0)
case 1:return new A.o(-d,0)
default:throw A.c(A.l(y.b))}},
KZ(d){var w,v,u,t,s=d.a
if(!(s<0)){w=d.b
if(!(w<0)){v=this.q$.rx
u=v.a
t=this.rx
s=s+u>t.a||w+v.b>t.b}else s=!0}else s=!0
return s},
aH(d,e){var w,v,u,t,s,r=this
if(r.q$!=null){w=r.q.cx
w.toString
v=r.pN(w)
w=new B.am_(r,v)
u=r.KZ(v)&&r.a4!==C.l
t=r.aB
if(u){u=A.b(r.fr,"_needsCompositing")
s=r.rx
t.saU(0,d.jH(u,e,new A.w(0,0,0+s.a,0+s.b),w,r.a4,t.a))}else{t.saU(0,null)
w.$2(d,e)}}},
k(d){this.aB.saU(0,null)
this.k7(0)},
dw(d,e){var w,v=this.q.cx
v.toString
w=this.pN(v)
e.as(0,w.a,w.b)},
iu(d){var w,v=this
if(d!=null){w=v.q.cx
w.toString
w=v.KZ(v.pN(w))}else w=!1
if(w){w=v.rx
return new A.w(0,0,0+w.a,0+w.b)}return null},
cH(d,e){var w,v=this
if(v.q$!=null){w=v.q.cx
w.toString
return d.lI(new B.alZ(v,e),v.pN(w),e)}return!1},
jV(d,e,f){var w,v,u,t,s,r,q,p=this
if(f==null)f=d.ghW()
if(!(d instanceof A.A)){w=p.q.cx
w.toString
return new D.lg(w,f)}v=A.mN(d.dt(0,p.q$),f)
w=p.q$.rx
w.toString
switch(p.E.a){case 0:u=p.rx.b
t=v.d
s=w.b-t
r=t-v.b
break
case 1:u=p.rx.a
s=v.a
r=v.c-s
break
case 2:u=p.rx.b
s=v.b
r=v.d-s
break
case 3:u=p.rx.a
t=v.c
s=w.a-t
r=t-v.a
break
default:throw A.c(A.l(y.b))}q=s-(u-r)*e
return new D.lg(q,v.cS(p.pN(q)))},
dg(d,e,f,g){var w=this
if(!w.q.f.gjc())return w.pi(d,e,f,g)
w.pi(d,null,f,E.axo(d,e,f,w.q,g,w))},
lp(){return this.dg(C.aP,null,C.y,null)},
k0(d){return this.dg(C.aP,null,C.y,d)},
k5(d,e,f){return this.dg(d,null,e,f)},
Cq(d){var w
switch(A.bz(this.E).a){case 1:w=this.rx
return new A.w(0,-250,0+w.a,0+w.b+250)
case 0:w=this.rx
return new A.w(-250,0,0+w.a+250,0+w.b)
default:throw A.c(A.l(y.b))}},
$itL:1}
B.Fu.prototype={
aq(d){var w
this.du(d)
w=this.q$
if(w!=null)w.aq(d)},
al(d){var w
this.d9(0)
w=this.q$
if(w!=null)w.al(0)}}
B.JA.prototype={
w(d,e){var w=this,v=null,u=w.r
u=u!=null?new A.dt(A.et(u),C.w):v
return F.arx(w.d,w.c,F.avB(v,v,v,v,v,v,v,v,v,v,v,w.e,v,u,v,v,v,v,v))}}
var z=a.updateTypes(["vT(a_,eL)","~()","~({curve:dA,descendant:t?,duration:ay,rect:w?})"])
B.aaw.prototype={
$2(d,e){return new B.vT(this.c,e,C.A,this.a.a,null)},
$S:z+0}
B.am_.prototype={
$2(d,e){var w=this.a.q$
w.toString
d.dE(w,e.N(0,this.b))},
$S:14}
B.alZ.prototype={
$2(d,e){return this.a.q$.bY(d,e)},
$S:13};(function aliases(){var w=B.Fu.prototype
w.W3=w.aq
w.W4=w.al})();(function installTearOffs(){var w=a._instance_0u,v=a.installInstanceTearOff
var u
w(u=B.Ed.prototype,"gup","a2v",1)
v(u,"gmV",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect"],["dg","lp","k0","k5"],2,0,0)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(B.Me,A.fK)
u(A.af,[B.u7,B.JA])
u(A.dz,[B.aaw,B.am_,B.alZ])
v(B.vT,A.aY)
v(B.Fu,A.A)
v(B.Ed,B.Fu)
w(B.Fu,A.aQ)})()
A.bQ(b.typeUniverse,JSON.parse('{"Me":{"Q":[]},"u7":{"af":[],"f":[]},"vT":{"aY":[],"ax":[],"f":[]},"Ed":{"A":[],"aQ":["A"],"tL":[],"t":[],"R":[]},"JA":{"af":[],"f":[]}}'))
var y={b:"`null` encountered as case in a switch expression with a non-nullable enum type."}
var x={a:A.C("ar"),g:A.C("dN")};(function constants(){G.a1j=new B.Me(0,"manual")})()}
$__dart_deferred_initializers__["tonJb66zbVe4UghHBWHtcYekKok="] = $__dart_deferred_initializers__.current
