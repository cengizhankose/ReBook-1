"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var _colors = require("../../constant/colors/colors");

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var styles = _reactNative.StyleSheet.create({
  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: height * 0.06,
    backgroundColor: _colors.Colors.authButton,
    borderRadius: 6,
    marginTop: '6%'
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: _colors.Colors.textColor
  }
});

exports.styles = styles;