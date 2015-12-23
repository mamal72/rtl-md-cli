#!/usr/bin/env node
'use strict';

require('babel-polyfill');

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _rtlMd = require('rtl-md');

var _rtlMd2 = _interopRequireDefault(_rtlMd);

var _fsPromise = require('fs-promise');

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; }

_commander2.default.version(_package.version);

_commander2.default.command('rtl-md-cli <input>', 'convert the input and put it in output file').option('-o, --output [output]', 'output file path').action((function () {
  var _this = this;

  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(input) {
    var _program$output, output, data, html;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _program$output = _commander2.default.output;
            output = _program$output === undefined ? input.replace(/\.[^/.]+$/, '') + '.html' : _program$output;
            _context.next = 5;
            return (0, _fsPromise.readFile)(input, 'utf8');

          case 5:
            data = _context.sent;
            html = (0, _rtlMd2.default)(data);

            (0, _fsPromise.writeFile)(output, html);
            console.log('The file ' + input + ' converted to ' + output + ' successfully!');
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](0);

            console.error('An error happened. :(\nMake sure you did all the things right!');

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 11]]);
  }));

  return function (_x) {
    return ref.apply(this, arguments);
  };
})());

_commander2.default.parse(process.argv);
//# sourceMappingURL=cli.js.map
