'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _action = require('../core/action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

module.exports = function (_Action) {
  _inherits(InfosSignin, _Action);

  function InfosSignin() {
    _classCallCheck(this, InfosSignin);

    var _this = _possibleConstructorReturn(this, (InfosSignin.__proto__ || Object.getPrototypeOf(InfosSignin)).call(this));

    _this.intent = 'infos';
    _this.dependencies = [{
      actions: ['Yes', 'Signin'],
      isMissing: ['Do you already have an account ?']
    }];
    _this.constraints = [{
      entities: [{ entity: 'person', alias: 'client' }],
      isMissing: ['What\'s the name you are registered with?']
    }, {
      entities: [{ entity: 'email', alias: 'mail-client' }],
      isMissing: ['What\'s your email address ?']
    }];
    _this.next = 'Murder';
    return _this;
  }

  _createClass(InfosSignin, [{
    key: 'reply',
    value: function reply() {
      return { en: ['Perfect {{client}}, let\'s go on.'] };
    }
  }]);

  return InfosSignin;
}(_action2.default);