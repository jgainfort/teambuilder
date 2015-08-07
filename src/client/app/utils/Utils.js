var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.convertToList = function (data) {
        var list = [];
        for (var item in data) {
            list.push(data[item]);
        }
        return list;
    };
    return Utils;
})();
exports.Utils = Utils;
