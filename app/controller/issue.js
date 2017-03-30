module.exports = app => {
    return class IssueController extends app.Controller {
        async create (ctx) {
            let paramsData = ctx.request.body;
            // 验证函数
            let validator = ctx.validator();
            let errors = "";
            // 验证开始
            validator.valid(paramsData.goodsName, "minLength:1", "请输入物品名称");
            validator.valid(paramsData.goodsName, "maxLength:40", "请输入不多于40个字符的物品名称");
            validator.valid(paramsData.intro, "minLength:1", "请输入物品简介");
            validator.valid(paramsData.price, "isNumber", "请输入数字价格");
            validator.valid(paramsData.nickName, "minLength:1", "请输入昵称");
            if (this.contactWay == "1") {
                validator.valid(paramsData.contactNum, "isNumber", "请输入数字QQ号码");
                validator.valid(paramsData.contactNum, "minLength:1", "请输入QQ号码");
            } else {
                validator.valid(paramsData.contactNum, "minLength:1", "请输入微信号");
            }
            validator.valid(paramsData.phone, "isPhone", "手机号码有误，请重新填写");
            errors = validator.emitValid();
            // ctx.body = errors;
            // return;

            if (!errors[0]) {
                try {
                    // 数据库对象函数调用之后不返回Promise对象
                    let result = await app.mysql.insert('Issues', {
                        goodsName: paramsData.goodsName,
                        intro: paramsData.intro,
                        price: paramsData.price,
                        nickName: paramsData.nickName,
                        contactWay: paramsData.contactWay,
                        contactNum: paramsData.contactNum,
                        phone: paramsData.phone,
                        sellerRemarks: paramsData.sellerRemarks,
                        imgs: paramsData.imgs.join(",")
                    });

                    const insertSuccess = result.affectedRows === 1;

                    if (insertSuccess) {
                        ctx.body = {
                            errCode: 100,
                            errMsg: "发布信息成功"
                        }
                    } else {
                        ctx.body = {
                            errCode: 659,
                            errMsg: "数据插入失败"
                        }
                    }

                } catch (error) {
                    ctx.body = {
                        errCode: 660,
                        errMsg: "数据插入失败"
                    }
                }

            } else {
                ctx.body = {
                    errCode: 600,
                    errMsg: validator.errors[0]
                }
            }
        }
    }
}
