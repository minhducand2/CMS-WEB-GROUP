/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{343:function(ia,da,h){h.r(da);h.d(da,"ByteRangeRequest",function(){return ja});var ca=h(3),aa=h(0);h.n(aa);var fa=h(1),ea=h(117);ia=h(73);var z=h(145),x=h(63),n=h(49),f=h(198),y=h(132);h=h(297);var w=[],e=[],r=window,ba=function(){return function(){this.kk=1}}(),ha;(function(e){e[e.UNSENT=0]="UNSENT";e[e.DONE=4]="DONE"})(ha||(ha={}));var ja=function(){function h(e,h,n,w){var y=this;this.url=e;this.range=h;this.yf=n;this.withCredentials=
w;this.iR=ha;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);r.Uint8Array&&(this.request.responseType="arraybuffer");w&&(this.request.withCredentials=w);na.DISABLE_RANGE_HEADER||(Object(aa.isUndefined)(h.stop)?this.request.setRequestHeader("Range","bytes="+h.start):this.request.setRequestHeader("Range",["bytes=",h.start,"-",h.stop-1].join("")));this.request.setRequestHeader("X-Requested-With","XMLHttpRequest");n&&Object.keys(n).forEach(function(e){y.request.setRequestHeader(e,
n[e])});this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=f.a.NOT_STARTED}h.prototype.start=function(e){var h=this,n=this.request;n.onreadystatechange=function(){if(h.aborted)return h.status=f.a.ABORTED,e({code:f.a.ABORTED});if(this.readyState===h.iR.DONE){h.Uw();var w=0===window.document.URL.indexOf("file:///");200===n.status||206===n.status||w&&0===n.status?(w=r.OK(this),
h.mq(w,e)):(h.status=f.a.ERROR,e({code:h.status,status:this.status}))}};this.request.send(null);this.status=f.a.STARTED};h.prototype.mq=function(e,h){this.status=f.a.SUCCESS;if(h)return h(!1,e)};h.prototype.abort=function(){this.Uw();this.aborted=!0;this.request.abort()};h.prototype.Uw=function(){var f=Object(y.b)(this.url,this.range,e);-1!==f&&e.splice(f,1);if(0<w.length){f=w.shift();var n=new h(f.url,f.range,this.yf,this.withCredentials);f.request=n;e.push(f);n.start(Object(y.c)(f))}};h.prototype.extend=
function(e){var f=Object.assign({},this,e.prototype);f.constructor=e;return f};return h}(),na=function(f){function h(e,h,n,r,w){n=f.call(this,e,n,r)||this;n.mk={};n.Mv=h;n.url=e;n.DISABLE_RANGE_HEADER=!1;n.wt=ja;n.HF=3;n.yf=w||{};return n}Object(ca.c)(h,f);h.prototype.Cr=function(e,f,h){var r=-1===e.indexOf("?")?"?":"&";switch(h){case !1:case n.a.NEVER_CACHE:e=e+r+"_="+Object(aa.uniqueId)();break;case !0:case n.a.CACHE:e=e+r+"_="+f.start+","+(Object(aa.isUndefined)(f.stop)?"":f.stop)}return e};h.prototype.eJ=
function(e,f,h,n){void 0===h&&(h={});return new this.wt(e,f,h,n)};h.prototype.uW=function(f,h,n,r,y){for(var ba=0;ba<w.length;ba++)if(Object(aa.isEqual)(w[ba].range,h)&&Object(aa.isEqual)(w[ba].url,f))return w[ba].Sf.push(r),w[ba].Nx++,null;for(ba=0;ba<e.length;ba++)if(Object(aa.isEqual)(e[ba].range,h)&&Object(aa.isEqual)(e[ba].url,f))return e[ba].Sf.push(r),e[ba].Nx++,null;n={url:f,range:h,Mv:n,Sf:[r],Nx:1};if(0===w.length&&e.length<this.HF)return e.push(n),n.request=this.eJ(f,h,y,this.withCredentials),
n;w.push(n);return null};h.prototype.vl=function(f,h,n){var r=this.Cr(f,h,this.Mv);(f=this.uW(r,h,this.Mv,n,this.yf))&&f.request.start(Object(y.c)(f));return function(){var f=Object(y.b)(r,h,e);if(-1!==f){var n=--e[f].Nx;0===n&&e[f].request&&e[f].request.abort()}else f=Object(y.b)(r,h,w),-1!==f&&(n=--w[f].Nx,0===n&&w.splice(f,1))}};h.prototype.uK=function(){return{start:-ea.a}};h.prototype.XY=function(){var e=-(ea.a+ea.e);return{start:e-ea.d,end:e}};h.prototype.Fp=function(e){var f=this;this.Qv=!0;
var h=ea.a;this.vl(this.url,this.uK(),function(n,r,w){function y(){var h=f.zd.rK();f.vl(f.url,h,function(n,r){if(n)return Object(fa.h)("Error loading central directory: "+n),e(n);r=Object(x.a)(r);if(r.length!==h.stop-h.start)return e("Invalid XOD file: Zip central directory data is wrong size! Should be "+(h.stop-h.start)+" but is "+r.length);f.zd.bN(r);f.TA=!0;f.Qv=!1;return e(!1)})}if(n)return Object(fa.h)("Error loading end header: "+n),e(n,r,w);r=Object(x.a)(r);if(r.length!==h)return e("Invalid XOD file: Zip end header data is wrong size!");
try{f.zd=new z.a(r)}catch(ua){return e(ua)}f.zd.m_?f.vl(f.url,f.XY(),function(h,n){if(h)return Object(fa.h)("Error loading zip64 header: "+h),e(h);n=Object(x.a)(n);f.zd.A_(n);y()}):y()})};h.prototype.LK=function(e){e(Object.keys(this.zd.gl))};h.prototype.ID=function(e,f){var h=this;if(this.zd.XI(e)){var n=this.zd.Ow(e);if(n in this.mk){var r=this.Ng[e];r.Po=this.mk[n];r.Po.kk++;r.cancel=r.Po.cancel}else{var w=this.zd.AX(e),y=this.vl(this.url,w,function(r,y){r?(Object(fa.h)('Error loading part "'+
e+'": '+r),h.vl(h.url,w,function(r,y){if(r)return f(r,e);h.cN(y,w,n,e,f)})):h.cN(y,w,n,e,f)}),x=this.Ng[e];x&&(x.TO=!0,x.cancel=function(){x.Po.kk--;0===x.Po.kk&&(y(),delete h.mk[n])},this.mk[n]=new ba(n),x.Po=this.mk[n],x.Po.cancel=x.cancel)}}else delete this.Ng[e],f(Error('File not found: "'+e+'"'),e)};h.prototype.cN=function(e,f,h,n,r){if(e.length!==f.stop-f.start)r(Error("Part data is wrong size!"),n);else{do{if(!this.mk[h])return;n=this.mk[h].kk;for(var w=f.aN.length,y=0;y<w;++y){var ba=f.aN[y];
r(!1,ba.zn,e["string"===typeof e?"substring":"subarray"](ba.start,ba.stop),this.zd.IL(ba.zn));ba.zn in this.Ng&&delete this.Ng[ba.zn]}}while(n!==this.mk[h].kk);delete this.mk[h]}};h.DISABLE_RANGE_HEADER=!1;h.HF=3;return h}(ia.a);(function(e){function f(f,h,n){var r=e.call(this)||this,w;for(w in f)r[w]=f[w];r.k7=f;r.startOffset=h;r.endOffset=n;r.eJ=function(e,h,n,w){Object(aa.isUndefined)(h.stop)?(h.start+=r.endOffset,h.stop=r.endOffset):(h.start+=r.startOffset,h.stop+=r.startOffset);e=r.Cr(r.url,
h,r.Mv);return new f.wt(e,h,n,w)};return r}Object(ca.c)(f,e);return f})(na);Object(h.a)(na);Object(h.b)(na);da["default"]=na}}]);}).call(this || window)