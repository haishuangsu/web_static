self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={Mq:function Mq(d,e){this.a=d
this.b=e},
lp(d){return new B.ue(!0,d,null)},
ue:function ue(d,e,f){this.r=d
this.y=e
this.a=f},
aaQ:function aaQ(d,e,f){this.a=d
this.b=e
this.c=f},
w_:function w_(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
Eh:function Eh(d,e,f,g,h,i){var _=this
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
amp:function amp(d,e){this.a=d
this.b=e},
amo:function amo(d,e){this.a=d
this.b=e},
FA:function FA(){},
aNX(d,e,f){var w,v
switch(e.a){case 0:w=d.X(x.g)
w.toString
v=E.ar3(w.f)
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
B.Mq.prototype={
j(d){return"ScrollViewKeyboardDismissBehavior."+this.b}}
B.ue.prototype={
A(d,e){var w,v,u,t=null,s={},r=B.aNX(e,C.bs,!1)
s.a=this.y
w=this.r
v=w?A.ld(e):t
u=D.asN(r,v,C.a6,!1,t,t,t,t,new B.aaQ(s,this,r))
return w&&v!=null?new A.tK(t,u,t):u}}
B.w_.prototype={
aS(d){var w=new B.Eh(this.e,this.f,this.r,A.ax(),null,A.ax())
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
B.Eh.prototype={
sdz(d){if(d===this.C)return
this.C=d
this.a_()},
sbI(d,e){var w=this,v=w.O
if(e==v)return
if(w.b!=null)v.G(0,w.gur())
w.O=e
if(w.b!=null)e.a3(0,w.gur())
w.a_()},
a2e(){this.aD()
this.aq()},
es(d){if(!(d.e instanceof A.j_))d.e=new A.j_()},
ar(d){this.VN(d)
this.O.a3(0,this.gur())},
ak(d){this.O.G(0,this.gur())
this.VO(0)},
gaC(){return!0},
ga6A(){switch(A.bA(this.C).a){case 0:return this.rx.a
case 1:return this.rx.b
default:throw A.c(A.l(y.b))}},
ga39(){var w=this,v=w.u$
if(v==null)return 0
switch(A.bA(w.C).a){case 0:return Math.max(0,v.rx.a-w.rx.a)
case 1:return Math.max(0,v.rx.b-w.rx.b)
default:throw A.c(A.l(y.b))}},
Is(d){switch(A.bA(this.C).a){case 0:return new A.at(0,1/0,d.c,d.d)
case 1:return new A.at(d.a,d.b,0,1/0)
default:throw A.c(A.l(y.b))}},
cc(d){var w=this.u$
if(w==null)return new A.M(C.f.U(0,d.a,d.b),C.f.U(0,d.c,d.d))
return d.bR(w.i5(this.Is(d)))},
bJ(){var w=this,v=x.a.a(A.t.prototype.ga8.call(w)),u=w.u$
if(u==null)w.rx=new A.M(C.f.U(0,v.a,v.b),C.f.U(0,v.c,v.d))
else{u.cv(0,w.Is(v),!0)
u=w.u$.rx
u.toString
w.rx=v.bR(u)}w.O.lU(w.ga6A())
w.O.lT(0,w.ga39())},
pS(d){var w=this
switch(w.C.a){case 0:return new A.o(0,d-w.u$.rx.b+w.rx.b)
case 2:return new A.o(0,-d)
case 3:return new A.o(d-w.u$.rx.a+w.rx.a,0)
case 1:return new A.o(-d,0)
default:throw A.c(A.l(y.b))}},
KN(d){var w,v,u,t,s=d.a
if(!(s<0)){w=d.b
if(!(w<0)){v=this.u$.rx
u=v.a
t=this.rx
s=s+u>t.a||w+v.b>t.b}else s=!0}else s=!0
return s},
aH(d,e){var w,v,u,t,s,r=this
if(r.u$!=null){w=r.O.cx
w.toString
v=r.pS(w)
w=new B.amp(r,v)
u=r.KN(v)&&r.aw!==C.l
t=r.aJ
if(u){u=A.b(r.fr,"_needsCompositing")
s=r.rx
t.saX(0,d.jR(u,e,new A.w(0,0,0+s.a,0+s.b),w,r.aw,t.a))}else{t.saX(0,null)
w.$2(d,e)}}},
l(d){this.aJ.saX(0,null)
this.kh(0)},
dw(d,e){var w,v=this.O.cx
v.toString
w=this.pS(v)
e.as(0,w.a,w.b)},
iB(d){var w,v=this
if(d!=null){w=v.O.cx
w.toString
w=v.KN(v.pS(w))}else w=!1
if(w){w=v.rx
return new A.w(0,0,0+w.a,0+w.b)}return null},
cH(d,e){var w,v=this
if(v.u$!=null){w=v.O.cx
w.toString
return d.lQ(new B.amo(v,e),v.pS(w),e)}return!1},
k8(d,e,f){var w,v,u,t,s,r,q,p=this
if(f==null)f=d.gi_()
if(!(d instanceof A.A)){w=p.O.cx
w.toString
return new D.ll(w,f)}v=A.mS(d.dt(0,p.u$),f)
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
return new D.ll(q,v.cS(p.pS(q)))},
dj(d,e,f,g){var w=this
if(!w.O.f.gji())return w.pn(d,e,f,g)
w.pn(d,null,f,E.axO(d,e,f,w.O,g,w))},
lx(){return this.dj(C.aP,null,C.y,null)},
ke(d){return this.dj(C.aP,null,C.y,d)},
kf(d,e,f){return this.dj(d,null,e,f)},
Ci(d){var w
switch(A.bA(this.C).a){case 1:w=this.rx
return new A.w(0,-250,0+w.a,0+w.b+250)
case 0:w=this.rx
return new A.w(-250,0,0+w.a+250,0+w.b)
default:throw A.c(A.l(y.b))}},
$itT:1}
B.FA.prototype={
ar(d){var w
this.du(d)
w=this.u$
if(w!=null)w.ar(d)},
ak(d){var w
this.da(0)
w=this.u$
if(w!=null)w.ak(0)}}
var z=a.updateTypes(["w_(a0,eK)","~()","~({curve:dK,descendant:t?,duration:aE,rect:w?})"])
B.aaQ.prototype={
$2(d,e){return new B.w_(this.c,e,C.z,this.a.a,null)},
$S:z+0}
B.amp.prototype={
$2(d,e){var w=this.a.u$
w.toString
d.dH(w,e.P(0,this.b))},
$S:14}
B.amo.prototype={
$2(d,e){return this.a.u$.bY(d,e)},
$S:15};(function aliases(){var w=B.FA.prototype
w.VN=w.ar
w.VO=w.ak})();(function installTearOffs(){var w=a._instance_0u,v=a.installInstanceTearOff
var u
w(u=B.Eh.prototype,"gur","a2e",1)
v(u,"gmY",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect"],["dj","lx","ke","kf"],2,0,0)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(B.Mq,A.iq)
v(B.ue,A.af)
u(A.fS,[B.aaQ,B.amp,B.amo])
v(B.w_,A.b_)
v(B.FA,A.A)
v(B.Eh,B.FA)
w(B.FA,A.aR)})()
A.cQ(b.typeUniverse,JSON.parse('{"Mq":{"Q":[]},"ue":{"af":[],"f":[]},"w_":{"b_":[],"ay":[],"f":[]},"Eh":{"A":[],"aR":["A"],"tT":[],"t":[],"S":[]}}'))
var y={b:"`null` encountered as case in a switch expression with a non-nullable enum type."}
var x={a:A.L("at"),g:A.L("dM")};(function constants(){F.a1m=new B.Mq(0,"manual")})()}
$__dart_deferred_initializers__["EXSVdopGtFXSppMGCGMvNCtuc30="] = $__dart_deferred_initializers__.current
