self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={abk:function abk(d,e){this.a=d
this.b=e},lo:function lo(d,e,f,g,h,i,j){var _=this
_.db=d
_.c0$=e
_.an$=f
_.bD$=g
_.cI$=h
_.bK$=i
_.bd$=j},adT:function adT(d){this.a=d},adS:function adS(){},adW:function adW(d){this.a=d},adU:function adU(d){this.a=d},adV:function adV(d){this.a=d},adX:function adX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},vI:function vI(d){this.a=d},Na:function Na(d,e,f){var _=this
_.d=d
_.e=null
_.f=0
_.r=e
_.a=null
_.b=f
_.c=null},afU:function afU(d){this.a=d},afS:function afS(d){this.a=d},afR:function afR(d,e){this.a=d
this.b=e},afT:function afT(d){this.a=d},r7:function r7(d,e,f){this.c=d
this.d=e
this.a=f},
aEJ(){return new B.mb(null)},
mb:function mb(d){this.c=null
this.a=d},
ta:function ta(){},
D9:function D9(){},
zr:function zr(d,e,f,g,h){var _=this
_.lS$=d
_.NJ$=e
_.lR$=f
_.vY$=g
_.$ti=h},
Ee:function Ee(){}},A,D,K,C,J,G,L,M,H,N,O,E,F,I
a.setFunctionNamesIfNecessary([B])
B=a.updateHolder(c[3],B)
A=c[0]
D=c[13]
K=c[16]
C=c[2]
J=c[1]
G=c[18]
L=c[23]
M=c[21]
H=c[39]
N=c[25]
O=c[41]
E=c[26]
F=c[42]
I=c[38]
B.abk.prototype={
NO(d){return null},
q4(d,e,f){var x,w,v,u,t,s,r,q,p=null
if(!(f<0))u=f>=this.b
else u=!0
if(u)return p
x=null
try{x=this.a.$2(e,f)}catch(t){w=A.ag(t)
v=A.av(t)
s=new A.bH(w,v,"widgets library",A.bd("building"),p,!1)
A.dq(s)
x=A.wK(s)}if(x==null)return p
if(x.a!=null){u=x.a
u.toString
r=new D.uU(u)}else r=p
u=x
x=new A.fY(u,p)
q=D.asD(x,f)
if(q!=null)x=new K.rg(q,x,p)
u=x
x=new D.qp(u,p)
return new A.ou(x,r)},
gqw(){return this.b},
Ft(d){return!0}}
B.lo.prototype={
Fq(d){this.db.aQ(0,new B.adT(d))},
aD(d){this.db.aQ(0,new B.adS())},
agb(d,e,f){var x,w,v
A.bA("\u5bb6\u5fc6\u5f55 ====>>   "+("\u4e0a\u4f20\u5934\u50cf ===>>> id: "+A.d(d)+", path:"+A.d(f)+", isSelf: "+A.d(e)))
$.a_()
x=$.m
if(x==null)x=$.m=new A.K()
x=x.I(0,null,y.l).db
w=x.gl(x).b
A.bA("\u5bb6\u5fc6\u5f55 ====>>   "+A.d(w))
x=y.X
v=A.ap(["Authorization",C.c.L("Bearer ",w)],x,x)
D.Fg("http://152.32.169.119:16868/users/upload/"+A.d(d),f,v).b2(0,new B.adW(e),y.P)},
oC(d,e,f,g,h){var x,w,v=d.gaJ(d),u=v.gJ(v)
v=d.gf4(d)
x=J.apL(v.gJ(v))
A.bA("\u5bb6\u5fc6\u5f55 ====>>   "+("userUpdate: id:"+A.d(e)+", key: "+A.d(u)+", value: "+A.d(x)+",isSelf: "+A.d(f)))
v=this.db
w=y.X
D.Fh("http://152.32.169.119:16868/users/"+A.d(e),d,A.ap(["Authorization","Bearer "+A.d(v.gl(v).b)],w,w)).b2(0,new B.adX(u,f,h,g),y.P)},
kZ(d){return d},
QQ(d){return"\u5973"},
QP(d){return"\u53bb\u4e16"},
Mt(){var x,w
$.a_()
x=y.l
w=$.m
w=(w==null?$.m=new A.K():w).I(0,null,x).db
if(w.gl(w).c!=null){w=$.m
x=(w==null?$.m=new A.K():w).I(0,null,x).db
x=x.gl(x).c}else x=!1
return x}}
B.vI.prototype={
V(){var x,w,v,u=null
$.a_()
x=new B.zr($,!0,new G.iz(A.a([],y.a),y.o),A.B(y._,y.N),y.T)
x.lS$=new L.eC(u,u,u,u,u,u,u,u,u,u,u,u,u,u)
w=y.A
w=new B.lo(x,A.a([],y.z),A.eU(y.O,y.x),new A.pY(w),new A.pY(w),!1,!1)
w.EB()
x=$.m
if(x==null)x=$.m=new A.K()
v=y.X
return new B.Na(x.Ps(0,w,!1,u,y.l),A.a([A.ap(["text","\u5bb6\u65cf\u8d77\u6e90,\u4f60\u770b\u5f97\u5230","image","assets/images/splash_1.png"],v,v),A.ap(["text","\u5bb6\u65cf\u8363\u8000,\u9700\u8981\u4f60\u5b88\u62a4","image","assets/images/splash_2.png"],v,v),A.ap(["text","\u5bb6\u65cf\u4f20\u627f,\u9700\u8981\u5927\u5bb6\u91cd\u89c6","image","assets/images/splash_3.png"],v,v)],y.s),C.k)}}
B.Na.prototype={
A(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=A.b(A.oa("GetStorage").c,"_concrete").E7(0,"userInfo",y.X)
if(o!=null){x=D.Mt(C.a4.cG(0,o))
q.e=x
q.d.Fq(x)}x=$.aBj()
x=M.m5(new D.rK(x,p,new B.afS(q),new B.abk(new B.afT(q),3),p),1)
w=J.kB(3,y.M)
for(v=q.f,u=0;u<3;++u){t=v===u
s=t?20:6
t=t?new A.w(4294540108):new A.w(4292401368)
r=new A.bZ(3,3)
w[u]=D.au1(p,p,new A.bs(t,p,p,new A.cI(r,r,r,r),p,p,C.a0),C.L,p,6,new A.aj(0,0,5,0),s)}return A.d8(!1,!0,H.fr(!0,A.bG(A.a([x,new A.aR(new A.aj(0,0,0,50),A.bN(w,C.n,C.ad,C.q),p)],y.t),C.n,C.w,C.q),C.P,!0),p,!0,p,p,p,p,p,p,p,p,p,new B.afU(q),p,p,p)}}
B.r7.prototype={
A(d,e){var x=null,w=A.bq(x,6*$.eW.ci()/100,x),v=A.aD("\u5fc6\u5148\u65cf\u8c31",x,x,x,A.aG(x,x,new A.w(4294540108),x,x,x,x,x,x,x,x,20*($.mS.ci()/3)/100,x,C.aF,x,x,!0,x,x,x,x,x,x,x,x),x,x),u=A.bq(x,$.eW.ci()/100,x),t=A.aD(this.c,x,x,x,x,C.eV,x),s=A.bq(x,5*$.eW.ci()/100,x),r=$.eW.ci(),q=$.mS.ci()
return A.bG(A.a([w,v,u,t,s,N.HK(this.d,C.d.dW(35*$.eW.ci()/100),C.d.dW(80*$.mS.ci()/100),O.cO,35*r/100,80*q/100)],y.t),C.n,C.w,C.aa)}}
B.mb.prototype={
A(d,e){var x=null,w=$.aGM=e.W(y.w).f
w.gm8(w)
return new D.pL(H.fZ(x,x,new B.vI(x),x),this.ga_s(),x)},
zK(){var x=0,w=A.X(y.b),v,u=this
var $async$zK=A.S(function(d,e){if(d===1)return A.U(e,w)
while(true)switch(x){case 0:if(u.c==null||A.cd(0,Date.now()-u.c.a,0).a>A.cd(0,0,2).a){u.c=new A.dL(Date.now(),!1)
E.c5(C.j,F.M,"\u518d\u6309\u4e00\u6b21\u9000\u51fa",C.m,"#ffffff","center")
v=!1
x=1
break}else{A.Ao()
v=!0
x=1
break}case 1:return A.V(v,w)}})
return A.W($async$zK,w)}}
B.ta.prototype={
$1(d){if(d!=null)this.sl(0,d)
return this.gl(this)},
$0(){return this.$1(null)},
j(d){return J.d6(this.gl(this))},
eT(){return this.gl(this)},
m(d,e){var x,w=this
if(e==null)return!1
x=w.$ti
if(x.c.b(e))return J.e(w.gl(w),e)
if(x.i("ta<1>").b(e))return J.e(w.gl(w),e.gl(e))
return!1},
gB(d){return J.bk(A.b(this.lS$,"_value"))},
sl(d,e){var x=this,w=x.lR$
if(w.e==null)return
if(J.e(A.b(x.lS$,"_value"),e)&&!x.NJ$)return
x.NJ$=!1
x.lS$=e
w.Ak(A.b(e,"_value"))},
gl(d){var x=$.a8c
if(x!=null)x.a2(0,this.lR$)
return A.b(this.lS$,"_value")}}
B.D9.prototype={
aQ(d,e){e.$1(A.b(this.lS$,"_value"))
this.lR$.Ak(A.b(this.lS$,"_value"))}}
B.zr.prototype={
eT(){var x,w
try{x=this.gl(this).eT()
return x}catch(w){if(y.L.b(A.ag(w)))throw A.c(A.b8(this.$ti.c).j(0)+" has not method [toJson]")
else throw w}}}
B.Ee.prototype={}
var z=a.updateTypes(["ad(eC*)","ad(eZ*)","r7*(Y*,n*)","ab<C*>*()"])
B.adT.prototype={
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
B.adS.prototype={
$1(d){d.cx=d.ch=d.Q=d.z=d.y=d.d=d.x=d.c=d.r=d.f=d.e=d.b=d.a=null},
$S:z+0}
B.adW.prototype={
$1(d){var x,w,v,u="GetStorage",t="userInfo"
A.bA("\u5bb6\u5fc6\u5f55 ====>>   "+("\u4e0a\u4f20\u56fe\u7247\u8fd4\u56de: "+A.d(d)))
if(this.a){$.a_()
x=$.m
if(x==null)x=$.m=new A.K()
x.I(0,null,y.l).db.aQ(0,new B.adU(d))
w=D.Mt(C.a4.cG(0,A.b(A.oa(u).c,"_concrete").E7(0,t,y.X)))
w.r=J.ak(d,"avatar")
A.oa(u).oI(0,t,C.a4.er(w.rI()))}x=$.a_()
v=$.m
if(v==null)v=$.m=new A.K()
v.I(0,null,y.B).gbE().aQ(0,new B.adV(d))
E.c5(C.j,F.M,"\u4fdd\u5b58\u6210\u529f",C.m,"#ffffff","center")
v=$.m
if(v==null)v=$.m=new A.K()
v.I(0,null,y.Q).mp()
I.eT(x,!0)},
$S:2}
B.adU.prototype={
$1(d){d.r=J.ak(this.a,"avatar")},
$S:z+0}
B.adV.prototype={
$1(d){d.sBy(J.ak(this.a,"avatar"))},
$S:z+1}
B.adX.prototype={
$1(d){var x,w,v,u,t=this,s="GetStorage",r="userInfo"
A.bA("\u5bb6\u5fc6\u5f55 ====>>   "+("userUpdate success!,return : "+A.d(d)))
x=t.a
w=J.aC(d)
if(w.h(d,x)!=null){E.c5(C.j,F.M,"\u4fee\u6539\u6210\u529f",C.m,"#ffffff","center")
if(t.b){t.c.$1(w.h(d,x))
v=D.Mt(C.a4.cG(0,A.b(A.oa(s).c,"_concrete").E7(0,r,y.X)))
u=D.Mt(d)
u.b=v.b
u.c=v.c
A.oa(s).oI(0,r,C.a4.er(u.rI()))}t.d.$1(w.h(d,x))
x=$.a_()
w=$.m
if(w==null)w=$.m=new A.K()
w.I(0,null,y.Q).mp()
I.eT(x,null)}},
$S:2}
B.afU.prototype={
$0(){var x,w=this.a
if(w.f===2){A.oa("GetStorage").oI(0,"isFirstOpen",!0)
w=w.e
w=w!=null&&w.c
x=y.C
if(w)D.aqO($.a_(),"/home",x)
else D.aqO($.a_(),"/login",x)}},
$S:1}
B.afS.prototype={
$1(d){var x=this.a
x.ad(new B.afR(x,d))},
$S:135}
B.afR.prototype={
$0(){this.a.f=this.b},
$S:1}
B.afT.prototype={
$2(d,e){var x=this.a.r,w=x[e].h(0,"image")
return new B.r7(x[e].h(0,"text"),w,null)},
$S:z+2};(function installTearOffs(){var x=a._instance_0u
x(B.mb.prototype,"ga_s","zK",3)})();(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.abk,D.Lh)
w(B.lo,A.x8)
v(A.bv,[B.adT,B.adS,B.adW,B.adU,B.adV,B.adX,B.afS])
w(B.vI,A.D)
w(B.Na,A.M)
v(A.cU,[B.afU,B.afR])
w(B.afT,A.e_)
v(A.a9,[B.r7,B.mb])
w(B.ta,A.v)
w(B.Ee,G.l5)
w(B.D9,B.Ee)
w(B.zr,B.D9)
x(B.Ee,B.ta)})()
A.c2(b.typeUniverse,JSON.parse('{"lo":{"he":[],"aa":[]},"vI":{"D":[],"f":[]},"r7":{"a9":[],"f":[]},"Na":{"M":["vI*"]},"mb":{"a9":[],"f":[]},"D9":{"l5":["1"],"ta":["1"],"rC":["1"]},"zr":{"l5":["1"],"ta":["1"],"rC":["1"]}}'))
A.hC(b.typeUniverse,JSON.parse('{"D9":1,"Ee":1}'))
var y=(function rtii(){var x=A.H
return{L:x("bC"),_:x("iz<@>"),o:x("iz<eC*>"),a:x("q<ow<eC*>>"),s:x("q<ax<j*,j*>*>"),t:x("q<f*>"),z:x("q<~()?>"),N:x("z<e9<@>>"),x:x("z<~()>"),w:x("fQ"),P:x("ad"),T:x("zr<eC*>"),A:x("pY<~>"),C:x("@"),B:x("ar8*"),X:x("j*"),Q:x("arU*"),l:x("lo*"),M:x("f*"),b:x("C*"),O:x("v?")}})();(function staticFields(){$.aGM=null})()}
$__dart_deferred_initializers__["uN03iTR/akVUHA3ReEUhSEq/Ri4="] = $__dart_deferred_initializers__.current
