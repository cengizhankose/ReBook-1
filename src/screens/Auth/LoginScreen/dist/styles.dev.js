"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _reactNative = require("react-native");

var _colors = require("../../../constant/colors/colors");

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    widht = _Dimensions$get.widht,
    height = _Dimensions$get.height;

var styles = _reactNative.StyleSheet.create({
  loginView: {
    flex: 1
  },
  image: {
    width: 350,
    height: 700,
    position: 'relative',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: _colors.Colors.softPink
  },
  formArea: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: _colors.Colors.softPink,
    zIndex: 1
  },
  textView: {
    width: '90%',
    height: '10%',
    marginBottom: '8%'
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formText: {
    fontSize: 36,
    color: '#fff',
    justifyContent: 'flex-start'
  },
  subInfos: {
    width: '90%',
    height: height * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '4%',
    marginBottom: '8%'
  },
  checkBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ınfoTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomView: {
    flex: 0.6,
    backgroundColor: _colors.Colors.orange,
    marginTop: -10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  bottomView2: {
    flex: 0.3
  }
});

exports.styles = styles;