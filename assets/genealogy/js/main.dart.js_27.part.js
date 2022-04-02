self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={cz:function cz(){},a3_:function a3_(d,e,f){this.a=d
this.b=e
this.c=f},a30:function a30(d,e,f){this.a=d
this.b=e
this.c=f},a2X:function a2X(d,e){this.a=d
this.b=e},a2V:function a2V(d){this.a=d},a2W:function a2W(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},a2U:function a2U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},a2Y:function a2Y(d){this.a=d},a2Z:function a2Z(d,e){this.a=d
this.b=e},aik:function aik(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.e=!1
_.f=0
_.r=!1
_.x=e},
as4(d,e,f,g,h){var w=new B.JQ(h,g,A.a([],x.y),A.a([],x.b))
w.WK(d,e,f,g,h)
return w},
ez:function ez(d,e,f){this.a=d
this.b=e
this.c=f},
a31:function a31(){this.b=this.a=null},
IZ:function IZ(d){this.a=d},
my:function my(){},
a32:function a32(){},
a33:function a33(){},
JQ:function JQ(d,e,f,g){var _=this
_.z=_.y=null
_.Q=d
_.ch=e
_.cx=null
_.cy=$
_.db=null
_.dx=0
_.dy=null
_.fr=!1
_.a=f
_.d=_.c=_.b=null
_.e=!1
_.f=0
_.r=!1
_.x=g},
a5O:function a5O(d,e){this.a=d
this.b=e},
a5P:function a5P(d,e){this.a=d
this.b=e},
a5N:function a5N(d){this.a=d},
Qh:function Qh(){},
Qg:function Qg(){},
Y2(d,e,f,g){return new A.x(((C.d.bQ(g*255,1)&255)<<24|(d&255)<<16|(e&255)<<8|f&255)>>>0)}},A,C,J
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[39],B)
A=c[0]
C=c[2]
J=c[1]
B.cz.prototype={
K(d){var w=new B.a31()
this.YG(d,new B.a3_(this,d,w),new B.a30(this,d,w))
return w},
YG(d,e,f){var w,v=null,u={}
u.a=null
u.b=!1
w=new B.a2X(u,f)
$.a6.Og(new A.Fd(new B.a2V(w),v,v,v,v,v,v,v,v,v,v,v,v)).jO(new B.a2W(u,this,d,w,e))},
rY(d,e,f,g){var w
if(e.a!=null){$.i_.fI$.PS(0,f,new B.a2Y(e),g)
return}w=$.i_.fI$.PS(0,f,new B.a2Z(this,f),g)
if(w!=null)e.Fu(w)},
j(d){return"ImageConfiguration()"}}
B.aik.prototype={}
B.ez.prototype={
dK(d){return new B.ez(this.a.dK(0),this.b,this.c)},
gSc(){var w=this.a
return w.gb1(w)*w.gb2(w)*4},
k(d){this.a.k(0)},
j(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.j(0)+" @ "+A.km(this.b)+"x"},
gC(d){return A.ag(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
n(d,e){var w=this
if(e==null)return!1
if(J.a2(e)!==A.I(w))return!1
return e instanceof B.ez&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
B.a31.prototype={
Fu(d){var w
this.a=d
w=this.b
if(w!=null){this.b=null
C.b.ai(w,d.gBw(d))}},
a2(d,e){var w=this.a
if(w!=null)return w.a2(0,e)
w=this.b;(w==null?this.b=A.a([],x.y):w).push(e)},
G(d,e){var w,v=this.a
if(v!=null)return v.G(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.e(v[w],e)){v=this.b
v.toString
C.b.f6(v,w)
break}}}
B.IZ.prototype={
WG(d){++this.a.f},
k(d){var w=this.a;--w.f
w.uA()
this.a=null}}
B.my.prototype={
a2(d,e){var w,v,u,t,s,r,q,p=this
if(p.r)A.H(A.ab(y.a))
p.e=!0
p.a.push(e)
s=p.b
if(s!=null)try{s=s.dK(0)
e.a.$2(s,!0)}catch(r){w=A.ah(r)
v=A.aA(r)
p.Q9(A.bh("by a synchronously-called image listener"),w,v)}s=p.c
if(s!=null&&e.c!=null)try{q=e.c
q.toString
q.$2(s.a,s.b)}catch(w){u=A.ah(w)
t=A.aA(w)
if(!J.e(u,p.c.a))A.dm(new A.bE(u,t,"image resource service",A.bh("by a synchronously-called image error listener"),null,!1))}},
Dw(){if(this.r)A.H(A.ab(y.a));++this.f
return new B.IZ(this)},
G(d,e){var w,v,u,t,s,r=this
if(r.r)A.H(A.ab(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.e(w[v],e)){C.b.f6(w,v)
break}if(w.length===0){w=r.x
u=A.a(w.slice(0),A.av(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.T)(u),++s)u[s].$0()
C.b.sp(w,0)
r.uA()}},
uA(){var w,v=this
if(!v.e||v.r||v.a.length!==0||v.f!==0)return
w=v.b
if(w!=null)w.a.k(0)
v.b=null
v.r=!0},
a8u(d){if(this.r)A.H(A.ab(y.a))
this.x.push(d)},
Q4(d){if(this.r)A.H(A.ab(y.a))
C.b.A(this.x,d)},
Fz(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.r)A.H(A.ab(y.a))
t=m.b
if(t!=null)t.a.k(0)
m.b=d
t=m.a
if(t.length===0)return
s=A.aK(t,!0,x.x)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.aep(new B.ez(r.dK(0),q,p),!1)}catch(n){v=A.ah(n)
u=A.aA(n)
m.Q9(A.bh("by an image listener"),v,u)}}},
l8(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new A.bE(e,h,m,d,f,g)
s=this.a
r=x.C
q=A.aK(new A.fJ(new A.aL(s,new B.a32(),A.av(s).i("aL<1,~(v,bK?)?>")),r),!0,r.i("r.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=A.ah(o)
t=A.aA(o)
if(!J.e(u,e)){r=A.bh("when reporting an error to an image listener")
n=$.it()
if(n!=null)n.$1(new A.bE(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
A.dm(s)}},
Q9(d,e,f){return this.l8(d,e,null,!1,f)},
afH(d){var w,v,u,t
if(this.r)A.H(A.ab(y.a))
w=this.a
if(w.length!==0){v=x.F
u=A.aK(new A.fJ(new A.aL(w,new B.a33(),A.av(w).i("aL<1,~(ey)?>")),v),!0,v.i("r.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
B.JQ.prototype={
WK(d,e,f,g,h){var w=this
w.d=f
e.el(0,w.ga0e(),new B.a5O(w,g),x.v)
if(d!=null)w.y=d.DA(w.gQa(),new B.a5P(w,g))},
a0f(d){this.z=d
if(this.a.length!==0)this.n8()},
a03(d){var w,v,u,t,s=this,r="_shownTimestamp"
s.fr=!1
if(s.a.length===0)return
w=s.db
if(w!=null){w=A.b(s.cy,r)
v=d.a
w=w.a
u=s.db
w=v-w>=u.a
v=u}else{v=w
w=!0}if(w){w=s.cx
s.Id(new B.ez(w.gf3(w).dK(0),s.Q,s.d))
s.cy=d
w=s.cx
s.db=w.gCI(w)
w=s.cx
w.gf3(w).k(0)
s.cx=null
w=s.dx
v=s.z
t=C.f.ka(w,v.gmb(v))
w=s.z
if(w.grW(w)!==-1){w=s.z
w=t<=w.grW(w)}else w=!0
if(w)s.n8()
return}v.toString
w=A.b(s.cy,r)
s.dy=A.cd(new A.ay(C.d.aM((v.a-(d.a-w.a))*$.azK)),new B.a5N(s))},
n8(){var w=0,v=A.X(x.v),u,t=2,s,r=[],q=this,p,o,n,m,l
var $async$n8=A.S(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:m=q.cx
if(m!=null)m.gf3(m).k(0)
q.cx=null
t=4
w=7
return A.Z(q.z.ti(),$async$n8)
case 7:q.cx=e
t=2
w=6
break
case 4:t=3
l=s
p=A.ah(l)
o=A.aA(l)
q.l8(A.bh("resolving an image frame"),p,q.ch,!0,o)
w=1
break
w=6
break
case 3:w=2
break
case 6:m=q.z
if(m.gmb(m)===1){if(q.a.length===0){w=1
break}m=q.cx
q.Id(new B.ez(m.gf3(m).dK(0),q.Q,q.d))
m=q.cx
m.gf3(m).k(0)
q.cx=null
w=1
break}q.KI()
case 1:return A.V(u,v)
case 2:return A.U(s,v)}})
return A.W($async$n8,v)},
KI(){if(this.fr)return
this.fr=!0
$.bC.xM(this.ga02())},
Id(d){this.Fz(d);++this.dx},
a2(d,e){var w,v=this
if(v.a.length===0){w=v.z
if(w!=null)w=v.b==null||w.gmb(w)>1
else w=!1}else w=!1
if(w)v.n8()
v.G9(0,e)},
G(d,e){var w,v=this
v.Ga(0,e)
if(v.a.length===0){w=v.dy
if(w!=null)w.av(0)
v.dy=null}},
uA(){var w,v=this
v.T1()
if(v.r){w=v.y
if(w!=null)w.l3(null)
w=v.y
if(w!=null)w.av(0)
v.y=null}}}
B.Qh.prototype={}
B.Qg.prototype={}
var z=a.updateTypes(["~(e4)","~(ey)","~(eX)","~(ay)"])
B.a3_.prototype={
$2(d,e){this.a.rY(this.b,this.c,d,e)},
$S(){return A.K(this.a).i("~(cz.T,~(v,bK?))")}}
B.a30.prototype={
$3(d,e,f){return this.QT(d,e,f)},
QT(d,e,f){var w=0,v=A.X(x.v),u=this,t
var $async$$3=A.S(function(g,h){if(g===1)return A.U(h,v)
while(true)switch(w){case 0:w=2
return A.Z(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.Fu(new B.aik(A.a([],x.y),A.a([],x.b)))
t=t.a
t.toString
t.l8(A.bh("while resolving an image"),e,null,!0,f)
return A.V(null,v)}})
return A.W($async$$3,v)},
$S(){return A.K(this.a).i("ai<~>(cz.T?,v,bK?)")}}
B.a2X.prototype={
QS(d,e){var w=0,v=A.X(x.v),u,t=this,s
var $async$$2=A.S(function(f,g){if(f===1)return A.U(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}t.b.$3(s.a,d,e)
s.b=!0
case 1:return A.V(u,v)}})
return A.W($async$$2,v)},
$2(d,e){return this.QS(d,e)},
$S:411}
B.a2V.prototype={
$5(d,e,f,g,h){this.a.$2(g,h)},
$S:412}
B.a2W.prototype={
$0(){var w,v,u,t,s=this,r=null
try{r=s.b.l2(s.c)}catch(u){w=A.ah(u)
v=A.aA(u)
s.d.$2(w,v)
return}t=s.d
J.Wm(r,new B.a2U(s.a,s.b,s.e,t),x.v).hN(t)},
$S:0}
B.a2U.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=A.ah(u)
v=A.aA(u)
t.d.$2(w,v)}},
$S(){return A.K(this.b).i("ad(cz.T)")}}
B.a2Y.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:145}
B.a2Z.prototype={
$0(){return this.a.kZ(0,this.b,$.i_.gad4())},
$S:145}
B.a32.prototype={
$1(d){return d.c},
$S:414}
B.a33.prototype={
$1(d){return d.b},
$S:415}
B.a5O.prototype={
$2(d,e){this.a.l8(A.bh("resolving an image codec"),d,this.b,!0,e)},
$S:42}
B.a5P.prototype={
$2(d,e){this.a.l8(A.bh("loading an image"),d,this.b,!0,e)},
$S:42}
B.a5N.prototype={
$0(){this.a.KI()},
$S:0};(function aliases(){var w=B.my.prototype
w.G9=w.a2
w.Ga=w.G
w.T1=w.uA})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=B.my.prototype,"gBw","a2",0)
v(u,"gQa","afH",1)
v(u=B.JQ.prototype,"ga0e","a0f",2)
v(u,"ga02","a03",3)
w(u,"gBw","a2",0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.v,[B.cz,B.Qg,B.ez,B.Qh,B.IZ])
v(A.dz,[B.a3_,B.a2X,B.a5O,B.a5P])
v(A.bw,[B.a30,B.a2V,B.a2U,B.a32,B.a33])
v(A.cN,[B.a2W,B.a2Y,B.a2Z,B.a5N])
u(B.my,B.Qg)
v(B.my,[B.aik,B.JQ])
u(B.a31,B.Qh)
w(B.Qh,A.as)
w(B.Qg,A.as)})()
A.bQ(b.typeUniverse,JSON.parse("{}"))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x={x:A.C("e4"),y:A.C("p<e4>"),b:A.C("p<~()>"),C:A.C("fJ<~(v,bK?)>"),F:A.C("fJ<~(ey)>"),v:A.C("~")}}
$__dart_deferred_initializers__["5UCtHwQvnK9mIFms6pqyVJqehuI="] = $__dart_deferred_initializers__.current
