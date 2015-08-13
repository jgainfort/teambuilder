var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.convertToList = function (data) {
        var list = [];
        for (var item in data) {
            if (data.hasOwnProperty(item)) {
                list.push(data[item]);
            }
        }
        return list;
    };
    return Utils;
})();
exports.Utils = Utils;
