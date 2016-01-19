'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = aukReact;

var _fody = require('fody');

var _fody2 = _interopRequireDefault(_fody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function aukReact(Html) {
    return app => {
        app.context.render = function (View, data) {
            this.body = (0, _fody2.default)({
                context: this,
                View,
                data,
                Html
            });
        };
    };
}
//# sourceMappingURL=index.js.map