(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{173:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_5-渠道专属配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-渠道专属配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 5.渠道专属配置")]),s("h2",{attrs:{id:"_5-1-eb渠道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-eb渠道","aria-hidden":"true"}},[e._v("#")]),e._v(" 5.1 EB渠道")]),s("ul",[s("li",[s("p",[e._v("渠道专属配置:\n1.将allpaysdk/EBModule文件夹下的文件add到项目中")]),s("p",[e._v("2.Set Always embed swift standard libraries to YES from project build settings")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES\n")])])]),s("p",[e._v("3.To simply disable ATS, you can follow this steps by open Info.plist, and add \tthe following lines:")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("   <key>NSAppTransportSecurity</key>\n   <dict> <key>NSAllowsArbitraryLoads</key>\n       <true/>\n   </dict>\n")])])]),s("ul",[s("li",[s("p",[e._v("消费接口专属字段")]),s("ul",[s("li",[e._v("请求报文")])]),s("p",[e._v("序号 |名称  |长度|类型|参数名称|备注\n-----|-----|----|----|------|------\n1| 姓名     |32  |文本|trxn_firstname         |This is name of the customer who is doing the transaction.\n2| 邮箱     |40  |文本|trxn_email_id         |this is email id of the customer who is doing transaction.\n3|电话 |20  |文本|trxn_phone|Phone number of the customer.\n4|优惠券选项 |1  |文本|trxn_is_coupon_enabled| If the value is 0 then customer will not be able to see the coupons. If the value is 1 then customer will be able see the coupons and able to select the coupons\n5|客户id |10  |文本|unique_id|This is customer’s unique id.不能超过10位")])])])])}],!1,null,null,null);t.default=n.exports}}]);