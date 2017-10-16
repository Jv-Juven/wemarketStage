module.exports = app => {
    return class MockController extends app.Controller {
        async index(ctx) {
            /**
             * 获取单一价格的酒店信息和房型数据
             * 订单填写页面使用
             * roomTypeId, mustPay, memberActCode, productType
             */
            /*
             * 入参：
             * brandId	String	Y	 	品牌ID	20151109
             * innId	String	Y	 	酒店ID	20151028
             * roomTypeId	String	N	 	房型ID	20151028
             * beginDate	long	Y	 	入住时间
             * endDate	long	Y	 	离店时间
             * memberActCode	String	N	 	活动编码	20160328新增
             * languageCode	String	N	0	语言编码 0：支持中文，1：支持英文	20170411新增
             * mustPay	String	N	 	1:预付 0：到付	20170504新增
             * channelCode String Y 渠道号
             */
            let oneDay = 60 * 60 * 24 * 1000;
            let data = {
                "msgCode": 100,
                "message": "请求成功",
                "result": {
                    "innId": "128", // 酒店Id,
                    "innName": "7天大酒店", // 酒店名称
                    "bookingInvoice": "0", // 预约发票开关
                    "invoiceType": "1,3", // 开具发票类型
                    "cityCode": "CA00252", // 酒店所在城市编码
                    "roomTypeId": "fangxingId", // 房型Id
                    "roomTypeName": "情侣爱爱房", // 房型名称
                    "canBooking": "true", // 是否可以预订
                    "bedType": "大床", // 床型
                    "window": "2", // 是否有窗(3内窗2部分无窗1 是 0 否)
                    "area": "30", // 面积
                    "smallImage": "[url]", // 房型图片列表，小图
                    "bigImages": ["[url]"], // 房型图片列表， 大图
                    "haveBreakfast": "1", // 是否有早餐1是0否,
                    "addBed": "1", // 是否可加床1是0否
                    "maxCheckIn": "8", // 最多入住人数
                    "floor": "5", // 楼层
                    "facilityList": [{
                        "code": "", // 房型设备编码
                        "facName": "无线空调，无线电视，自动按摩机" // 房型设备名称
                    }],
                    "description": "", // 房型描述   维也纳可能缺少 window/area/bedType 等数据，直接设置为简介
                    "roomRate": {
                        "roomRateCode": "ADC2218", // 房价编码
                        "roomRateName": "", // 房价名称

                        "mustPay": "1", // 是都需要预付   true:需要预付,false:无需预付
                        "returnPoint": "25", // 返回积分
                        "actCode": "", // 活动编码
                        "actLabel": "", // 活动标签
                        "actTagDesc": "", // 活动标签描述
                        "mustSelf": "1", // 是否必须本人入住
                        "couponId": "1584", // 优惠券Id
                        "couponName": "抵用券", // 优惠券名称
                        "addBusType": "1", // 优惠券类型
                        "couponAmount": "33", // 优惠券面额
                        "returnMoney": "22", // 返现金额
                        "productType": "1", // 商品类型 1 铂涛 2 商旅 3 酒景
                        "sourceType": "Xiruan", // 房态数据来源
                        "rates": [{
                            "endofday": Date.now(), // 时间戳
                            "sellingRate": "122", // 销售价
                            "breakfastCount": 2, //早餐份数
                            "breakfastPrice": 10, //早餐单价
                        }, {
                            "endofday": Date.now() + oneDay, // 时间戳
                            "sellingRate": "122", // 销售价
                            "breakfastCount": 2, //早餐份数
                            "breakfastPrice": 10, //早餐单价
                        }, {
                            "endofday": Date.now() + oneDay * 2, // 时间戳
                            "sellingRate": "122", // 销售价
                            "breakfastCount": 2, //早餐份数
                            "breakfastPrice": 10, //早餐单价
                        }, {
                            "endofday": Date.now() + oneDay * 3, // 时间戳
                            "sellingRate": "124", // 销售价
                            "breakfastCount": 2, //早餐份数
                            "breakfastPrice": 10, //早餐单价
                        }],

                        "canCancelBook": "2", // 是否可取消    0：不可取消；1：免费取消；2，限时取消
                        "timeLst": [{
                            "time": "2017-05-17 15:00:00",
                            "type": "0" //1需担保
                        }, {
                            "time": "2017-05-17 16:00:00",
                            "type": "0" //1需担保
                        }, {
                            "time": "2017-05-17 17:00:00",
                            "type": "0" //1需担保
                        }, {
                            "time": "2017-05-17 18:00:00",
                            "type": "0" //1需担保
                        }, {
                            "time": "2017-05-17 19:00:00",
                            "type": "1" //1需担保
                        }, {
                            "time": "2017-05-17 20:00:00",
                            "type": "1" //1需担保
                        }, {
                            "time": "2017-05-17 21:00:00",
                            "type": "1" //1需担保
                        }],
                        "liveRule": {
                            "cancelType": "1", // 取消类型（具体值解释找后端）
                            "cancelDateTime": "1497520800000", // 可取消时间
                            "arriveDateTime": "1497675600000", // 到店时间
                            "leaveDateTime": "1497675600000", // 离店时间
                            "penaltyPolicy": "收取罚金" // 罚金政策，直接返回文字，前端直接展示
                        }
                    },
                    "balance": "561.00", // 用户储值
                    "countryCode": "11254", // 设置国家编码 海外需要
                    "timeZone": "8", // 时区 海外需要
                    "canSelectRoom": "true", // 是否支持在线选房
                    "country": 0, // 海内外标识 0：国内；1：海外
                }
            }
            ctx.body = data;
        }
        async memberInfo(ctx) {
            let data = {
                msgCode: 100,
                message: '获取会员信息成功',
                result: {
                    memberId: '1232646', // 会员id
                    memberName: '梁德远', // 联系人姓名（会员姓名）
                    mobile: '13455694895', // 会员手机号
                    idCard: '420121198508052232', // 会员身份证
                    idCardType: '10', // 会员证件类型
                    sex: '1', // 性别【0：未知，1：男，2：女】
                    email: '123@qq.com', // 会员邮箱
                    lastName: 'liang', // 会员英文姓
                    firstName: 'deyuan', // 会员英文名
                    memberType: '11', // 会员类型
                    updateIDCard: '1', // 【0：不能修改，1可修改
                    updateMemberName: '1', // 【0：不能修改，1可修改
                }
            }
            ctx.body =  data;
        }
        async updateMember(ctx) {
            let data = {
                msgCode: 100,
                message: '修改成功',
                result: null
            }
            ctx.body = data;
        }
        async sn(ctx) {
            let data = {
                msgCode: 100,
                message: '获取SN码成功',
                result: '156448754511'
            }
            ctx.body = data;
        }
        async orderSuccess(ctx) {
            let data = {
                "msgCode": "100",
                "message": "预订成功数据请求成功",
                "result": {
                    "orderCode": "101000134295", //订单编码
                    "innBrand": "1", //酒店品牌
                    "innName": "7day长沙定王台", //酒店名称 （国内酒店返回中文名称，海外酒店返回英文名称）
                    "checkInDateBegin": Date.now(), //入住开始日期
                    "checkInDateEnd": Date.now() + 60 * 60 * 24 * 1000, //入住结束日期
                    "roomTypeName": "亲子多床房", //房型名称
                    "night": "2", //房晚

                    "payRate": "450", // 订单总金额
                    "guestsName": "龙耀翔", // 预订人姓名
                    "overSea": false, // 是否海外订单
                    "payState": 1, // 支付状态
                    "payType": 1, // 支付类型
                    "canPay": true, // 是否可以支付
                    "payMethod": "",
                    "orderType": 1, // 订单类型
                    "orderCreateTime": Date.now(), // 订单创建时间
                    "canSelectRoom": true, // 是否支持在线选房
                    "innId": "128", // 预订的酒店id
                    "smartHotel": 1, // 是否智能酒店
                    "smartHotelIcon": "http://www.plateno.cc/pages/group/images/trip.png", // 智能酒店icon图片地址
                    // "在线选房的接口这个有疑意，我认为是调用晓峰那边的接口":{},
                    "indexUrl": "http://plateno.com", //铂物馆首页地址
                    //铂物馆产品列表
                    "travelProductList": [{
                        "productId": 0, //商品ID
                        "priceType": "", // 价格类型：1-抢购活动 2-积分+钱活动
                        "title": "雨伞", //商品名称
                        "imgPath": "http://www.plateno.cc/pages/group/images/trip.png", //商品图片地址
                        "regularPrice": "50.0", //正常价格 非活动时的售卖价格
                        "sellPrice": "46.0", //销售价格（当前价格）
                        "sellPoint": "生活中的时尚点缀", //产品卖点
                        "detailUrl": "http://plateno.com" //产品详情url
                    }, {
                        "productId": 0, //商品ID
                        "priceType": "", // 价格类型：1-抢购活动 2-积分+钱活动
                        "title": "收纳袋", //商品名称
                        "imgPath": "http://www.plateno.cc/pages/group/images/trip.png", //商品图片地址
                        "regularPrice": "150.0", //正常价格 非活动时的售卖价格
                        "sellPrice": "109.0", //销售价格（当前价格）
                        "sellPoint": "居家旅行必备", //产品卖点
                        "detailUrl": "http://plateno.com" //产品详情url
                    }]
                }
            }
            ctx.body = data;
        }
        async prepareCancel(ctx) {
            let {
                orderCode
            } = ctx.request.query;
            let data = {
                "msgCode": "100",
                "message": "校验成功",
                "result": {
                    "orderCode": orderCode, //订单编码
                    "canCancelBook": 0, //订单可否取消
                    "canCancelTime": Date.now(), //订单最晚可取消时间
                    "manualCancelTime": 0, //需要转人工取消的时间
                    "money": 120, //罚金值
                    "cancelType": 0, //取消类型 , 0 免费取消，1 有偿取消，2不可取消
                    "penaltyPolicy": "" //温馨提示
                }
            }
            ctx.body = data;
        }
        async tiedSelleGoods(ctx) {
            let data = {
                "msgCode": "100",
                "message": "请求成功",
                "result": {
                    "insuranceInfos": [{
                        "productId": 1,
                        "productName": "酒店取消险",
                        "premiumMode": 2,
                        "premiumValue": 5,
                        "coverageMode": 2,
                        "coverageValue": 90,
                        "insureType": 1,
                        "maxQuantity": 1,
                        "detailUrl": "http://10.100.112.197:8089/insurance.html#/notices",
                        "isOpen": 1
                    }],
                    "goodsInfos": [
                        {
                            "title": "毛巾套餐",
                            "sellPrice": 9800,
                            "maxQuantity": 3,
                            "imgPath": "http://bpic.588ku.com/element_origin_min_pic/16/10/28/94eb15c833a25801d2b70ceb7fef7edc.jpg",
                            "goodsId": Math.floor(Math.random() * 10000),
                            "detailUrl": "http://plateno.com"
                        }, 
                        {
                            "title": "饮水杯",
                            "sellPrice": 5900,
                            "maxQuantity": 6,
                            "imgPath": "http://bpic.588ku.com/element_origin_min_pic/16/10/28/94eb15c833a25801d2b70ceb7fef7edc.jpg",
                            "goodsId": Math.floor(Math.random() * 10000),
                            "detailUrl": "http://plateno.com"
                        }, 
                        {
                            "title": "火柴盒",
                            "sellPrice": 900,
                            "maxQuantity": 10,
                            "imgPath": "http://bpic.588ku.com/element_origin_min_pic/16/10/28/94eb15c833a25801d2b70ceb7fef7edc.jpg",
                            "goodsId": Math.floor(Math.random() * 10000),
                            "detailUrl": "http://plateno.com"
                        }
                    ],
                    "couponInfos": [{
                        "couponId": Math.floor(Math.random() * 10000),
                        "couponType": 3,
                        "title": "10超值套餐券",
                        "imgPath": "http://bpic.588ku.com/element_origin_min_pic/16/10/28/94eb15c833a25801d2b70ceb7fef7edc.jpg",
                        "sellPrice": 950,
                        "detailUrl": "http://baidu.com"
                    }, {
                        "couponId": Math.floor(Math.random() * 10000),
                        "couponType": 3,
                        "title": "30超值套餐券",
                        "imgPath": "http://bpic.588ku.com/element_origin_min_pic/16/10/28/94eb15c833a25801d2b70ceb7fef7edc.jpg",
                        "sellPrice": 2700,
                        "detailUrl": "http://baidu.com"
                    }, {
                        "couponId": Math.floor(Math.random() * 10000),
                        "couponType": 3,
                        "title": "40超值套餐券",
                        "imgPath": "http://bpic.588ku.com/element_origin_min_pic/16/10/28/94eb15c833a25801d2b70ceb7fef7edc.jpg",
                        "sellPrice": 3500,
                        "detailUrl": "http://baidu.com"
                    }, {
                        "couponId": Math.floor(Math.random() * 10000),
                        "couponType": 3,
                        "title": "60超值套餐券",
                        "imgPath": "http://bpic.588ku.com/element_origin_min_pic/16/10/28/94eb15c833a25801d2b70ceb7fef7edc.jpg",
                        "sellPrice": 5000,
                        "detailUrl": "http://baidu.com"
                    }, {
                        "couponId": Math.floor(Math.random() * 10000),
                        "couponType": 6,
                        "title": "援建彩虹希望小学",
                        "imgPath": "http://bpic.588ku.com/element_origin_min_pic/16/10/28/94eb15c833a25801d2b70ceb7fef7edc.jpg",
                        "sellPrice": 100,
                        "detailUrl": "http://baidu.com/donate",
                        "description": "彩虹希望小学，是由中国青少年发展基金会联合铂涛集团创新工艺激进为提升贫困地区教育水平而举报的公益事业。"
                    }]
                }
            }
            ctx.body = data;
        }
        async orderDetail(ctx) {
            let data = {
                "msgCode": "100",
                "message": "请求成功",
                "result": {
                    "id": 0,
                    "orderCode": "101002191047",
                    "chainId": "1054",
                    "thirdRoomtypeId": "STTW",
                    "innId": "JJ1054",
                    "innName": "锦江虹桥宾馆",
                    "bkName": null,
                    "bkMebId": 0,
                    "bkMobile": null,
                    "bkEmail": null,
                    "bkMebType": 0,
                    "bkCardNo": "13535010640",
                    "bkPropertyId": 0,
                    "bkProtypeId": 0,
                    "contactName": "注册会员",
                    "contactPhone": "13535010640",
                    "contactEmail": null,
                    "guestsName": "注册会员",
                    "guestsNum": 1,
                    "bkIp": null,
                    "supplierId": 2,
                    "assureType": 2,
                    "assureMebPoint": 0,
                    "sourceType": 105,
                    "innerRemarks": "",
                    "remarks": "联系人：注册会员　　联系方式：13535010640",
                    "orderState": 1,
                    "activityCode": "",
                    "sellerId": 309488,
                    "payState": 1,
                    "canCancel": 1,
                    "needInvoice": 0,
                    "roomTypeId": "STTW",
                    "roomTypeName": "高级双床房",
                    "payType": 1,
                    "origRate": 853.0,
                    "totalRate": 853.0,
                    "payRate": 853.0,
                    "payRateUs": 124.0,
                    "discPrice": 0.0,
                    "rateCode": "JCC",
                    "origArrDate": "2017-07-12 18:00:00",
                    "origDepDate": "2017-07-13 12:00:00",
                    "arrDate": null,
                    "depDate": null,
                    "createTime": "2017-07-12 15:36:22",
                    "dayLength": 1,
                    "roomQty": 1,
                    "canCancelTime": "2017-07-13 12:00:00",
                    "keepDate": "2017-07-13 12:00:00",
                    "chargedRate": 0.0,
                    "channelSourceType": 1,
                    "roomSourceType": "JinJiang",
                    "invoice": null,
                    "lastOrderCode": null,
                    "cityCode": "AR04567",
                    "lstAccounts": null,
                    "lstRoomNos": null,
                    "innEngName": "锦江虹桥宾馆",
                    "roomTypeEngName": "高级双床房",
                    "bkLastName": null,
                    "bkFirstName": null,
                    "countryCode": "AR01438",
                    "preference": null,
                    "timeZone": "GMT+8",
                    "currency": "CNY",
                    "overtimeState": 0,
                    "accState": 0,
                    "lstGuests": [{
                        "name": "注册会员",
                        "sex": null,
                        "doctType": 0,
                        "doctNo": "",
                        "mobile": null,
                        "tel": null,
                        "remark": null,
                        "lastName": "",
                        "firstName": "",
                        "countryCode": null,
                        "age": 0,
                        "isAdult": "",
                        "email": ""
                    }],
                    "refundedRate": 0,
                    "ticketRate": 0,
                    "lstLogs": [{
                        "orderCode": "101002191047",
                        "status": 1,
                        "statusType": 1,
                        "statusDesc": "预订成功",
                        "remark": "预付订单预订成功，等待30分钟内付款",
                        "createTime": "2017-07-12 15:36:24",
                        "createOprt": 1
                    }, {
                        "orderCode": "101002191047",
                        "status": 1,
                        "statusType": 2,
                        "statusDesc": "已付款",
                        "remark": "预付订单支付成功，支付金额:853元 ",
                        "createTime": "2017-07-12 15:36:29",
                        "createOprt": 1
                    }],
                    "minPayRate": null,
                    "minLiveDays": 0,
                    "businessMebId": 0,
                    "businessMebType": 0,
                    "orderType": 6,
                    "saleType": 1,
                    "lstSubOrders": [{
                        "orderCode": "101002202653",
                        "thirdOrderCode": "1506947",
                        "innId": "451",
                        "payAmount": 199.0,
                        "thirdOrderState": 1,
                        "payState": 1,
                        "subOrderType": 0,
                        "stateDesc": null,
                        "guestName": "天津至",
                        "subOrderName": "高级大床房",
                        "num": 1
                    }, {
                        "orderCode": "101002202653",
                        "thirdOrderCode": "1506948",
                        "innId": "451",
                        "payAmount": 199.0,
                        "thirdOrderState": 2,
                        "payState": 2,
                        "subOrderType": 0,
                        "stateDesc": null,
                        "guestName": "天津至",
                        "subOrderName": "高级大床房",
                        "num": 1
                    }, {
                        thirdOrderState: 3,
                        subOrderType: 1,
                        payAmount: 7,
                        subOrderName: '安心订',
                        num: 1
                    }, {
                        thirdOrderState: 3,
                        subOrderType: 2,
                        payAmount: 10,
                        subOrderName: '10元超值套餐',
                        num: 5
                    }, {
                        thirdOrderState: 3,
                        subOrderType: 3,
                        payAmount: 100,
                        subOrderName: '毛巾套餐',
                        num: 1
                    }, {
                        thirdOrderState: 3,
                        subOrderType: 6,
                        payAmount: 1,
                        subOrderName: '援助彩虹希望小学',
                        num: 1
                    }],
                    "changeState": "0",
                    "gOrderNo": "O1501572539937402666",
                    "cancelRoomNum": 0,
                    "businessType": 0,
                    "cancelRule": "[{\"start\":\"1970-01-01 08:00:00\",\"end\":\"2017-07-12 18:00:00\",\"cancelType\":0,\"type\":null,\"value\":null,\"money\":0},{\"start\":\"2017-07-12 18:00:01\",\"end\":\"2017-07-13 12:00:00\",\"cancelType\":1,\"type\":0,\"value\":1,\"money\":853.0}]",
                    "manualCancelTime": "2017-07-12 00:00:00",
                    "manualCancelDateTime": 1499788800000,
                    "guestAmount": 2,
                    "supportCancel": 2,
                    "cancelable": true,
                    "canPay": false,
                    "canDel": false,
                    "mustPay": true,
                    "canComment": false,
                    "canRefund": true,
                    "chainAddress": "上海市长宁区延安西路2000号",
                    "chainTel": "86-21-627533880000",
                    "couponAmount": 0.0,
                    "chainLat": 31.20995132809271,
                    "chainLng": 121.4174075119656,
                    "chainGLat": 31.203933,
                    "chainGLng": 121.410908,
                    "payMoneyType": "储值支付",
                    "roomNo": null,
                    "title": "待入住",
                    "titleRemark": "您已预订成功，房间将为你保留整晚",
                    "orderCreateTime": 1499844982000,
                    "serverTime": 1499845014445,
                    "serviceTel": "4008740087",
                    "actId": null,
                    "origArrTime": 1499853600000,
                    "origDepTime": 1499918400000,
                    "arrTime": 0,
                    "depTime": 0,
                    "keepTime": 1499918400000,
                    "overSea": false,
                    "business": false,
                    "warmTips": "温馨提示：酒店于住店当天12:00办理入住，离店当天12:00办理退房，如您在12:00前到达，可能需要等待方能入住，具体以酒店安排为准。",
                    "cashAmount": 53.0,
                    "payMethod": null,
                    "canSelectRoom": false,
                    "allRoomSelected": false,
                    "roomSelected": false,
                    "smartHotel": 0,
                    "bookingInvoice": 0,
                    "invoiceType": "0",
                    "smartHotelIcon": null,
                    "orderInvoiceStatus": 1,
                    "refundDay": null,
                    "refundCurrency": 0.0,
                    "refundCash": 0.0,
                    "bundleOrderUrl": "http://10.100.112.197:8089/insurance/insurance.html#/",
                    "bundleDetailUrl": "http://10.100.112.197:8089/order/index.html#/",
                    "insuranceButton": false,
                    "night": 1,
                    "concatLastName": null,
                    "concatFirstName": null,
                    "lstOrderGift": null,
                    "warmPrompt": {
                        "cancelDateTime": 1499918400000,
                        "arriveDateTime": 0,
                        "leaveDateTime": 1499918400000,
                        "penaltyPolicy": "收取首晚房费",
                        "freeCancel": 1
                    },
                    "hotelSourceType": "JinJiangStar",
                    "invoiceName": null,
                    "cityId": "AR04567",
                    "chainImg": "http://images.test.hubs1.net/images/3eb5480c7f9b932b_200_150.jpg",
                    "payChanName": "微信支付"
                }
            }
            ctx.body = data;
        }
    }
}