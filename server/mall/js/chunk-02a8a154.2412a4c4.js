(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02a8a154"],{"0b74":function(t,e,n){"use strict";var s=n("fbcb"),a=n.n(s);a.a},2627:function(t,e,n){t.exports=n.p+"img/vip.c9cdc9ff.svg"},"3b42":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{staticClass:"top-nav-bar",scopedSlots:t._u([{key:"center",fn:function(){return[n("div",[t._v("我的信息")])]},proxy:!0}])}),n("user-info",{nativeOn:{click:function(e){return t.routeChange("登录/注册")}}}),n("account-info"),n("message-list",{attrs:{msg:t.orderList},on:{routeChange:t.routeChange}}),n("message-list",{attrs:{msg:t.serviceList},on:{routeChange:t.routeChange}}),n("transition",{attrs:{name:"slide-left"}},[n("router-view",{staticClass:"profile-router-view"})],1)],1)},a=[],i=n("a7ac"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-info"},[s("img",{staticClass:"avatar",attrs:{src:n("7df3"),alt:""}}),s("div",{staticClass:"info"},[s("div",{staticClass:"login"},[t._v("登录/注册")]),s("div",{staticClass:"mobile"},[s("img",{attrs:{src:n("4d36"),alt:""}}),s("span",[t._v("暂无手机号绑定")])])]),s("img",{staticClass:"arrow",attrs:{src:n("d715")}})])}],o={name:"UserInfo"},u=o,f=(n("ef61"),n("2877")),l=Object(f["a"])(u,c,r,!1,null,"93cab4b2",null),v=l.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-info"},[n("div",{staticClass:"balance"},[n("div",{staticClass:"info-head"},[n("span",{staticClass:"number"},[t._v("100亿")]),t._v("元 ")]),n("span",[t._v("我的余额")])]),n("div",{staticClass:"discount"},[n("div",{staticClass:"info-head"},[n("span",{staticClass:"number"},[t._v("0")]),t._v("个 ")]),n("span",[t._v("我的优惠")])]),n("div",{staticClass:"integral"},[n("div",{staticClass:"info-head"},[n("span",{staticClass:"number"},[t._v("0")]),t._v("分 ")]),n("span",[t._v("我的积分")])])])}],p={name:"AccountInfo"},m=p,_=(n("d8e9"),Object(f["a"])(m,d,g,!1,null,"237eb730",null)),b=_.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0!==t.msg.length?n("div",{staticClass:"message-list"},t._l(t.msg,(function(e,s){return n("div",{key:s,staticClass:"message-item",on:{click:function(n){return t.handleClick(e.info)}}},[e.icon?n("div",{staticClass:"icon"},[n("img",{attrs:{src:t.iconURL(e)}})]):t._e(),n("div",{staticClass:"message"},[t._v(t._s(e.info))])])})),0):t._e()},C=[],w={name:"MessageList",props:{msg:{type:Array,default:function(){return[]}}},methods:{iconURL:function(t){return n("c390")("./"+t.icon)},handleClick:function(t){this.$emit("routeChange",t)}}},x=w,k=(n("6fc8"),Object(f["a"])(x,h,C,!1,null,"2faf868c",null)),L=k.exports,O={name:"Profile",components:{NavBar:i["a"],UserInfo:v,AccountInfo:b,MessageList:L},data:function(){return{isLogined:!1,orderList:[{icon:"message.svg",info:"我的消息"},{icon:"pointer.svg",info:"积分商城"},{icon:"vip.svg",info:"会员卡"}],serviceList:[{icon:"cart.svg",info:"我的购物车"},{icon:"shopping.svg",info:"下载购物APP"},{icon:"",info:"向我打赏"}]}},methods:{routeChange:function(t){var e=this.getPath(t);e&&("login"===e&&this.isLogined||this.$router.push("/profile/".concat(e)))},getPath:function(t){switch(t){case"我的消息":return"message";case"下载购物APP":return"download";case"向我打赏":return"reward";case"登录/注册":return"login";default:return""}}}},E=O,$=(n("7a8e"),Object(f["a"])(E,s,a,!1,null,"de0df21e",null));e["default"]=$.exports},"3d7a":function(t,e,n){t.exports=n.p+"img/pointer.71eb1cd2.svg"},"4d36":function(t,e,n){t.exports=n.p+"img/phone.aa2bc9a6.svg"},"5a22":function(t,e,n){},"6fc8":function(t,e,n){"use strict";var s=n("5a22"),a=n.n(s);a.a},"7a8e":function(t,e,n){"use strict";var s=n("e51d"),a=n.n(s);a.a},"7df3":function(t,e,n){t.exports=n.p+"img/avatar.bd23b9b1.svg"},"9dc3":function(t,e,n){t.exports=n.p+"img/message.9948ca06.svg"},a7ac:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"left"},[t._t("left")],2),n("div",{staticClass:"center"},[t._t("center")],2),n("div",{staticClass:"right"},[t._t("right")],2)])},a=[],i={name:"NavBar"},c=i,r=(n("0b74"),n("2877")),o=Object(r["a"])(c,s,a,!1,null,"a54c25d6",null);e["a"]=o.exports},af67:function(t,e,n){t.exports=n.p+"img/cart.0103a021.svg"},bebc:function(t,e,n){t.exports=n.p+"img/Floc-74744256.dba12029.webp"},c390:function(t,e,n){var s={"./Floc-74744256.webp":"bebc","./avatar.svg":"7df3","./cart.svg":"af67","./message.svg":"9dc3","./mm_facetoface_collect_qrcode_1584857363326.png":"e366","./phone.svg":"4d36","./pointer.svg":"3d7a","./shopping.svg":"d88a","./vip.svg":"2627"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=i,t.exports=a,a.id="c390"},cc95:function(t,e,n){},d715:function(t,e,n){t.exports=n.p+"img/arrow-left.95e55ae9.svg"},d88a:function(t,e,n){t.exports=n.p+"img/shopping.7354bae5.svg"},d8e9:function(t,e,n){"use strict";var s=n("f3ed"),a=n.n(s);a.a},e366:function(t,e,n){t.exports=n.p+"img/mm_facetoface_collect_qrcode_1584857363326.6b3929a5.png"},e51d:function(t,e,n){},ef61:function(t,e,n){"use strict";var s=n("cc95"),a=n.n(s);a.a},f3ed:function(t,e,n){},fbcb:function(t,e,n){}}]);
//# sourceMappingURL=chunk-02a8a154.2412a4c4.js.map