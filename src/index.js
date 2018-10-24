import WMJSMap from './WMJSMap.js'
import { isDefined, getUrlVars, checkIfHashTagChanged, WMJScheckURL, URLDecode, URLEncode, addMouseWheelEvent, removeMouseWheelEvent, WMJSKVP, composeUrlObjectFromURL, toArray } from './WMJSTools.js'
import WMJSLayer from './WMJSLayer.js'
import WMJSTimer from './WMJSTimer.js';
import WMJSGetServiceFromStore from './WMJSGetServiceFromStore.js';
import { WMJSDateOutSideRange, WMJSDateTooEarlyString, WMJSDateTooLateString, WMJSEmptyLayerName, WMJSEmptyLayerTitle } from './WMJSConstants.js';
import { parseISO8601DateToDate } from  './WMJSTime.js';
import WMJSBBOX from './WMJSBBOX.js';
import I18n from  './I18n/lang.en.js';

// exports = {
//   WMJSMap: WMJSMap,
//   isDefined: isDefined,
//   WMJSLayer: WMJSLayer,
//   getUrlVars: getUrlVars,
//   checkIfHashTagChanged: checkIfHashTagChanged,
//   WMJSTimer: WMJSTimer,
//   WMJSGetServiceFromStore: WMJSGetServiceFromStore,
//   WMJScheckURL: WMJScheckURL,
//   URLEncode: URLEncode,
//   URLDecode: URLDecode,
//   WMJSDateOutSideRange: WMJSDateOutSideRange,
//   WMJSDateTooEarlyString: WMJSDateTooEarlyString,
//   WMJSDateTooLateString: WMJSDateTooLateString,
//   WMJSEmptyLayerName: WMJSEmptyLayerName,
//   WMJSEmptyLayerTitle: WMJSEmptyLayerTitle,
//   parseISO8601DateToDate: parseISO8601DateToDate,
//         I18n: I18n,
//         addMouseWheelEvent: addMouseWheelEvent,
//         removeMouseWheelEvent: removeMouseWheelEvent,
//         WMJSKVP: WMJSKVP,
//         composeUrlObjectFromURL: composeUrlObjectFromURL,
//         WMJSBBOX: WMJSBBOX,
//         toArray: toArray
// }
// 
// console.log(exports);

var exports = {};
exports.printMsg = function() {
  console.log("This is a message from the adaguc-webmapjs package");
}

export { WMJSMap, 
  isDefined, 
  WMJSLayer, 
  getUrlVars, 
  checkIfHashTagChanged, 
  WMJSTimer, 
  WMJSGetServiceFromStore, 
  WMJScheckURL, 
  URLEncode, 
  URLDecode, 
  WMJSDateOutSideRange, 
  WMJSDateTooEarlyString, 
  WMJSDateTooLateString, 
  WMJSEmptyLayerName, 
  WMJSEmptyLayerTitle, 
  parseISO8601DateToDate, 
  I18n, 
  addMouseWheelEvent, 
  removeMouseWheelEvent, 
  WMJSKVP, 
  composeUrlObjectFromURL, 
  WMJSBBOX, 
  toArray   
}

