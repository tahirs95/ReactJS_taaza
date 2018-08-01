'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// let dog ={
// 	sound : 'woof',
// 	talk : function(){
// 		console.log(this.sound)
// 	}
// }
// dog.talk()
// let talkFunction = dog.talk.bind(dog)
// talkFunction()

var Taaza = function (_React$Component) {
    _inherits(Taaza, _React$Component);

    function Taaza(props) {
        _classCallCheck(this, Taaza);

        var _this = _possibleConstructorReturn(this, (Taaza.__proto__ || Object.getPrototypeOf(Taaza)).call(this, props));

        _this.deleteDish = _this.deleteDish.bind(_this);
        _this.showDish = _this.showDish.bind(_this);
        _this.addDish = _this.addDish.bind(_this);
        _this.state = {
            dish: []
        };
        return _this;
    }

    _createClass(Taaza, [{
        key: 'deleteDish',
        value: function deleteDish() {
            this.setState(function () {
                return {
                    dish: []
                };
            });
        }
    }, {
        key: 'showDish',
        value: function showDish() {
            var x = Math.floor(Math.random() * 7 + 1);
            var option = this.state.dish[x];
            alert(option);
        }
    }, {
        key: 'addDish',
        value: function addDish(d) {
            if (!d) {
                return 'Enter valid value to add dish';
            } else if (this.state.dish.indexOf(d) > -1) {
                return 'This option already exits';
            }
            this.setState(function (prevState) {
                return {
                    dish: prevState.dish.concat([d])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: 'TAAZA', subtitle: 'Apnaiyat Ka Maza' }),
                React.createElement(Action, {
                    hasOptions: this.state.dish.length > 0,
                    showDish: this.showDish
                }),
                React.createElement(Dish, {
                    dish: this.state.dish,
                    deleteDish: this.deleteDish
                }),
                React.createElement(AddDish, {
                    addDish: this.addDish

                })
            );
        }
    }]);

    return Taaza;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    ' ',
                    this.props.title,
                    ' '
                ),
                React.createElement(
                    'h3',
                    null,
                    ' ',
                    React.createElement(
                        'i',
                        null,
                        ' ',
                        this.props.subtitle,
                        ' '
                    ),
                    ' '
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        onClick: this.props.showDish,
                        disabled: !this.props.hasOptions

                    },
                    ' What do you wanna eat?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Dish = function (_React$Component4) {
    _inherits(Dish, _React$Component4);

    function Dish() {
        _classCallCheck(this, Dish);

        return _possibleConstructorReturn(this, (Dish.__proto__ || Object.getPrototypeOf(Dish)).apply(this, arguments));
    }

    _createClass(Dish, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    ' '
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.deleteDish },
                    ' Remove Dish '
                ),
                React.createElement(
                    'h2',
                    null,
                    'Dish:'
                ),
                this.props.dish.map(function (type) {
                    return React.createElement(Type, { key: type, typeText: type });
                })
            );
        }
    }]);

    return Dish;
}(React.Component);

var Type = function (_React$Component5) {
    _inherits(Type, _React$Component5);

    function Type() {
        _classCallCheck(this, Type);

        return _possibleConstructorReturn(this, (Type.__proto__ || Object.getPrototypeOf(Type)).apply(this, arguments));
    }

    _createClass(Type, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                this.props.typeText
            );
        }
    }]);

    return Type;
}(React.Component);

var AddDish = function (_React$Component6) {
    _inherits(AddDish, _React$Component6);

    function AddDish(props) {
        _classCallCheck(this, AddDish);

        var _this6 = _possibleConstructorReturn(this, (AddDish.__proto__ || Object.getPrototypeOf(AddDish)).call(this, props));

        _this6.addDish = _this6.addDish.bind(_this6);
        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(AddDish, [{
        key: 'addDish',
        value: function addDish(e) {
            e.preventDefault();
            var dish = e.target.elements.dish.value.trim();
            var error = this.props.addDish(dish);

            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'p',
                    null,
                    ' '
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addDish },
                    React.createElement('input', { type: 'text', name: 'dish' }),
                    React.createElement(
                        'p',
                        null,
                        ' '
                    ),
                    React.createElement(
                        'button',
                        null,
                        ' Add Dish '
                    )
                )
            );
        }
    }]);

    return AddDish;
}(React.Component);

ReactDOM.render(React.createElement(Taaza, null), document.getElementById('app'));
