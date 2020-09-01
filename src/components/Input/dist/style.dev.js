"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var styles = _reactNative.StyleSheet.create({
  textInput: {
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: '#fff',
    paddingLeft: 15,
    borderRadius: 6
  }
});

exports.styles = styles;