(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{197:function(t,_,v){"use strict";v.r(_);var d=v(0),r=Object(d.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"_3-api接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-api接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. API接口")]),v("h2",{attrs:{id:"_3-1-消费交易接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-消费交易接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1. 消费交易接口")]),v("p",[t._v("将相关参数,以表单形式提交到指定 url,即可调起支付。")]),v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),v("th",[t._v("名称")]),v("th",[t._v("长度")]),v("th",[t._v("类型")]),v("th",[t._v("参数名称")]),v("th",[t._v("备注")])])]),v("tbody",[v("tr",[v("td",[t._v("1")]),v("td",[t._v("版本号")]),v("td",[t._v("12")]),v("td",[t._v("文本")]),v("td",[t._v("version")]),v("td",[t._v("统一填写为“VER000000002”")])]),v("tr",[v("td",[t._v("2")]),v("td",[t._v("字符集编码")]),v("td",[t._v("6")]),v("td",[t._v("文本")]),v("td",[t._v("charSet")]),v("td",[t._v("统一填写为“UTF-8”")])]),v("tr",[v("td",[t._v("3")]),v("td",[t._v("交易类型")]),v("td",[t._v("4")]),v("td",[t._v("文本")]),v("td",[t._v("transType")]),v("td",[t._v("消费交易填写“PURC”")])]),v("tr",[v("td",[t._v("4")]),v("td",[t._v("订单号")]),v("td",[t._v("60")]),v("td",[t._v("文本")]),v("td",[t._v("orderNum")]),v("td",[t._v("商户自行定义，需保证同一商户号下订单号不能重复")])]),v("tr",[v("td",[t._v("5")]),v("td",[t._v("订单金额")]),v("td",[t._v("12")]),v("td",[t._v("文本")]),v("td",[t._v("orderAmount")]),v("td",[t._v("如 100 元，表示为 100 或 100.00")])]),v("tr",[v("td",[t._v("6")]),v("td",[t._v("订单币种")]),v("td",[t._v("3")]),v("td",[t._v("文本")]),v("td",[t._v("orderCurrency")]),v("td",[t._v('人民币填写“CNY”,美元填写"USD"')])]),v("tr",[v("td",[t._v("7")]),v("td",[t._v("前端 URL 地址")]),v("td",[t._v("400")]),v("td",[t._v("文本")]),v("td",[t._v("frontURL")]),v("td",[t._v("支付结果前端通知到该地址")])]),v("tr",[v("td",[t._v("8")]),v("td",[t._v("后端 URL 地址")]),v("td",[t._v("400")]),v("td",[t._v("文本")]),v("td",[t._v("backURL")]),v("td",[t._v("支付结果异步通知到该地址")])]),v("tr",[v("td",[t._v("9")]),v("td",[t._v("商户预留字段")]),v("td",[t._v("1024")]),v("td",[t._v("文本")]),v("td",[t._v("merReserve")]),v("td",[t._v("商户预留内容，可传任意内容，如购买商品信息、员号等，但不要传特殊符号，如逗号。")])]),v("tr",[v("td",[t._v("10")]),v("td",[t._v("商户代码")]),v("td",[t._v("15")]),v("td",[t._v("文本")]),v("td",[t._v("merID")]),v("td",[t._v("商户 ID，由AllPay 分配")])]),v("tr",[v("td",[t._v("11")]),v("td",[t._v("收单行 ID")]),v("td",[t._v("11")]),v("td",[t._v("文本")]),v("td",[t._v("acqID")]),v("td",[t._v('收单行 ID "99020344"')])]),v("tr",[v("td",[t._v("12")]),v("td",[t._v("支付渠道代码")]),v("td",[t._v("10")]),v("td",[t._v("文本")]),v("td",[t._v("paymentSchema")]),v("td",[t._v('渠道代码：微信：WX, 支付报"APMP",银联 "UP"')])]),v("tr",[v("td",[t._v("13")]),v("td",[t._v("商品信息")]),v("td",[t._v("60")]),v("td",[t._v("文本")]),v("td",[t._v("goodsInfo")]),v("td",[t._v("商品信息")])]),v("tr",[v("td",[t._v("14")]),v("td",[t._v("交易时间")]),v("td",[t._v("14")]),v("td",[t._v("文本")]),v("td",[t._v("transTime")]),v("td",[t._v('交易时间,格式:"yyyyMMddHHmmss"')])]),v("tr",[v("td",[t._v("15")]),v("td",[t._v("签名类型")]),v("td",[t._v("3")]),v("td",[t._v("文本")]),v("td",[t._v("signType")]),v("td",[t._v("MD5")])]),v("tr",[v("td",[t._v("16")]),v("td",[t._v("签名")]),v("td",[t._v("32")]),v("td",[t._v("文本")]),v("td",[t._v("signature")]),v("td",[t._v("采用 MD5 签名")])])])]),v("h2",{attrs:{id:"_3-2-异步通知报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-异步通知报文","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2. 异步通知报文")]),v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),v("th",[t._v("名称")]),v("th",[t._v("长度")]),v("th",[t._v("类型")]),v("th",[t._v("参数名称")]),v("th",[t._v("备注")])])]),v("tbody",[v("tr",[v("td",[t._v("1")]),v("td",[t._v("版本号")]),v("td",[t._v("12")]),v("td",[t._v("文本")]),v("td",[t._v("version")]),v("td",[t._v("统一填写为“VER000000002”")])]),v("tr",[v("td",[t._v("2")]),v("td",[t._v("字符集编码")]),v("td",[t._v("6")]),v("td",[t._v("文本")]),v("td",[t._v("charSet")]),v("td",[t._v("统一填写为“UTF-8”")])]),v("tr",[v("td",[t._v("3")]),v("td",[t._v("交易类型")]),v("td",[t._v("4")]),v("td",[t._v("文本")]),v("td",[t._v("transType")]),v("td",[t._v("消费交易填写“PURC”")])]),v("tr",[v("td",[t._v("4")]),v("td",[t._v("订单号")]),v("td",[t._v("60")]),v("td",[t._v("文本")]),v("td",[t._v("orderNum")]),v("td",[t._v("商户自行定义，需保证同一商户号下订单号不能重复")])]),v("tr",[v("td",[t._v("5")]),v("td",[t._v("订单金额")]),v("td",[t._v("12")]),v("td",[t._v("文本")]),v("td",[t._v("orderAmount")]),v("td",[t._v("如 100 元，表示为 100 或 100.00")])]),v("tr",[v("td",[t._v("6")]),v("td",[t._v("订单币种")]),v("td",[t._v("3")]),v("td",[t._v("文本")]),v("td",[t._v("orderCurrency")]),v("td",[t._v('人民币填写“CNY”,美元填写"USD"')])]),v("tr",[v("td",[t._v("7")]),v("td",[t._v("清算金额")]),v("td",[t._v("12")]),v("td",[t._v("文本")]),v("td",[t._v("settAmount")]),v("td",[t._v("如 100 元，表示为 100 或 100.00")])]),v("tr",[v("td",[t._v("8")]),v("td",[t._v("清算币种")]),v("td",[t._v("3")]),v("td",[t._v("文本")]),v("td",[t._v("settCurrency")]),v("td",[t._v("符合 ISO 标准，填写数字类型")])]),v("tr",[v("td",[t._v("9")]),v("td",[t._v("清算汇率")]),v("td",[t._v("7")]),v("td",[t._v("文本")]),v("td",[t._v("rate")]),v("td",[t._v("实际汇率，7 位有效数字")])]),v("tr",[v("td",[t._v("10")]),v("td",[t._v("商户预留字段")]),v("td",[t._v("1024")]),v("td",[t._v("文本")]),v("td",[t._v("merReserve")]),v("td",[t._v("商户预留内容，可传任意内容，如购买商品信息、员号等，但不要传特殊符号，如逗号。")])]),v("tr",[v("td",[t._v("11")]),v("td",[t._v("GW 交易 ID")]),v("td",[t._v("32")]),v("td",[t._v("文本")]),v("td",[t._v("transID")]),v("td",[t._v("GW 系统生成的交易 ID，每笔交易保持唯一")])]),v("tr",[v("td",[t._v("12")]),v("td",[t._v("商户代码")]),v("td",[t._v("15")]),v("td",[t._v("文本")]),v("td",[t._v("merID")]),v("td",[t._v("商户 ID，由AllPay 分配")])]),v("tr",[v("td",[t._v("13")]),v("td",[t._v("收单行 ID")]),v("td",[t._v("11")]),v("td",[t._v("文本")]),v("td",[t._v("acqID")]),v("td",[t._v('收单行 ID "99020344"')])]),v("tr",[v("td",[t._v("14")]),v("td",[t._v("支付渠道代码")]),v("td",[t._v("10")]),v("td",[t._v("文本")]),v("td",[t._v("paymentSchema")]),v("td",[t._v('渠道代码：微信：WX, 支付报"APMP",银联 "UP"')])]),v("tr",[v("td",[t._v("15")]),v("td",[t._v("交易应答码")]),v("td",[t._v("2")]),v("td",[t._v("文本")]),v("td",[t._v("RespCode")]),v("td",[t._v("应答码 00-成功")])]),v("tr",[v("td",[t._v("16")]),v("td",[t._v("应答文字信息")]),v("td",[t._v("20")]),v("td",[t._v("文本")]),v("td",[t._v("RespMsg")]),v("td",[t._v("应答消息，全部为英文字符")])]),v("tr",[v("td",[t._v("17")]),v("td",[t._v("交易时间")]),v("td",[t._v("14")]),v("td",[t._v("文本")]),v("td",[t._v("transTime")]),v("td",[t._v('交易时间,格式:"yyyyMMddHHmmss"')])]),v("tr",[v("td",[t._v("18")]),v("td",[t._v("GW 处理时间")]),v("td",[t._v("14")]),v("td",[t._v("文本")]),v("td",[t._v("GWTime")]),v("td",[t._v("YYYYMMDDHHMMSS，为 GW 时间，目前为本地交易时间")])]),v("tr",[v("td",[t._v("19")]),v("td",[t._v("签名类型")]),v("td",[t._v("3")]),v("td",[t._v("文本")]),v("td",[t._v("signType")]),v("td",[t._v("MD5")])]),v("tr",[v("td",[t._v("20")]),v("td",[t._v("签名")]),v("td",[t._v("32")]),v("td",[t._v("文本")]),v("td",[t._v("signature")]),v("td",[t._v("采用 MD5 签名")])])])]),v("h2",{attrs:{id:"_3-3-查询交易接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-查询交易接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.3. 查询交易接口")]),v("ol",[v("li",[t._v("接口说明")])]),v("p",[t._v("该接口为接入商家提供交易查询的功能。")]),v("ol",{attrs:{start:"2"}},[v("li",[t._v("请求报文格式")])]),v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),v("th",[t._v("名称")]),v("th",[t._v("长度")]),v("th",[t._v("类型")]),v("th",[t._v("参数名称")]),v("th",[t._v("备注")])])]),v("tbody",[v("tr",[v("td",[t._v("1")]),v("td",[t._v("版本号")]),v("td",[t._v("12")]),v("td",[t._v("文本")]),v("td",[t._v("version")]),v("td",[t._v("统一填写为“VER000000002”")])]),v("tr",[v("td",[t._v("2")]),v("td",[t._v("字符集编码")]),v("td",[t._v("6")]),v("td",[t._v("文本")]),v("td",[t._v("charSet")]),v("td",[t._v("统一填写为“UTF-8”")])]),v("tr",[v("td",[t._v("3")]),v("td",[t._v("交易类型")]),v("td",[t._v("4")]),v("td",[t._v("文本")]),v("td",[t._v("transType")]),v("td",[t._v("查询填写“INQY”")])]),v("tr",[v("td",[t._v("4")]),v("td",[t._v("订单号")]),v("td",[t._v("60")]),v("td",[t._v("文本")]),v("td",[t._v("orderNum")]),v("td",[t._v("商户自行定义，需保证同一商户号下订单号不能重复")])]),v("tr",[v("td",[t._v("5")]),v("td",[t._v("商户预留字段")]),v("td",[t._v("1024")]),v("td",[t._v("文本")]),v("td",[t._v("merReserve")]),v("td",[t._v("商户保留")])]),v("tr",[v("td",[t._v("6")]),v("td",[t._v("商户代码")]),v("td",[t._v("15")]),v("td",[t._v("文本")]),v("td",[t._v("merID")]),v("td",[t._v("商户 ID，由AllPay 分配")])]),v("tr",[v("td",[t._v("7")]),v("td",[t._v("收单行 ID")]),v("td",[t._v("11")]),v("td",[t._v("文本")]),v("td",[t._v("acqID")]),v("td",[t._v('收单行 ID "99020344"')])]),v("tr",[v("td",[t._v("8")]),v("td",[t._v("支付渠道代码")]),v("td",[t._v("10")]),v("td",[t._v("文本")]),v("td",[t._v("paymentSchema")]),v("td",[t._v('渠道代码："WX')])]),v("tr",[v("td",[t._v("9")]),v("td",[t._v("交易时间")]),v("td",[t._v("14")]),v("td",[t._v("文本")]),v("td",[t._v("transTime")]),v("td",[t._v('交易时间,格式:"yyyyMMddHHmmss"')])]),v("tr",[v("td",[t._v("10")]),v("td",[t._v("签名类型")]),v("td",[t._v("3")]),v("td",[t._v("文本")]),v("td",[t._v("signType")]),v("td",[t._v("MD5")])]),v("tr",[v("td",[t._v("11")]),v("td",[t._v("签名")]),v("td",[t._v("32")]),v("td",[t._v("文本")]),v("td",[t._v("signature")]),v("td",[t._v("采用 MD5 签名")])])])]),v("ol",{attrs:{start:"3"}},[v("li",[t._v("响应报文格式")])]),v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),v("th",[t._v("名称")]),v("th",[t._v("长度")]),v("th",[t._v("类型")]),v("th",[t._v("参数名称")]),v("th",[t._v("备注")])])]),v("tbody",[v("tr",[v("td",[t._v("1")]),v("td",[t._v("版本号")]),v("td",[t._v("12")]),v("td",[t._v("文本")]),v("td",[t._v("version")]),v("td",[t._v("统一填写为“VER000000002”")])]),v("tr",[v("td",[t._v("2")]),v("td",[t._v("字符集编码")]),v("td",[t._v("6")]),v("td",[t._v("文本")]),v("td",[t._v("charSet")]),v("td",[t._v("统一填写为“UTF-8”")])]),v("tr",[v("td",[t._v("3")]),v("td",[t._v("交易类型")]),v("td",[t._v("4")]),v("td",[t._v("文本")]),v("td",[t._v("transType")]),v("td",[t._v("查询交易填写为“INQY")])]),v("tr",[v("td",[t._v("4")]),v("td",[t._v("订单号")]),v("td",[t._v("60")]),v("td",[t._v("文本")]),v("td",[t._v("orderNum")]),v("td",[t._v("商户自行定义，需保证同一商户号下订单号不能重复")])]),v("tr",[v("td",[t._v("5")]),v("td",[t._v("GW 交易 ID")]),v("td",[t._v("32")]),v("td",[t._v("文本")]),v("td",[t._v("transID")]),v("td",[t._v("GW 系统生成的交易 ID，每笔交易保持唯一")])]),v("tr",[v("td",[t._v("6")]),v("td",[t._v("商户代码")]),v("td",[t._v("15")]),v("td",[t._v("文本")]),v("td",[t._v("merID")]),v("td",[t._v("商户 ID，由AllPay 分配")])]),v("tr",[v("td",[t._v("7")]),v("td",[t._v("收单行 ID")]),v("td",[t._v("11")]),v("td",[t._v("文本")]),v("td",[t._v("acqID")]),v("td",[t._v('收单行 ID "99020344"')])]),v("tr",[v("td",[t._v("8")]),v("td",[t._v("交易应答码")]),v("td",[t._v("2")]),v("td",[t._v("文本")]),v("td",[t._v("RespCode")]),v("td",[t._v("应答码 00-成功")])]),v("tr",[v("td",[t._v("9")]),v("td",[t._v("应答文字信息")]),v("td",[t._v("20")]),v("td",[t._v("文本")]),v("td",[t._v("RespMsg")]),v("td",[t._v("应答消息，全部为英文字符")])]),v("tr",[v("td",[t._v("10")]),v("td",[t._v("交易时间")]),v("td",[t._v("14")]),v("td",[t._v("文本")]),v("td",[t._v("transTime")]),v("td",[t._v('交易时间,格式:"yyyyMMddHHmmss"')])]),v("tr",[v("td",[t._v("11")]),v("td",[t._v("GW 处理时间")]),v("td",[t._v("14")]),v("td",[t._v("文本")]),v("td",[t._v("GWTime")]),v("td",[t._v("YYYYMMDDHHMMSS，为 GW 时间，目前为本地交易时间")])]),v("tr",[v("td",[t._v("12")]),v("td",[t._v("签名类型")]),v("td",[t._v("3")]),v("td",[t._v("文本")]),v("td",[t._v("signType")]),v("td",[t._v("MD5")])]),v("tr",[v("td",[t._v("13")]),v("td",[t._v("签名")]),v("td",[t._v("32")]),v("td",[t._v("文本")]),v("td",[t._v("signature")]),v("td",[t._v("采用 MD5 签名")])])])]),v("h2",{attrs:{id:"_3-4-退款交易接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-退款交易接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.4. 退款交易接口")]),v("p",[t._v("1.接口功能说明")]),v("p",[t._v("该接口为接入商家提供交易退款的功能。")]),v("p",[t._v("2.请求报文格式")]),v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),v("th",[t._v("名称")]),v("th",[t._v("长度")]),v("th",[t._v("类型")]),v("th",[t._v("参数名称")]),v("th",[t._v("备注")])])]),v("tbody",[v("tr",[v("td",[t._v("1")]),v("td",[t._v("版本号")]),v("td",[t._v("12")]),v("td",[t._v("文本")]),v("td",[t._v("version")]),v("td",[t._v("统一填写为“VER000000002”")])]),v("tr",[v("td",[t._v("2")]),v("td",[t._v("字符集编码")]),v("td",[t._v("6")]),v("td",[t._v("文本")]),v("td",[t._v("charSet")]),v("td",[t._v("统一填写为“UTF-8”")])]),v("tr",[v("td",[t._v("3")]),v("td",[t._v("交易类型")]),v("td",[t._v("4")]),v("td",[t._v("文本")]),v("td",[t._v("transType")]),v("td",[t._v("退款填写“REFD”")])]),v("tr",[v("td",[t._v("4")]),v("td",[t._v("订单号")]),v("td",[t._v("60")]),v("td",[t._v("文本")]),v("td",[t._v("orderNum")]),v("td",[t._v("商户自行定义，需保证同一商户号下订单号不能重复")])]),v("tr",[v("td",[t._v("5")]),v("td",[t._v("退款金额")]),v("td",[t._v("12")]),v("td",[t._v("文本")]),v("td",[t._v("returnAmount")]),v("td",[t._v("如 100 元，表示为 100 或 100.00")])]),v("tr",[v("td",[t._v("6")]),v("td",[t._v("订单币种")]),v("td",[t._v("3")]),v("td",[t._v("文本")]),v("td",[t._v("orderCurrency")]),v("td",[t._v('人民币填写“CNY”,美元填写"USD"')])]),v("tr",[v("td",[t._v("7")]),v("td",[t._v("商户预留字段")]),v("td",[t._v("1024")]),v("td",[t._v("文本")]),v("td",[t._v("merReserve")]),v("td",[t._v("商户预留内容，可传任意内容，如购买商品信息、员号等，但不要传特殊符号，如逗号。")])]),v("tr",[v("td",[t._v("8")]),v("td",[t._v("商户代码")]),v("td",[t._v("15")]),v("td",[t._v("文本")]),v("td",[t._v("merID")]),v("td",[t._v("商户 ID，由AllPay 分配")])]),v("tr",[v("td",[t._v("9")]),v("td",[t._v("收单行 ID")]),v("td",[t._v("11")]),v("td",[t._v("文本")]),v("td",[t._v("acqID")]),v("td",[t._v('收单行 ID "99020344"')])]),v("tr",[v("td",[t._v("10")]),v("td",[t._v("支付渠道代码")]),v("td",[t._v("10")]),v("td",[t._v("文本")]),v("td",[t._v("paymentSchema")]),v("td",[t._v('渠道代码："WX')])]),v("tr",[v("td",[t._v("11")]),v("td",[t._v("交易时间")]),v("td",[t._v("14")]),v("td",[t._v("文本")]),v("td",[t._v("transTime")]),v("td",[t._v('交易时间,格式:"yyyyMMddHHmmss"')])]),v("tr",[v("td",[t._v("12")]),v("td",[t._v("签名类型")]),v("td",[t._v("3")]),v("td",[t._v("文本")]),v("td",[t._v("signType")]),v("td",[t._v("MD5")])]),v("tr",[v("td",[t._v("13")]),v("td",[t._v("签名")]),v("td",[t._v("32")]),v("td",[t._v("文本")]),v("td",[t._v("signature")]),v("td",[t._v("采用 MD5 签名")])])])]),v("p",[t._v("3.响应报文格式")]),v("table",[v("thead",[v("tr",[v("th",[t._v("序号")]),v("th",[t._v("名称")]),v("th",[t._v("长度")]),v("th",[t._v("类型")]),v("th",[t._v("参数名称")]),v("th",[t._v("备注")])])]),v("tbody",[v("tr",[v("td",[t._v("1")]),v("td",[t._v("版本号")]),v("td",[t._v("12")]),v("td",[t._v("文本")]),v("td",[t._v("version")]),v("td",[t._v("统一填写为“VER000000002”")])]),v("tr",[v("td",[t._v("2")]),v("td",[t._v("字符集编码")]),v("td",[t._v("6")]),v("td",[t._v("文本")]),v("td",[t._v("charSet")]),v("td",[t._v("统一填写为“UTF-8”")])]),v("tr",[v("td",[t._v("3")]),v("td",[t._v("交易类型")]),v("td",[t._v("4")]),v("td",[t._v("文本")]),v("td",[t._v("transType")]),v("td",[t._v("退款填写“REFD”")])]),v("tr",[v("td",[t._v("4")]),v("td",[t._v("订单号")]),v("td",[t._v("60")]),v("td",[t._v("文本")]),v("td",[t._v("orderNum")]),v("td",[t._v("商户自行定义，需保证同一商户号下订单号不能重复")])]),v("tr",[v("td",[t._v("5")]),v("td",[t._v("GW 交易 ID")]),v("td",[t._v("32")]),v("td",[t._v("文本")]),v("td",[t._v("transID")]),v("td",[t._v("GW 系统生成的交易 ID，每笔交易保持唯一")])]),v("tr",[v("td",[t._v("6")]),v("td",[t._v("商户代码")]),v("td",[t._v("15")]),v("td",[t._v("文本")]),v("td",[t._v("merID")]),v("td",[t._v("商户 ID，由AllPay 分配")])]),v("tr",[v("td",[t._v("7")]),v("td",[t._v("收单行 ID")]),v("td",[t._v("11")]),v("td",[t._v("文本")]),v("td",[t._v("acqID")]),v("td",[t._v('收单行 ID "99020344"')])]),v("tr",[v("td",[t._v("8")]),v("td",[t._v("交易应答码")]),v("td",[t._v("2")]),v("td",[t._v("文本")]),v("td",[t._v("RespCode")]),v("td",[t._v("应答码 00-成功")])]),v("tr",[v("td",[t._v("9")]),v("td",[t._v("应答文字信息")]),v("td",[t._v("20")]),v("td",[t._v("文本")]),v("td",[t._v("RespMsg")]),v("td",[t._v("应答消息，全部为英文字符")])]),v("tr",[v("td",[t._v("10")]),v("td",[t._v("交易时间")]),v("td",[t._v("14")]),v("td",[t._v("文本")]),v("td",[t._v("transTime")]),v("td",[t._v('交易时间,格式:"yyyyMMddHHmmss"')])]),v("tr",[v("td",[t._v("11")]),v("td",[t._v("GW 处理时间")]),v("td",[t._v("14")]),v("td",[t._v("文本")]),v("td",[t._v("GWTime")]),v("td",[t._v("YYYYMMDDHHMMSS，为 GW 时间，目前为本地交易时间")])]),v("tr",[v("td",[t._v("12")]),v("td",[t._v("签名类型")]),v("td",[t._v("3")]),v("td",[t._v("文本")]),v("td",[t._v("signType")]),v("td",[t._v("MD5")])]),v("tr",[v("td",[t._v("13")]),v("td",[t._v("签名")]),v("td",[t._v("32")]),v("td",[t._v("文本")]),v("td",[t._v("signature")]),v("td",[t._v("采用 MD5 签名")])])])])])}],!1,null,null,null);_.default=r.exports}}]);