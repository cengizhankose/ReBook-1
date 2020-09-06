'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.styles = void 0;

var _reactNative = require('react-native');

var styles = _reactNative.StyleSheet.create({
  tabbar: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FF928B',
    height: 73,
  },
  sohbet: {
    padding: 5,
    backgroundColor: '#FF928B',
  },
  inlineView: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 50,
    marginTop: -4,
  },
  chooseSohbet: {
    borderRadius: 50,
    marginTop: -40,
    backgroundColor: '#fff',
  },
  sohbetView: {
    borderRadius: 50,
    backgroundColor: 'yellow',
  },
  bottom: {
    paddingTop: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    height: 56,
    flex: 1,
  },
  dot: {
    borderRadius: 50,
    width: 4,
    height: 4,
    backgroundColor: 'red',
    marginTop: 8,
  },
});

exports.styles = styles;
