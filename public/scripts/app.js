'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.state = {
            options: ['thing one', 'thing two', 'thing four']
        };

        return _this;
    }
    //handleDeleteOptions


    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {

            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {

            var randomNum = Math.floor(Math.random() * this.state.options.length);
            // console.log(randomNum)
            var catchApp = this.state.options[randomNum];
            alert(catchApp);
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision Title";
            var subTitle = "Put your life in the hands of my app";
            // const options = ['thing one', 'thing two', 'thing four']
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0,

                    handlePick: this.handlePick

                }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return IndecisionApp;
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
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subTitle
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

        // handlePick(){
        //     alert('handle pick')
        // }

        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handlePick,
                        disabled: !this.props.hasOptions },
                    'What Should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',

        // constructor(props){
        //     super(props)
        //     this.handleRemoveAll=this.handleRemoveAll.bind(this)
        // }
        // handleRemoveAll(){
        //     console.log(this.props.options)
        // }

        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.handleDeleteOptions },
                    'Remove All'
                ),
                React.createElement(
                    'p',
                    null,
                    this.props.options.length
                ),
                this.props.options.map(function (options) {
                    return React.createElement(OptionComponent, { key: options, optionText: options });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var OptionComponent = function (_React$Component5) {
    _inherits(OptionComponent, _React$Component5);

    function OptionComponent() {
        _classCallCheck(this, OptionComponent);

        return _possibleConstructorReturn(this, (OptionComponent.__proto__ || Object.getPrototypeOf(OptionComponent)).apply(this, arguments));
    }

    _createClass(OptionComponent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Option: ',
                this.props.optionText
            );
        }
    }]);

    return OptionComponent;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();

            if (option) {
                // IndecisionApp.options.push(option)
                // e.target.elements.options.value = ''
                alert(option);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// const jsx = (

//     <div>

//         <Header/>
//         <Action />
//         <Options />
//         <AddOption />
//     </div>


// )

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

// // 'use strict';

// // console.log('App.js is running');
// "use strict";

// var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

// function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// var IndecisionApp = function (_React$Component) {
//     _inherits(IndecisionApp, _React$Component);

//     function IndecisionApp() {
//         _classCallCheck(this, IndecisionApp);

//         return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
//     }

//     _createClass(IndecisionApp, [{
//         key: "render",
//         value: function render() {
//             var title = "Indecision Title";
//             var subTitle = "Put your life in the hands of my app";
//             var options = ['thing one', 'thing two', 'thing four'];
//             return React.createElement(
//                 "div",
//                 null,
//                 React.createElement(Header, { title: title, subTitle: subTitle }),
//                 React.createElement(Action, null),
//                 React.createElement(Options, { options: options }),
//                 React.createElement(AddOption, null)
//             );
//         }
//     }]);

//     return IndecisionApp;
// }(React.Component);

// var Header = function (_React$Component2) {
//     _inherits(Header, _React$Component2);

//     function Header() {
//         _classCallCheck(this, Header);

//         return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
//     }

//     _createClass(Header, [{
//         key: "render",
//         value: function render() {

//             return React.createElement(
//                 "div",
//                 null,
//                 React.createElement(
//                     "h1",
//                     null,
//                     this.props.title
//                 ),
//                 React.createElement(
//                     "h2",
//                     null,
//                     this.props.subTitle
//                 )
//             );
//         }
//     }]);

//     return Header;
// }(React.Component);

// var Action = function (_React$Component3) {
//     _inherits(Action, _React$Component3);

//     function Action() {
//         _classCallCheck(this, Action);

//         return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
//     }

//     _createClass(Action, [{
//         key: "render",
//         value: function render() {
//             return React.createElement(
//                 "div",
//                 null,
//                 React.createElement(
//                     "button",
//                     null,
//                     "What Should I do?"
//                 )
//             );
//         }
//     }]);

//     return Action;
// }(React.Component);

// var Options = function (_React$Component4) {
//     _inherits(Options, _React$Component4);

//     function Options() {
//         _classCallCheck(this, Options);

//         return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
//     }

//     _createClass(Options, [{
//         key: "render",
//         value: function render() {
//             return React.createElement(
//                 "div",
//                 null,
//                 this.props.options.length,
//                 this.props.options.map(function (options) {
//                     return React.createElement(OptionComponent, { key: options, optionText: options });
//                 })
//             );
//         }
//     }]);

//     return Options;
// }(React.Component);

// var OptionComponent = function (_React$Component5) {
//     _inherits(OptionComponent, _React$Component5);

//     function OptionComponent() {
//         _classCallCheck(this, OptionComponent);

//         return _possibleConstructorReturn(this, (OptionComponent.__proto__ || Object.getPrototypeOf(OptionComponent)).apply(this, arguments));
//     }

//     _createClass(OptionComponent, [{
//         key: "render",
//         value: function render() {
//             return React.createElement(
//                 "div",
//                 null,
//                 "Option: ",
//                 this.props.optionText
//             );
//         }
//     }]);

//     return OptionComponent;
// }(React.Component);

// var AddOption = function (_React$Component6) {
//     _inherits(AddOption, _React$Component6);

//     function AddOption() {
//         _classCallCheck(this, AddOption);

//         return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
//     }

//     _createClass(AddOption, [{
//         key: "render",
//         value: function render() {
//             return React.createElement(
//                 "div",
//                 null,
//                 React.createElement(
//                     "p",
//                     null,
//                     "AddOptions Component here"
//                 )
//             );
//         }
//     }]);

//     return AddOption;
// }(React.Component);

// // const jsx = (

// //     <div>

// //         <Header/>
// //         <Action />
// //         <Options />
// //         <AddOption />
// //     </div>


// // )

// ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

// // //JSX Javascript XML
// // var app = {
// //     title: 'Indecision APP',
// //     subtitle: 'Put your life in the hands of my App',
// //     options: ['One', "Two"]
// // };

// // var onFormSubmit = function onFormSubmit(e) {
// //     e.preventDefault();

// //     var option = e.target.elements.option.value;

// //     if (option) {
// //         app.options.push(option);
// //         e.target.elements.option.value = '';
// //         rederFunction();
// //     }
// // };
// // var onRemoveAll = function onRemoveAll() {

// //     app.options = [];
// //     rederFunction();
// // };
// // var appRoute = document.getElementById('app');

// // var rederFunction = function rederFunction() {
// //     var template = React.createElement(
// //         'div',
// //         null,
// //         React.createElement(
// //             'h1',
// //             null,
// //             'App Name: ',
// //             app.title.toLocaleUpperCase()
// //         ),
// //         app.subtitle && React.createElement(
// //             'p',
// //             null,
// //             app.subtitle
// //         ),
// //         React.createElement(
// //             'p',
// //             null,
// //             app.options.length > 0 ? 'Here are the options' : 'No options'
// //         ),
// //         React.createElement(
// //             'p',
// //             null,
// //             app.options.length
// //         ),
// //         React.createElement(
// //             'button',
// //             { onClick: onRemoveAll },
// //             'Remove all'
// //         ),
// //         React.createElement(
// //             'ol',
// //             null,
// //             React.createElement(
// //                 'li',
// //                 null,
// //                 'Item one'
// //             ),
// //             React.createElement(
// //                 'li',
// //                 null,
// //                 'Item two'
// //             )
// //         ),
// //         React.createElement(
// //             'form',
// //             { onSubmit: onFormSubmit },
// //             React.createElement('input', { type: 'text', name: 'option' }),
// //             React.createElement(
// //                 'button',
// //                 null,
// //                 'Add Option'
// //             )
// //         )
// //     );
// //     ReactDOM.render(template, appRoute);
// // };
// // rederFunction();
