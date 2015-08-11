function CalcController() {

    var model = new CalcModel(),
        firstInput,
        secondInput,
        output;

    this.init = function () {
        var buttons = document.querySelector('.buttons');
        buttons.addEventListener('click', onClick.bind(this), false);
        firstInput = document.getElementById('first-input');
        secondInput = document.getElementById('second-input');
        output = document.getElementById('output');
    };

    this.destroy = function () {
        firstInput = null;
        secondInput = null;
        output = null;
        model = null;
    };

    function onClick(e) {
        if (e.target.id) {
            model[e.target.id](firstInput.value, secondInput.value);
            setResult.call(this, model.getResult());
        }
    }

    function setResult(value) {
        output.value = value;
    }

    return this;
}
