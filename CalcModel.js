function CalcModel() {
    var result;

    this.add = function (a, b) {
        result = Number(a) + Number(b);
    };
    this.subtract = function (a, b) {
        result = Number(a) - Number(b);
    };
    this.multiply = function (a, b) {
        result = Number(a) * Number(b);
    };
    this.divide = function (a, b) {
        result = Number(a) / Number(b);
    };
    this.getResult = function () {
        return result;
    };
    return this;
}
