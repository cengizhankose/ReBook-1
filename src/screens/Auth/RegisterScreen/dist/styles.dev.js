"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var _colors = require("../../../constant/colors/colors.js");

var styles = _reactNative.StyleSheet.create({
  registerView: {
    flex: 1
  },
  registerTopSide: {
    flex: 0.8,
    backgroundColor: _colors.Colors.softPink,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    zIndex: 3
  },
  registeLogo: {
    flex: 1,
    backgroundColor: _colors.Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10
  },
  registerForm: {
    flex: 4,
    backgroundColor: _colors.Colors.orange,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  registerBottom: {
    flex: 0.4,
    backgroundColor: '#fff'
  },
  textView: {
    width: '90%',
    height: '10%',
    marginBottom: '8%'
  },
  formText: {
    fontSize: 36,
    color: '#fff',
    justifyContent: 'flex-start'
  }
});

exports.styles = styles;