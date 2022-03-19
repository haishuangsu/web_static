self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={cQ:function cQ(){},a2a:function a2a(d,e,f){this.a=d
this.b=e
this.c=f},a2b:function a2b(d,e,f){this.a=d
this.b=e
this.c=f},a27:function a27(d,e){this.a=d
this.b=e},a25:function a25(d){this.a=d},a26:function a26(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},a24:function a24(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},a28:function a28(d){this.a=d},a29:function a29(d,e){this.a=d
this.b=e},ahh:function ahh(d,e){var _=this
_.a=d
_.d=_.c=_.b=null
_.e=!1
_.f=0
_.r=!1
_.x=e},
ark(d,e,f,g,h){var w=new B.ID(h,g,A.a([],x.y),A.a([],x.b))
w.Wm(d,e,f,g,h)
return w},
ev:function ev(d,e,f){this.a=d
this.b=e
this.c=f},
a2d:function a2d(){this.b=this.a=null},
HO:function HO(d){this.a=d},
mf:function mf(){},
a2e:function a2e(){},
a2f:function a2f(){},
ID:function ID(d,e,f,g){var _=this
_.y=null
_.z=d
_.Q=e
_.ch=null
_.cx=$
_.cy=null
_.db=0
_.dx=null
_.dy=!1
_.a=f
_.d=_.c=_.b=null
_.e=!1
_.f=0
_.r=!1
_.x=g},
a4Y:function a4Y(d,e){this.a=d
this.b=e},
a4Z:function a4Z(d,e){this.a=d
this.b=e},
a4X:function a4X(d){this.a=d},
Pr:function Pr(){},
Pq:function Pq(){},
Xh(d,e,f,g){return new A.w(((C.d.bN(g*255,1)&255)<<24|(d&255)<<16|(e&255)<<8|f&255)>>>0)}},A,C,J
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[36],B)
A=c[0]
C=c[2]
J=c[1]
B.cQ.prototype={
K(d){var w=new B.a2d()
this.Ye(d,new B.a2a(this,d,w),new B.a2b(this,d,w))
return w},
Ye(d,e,f){var w,v=null,u={}
u.a=null
u.b=!1
w=new B.a27(u,f)
$.a4.NZ(new A.DZ(new B.a25(w),v,v,v,v,v,v,v,v,v,v,v,v)).jz(new B.a26(u,this,d,w,e))},
rC(d,e,f,g){var w
if(e.a!=null){$.hW.jc$.Pt(0,f,new B.a28(e),g)
return}w=$.hW.jc$.Pt(0,f,new B.a29(this,f),g)
if(w!=null)e.Fh(w)},
j(d){return"ImageConfiguration()"}}
B.ahh.prototype={}
B.ev.prototype={
dJ(d){return new B.ev(this.a.dJ(0),this.b,this.c)},
gRP(){var w=this.a
return w.gaL(w)*w.gaK(w)*4},
k(d){this.a.k(0)},
j(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.j(0)+" @ "+A.jg(this.b)+"x"},
gB(d){return A.ac(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
m(d,e){var w=this
if(e==null)return!1
if(J.a2(e)!==A.F(w))return!1
return e instanceof B.ev&&e.a===w.a&&e.b===w.b&&e.c==w.c}}
B.a2d.prototype={
Fh(d){var w
this.a=d
w=this.b
if(w!=null){this.b=null
C.b.a8(w,d.gBm(d))}},
a2(d,e){var w=this.a
if(w!=null)return w.a2(0,e)
w=this.b;(w==null?this.b=A.a([],x.y):w).push(e)},
S(d,e){var w,v=this.a
if(v!=null)return v.S(0,e)
for(w=0;v=this.b,w<v.length;++w)if(J.e(v[w],e)){v=this.b
v.toString
C.b.eR(v,w)
break}}}
B.HO.prototype={
Wi(d){++this.a.f},
k(d){var w=this.a;--w.f
w.Jh()
this.a=null}}
B.mf.prototype={
a2(d,e){var w,v,u,t,s,r,q,p=this
if(p.r)A.R(A.ae(y.a))
p.e=!0
p.a.push(e)
s=p.b
if(s!=null)try{s=s.dJ(0)
e.a.$2(s,!0)}catch(r){w=A.ag(r)
v=A.av(r)
p.PL(A.bd("by a synchronously-called image listener"),w,v)}s=p.c
if(s!=null&&e.c!=null)try{q=e.c
q.toString
q.$2(s.a,s.b)}catch(w){u=A.ag(w)
t=A.av(w)
if(!J.e(u,p.c.a))A.dq(new A.bH(u,t,"image resource service",A.bd("by a synchronously-called image error listener"),null,!1))}},
Dl(){if(this.r)A.R(A.ae(y.a));++this.f
return new B.HO(this)},
S(d,e){var w,v,u,t,s,r=this
if(r.r)A.R(A.ae(y.a))
for(w=r.a,v=0;v<w.length;++v)if(J.e(w[v],e)){C.b.eR(w,v)
break}if(w.length===0){w=r.x
u=A.a(w.slice(0),A.aA(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.T)(u),++s)u[s].$0()
C.b.sp(w,0)
r.Jh()}},
Jh(){var w,v=this
if(!v.e||v.r||v.a.length!==0||v.f!==0)return
w=v.b
if(w!=null)w.a.k(0)
v.b=null
v.r=!0},
a7R(d){if(this.r)A.R(A.ae(y.a))
this.x.push(d)},
PG(d){if(this.r)A.R(A.ae(y.a))
C.b.w(this.x,d)},
Fk(d){var w,v,u,t,s,r,q,p,o,n,m=this
if(m.r)A.R(A.ae(y.a))
t=m.b
if(t!=null)t.a.k(0)
m.b=d
t=m.a
if(t.length===0)return
s=A.cp(t,!0,x.x)
for(t=s.length,r=d.a,q=d.b,p=d.c,o=0;o<t;++o){w=s[o]
try{w.ae4(new B.ev(r.dJ(0),q,p),!1)}catch(n){v=A.ag(n)
u=A.av(n)
m.PL(A.bd("by an image listener"),v,u)}}},
kS(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m="image resource service"
this.c=new A.bH(e,h,m,d,f,g)
s=this.a
r=x.C
q=A.b5(new A.fx(new A.aQ(s,new B.a2e(),A.aA(s).i("aQ<1,~(v,bU?)?>")),r),!0,r.i("r.E"))
w=!1
for(s=q.length,p=0;p<s;++p){v=q[p]
try{v.$2(e,h)
w=!0}catch(o){u=A.ag(o)
t=A.av(o)
if(!J.e(u,e)){r=A.bd("when reporting an error to an image listener")
n=$.ii()
if(n!=null)n.$1(new A.bH(u,t,m,r,null,!1))}}}if(!w){s=this.c
s.toString
A.dq(s)}},
PL(d,e,f){return this.kS(d,e,null,!1,f)},
afo(d){var w,v,u,t
if(this.r)A.R(A.ae(y.a))
w=this.a
if(w.length!==0){v=x.F
u=A.b5(new A.fx(new A.aQ(w,new B.a2f(),A.aA(w).i("aQ<1,~(eu)?>")),v),!0,v.i("r.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
B.ID.prototype={
Wm(d,e,f,g,h){var w=this
w.d=f
e.eh(0,w.ga_L(),new B.a4Y(w,g),x.v)
if(d!=null)d.Dp(w.gPM(),new B.a4Z(w,g))},
a_M(d){this.y=d
if(this.a.length!==0)this.mN()},
a_A(d){var w,v,u,t,s=this,r="_shownTimestamp"
s.dy=!1
if(s.a.length===0)return
w=s.cy
if(w!=null){w=A.b(s.cx,r)
v=d.a
w=w.a
u=s.cy
w=v-w>=u.a
v=u}else{v=w
w=!0}if(w){w=s.ch
s.HT(new B.ev(w.gf6(w).dJ(0),s.z,s.d))
s.cx=d
w=s.ch
s.cy=w.gNu(w)
w=s.ch
w.gf6(w).k(0)
s.ch=null
t=C.f.jS(s.db,s.y.gnM())
if(s.y.gx0()===-1||t<=s.y.gx0())s.mN()
return}v.toString
w=A.b(s.cx,r)
s.dx=A.cD(new A.aw(C.d.aT((v.a-(d.a-w.a))*$.ayK)),new B.a4X(s))},
mN(){var w=0,v=A.X(x.v),u,t=2,s,r=[],q=this,p,o,n,m,l
var $async$mN=A.S(function(d,e){if(d===1){s=e
w=t}while(true)switch(w){case 0:m=q.ch
if(m!=null)m.gf6(m).k(0)
q.ch=null
t=4
w=7
return A.a0(q.y.rY(),$async$mN)
case 7:q.ch=e
t=2
w=6
break
case 4:t=3
l=s
p=A.ag(l)
o=A.av(l)
q.kS(A.bd("resolving an image frame"),p,q.Q,!0,o)
w=1
break
w=6
break
case 3:w=2
break
case 6:if(q.y.gnM()===1){if(q.a.length===0){w=1
break}m=q.ch
q.HT(new B.ev(m.gf6(m).dJ(0),q.z,q.d))
m=q.ch
m.gf6(m).k(0)
q.ch=null
w=1
break}q.Kn()
case 1:return A.V(u,v)
case 2:return A.U(s,v)}})
return A.W($async$mN,v)},
Kn(){if(this.dy)return
this.dy=!0
$.bE.xD(this.ga_z())},
HT(d){this.Fk(d);++this.db},
a2(d,e){var w,v=this
if(v.a.length===0){w=v.y
if(w!=null)w=v.b==null||w.gnM()>1
else w=!1}else w=!1
if(w)v.mN()
v.FQ(0,e)},
S(d,e){var w,v=this
v.FR(0,e)
if(v.a.length===0){w=v.dx
if(w!=null)w.az(0)
v.dx=null}}}
B.Pr.prototype={}
B.Pq.prototype={}
var z=a.updateTypes(["~(e3)","~(eu)","~(eM)","~(aw)"])
B.a2a.prototype={
$2(d,e){this.a.rC(this.b,this.c,d,e)},
$S(){return A.P(this.a).i("~(cQ.T,~(v,bU?))")}}
B.a2b.prototype={
$3(d,e,f){return this.Qw(d,e,f)},
Qw(d,e,f){var w=0,v=A.X(x.v),u=this,t
var $async$$3=A.S(function(g,h){if(g===1)return A.U(h,v)
while(true)switch(w){case 0:w=2
return A.a0(null,$async$$3)
case 2:t=u.c
if(t.a==null)t.Fh(new B.ahh(A.a([],x.y),A.a([],x.b)))
t=t.a
t.toString
t.kS(A.bd("while resolving an image"),e,null,!0,f)
return A.V(null,v)}})
return A.W($async$$3,v)},
$S(){return A.P(this.a).i("ab<~>(cQ.T?,v,bU?)")}}
B.a27.prototype={
Qv(d,e){var w=0,v=A.X(x.v),u,t=this,s
var $async$$2=A.S(function(f,g){if(f===1)return A.U(g,v)
while(true)switch(w){case 0:s=t.a
if(s.b){w=1
break}t.b.$3(s.a,d,e)
s.b=!0
case 1:return A.V(u,v)}})
return A.W($async$$2,v)},
$2(d,e){return this.Qv(d,e)},
$S:394}
B.a25.prototype={
$5(d,e,f,g,h){this.a.$2(g,h)},
$S:395}
B.a26.prototype={
$0(){var w,v,u,t,s=this,r=null
try{r=s.b.kM(s.c)}catch(u){w=A.ag(u)
v=A.av(u)
s.d.$2(w,v)
return}t=s.d
J.VA(r,new B.a24(s.a,s.b,s.e,t),x.v).hv(t)},
$S:0}
B.a24.prototype={
$1(d){var w,v,u,t=this
t.a.a=d
try{t.c.$2(d,t.d)}catch(u){w=A.ag(u)
v=A.av(u)
t.d.$2(w,v)}},
$S(){return A.P(this.b).i("ad(cQ.T)")}}
B.a28.prototype={
$0(){var w=this.a.a
w.toString
return w},
$S:143}
B.a29.prototype={
$0(){return this.a.kI(0,this.b,$.hW.gacA())},
$S:143}
B.a2e.prototype={
$1(d){return d.c},
$S:397}
B.a2f.prototype={
$1(d){return d.b},
$S:398}
B.a4Y.prototype={
$2(d,e){this.a.kS(A.bd("resolving an image codec"),d,this.b,!0,e)},
$S:47}
B.a4Z.prototype={
$2(d,e){this.a.kS(A.bd("loading an image"),d,this.b,!0,e)},
$S:47}
B.a4X.prototype={
$0(){this.a.Kn()},
$S:0};(function aliases(){var w=B.mf.prototype
w.FQ=w.a2
w.FR=w.S})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=B.mf.prototype,"gBm","a2",0)
v(u,"gPM","afo",1)
v(u=B.ID.prototype,"ga_L","a_M",2)
v(u,"ga_z","a_A",3)
w(u,"gBm","a2",0)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.v,[B.cQ,B.Pq,B.ev,B.Pr,B.HO])
v(A.e_,[B.a2a,B.a27,B.a4Y,B.a4Z])
v(A.bv,[B.a2b,B.a25,B.a24,B.a2e,B.a2f])
v(A.cU,[B.a26,B.a28,B.a29,B.a4X])
u(B.mf,B.Pq)
v(B.mf,[B.ahh,B.ID])
u(B.a2d,B.Pr)
w(B.Pr,A.aq)
w(B.Pq,A.aq)})()
A.c2(b.typeUniverse,JSON.parse("{}"))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x={x:A.H("e3"),y:A.H("q<e3>"),b:A.H("q<~()>"),C:A.H("fx<~(v,bU?)>"),F:A.H("fx<~(eu)>"),v:A.H("~")}}
$__dart_deferred_initializers__["T94dt436Axc0/m95m8PPQdJ07MA="] = $__dart_deferred_initializers__.current
