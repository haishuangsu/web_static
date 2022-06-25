self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Nf:function Nf(d,e){this.a=d
this.b=e},
lI(d){return new A.uO(!0,d,null)},
uO:function uO(d,e,f){this.r=d
this.x=e
this.a=f},
ac5:function ac5(d,e,f){this.a=d
this.b=e
this.c=f},
wJ:function wJ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
TY:function TY(d,e){var _=this
_.d=_.c=_.b=_.a=_.cx=_.ch=_.p3=null
_.e=$
_.f=d
_.r=null
_.w=e
_.z=_.y=null
_.Q=!1
_.as=!0
_.ay=_.ax=_.at=!1},
F6:function F6(d,e,f,g,h,i){var _=this
_.v=d
_.G=e
_.ai=f
_.aj=g
_.D$=h
_.go=_.fy=null
_.id=!1
_.k2=_.k1=null
_.k3=0
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=i
_.ch=!1
_.CW=$
_.cx=!0
_.cy=null
_.db=!0
_.dx=null
_.a=0
_.c=_.b=null},
anU:function anU(d,e){this.a=d
this.b=e},
anT:function anT(d,e){this.a=d
this.b=e},
Gt:function Gt(){},
Wn:function Wn(){},
Wo:function Wo(){},
aPA(d,e,f){var w,v
switch(e.a){case 0:w=d.U(x.g)
w.toString
v=E.asI(w.f)
return v
case 1:return C.aL
default:throw B.c(B.m(y.b))}}},C,B,D,E,F
A=a.updateHolder(c[26],A)
C=c[2]
B=c[0]
D=c[30]
E=c[28]
F=c[52]
A.Nf.prototype={
j(d){return"ScrollViewKeyboardDismissBehavior."+this.b}}
A.uO.prototype={
A(d,e){var w,v,u,t=null,s={},r=A.aPA(e,C.bs,!1)
s.a=this.x
w=this.r
v=w?B.ly(e):t
u=D.aut(r,v,C.a3,!1,t,t,t,t,new A.ac5(s,this,r))
return w&&v!=null?new B.ug(t,u,t):u}}
A.wJ.prototype={
aT(d){var w=new A.F6(this.e,this.f,this.r,B.aB(),null,B.aB())
w.gaG()
w.CW=!0
w.sbe(null)
return w},
aU(d,e){var w
e.sdF(this.e)
e.sbE(0,this.f)
w=this.r
if(w!==e.ai){e.ai=w
e.aA()
e.al()}},
bP(d){return new A.TY(this,C.a6)}}
A.TY.prototype={}
A.F6.prototype={
sdF(d){if(d===this.v)return
this.v=d
this.X()},
sbE(d,e){var w=this,v=w.G
if(e==v)return
if(w.b!=null)v.H(0,w.guP())
w.G=e
if(w.b!=null)e.Z(0,w.guP())
w.X()},
a2W(){this.aA()
this.al()},
eE(d){if(!(d.e instanceof B.cA))d.e=new B.cA()},
ao(d){this.Wf(d)
this.G.Z(0,this.guP())},
af(d){this.G.H(0,this.guP())
this.Wg(0)},
gaG(){return!0},
ga7w(){switch(B.bE(this.v).a){case 0:return this.k1.a
case 1:return this.k1.b
default:throw B.c(B.m(y.b))}},
ga3V(){var w=this,v=w.D$
if(v==null)return 0
switch(B.bE(w.v).a){case 0:return Math.max(0,v.k1.a-w.k1.a)
case 1:return Math.max(0,v.k1.b-w.k1.b)
default:throw B.c(B.m(y.b))}},
IU(d){switch(B.bE(this.v).a){case 0:return new B.ay(0,1/0,d.c,d.d)
case 1:return new B.ay(d.a,d.b,0,1/0)
default:throw B.c(B.m(y.b))}},
c5(d){var w=this.D$
if(w==null)return new B.P(C.h.T(0,d.a,d.b),C.h.T(0,d.c,d.d))
return d.bM(w.ih(this.IU(d)))},
bH(){var w=this,v=x.a.a(B.v.prototype.ga4.call(w)),u=w.D$
if(u==null)w.k1=new B.P(C.h.T(0,v.a,v.b),C.h.T(0,v.c,v.d))
else{u.cq(0,w.IU(v),!0)
u=w.D$.k1
u.toString
w.k1=v.bM(u)}w.G.lZ(w.ga7w())
w.G.kI(0,w.ga3V())},
q1(d){var w=this
switch(w.v.a){case 0:return new B.n(0,d-w.D$.k1.b+w.k1.b)
case 2:return new B.n(0,-d)
case 3:return new B.n(d-w.D$.k1.a+w.k1.a,0)
case 1:return new B.n(-d,0)
default:throw B.c(B.m(y.b))}},
L8(d){var w,v,u,t,s=d.a
if(!(s<0)){w=d.b
if(!(w<0)){v=this.D$.k1
u=v.a
t=this.k1
s=s+u>t.a||w+v.b>t.b}else s=!0}else s=!0
return s},
aE(d,e){var w,v,u,t,s,r=this
if(r.D$!=null){w=r.G.as
w.toString
v=r.q1(w)
w=new A.anU(r,v)
u=r.L8(v)&&r.ai!==C.m
t=r.aj
if(u){u=B.b(r.CW,"_needsCompositing")
s=r.k1
t.saS(0,d.jX(u,e,new B.u(0,0,0+s.a,0+s.b),w,r.ai,t.a))}else{t.saS(0,null)
w.$2(d,e)}}},
l(d){this.aj.saS(0,null)
this.kg(0)},
dE(d,e){var w,v=this.G.as
v.toString
w=this.q1(v)
e.ap(0,w.a,w.b)},
iH(d){var w,v=this
if(d!=null){w=v.G.as
w.toString
w=v.L8(v.q1(w))}else w=!1
if(w){w=v.k1
return new B.u(0,0,0+w.a,0+w.b)}return null},
cC(d,e){var w,v=this
if(v.D$!=null){w=v.G.as
w.toString
return d.lV(new A.anT(v,e),v.q1(w),e)}return!1},
ka(d,e,f){var w,v,u,t,s,r,q,p=this
if(f==null)f=d.gi9()
if(!(d instanceof B.B)){w=p.G.as
w.toString
return new D.lF(w,f)}v=B.lj(d.dk(0,p.D$),f)
w=p.D$.k1
w.toString
switch(p.v.a){case 0:u=p.k1.b
t=v.d
s=w.b-t
r=t-v.b
break
case 1:u=p.k1.a
s=v.a
r=v.c-s
break
case 2:u=p.k1.b
s=v.b
r=v.d-s
break
case 3:u=p.k1.a
t=v.c
s=w.a-t
r=t-v.a
break
default:throw B.c(B.m(y.b))}q=s-(u-r)*e
return new D.lF(q,v.cJ(p.q1(q)))},
cK(d,e,f,g){var w=this
if(!w.G.f.gju())return w.pv(d,e,f,g)
w.pv(d,null,f,E.azl(d,e,f,w.G,g,w))},
lD(){return this.cK(C.aw,null,C.x,null)},
jb(d){return this.cK(C.aw,null,C.x,d)},
ke(d,e,f){return this.cK(d,null,e,f)},
jc(d,e){return this.cK(C.aw,d,C.x,e)},
CM(d){var w
switch(B.bE(this.v).a){case 1:w=this.k1
return new B.u(0,-250,0+w.a,0+w.b+250)
case 0:w=this.k1
return new B.u(-250,0,0+w.a+250,0+w.b)
default:throw B.c(B.m(y.b))}},
$iuq:1}
A.Gt.prototype={
ao(d){var w
this.dB(d)
w=this.D$
if(w!=null)w.ao(d)},
af(d){var w
this.d6(0)
w=this.D$
if(w!=null)w.af(0)}}
A.Wn.prototype={}
A.Wo.prototype={}
var z=a.updateTypes(["wJ(a3,eX)","~()","~({curve:dP,descendant:v?,duration:aQ,rect:u?})"])
A.ac5.prototype={
$2(d,e){return new A.wJ(this.c,e,C.B,this.a.a,null)},
$S:z+0}
A.anU.prototype={
$2(d,e){var w=this.a.D$
w.toString
d.dj(w,e.N(0,this.b))},
$S:13}
A.anT.prototype={
$2(d,e){return this.a.D$.bL(d,e)},
$S:15};(function aliases(){var w=A.Gt.prototype
w.Wf=w.ao
w.Wg=w.af})();(function installTearOffs(){var w=a._instance_0u,v=a.installInstanceTearOff
var u
w(u=A.F6.prototype,"guP","a2W",1)
v(u,"gmV",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect","$2$descendant$rect"],["cK","lD","jb","ke","jc"],2,0,0)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inherit,t=a.inheritMany
u(A.Nf,B.iH)
u(A.uO,B.ag)
t(B.hc,[A.ac5,A.anU,A.anT])
u(A.wJ,B.b2)
u(A.Wn,B.uN)
u(A.Wo,A.Wn)
u(A.TY,A.Wo)
u(A.Gt,B.B)
u(A.F6,A.Gt)
w(A.Gt,B.aX)
v(A.Wn,B.Am)
v(A.Wo,E.OH)})()
B.cN(b.typeUniverse,JSON.parse('{"Nf":{"X":[]},"uO":{"ag":[],"f":[]},"wJ":{"b2":[],"aC":[],"f":[]},"TY":{"bb":[],"aL":[],"a3":[]},"F6":{"B":[],"aX":["B"],"uq":[],"v":[],"a_":[],"ar":[]}}'))
var y={b:"`null` encountered as case in a switch expression with a non-nullable enum type."}
var x={a:B.L("ay"),g:B.L("dR")};(function constants(){F.a1o=new A.Nf(0,"manual")})()}
$__dart_deferred_initializers__["hOJ3wjnvhDTYaJ0w5uLJe6/D1+s="] = $__dart_deferred_initializers__.current
