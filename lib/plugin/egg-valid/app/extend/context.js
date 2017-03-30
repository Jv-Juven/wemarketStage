/**
* 验证函数 ----- 策略模式
* (new Validator).valid()方法说明：添加验证
* 说明：
* @param {} value 验证的参数
* @param {String} ruleElement 验证规则（可自定义）
* @param {String} errMsg 错误提示信息
* (new Validator).emitValid() 参数：无  说明：触发验证并返回错误信息数据
* 参考：http://www.cnblogs.com/kongxianghai/p/4985122.html
* Validator类
* 规则：
* 1、是否字符串；
* 2、字符串长度；
* 3、是否数字；
* 4、数字范围；
* 5、是否对象；
* 6、对象里是否含有某个属性；
* 7、是否数组；
* 8、数组长度；
* 9、电话号码验证；
* 10、手机号码验证；
* 11、是否邮箱；
* @return {[Boolean]} [验证是否通过]
*/
module.exports = {
    validator() {
        console.log("之后");
        var Validator = function () {
            this.validators = []; // 验证队列
            this.errors = []; // 验证函数队列
            this.strategies = {}; // 实例对象的验证策略集合

            this.importStrategies(this.defaultStrategies); // 导入默认的验证策略
        }
        // 默认验证策略
        Validator.prototype.defaultStrategies = {
            // 字符串长度最小值
            minLength(value, length) {
                if (!value || value.length == 0) {
                    return false;
                } else {
                    return value.length >= length;
                }
            },
            // 字符串长度最大值
            maxLength(value, length) {
                if (!value || value.length == 0) {
                    return false;
                } else {
                    return value.length <= length;
                }
            },
            // 是否为数字
            isNumber(value) {
                return !isNaN(value);
            },
            // 是否为手机号码
            isPhone(value) {
                return /^1[3|4|5|7|8]\d{9}$/.test(value);
            }
        }

        /**
        * 添加策略
        * @param {[String]} name     [策略名字]
        * @param {[Function]} strategy [策略函数体]
        */
        Validator.prototype.addStrategies = function (name, strategy) {
            this.strategies[name] = strategy;
        };
        /**
        * 导入验证策略函数
        * @param  {[object]} strategies [策略函数对象（键值对形式）]
        * @return {[object]}            [null]
        */
        Validator.prototype.importStrategies = function (strategies) {
            if (defaultStrategies.isNoEmptyObject(strategies)) {
                for (var name in strategies) {
                    this.addStrategies(name, strategies[name]);
                }
            } else {
                console.error("导入的验证策略函数对象非Json对象");
            }
        };
        /**
         * 验证函数
         * @param  {[String, Array...]} value      [验证的值]
         * @param  {[String]} rule       [验证规则]
         * @param  {[type]} ruleParams [对应验证规则的参数]
         * @return {[type]}            [description]
         */
        Validator.prototype.valid = function (value, ruleElement, errMsg) {
            if (value === undefined || value === null || !ruleElement) {
                let msg = "验证函数参数有误";
                // console.error("入参问题：", msg);
                this.errors.push(errMsg);
                return;
            }
            // console.log("验证的：", this.errors);

            var that = this;

            this.validators.push(function () {
                var result,
                    ruleName,
                    ruleParams;
                var params = [];
                ruleElement = ruleElement.split(":");

                ruleName = ruleElement[0]; // 规则名字
                ruleParams = ruleElement[1]; // 规则函数的参数
                params.push(value);

                ruleParams != "" && ruleParams !== null && ruleParams !== undefined && params.push(ruleParams);
                // 执行验证函数, 正确返回true，错误返回errMsg
                result = that.strategies[ruleName].apply(that, params);
                result = !!result ? result : errMsg;
                if (result !== true) {
                    that.errors.push(result);
                }
            });
        };
        // 触发验证
        Validator.prototype.emitValid = function () {
            // console.log(this.validators);
            // return
            while(this.validators.length !== 0) {
                var fn = this.validators.shift();
                fn();
            }
            return this.errors;
        }

        var defaultStrategies = {
            // 是否非空对象
            isNoEmptyObject: function (obj) {
                var bool = (typeof obj === "object") && (Object.prototype.toString.call(obj).toLowerCase() === "[object object]") && !obj.length;
                return bool || false;
            }
        }

        return new Validator();
    }
}
