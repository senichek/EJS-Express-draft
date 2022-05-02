var dayjs = require("dayjs");
require("dayjs/locale/fr");
dayjs.locale("fr");
var utc = require("dayjs/plugin/utc");
var timezone = require("dayjs/plugin/timezone");
dayjs.extend(utc);
dayjs.extend(timezone);

function getDate(timeZone) {
    return dayjs().tz(timeZone).format("MMMM DD, dddd, YYYY");
};

function getTime(timeZone) {
    return dayjs().tz(timeZone).format("HH:mm");
};

module.exports = {
    getDate: getDate,
    getTime: getTime
}
