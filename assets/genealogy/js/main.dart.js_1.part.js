self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={acf:function acf(d,e){this.a=d
this.b=e},lB:function lB(d,e,f,g,h,i,j){var _=this
_.db=d
_.bN$=e
_.ah$=f
_.cg$=g
_.dO$=h
_.co$=i
_.bt$=j},aeM:function aeM(d){this.a=d},aeL:function aeL(){},aeP:function aeP(d){this.a=d},aeN:function aeN(d){this.a=d},aeO:function aeO(d){this.a=d},aeQ:function aeQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},wH:function wH(d){this.a=d},Ok:function Ok(d,e,f){var _=this
_.d=d
_.e=null
_.f=0
_.r=e
_.a=null
_.b=f
_.c=null},agX:function agX(d){this.a=d},agV:function agV(d){this.a=d},agU:function agU(d,e){this.a=d
this.b=e},agW:function agW(d){this.a=d},rR:function rR(d,e,f){this.c=d
this.d=e
this.a=f},
aFP(){return new B.mu(null)},
mu:function mu(d){this.c=null
this.a=d},
tS:function tS(){},
Eh:function Eh(){},
AA:function AA(d,e,f,g,h,i){var _=this
_.m6$=d
_.O_$=e
_.O0$=f
_.m5$=g
_.w6$=h
_.$ti=i},
Fv:function Fv(){}},A,D,K,C,J,G,L,M,H,N,O,E,F,I
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[3],B)
A=c[0]
D=c[14]
K=c[17]
C=c[2]
J=c[1]
G=c[19]
L=c[25]
M=c[23]
H=c[44]
N=c[30]
O=c[49]
E=c[37]
F=c[47]
I=c[38]
B.acf.prototype={
O5(d){return null},
qh(d,e,f){var x,w,v,u,t,s,r,q,p=null
if(!(f<0))u=f>=this.b
else u=!0
if(u)return p
x=null
try{x=this.a.$2(e,f)}catch(t){w=A.ah(t)
v=A.aA(t)
s=new A.bE(w,v,"widgets library",A.bh("building"),p,!1)
A.dm(s)
x=A.xP(s)}if(x==null)return p
if(x.a!=null){u=x.a
u.toString
r=new D.vQ(u)}else r=p
u=x
x=new A.h5(u,p)
q=D.atq(x,f)
if(q!=null)x=new K.rZ(q,x,p)
u=x
x=new D.qU(u,p)
return new A.oX(x,r)},
gqJ(){return this.b},
FI(d){return!0}}
B.lB.prototype={
FF(d){this.db.aO(0,new B.aeM(d))},
aE(d){this.db.aO(0,new B.aeL())},
agr(d,e,f){var x,w,v
A.bt("\u5bb6\u5fc6\u5f55 ====>>   "+("\u4e0a\u4f20\u5934\u50cf ===>>> id: "+A.d(d)+", path:"+A.d(f)+", isSelf: "+A.d(e)))
$.a1()
x=$.n
if(x==null)x=$.n=new A.P()
x=x.I(0,null,y.l).db
w=x.gl(x).b
A.bt("\u5bb6\u5fc6\u5f55 ====>>   "+A.d(w))
x=y.X
v=A.ap(["Authorization",C.c.N("Bearer ",w)],x,x)
D.avv("\u4e0a\u4f20\u4e2d")
D.Gx("http://152.32.169.119:16868/users/upload/"+A.d(d),f,v).aY(0,new B.aeP(e),y.P)},
oQ(d,e,f,g,h){var x,w,v=d.gaI(d),u=v.gJ(v)
v=d.ge4(d)
x=J.aqY(v.gJ(v))
A.bt("\u5bb6\u5fc6\u5f55 ====>>   "+("userUpdate: id:"+A.d(e)+", key: "+A.d(u)+", value: "+A.d(x)+",isSelf: "+A.d(f)))
v=this.db
w=y.X
D.Gy("http://152.32.169.119:16868/users/"+A.d(e),d,A.ap(["Authorization","Bearer "+A.d(v.gl(v).b)],w,w)).aY(0,new B.aeQ(u,f,h,g),y.P)},
li(d){return d},
Rc(d){return"\u5973"},
Rb(d){return"\u53bb\u4e16"},
MN(){var x,w
$.a1()
x=y.l
w=$.n
w=(w==null?$.n=new A.P():w).I(0,null,x).db
if(w.gl(w).c!=null){w=$.n
x=(w==null?$.n=new A.P():w).I(0,null,x).db
x=x.gl(x).c}else x=!1
return x}}
B.wH.prototype={
R(){var x,w,v,u=null
$.a1()
x=new B.AA($,!0,!1,new G.iI(A.a([],y.a),y.o),A.B(y._,y.N),y.T)
x.m6$=new L.eK(u,u,u,u,u,u,u,u,u,u,u,u,u,u)
w=y.B
w=new B.lB(x,A.a([],y.z),A.ex(y.O,y.x),new A.oR(w),new A.oR(w),!1,!1)
w.ET()
x=$.n
if(x==null)x=$.n=new A.P()
v=y.X
return new B.Ok(x.PR(0,w,!1,u,y.l),A.a([A.ap(["text","\u5bb6\u65cf\u8d77\u6e90,\u4f60\u770b\u5f97\u5230","image","assets/images/splash_1.png"],v,v),A.ap(["text","\u5bb6\u65cf\u8363\u8000,\u9700\u8981\u4f60\u5b88\u62a4","image","assets/images/splash_2.png"],v,v),A.ap(["text","\u5bb6\u65cf\u4f20\u627f,\u9700\u8981\u5927\u5bb6\u91cd\u89c6","image","assets/images/splash_3.png"],v,v)],y.s),C.k)}}
B.Ok.prototype={
w(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=A.b(A.oA("GetStorage").c,"_concrete").Em(0,"userInfo",y.X)
if(o!=null){x=D.NE(C.a6.ct(0,o))
q.e=x
q.d.FF(x)}x=$.aCj()
x=M.mo(new D.tu(x,p,new B.agV(q),new B.acf(new B.agW(q),3),p),1)
w=J.kL(3,y.M)
for(v=q.f,u=0;u<3;++u){t=v===u
s=t?20:6
t=t?new A.x(4294540108):new A.x(4292401368)
r=new A.bY(3,3)
w[u]=D.auS(p,p,new A.bv(t,p,p,new A.cM(r,r,r,r),p,p,C.a4),C.K,p,6,new A.ac(0,0,5,0),s)}return A.cG(!1,!0,H.fD(!0,A.bg(A.a([x,new A.aD(new A.ac(0,0,0,50),A.be(w,C.n,C.U,C.o),p)],y.t),C.n,C.t,C.o),C.T,!0),p,!0,p,p,p,p,p,p,p,p,p,new B.agX(q),p,p,p)}}
B.rR.prototype={
w(d,e){var x=null,w=A.aF(x,6*$.c_.aV()/100,x),v=A.am("\u5fc6\u5148\u65cf\u8c31",x,x,x,A.an(x,x,new A.x(4294540108),x,x,x,x,x,x,x,x,20*($.h8.aV()/3)/100,x,C.ah,x,x,!0,x,x,x,x,x,x,x,x),x,x),u=A.aF(x,$.c_.aV()/100,x),t=A.am(this.c,x,x,x,x,C.fp,x),s=A.aF(x,5*$.c_.aV()/100,x),r=$.c_.aV(),q=$.h8.aV()
return A.bg(A.a([w,v,u,t,s,N.oI(this.d,C.d.dX(35*$.c_.aV()/100),C.d.dX(80*$.h8.aV()/100),O.di,35*r/100,80*q/100)],y.t),C.n,C.t,C.a1)}}
B.mu.prototype={
w(d,e){var x=null,w=$.aI0=e.X(y.w).f
w.gmp(w)
return new D.qe(H.fE(x,x,new B.wH(x),x),this.ga_W(),x)},
zQ(){var x=0,w=A.X(y.b),v,u=this
var $async$zQ=A.S(function(d,e){if(d===1)return A.U(e,w)
while(true)switch(x){case 0:if(u.c==null||A.bM(0,Date.now()-u.c.a,0).a>A.bM(0,0,2).a){u.c=new A.dM(Date.now(),!1)
E.bN(C.i,F.L,"\u518d\u6309\u4e00\u6b21\u9000\u51fa",C.m,"#ffffff","center")
v=!1
x=1
break}else{A.BC()
v=!0
x=1
break}case 1:return A.V(v,w)}})
return A.W($async$zQ,w)}}
B.tS.prototype={
$1(d){if(d!=null)this.sl(0,d)
return this.gl(this)},
$0(){return this.$1(null)},
j(d){return J.da(this.gl(this))},
f8(){return this.gl(this)},
n(d,e){var x,w=this
if(e==null)return!1
x=w.$ti
if(x.c.b(e))return J.e(w.gl(w),e)
if(x.i("tS<1>").b(e))return J.e(w.gl(w),e.gl(e))
return!1},
gC(d){return J.bb(A.b(this.m6$,"_value"))},
sl(d,e){var x=this,w=x.m5$
if(w.e==null)return
x.O0$=!1
if(J.e(A.b(x.m6$,"_value"),e)&&!x.O_$)return
x.O_$=!1
x.m6$=e
x.O0$=!0
w.Ap(A.b(e,"_value"))},
gl(d){var x=$.M2
if(x!=null)x.a2(0,this.m5$)
return A.b(this.m6$,"_value")}}
B.Eh.prototype={
aO(d,e){e.$1(A.b(this.m6$,"_value"))
this.m5$.Ap(A.b(this.m6$,"_value"))}}
B.AA.prototype={
f8(){var x,w
try{x=this.gl(this).f8()
return x}catch(w){if(y.L.b(A.ah(w)))throw A.c(A.b9(this.$ti.c).j(0)+" has not method [toJson]")
else throw w}}}
B.Fv.prototype={}
var z=a.updateTypes(["ad(eK*)","ad(f6*)","rR*(a_*,m*)","ai<y*>*()"])
B.aeM.prototype={
$1(d){var x=this.a
d.a=x.a
d.b=x.b
d.e=x.e
d.d=x.d
d.f=x.f
d.r=x.r
d.c=x.c
d.x=x.x
d.y=x.y
d.z=x.z
d.Q=x.Q
d.ch=x.ch
d.cx=x.cx},
$S:z+0}
B.aeL.prototype={
$1(d){d.cx=d.ch=d.Q=d.z=d.y=d.d=d.x=d.c=d.r=d.f=d.e=d.b=d.a=null},
$S:z+0}
B.aeP.prototype={
$1(d){var x,w,v,u="GetStorage",t="userInfo"
A.bt("\u5bb6\u5fc6\u5f55 ====>>   "+("\u4e0a\u4f20\u56fe\u7247\u8fd4\u56de: "+A.d(d)))
if(this.a){$.a1()
x=$.n
if(x==null)x=$.n=new A.P()
x.I(0,null,y.l).db.aO(0,new B.aeN(d))
w=D.NE(C.a6.ct(0,A.b(A.oA(u).c,"_concrete").Em(0,t,y.X)))
w.r=J.ae(d,"avatar")
A.oA(u).oU(0,t,C.a6.eB(w.t2()))}x=$.a1()
v=$.n
if(v==null)v=$.n=new A.P()
v.I(0,null,y.K).gbD().aO(0,new B.aeO(d))
v=$.hb()
v.kf()
v.kd(!0)
E.bN(C.i,F.L,"\u4fdd\u5b58\u6210\u529f",C.m,"#ffffff","center")
v=$.n
if(v==null)v=$.n=new A.P()
v.I(0,null,y.Q).mI()
I.f1(x,!0)},
$S:2}
B.aeN.prototype={
$1(d){d.r=J.ae(this.a,"avatar")},
$S:z+0}
B.aeO.prototype={
$1(d){d.sBJ(J.ae(this.a,"avatar"))},
$S:z+1}
B.aeQ.prototype={
$1(d){var x,w,v,u,t=this,s="GetStorage",r="userInfo"
A.bt("\u5bb6\u5fc6\u5f55 ====>>   "+("userUpdate success!,return : "+A.d(d)))
x=t.a
w=J.aC(d)
if(w.h(d,x)!=null){E.bN(C.i,F.L,"\u4fee\u6539\u6210\u529f",C.m,"#ffffff","center")
if(t.b){t.c.$1(w.h(d,x))
v=D.NE(C.a6.ct(0,A.b(A.oA(s).c,"_concrete").Em(0,r,y.X)))
u=D.NE(d)
u.b=v.b
u.c=v.c
A.oA(s).oU(0,r,C.a6.eB(u.t2()))}t.d.$1(w.h(d,x))
x=$.a1()
w=$.n
if(w==null)w=$.n=new A.P()
w.I(0,null,y.Q).mI()
I.f1(x,null)}},
$S:2}
B.agX.prototype={
$0(){var x,w=this.a
if(w.f===2){A.oA("GetStorage").oU(0,"isFirstOpen",!0)
w=w.e
w=w!=null&&w.c
x=y.A
if(w)D.arH($.a1(),"/home",x)
else D.arH($.a1(),"/login",x)}},
$S:1}
B.agV.prototype={
$1(d){var x=this.a
x.ad(new B.agU(x,d))},
$S:128}
B.agU.prototype={
$0(){this.a.f=this.b},
$S:1}
B.agW.prototype={
$2(d,e){var x=this.a.r,w=x[e].h(0,"image")
return new B.rR(x[e].h(0,"text"),w,null)},
$S:z+2};(function installTearOffs(){var x=a._instance_0u
x(B.mu.prototype,"ga_W","zQ",3)})();(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.acf,D.MA)
w(B.lB,A.yc)
v(A.bw,[B.aeM,B.aeL,B.aeP,B.aeN,B.aeO,B.aeQ,B.agV])
w(B.wH,A.E)
w(B.Ok,A.N)
v(A.cN,[B.agX,B.agU])
w(B.agW,A.dz)
v(A.af,[B.rR,B.mu])
w(B.tS,A.v)
w(B.Fv,G.lh)
w(B.Eh,B.Fv)
w(B.AA,B.Eh)
x(B.Fv,B.tS)})()
A.bQ(b.typeUniverse,JSON.parse('{"lB":{"fr":[],"a9":[]},"wH":{"E":[],"f":[]},"rR":{"af":[],"f":[]},"Ok":{"N":["wH*"]},"mu":{"af":[],"f":[]},"Eh":{"lh":["1"],"tS":["1"],"tm":["1"]},"AA":{"lh":["1"],"tS":["1"],"tm":["1"]}}'))
A.hD(b.typeUniverse,JSON.parse('{"Eh":1,"Fv":1}'))
var y=(function rtii(){var x=A.C
return{L:x("bB"),_:x("iI<@>"),o:x("iI<eK*>"),B:x("oR<~>"),a:x("p<oZ<eK*>>"),s:x("p<az<j*,j*>*>"),t:x("p<f*>"),z:x("p<~()?>"),N:x("z<ea<@>>"),x:x("z<~()>"),w:x("fZ"),P:x("ad"),T:x("AA<eK*>"),A:x("@"),K:x("as1*"),X:x("j*"),Q:x("asI*"),l:x("lB*"),M:x("f*"),b:x("y*"),O:x("v?")}})();(function staticFields(){$.aI0=null})()}
$__dart_deferred_initializers__["Ri6FqWWKEG52oLCj/Q11XJX4q9U="] = $__dart_deferred_initializers__.current
