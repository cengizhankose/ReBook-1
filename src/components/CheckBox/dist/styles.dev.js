"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var styles = _reactNative.StyleSheet.create({
  checkView: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'pink',
    marginRight: 10
  },
  checkSubView: {
    width: 18,
    height: 18,
    backgroundColor: '#fff'
  }
});

exports.styles = styles;