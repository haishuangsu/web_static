self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={MJ:function MJ(d,e){this.a=d
this.b=e},
lr(d){return new B.uj(!0,d,null)},
uj:function uj(d,e,f){this.r=d
this.y=e
this.a=f},
aba:function aba(d,e,f){this.a=d
this.b=e
this.c=f},
wg:function wg(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Ey:function Ey(d,e,f,g,h,i){var _=this
_.C=d
_.O=e
_.aw=f
_.aJ=g
_.u$=h
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
amM:function amM(d,e){this.a=d
this.b=e},
amL:function amL(d,e){this.a=d
this.b=e},
FQ:function FQ(){},
aOD(d,e,f){var w,v
switch(e.a){case 0:w=d.X(x.g)
w.toString
v=E.arE(w.f)
return v
case 1:return C.aJ
default:throw A.c(A.l(y.b))}}},C,A,D,E,F
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[26],B)
C=c[2]
A=c[0]
D=c[30]
E=c[28]
F=c[52]
B.MJ.prototype={
j(d){return"ScrollViewKeyboardDismissBehavior."+this.b}}
B.uj.prototype={
A(d,e){var w,v,u,t=null,s={},r=B.aOD(e,C.bs,!1)
s.a=this.y
w=this.r
v=w?A.lf(e):t
u=D.atn(r,v,C.a6,!1,t,t,t,t,new B.aba(s,this,r))
return w&&v!=null?new A.tP(t,u,t):u}}
B.wg.prototype={
aS(d){var w=new B.Ey(this.e,this.f,this.r,A.az(),null,A.az())
w.gaC()
w.fr=!0
w.sbg(null)
return w},
aW(d,e){var w
e.sdz(this.e)
e.sbI(0,this.f)
w=this.r
if(w!==e.aw){e.aw=w
e.aD()
e.aq()}}}
B.Ey.prototype={
sdz(d){if(d===this.C)return
this.C=d
this.a_()},
sbI(d,e){var w=this,v=w.O
if(e==v)return
if(w.b!=null)v.G(0,w.gus())
w.O=e
if(w.b!=null)e.a3(0,w.gus())
w.a_()},
a2f(){this.aD()
this.aq()},
eu(d){if(!(d.e instanceof A.j0))d.e=new A.j0()},
ar(d){this.VO(d)
this.O.a3(0,this.gus())},
ak(d){this.O.G(0,this.gus())
this.VP(0)},
gaC(){return!0},
ga6B(){switch(A.bz(this.C).a){case 0:return this.rx.a
case 1:return this.rx.b
default:throw A.c(A.l(y.b))}},
ga3a(){var w=this,v=w.u$
if(v==null)return 0
switch(A.bz(w.C).a){case 0:return Math.max(0,v.rx.a-w.rx.a)
case 1:return Math.max(0,v.rx.b-w.rx.b)
default:throw A.c(A.l(y.b))}},
It(d){switch(A.bz(this.C).a){case 0:return new A.av(0,1/0,d.c,d.d)
case 1:return new A.av(d.a,d.b,0,1/0)
default:throw A.c(A.l(y.b))}},
cd(d){var w=this.u$
if(w==null)return new A.M(C.f.U(0,d.a,d.b),C.f.U(0,d.c,d.d))
return d.bR(w.i6(this.It(d)))},
bK(){var w=this,v=x.a.a(A.t.prototype.ga8.call(w)),u=w.u$
if(u==null)w.rx=new A.M(C.f.U(0,v.a,v.b),C.f.U(0,v.c,v.d))
else{u.cv(0,w.It(v),!0)
u=w.u$.rx
u.toString
w.rx=v.bR(u)}w.O.lW(w.ga6B())
w.O.lV(0,w.ga3a())},
pU(d){var w=this
switch(w.C.a){case 0:return new A.o(0,d-w.u$.rx.b+w.rx.b)
case 2:return new A.o(0,-d)
case 3:return new A.o(d-w.u$.rx.a+w.rx.a,0)
case 1:return new A.o(-d,0)
default:throw A.c(A.l(y.b))}},
KO(d){var w,v,u,t,s=d.a
if(!(s<0)){w=d.b
if(!(w<0)){v=this.u$.rx
u=v.a
t=this.rx
s=s+u>t.a||w+v.b>t.b}else s=!0}else s=!0
return s},
aH(d,e){var w,v,u,t,s,r=this
if(r.u$!=null){w=r.O.cx
w.toString
v=r.pU(w)
w=new B.amM(r,v)
u=r.KO(v)&&r.aw!==C.l
t=r.aJ
if(u){u=A.b(r.fr,"_needsCompositing")
s=r.rx
t.saX(0,d.jS(u,e,new A.w(0,0,0+s.a,0+s.b),w,r.aw,t.a))}else{t.saX(0,null)
w.$2(d,e)}}},
l(d){this.aJ.saX(0,null)
this.ki(0)},
dw(d,e){var w,v=this.O.cx
v.toString
w=this.pU(v)
e.as(0,w.a,w.b)},
iC(d){var w,v=this
if(d!=null){w=v.O.cx
w.toString
w=v.KO(v.pU(w))}else w=!1
if(w){w=v.rx
return new A.w(0,0,0+w.a,0+w.b)}return null},
cH(d,e){var w,v=this
if(v.u$!=null){w=v.O.cx
w.toString
return d.lS(new B.amL(v,e),v.pU(w),e)}return!1},
k9(d,e,f){var w,v,u,t,s,r,q,p=this
if(f==null)f=d.gi0()
if(!(d instanceof A.A)){w=p.O.cx
w.toString
return new D.ln(w,f)}v=A.mU(d.dt(0,p.u$),f)
w=p.u$.rx
w.toString
switch(p.C.a){case 0:u=p.rx.b
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
return new D.ln(q,v.cS(p.pU(q)))},
dj(d,e,f,g){var w=this
if(!w.O.f.gjj())return w.po(d,e,f,g)
w.po(d,null,f,E.ayn(d,e,f,w.O,g,w))},
lz(){return this.dj(C.aP,null,C.y,null)},
kf(d){return this.dj(C.aP,null,C.y,d)},
kg(d,e,f){return this.dj(d,null,e,f)},
Cj(d){var w
switch(A.bz(this.C).a){case 1:w=this.rx
return new A.w(0,-250,0+w.a,0+w.b+250)
case 0:w=this.rx
return new A.w(-250,0,0+w.a+250,0+w.b)
default:throw A.c(A.l(y.b))}},
$itY:1}
B.FQ.prototype={
ar(d){var w
this.du(d)
w=this.u$
if(w!=null)w.ar(d)},
ak(d){var w
this.da(0)
w=this.u$
if(w!=null)w.ak(0)}}
var z=a.updateTypes(["wg(a0,eL)","~()","~({curve:dK,descendant:t?,duration:aE,rect:w?})"])
B.aba.prototype={
$2(d,e){return new B.wg(this.c,e,C.z,this.a.a,null)},
$S:z+0}
B.amM.prototype={
$2(d,e){var w=this.a.u$
w.toString
d.dH(w,e.P(0,this.b))},
$S:14}
B.amL.prototype={
$2(d,e){return this.a.u$.bY(d,e)},
$S:15};(function aliases(){var w=B.FQ.prototype
w.VO=w.ar
w.VP=w.ak})();(function installTearOffs(){var w=a._instance_0u,v=a.installInstanceTearOff
var u
w(u=B.Ey.prototype,"gus","a2f",1)
v(u,"gn1",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect"],["dj","lz","kf","kg"],2,0,0)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(B.MJ,A.is)
v(B.uj,A.af)
u(A.fU,[B.aba,B.amM,B.amL])
v(B.wg,A.b_)
v(B.FQ,A.A)
v(B.Ey,B.FQ)
w(B.FQ,A.aS)})()
A.cQ(b.typeUniverse,JSON.parse('{"MJ":{"O":[]},"uj":{"af":[],"f":[]},"wg":{"b_":[],"aA":[],"f":[]},"Ey":{"A":[],"aS":["A"],"tY":[],"t":[],"X":[]}}'))
var y={b:"`null` encountered as case in a switch expression with a non-nullable enum type."}
var x={a:A.J("av"),g:A.J("dM")};(function constants(){F.a1C=new B.MJ(0,"manual")})()}
$__dart_deferred_initializers__["c4vBFM1djmeFlk8/TeFesEkWfv0="] = $__dart_deferred_initializers__.current
