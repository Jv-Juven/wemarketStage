module.exports = {
    schedule: {
        // interval: "10s", // 间隔时间： int类型 单位为毫秒，字符串类型 可以是如：5s，1000ms
        cron: "10 42 14 21 4 5",
        type: "all",
        immediate: true
        // disable: true
    },
    async task (ctx) {
        console.log("定时任务触发");
        console.log(ctx.curl);
    }
}
