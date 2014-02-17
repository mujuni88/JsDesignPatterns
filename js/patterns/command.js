var Calculator = (function () {
    'use strict';

    function Calculator() {
        this._currValue = 0;
        this.commands = [];

    }

    Calculator.prototype = {
        execute: function (cmd) {
            this._currValue = cmd.execute(this._currValue);

            this.commands.push(cmd);
        },
        undo:function(){
            var cmd = this.commands.pop();
            this._currValue = cmd.undo(this._currValue);
        },
        getCurrValue: function () {
            return this._currValue;
        }

    };

    return Calculator;
}());

var Command = (function () {
    'use strict';

    // Abstract Command
    function Command(fn, undo, value) {
        this.execute = fn;
        this._value = value;
        this.undo = undo;

    }
    return Command;

}());

var AddCommand = (function () {
    'use strict';

    // Abstract Command
    function AddCommand(value) {
        Command.call(this, add, sub, value);
    }


    return AddCommand;

}());

function add(val) {
    return val + this._value;
}

var SubCommand = (function () {
    'use strict';

    // Abstract Command
    function SubCommand(value) {
        Command.call(this, sub, add, value);
    }


    return SubCommand;

}());

function sub(val) {
    return val-this._value;
}

var MultiplyCommand = (function () {
    'use strict';

    // Abstract Command
    function MultiplyCommand(value) {
        Command.call(this, mult, div, value);
    }


    return MultiplyCommand;

}());

function mult(val) {
    return val*this._value;
}

var DivCommand = (function () {
    'use strict';

    // Abstract Command
    function DivCommand(value) {
        Command.call(this, div, mult, value);
    }


    return DivCommand;

}());

function div(val) {
    return val / this._value ;
}

var calc = new Calculator();
calc.execute(new AddCommand(19));
calc.execute(new MultiplyCommand(19));
calc.undo();

console.log(calc.getCurrValue());