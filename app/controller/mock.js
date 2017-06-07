module.exports = app => {
    return class MockController extends app.Controller {
        async roomRate(ctx) {
            console.log(ctx.request);
            // ctx.set('Access-Control-Allow-Origin', 'http://10.100.31.217:8888')
            // ctx.set('Access-Control-Expose-Headers','Set-Cookie')
            // ctx.set('Access-Control-Allow-Methods','GET, POST, PUT,OPTIONS')
            // ctx.set('Access-Control-Allow-Credentials', true)
            // ctx.set('Access-Control-Allow-Headers', '*');
            // ctx.set('Access-Control-Allow-Headers', 'token, Accept, x-csrf-token, X-Custom-Header, X-Requested-With, Origin, Content-Type, Authorization');
            let data = {
                "msgCode": 100,
                "message": "请求成功",
                "result": {
                    "innId": "128",    // 酒店Id,
                    "innName": "7天大酒店",  // 酒店名称
                    "bookingInvoice": "0",   // 预约发票开关
                    "invoiceType": "0",  // 开具发票类型
                    "cityCode": "CA00252", // 酒店所在城市编码
                    "roomTypeId": "",   // 房型Id
                    "roomTypeName": "情侣爱爱房", // 房型名称
                    "canBooking": "true",   // 是否可以预订
                    "bedType": "大床",  // 床型
                    "window": "2",   // 是否有窗(3内窗2部分无窗1 是 0 否)
                    "area": "30",     // 面积
                    "smallImage": "[url]", // 房型图片列表，小图
                    "bigImages": ["[url]"],  // 房型图片列表， 大图
                    "haveBreakfast": "",    // 是否有早餐1是0否,
                    "addBed": "",   // 是否可加床1是0否
                    "sourceType": "",   // 房态数据来源
                    "maxCheckIn": "",   // 最多入住人数
                    "facilityList": [
                        {
                            "code": "",     // 房型设备编码
                            "name": ""      // 房型设备名称
                        }
                    ],
                    "description": "",  // 房型描述   维也纳可能缺少 window/area/bedType 等数据，直接设置为简介
                    "roomRate": {
                        "roomRateCode": "", // 房价编码
                        "roomRateName": "", // 房价名称
                        "originalRate": "252", // 原价
                        "sellingRate": "252",  // 销售价
                        "mustPay": "1",  // 是都需要预付   true:需要预付,false:无需预付
                        "returnPoint": "25",  // 返回积分
                        "actCode": "",  // 活动编码
                        "actLabel": "", // 活动标签
                        "actTagDesc": "",   // 活动标签描述
                        "mustSelf": "1", // 是否必须本人入住
                        "couponId": "1584", // 优惠券Id
                        "couponName": "抵用券",   // 优惠券名称
                        "addBusType": "1",   // 优惠券类型
                        "couponAmount": "33", // 优惠券面额
                        "returnMoney": "22",  // 返现金额
                        "productType": "1",  // 商品类型 1 铂涛 2 商旅 3 酒景

                		"canCancelBook": "0",    // 是否可取消    0：不可取消；1：免费取消；2，限时取消
                		"canCancelTime": "",   // 限时取消的取消时间
                		"arriveStartTime": "2017-05-17 15:00:00",	//到店开始时间
                		"assureStartTime":  "2017-05-17 18:00:00", //担保开始时间
                		"arriveEndTime": "2017-05-18 00:00:00",//到店结束时间
                		"liveRule":{
                			"checkIn": "12:00", // 入住时间点提示，日期用入住当天
                			"checkOut": "13:00" // 最晚离店时间。日期用离店日期
                		}
                    }
                }
            }
            ctx.body = data;
        }
    }
}
