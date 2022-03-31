self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={a8I:function a8I(d,e){this.a=d
this.b=e},
mT(d){return new B.tn(!0,d,null)},
tn:function tn(d,e,f){this.r=d
this.y=e
this.a=f},
a9G:function a9G(d,e,f){this.a=d
this.b=e
this.c=f},
uZ:function uZ(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.r=f
_.c=g
_.a=h},
D6:function D6(d,e,f,g,h,i){var _=this
_.F=d
_.q=e
_.O=f
_.al=g
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
akU:function akU(d,e){this.a=d
this.b=e},
akT:function akT(d,e){this.a=d
this.b=e},
Ef:function Ef(){},
xZ(d,e,f,g){return new B.Im(f,e,g,d,null)},
Im:function Im(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.a=h},
aM5(d,e,f){var w,v
switch(e.a){case 0:w=d.W(x.g)
w.toString
v=E.apr(w.f)
return v
case 1:return C.ax
default:throw A.c(A.l(y.b))}}},C,A,D,E,F,G
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[24],B)
C=c[2]
A=c[0]
D=c[35]
E=c[27]
F=c[34]
G=c[59]
B.a8I.prototype={
j(d){return"ScrollViewKeyboardDismissBehavior."+this.b}}
B.tn.prototype={
A(d,e){var w,v,u,t=null,s={},r=B.aM5(e,C.bc,!1)
s.a=this.y
w=this.r
v=w?A.kW(e):t
u=D.arC(r,v,C.a1,!1,t,t,t,t,new B.a9G(s,this,r))
return w&&v!=null?new A.rT(t,u,t):u}}
B.uZ.prototype={
aU(d){var w=new B.D6(this.e,this.f,this.r,A.at(),null,A.at())
w.gaB()
w.fr=!0
w.sbj(null)
return w},
b_(d,e){var w
e.sdv(this.e)
e.sbN(0,this.f)
w=this.r
if(w!==e.O){e.O=w
e.aC()
e.ao()}}}
B.D6.prototype={
sdv(d){if(d===this.F)return
this.F=d
this.a1()},
sbN(d,e){var w=this,v=w.q
if(e==v)return
if(w.b!=null)v.S(0,w.gu5())
w.q=e
if(w.b!=null)e.a2(0,w.gu5())
w.a1()},
a20(){this.aC()
this.ao()},
ej(d){if(!(d.e instanceof A.iM))d.e=new A.iM()},
ak(d){this.VF(d)
this.q.a2(0,this.gu5())},
ag(d){this.q.S(0,this.gu5())
this.VG(0)},
gaB(){return!0},
ga6f(){switch(A.bz(this.F).a){case 0:return this.rx.a
case 1:return this.rx.b
default:throw A.c(A.l(y.b))}},
ga2T(){var w=this,v=w.q$
if(v==null)return 0
switch(A.bz(w.F).a){case 0:return Math.max(0,v.rx.a-w.rx.a)
case 1:return Math.max(0,v.rx.b-w.rx.b)
default:throw A.c(A.l(y.b))}},
Ih(d){switch(A.bz(this.F).a){case 0:return new A.am(0,1/0,d.c,d.d)
case 1:return new A.am(d.a,d.b,0,1/0)
default:throw A.c(A.l(y.b))}},
cg(d){var w=this.q$
if(w==null)return new A.H(C.f.U(0,d.a,d.b),C.f.U(0,d.c,d.d))
return d.bV(w.hM(this.Ih(d)))},
bQ(){var w=this,v=x.a.a(A.t.prototype.ga5.call(w)),u=w.q$
if(u==null)w.rx=new A.H(C.f.U(0,v.a,v.b),C.f.U(0,v.c,v.d))
else{u.cC(0,w.Ih(v),!0)
u=w.q$.rx
u.toString
w.rx=v.bV(u)}w.q.lu(w.ga6f())
w.q.lt(0,w.ga2T())},
pB(d){var w=this
switch(w.F.a){case 0:return new A.o(0,d-w.q$.rx.b+w.rx.b)
case 2:return new A.o(0,-d)
case 3:return new A.o(d-w.q$.rx.a+w.rx.a,0)
case 1:return new A.o(-d,0)
default:throw A.c(A.l(y.b))}},
KE(d){var w,v,u,t,s=d.a
if(!(s<0)){w=d.b
if(!(w<0)){v=this.q$.rx
u=v.a
t=this.rx
s=s+u>t.a||w+v.b>t.b}else s=!0}else s=!0
return s},
aE(d,e){var w,v,u,t,s,r=this
if(r.q$!=null){w=r.q.cx
w.toString
v=r.pB(w)
w=new B.akU(r,v)
u=r.KE(v)&&r.O!==C.l
t=r.al
if(u){u=A.b(r.fr,"_needsCompositing")
s=r.rx
t.saZ(0,d.ju(u,e,new A.u(0,0,0+s.a,0+s.b),w,r.O,t.a))}else{t.saZ(0,null)
w.$2(d,e)}}},
k(d){this.al.saZ(0,null)
this.jQ(0)},
du(d,e){var w,v=this.q.cx
v.toString
w=this.pB(v)
e.aq(0,w.a,w.b)},
ie(d){var w,v=this
if(d!=null){w=v.q.cx
w.toString
w=v.KE(v.pB(w))}else w=!1
if(w){w=v.rx
return new A.u(0,0,0+w.a,0+w.b)}return null},
cJ(d,e){var w,v=this
if(v.q$!=null){w=v.q.cx
w.toString
return d.lq(new B.akT(v,e),v.pB(w),e)}return!1},
jH(d,e,f){var w,v,u,t,s,r,q,p=this
if(f==null)f=d.ghG()
if(!(d instanceof A.A)){w=p.q.cx
w.toString
return new D.l4(w,f)}v=A.mt(d.dr(0,p.q$),f)
w=p.q$.rx
w.toString
switch(p.F.a){case 0:u=p.rx.b
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
return new D.l4(q,v.cU(p.pB(q)))},
dg(d,e,f,g){var w=this
if(!w.q.f.giY())return w.p5(d,e,f,g)
w.p5(d,null,f,E.awt(d,e,f,w.q,g,w))},
l4(){return this.dg(C.aE,null,C.E,null)},
jO(d){return this.dg(C.aE,null,C.E,d)},
jP(d,e,f){return this.dg(d,null,e,f)},
Cg(d){var w
switch(A.bz(this.F).a){case 1:w=this.rx
return new A.u(0,-250,0+w.a,0+w.b+250)
case 0:w=this.rx
return new A.u(-250,0,0+w.a+250,0+w.b)
default:throw A.c(A.l(y.b))}},
$it2:1}
B.Ef.prototype={
ak(d){var w
this.dt(d)
w=this.q$
if(w!=null)w.ak(d)},
ag(d){var w
this.d8(0)
w=this.q$
if(w!=null)w.ag(0)}}
B.Im.prototype={
A(d,e){var w=this,v=null,u=w.r
u=u!=null?new A.dx(A.fF(u),C.x):v
return F.aqr(w.d,w.c,F.auQ(v,v,v,v,v,v,v,v,v,v,v,w.e,v,u,v,v,v,v,v))}}
var z=a.updateTypes(["uZ(Y,eE)","~()","~({curve:dF,descendant:t?,duration:aw,rect:u?})"])
B.a9G.prototype={
$2(d,e){return new B.uZ(this.c,e,C.z,this.a.a,null)},
$S:z+0}
B.akU.prototype={
$2(d,e){var w=this.a.q$
w.toString
d.dE(w,e.L(0,this.b))},
$S:13}
B.akT.prototype={
$2(d,e){return this.a.q$.c3(d,e)},
$S:14};(function aliases(){var w=B.Ef.prototype
w.VF=w.ak
w.VG=w.ag})();(function installTearOffs(){var w=a._instance_0u,v=a.installInstanceTearOff
var u
w(u=B.D6.prototype,"gu5","a20",1)
v(u,"gmA",0,0,null,["$4$curve$descendant$duration$rect","$0","$1$rect","$3$curve$duration$rect"],["dg","l4","jO","jP"],2,0,0)})();(function inheritance(){var w=a.mixinHard,v=a.inherit,u=a.inheritMany
v(B.a8I,A.h6)
u(A.ab,[B.tn,B.Im])
u(A.dM,[B.a9G,B.akU,B.akT])
v(B.uZ,A.b_)
v(B.Ef,A.A)
v(B.D6,B.Ef)
w(B.Ef,A.aO)})()
A.ce(b.typeUniverse,JSON.parse('{"tn":{"ab":[],"f":[]},"uZ":{"b_":[],"ay":[],"f":[]},"D6":{"A":[],"aO":["A"],"t2":[],"t":[],"N":[]},"Im":{"ab":[],"f":[]}}'))
var y={b:"`null` encountered as case in a switch expression with a non-nullable enum type."}
var x={a:A.G("am"),g:A.G("dp")};(function constants(){G.a0v=new B.a8I(0,"manual")})()}
$__dart_deferred_initializers__["lDazzJVTtfdu8VJ0rURih008PsE="] = $__dart_deferred_initializers__.current
