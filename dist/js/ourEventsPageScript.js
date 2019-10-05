/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/1-production/ourEventsPageScript.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/1-production/ourEventsPageScript.js":
/*!****************************************************!*\
  !*** ./src/js/1-production/ourEventsPageScript.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("$(function () {\n  var animNavItem = __webpack_require__(/*! ../2-modules/animationNavItemsHeader */ \"./src/js/2-modules/animationNavItemsHeader.js\");\n\n  animNavItem();\n  grid({\n    gridElements: ['gridArea', 'rowArea', 'cardArea'],\n    quantityCardsInRow: [1, 1, 2, 2, 3, 3],\n    rowsClasses: ['row-1', 'row-1', 'row-2', 'row-2', 'row-3', 'row-3'],\n    rowsFillerClasses: ['filler', 'filler', 'filler filler-cards-2', 'filler filler-cards-2', 'filler filler-cards-3', 'filler filler-cards-3'],\n    activeFillerFunction: true\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvMS1wcm9kdWN0aW9uL291ckV2ZW50c1BhZ2VTY3JpcHQuanM/OWNhMiJdLCJuYW1lcyI6WyIkIiwiYW5pbU5hdkl0ZW0iLCJyZXF1aXJlIiwiZ3JpZCIsImdyaWRFbGVtZW50cyIsInF1YW50aXR5Q2FyZHNJblJvdyIsInJvd3NDbGFzc2VzIiwicm93c0ZpbGxlckNsYXNzZXMiLCJhY3RpdmVGaWxsZXJGdW5jdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFXO0FBQ1QsTUFBSUMsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLDJGQUFELENBQXpCOztBQUVJRCxhQUFXO0FBRVhFLE1BQUksQ0FBQztBQUNEQyxnQkFBWSxFQUFFLENBQUMsVUFBRCxFQUFhLFNBQWIsRUFBdUIsVUFBdkIsQ0FEYjtBQUVEQyxzQkFBa0IsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBRm5CO0FBR0RDLGVBQVcsRUFBRSxDQUNULE9BRFMsRUFFVCxPQUZTLEVBR1QsT0FIUyxFQUlULE9BSlMsRUFLVCxPQUxTLEVBTVQsT0FOUyxDQUhaO0FBV0RDLHFCQUFpQixFQUFFLENBQ2YsUUFEZSxFQUVmLFFBRmUsRUFHZix1QkFIZSxFQUlmLHVCQUplLEVBS2YsdUJBTGUsRUFNZix1QkFOZSxDQVhsQjtBQW1CREMsd0JBQW9CLEVBQUU7QUFuQnJCLEdBQUQsQ0FBSjtBQXFCUCxDQTFCQSxDQUFEIiwiZmlsZSI6Ii4vc3JjL2pzLzEtcHJvZHVjdGlvbi9vdXJFdmVudHNQYWdlU2NyaXB0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcclxuICAgIGxldCBhbmltTmF2SXRlbSA9IHJlcXVpcmUoJy4uLzItbW9kdWxlcy9hbmltYXRpb25OYXZJdGVtc0hlYWRlcicpO1xyXG5cclxuICAgICAgICBhbmltTmF2SXRlbSgpO1xyXG5cclxuICAgICAgICBncmlkKHtcclxuICAgICAgICAgICAgZ3JpZEVsZW1lbnRzOiBbJ2dyaWRBcmVhJywgJ3Jvd0FyZWEnLCdjYXJkQXJlYSddLFxyXG4gICAgICAgICAgICBxdWFudGl0eUNhcmRzSW5Sb3c6IFsxLCAxLCAyLCAyLCAzLCAzXSxcclxuICAgICAgICAgICAgcm93c0NsYXNzZXM6IFtcclxuICAgICAgICAgICAgICAgICdyb3ctMScsXHJcbiAgICAgICAgICAgICAgICAncm93LTEnLFxyXG4gICAgICAgICAgICAgICAgJ3Jvdy0yJyxcclxuICAgICAgICAgICAgICAgICdyb3ctMicsXHJcbiAgICAgICAgICAgICAgICAncm93LTMnLFxyXG4gICAgICAgICAgICAgICAgJ3Jvdy0zJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICByb3dzRmlsbGVyQ2xhc3NlczogW1xyXG4gICAgICAgICAgICAgICAgJ2ZpbGxlcicsXHJcbiAgICAgICAgICAgICAgICAnZmlsbGVyJyxcclxuICAgICAgICAgICAgICAgICdmaWxsZXIgZmlsbGVyLWNhcmRzLTInLFxyXG4gICAgICAgICAgICAgICAgJ2ZpbGxlciBmaWxsZXItY2FyZHMtMicsXHJcbiAgICAgICAgICAgICAgICAnZmlsbGVyIGZpbGxlci1jYXJkcy0zJyxcclxuICAgICAgICAgICAgICAgICdmaWxsZXIgZmlsbGVyLWNhcmRzLTMnXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGFjdGl2ZUZpbGxlckZ1bmN0aW9uOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/1-production/ourEventsPageScript.js\n");

/***/ }),

/***/ "./src/js/2-modules/animationNavItemsHeader.js":
/*!*****************************************************!*\
  !*** ./src/js/2-modules/animationNavItemsHeader.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function animationItemNavSite() {\n  var navItem = document.querySelectorAll('.header__navSite__item'),\n      effectItem = document.querySelectorAll('.header__effect__item'),\n      nav = $('.header__navSite');\n  navItem.forEach(function (elem, i) {\n    elem.addEventListener('mouseenter', function (event) {\n      animationVisibleEffect('', i);\n      visibleIdLabel(i);\n      idSwitch(i);\n    });\n  });\n  effectItem.forEach(function (elem, i) {\n    elem.addEventListener('mouseleave', function () {\n      animationHiddenEffect('', i);\n      hiddenIdLabel(i);\n    });\n  });\n  nav.mouseleave(function () {\n    var allIdEffectItem = [];\n\n    for (var i = 0; i < effectItem.length; i++) {\n      allIdEffectItem.push($(\".header__effect__item:eq('\".concat(i, \"')\")).attr('id'));\n    }\n\n    for (var _i = 0; _i < allIdEffectItem.length; _i++) {\n      if (allIdEffectItem[_i] === 'visible') {\n        idSwitch(_i);\n        animationHiddenEffect('', _i);\n      } else {\n        continue;\n      }\n    }\n  });\n\n  function visibleIdLabel(inx) {\n    $(\".header__effect__item:eq('\".concat(inx, \"')\")).attr('id', 'visible');\n  }\n\n  function hiddenIdLabel(inx) {\n    $(\".header__effect__item:eq('\".concat(inx, \"')\")).attr('id', 'hidden');\n  }\n\n  function idSwitch(inx) {\n    idCollect();\n\n    function idCollect() {\n      var arrayCollectorIdEffectElements = [];\n\n      for (var i = 0; i < effectItem.length; i++) {\n        arrayCollectorIdEffectElements.push($(\".header__effect__item:eq('\".concat(i, \"')\")).attr('id'));\n      }\n\n      switcherId(arrayCollectorIdEffectElements);\n    }\n\n    function switcherId(processedArray) {\n      for (var i = 0; i < processedArray.length; i++) {\n        if (processedArray[i] === 'hidden') {\n          continue;\n        } else if (processedArray[i] === 'visible' && inx === i) {\n          continue;\n        } else if (processedArray[i] === 'visible' && inx !== i) {\n          animationHiddenEffect('', i);\n        }\n      }\n    }\n  }\n\n  function animationVisibleEffect(elm, inx) {\n    $(\".header__effect__item:eq(\".concat(inx, \")\")).animate({\n      marginTop: -70\n    });\n  }\n\n  function animationHiddenEffect(elm, inx) {\n    $(\".header__effect__item:eq(\".concat(inx, \")\")).animate({\n      marginTop: 0\n    });\n  }\n}\n\nmodule.exports = animationItemNavSite;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvMi1tb2R1bGVzL2FuaW1hdGlvbk5hdkl0ZW1zSGVhZGVyLmpzP2JhODgiXSwibmFtZXMiOlsiYW5pbWF0aW9uSXRlbU5hdlNpdGUiLCJuYXZJdGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWZmZWN0SXRlbSIsIm5hdiIsIiQiLCJmb3JFYWNoIiwiZWxlbSIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJhbmltYXRpb25WaXNpYmxlRWZmZWN0IiwidmlzaWJsZUlkTGFiZWwiLCJpZFN3aXRjaCIsImFuaW1hdGlvbkhpZGRlbkVmZmVjdCIsImhpZGRlbklkTGFiZWwiLCJtb3VzZWxlYXZlIiwiYWxsSWRFZmZlY3RJdGVtIiwibGVuZ3RoIiwicHVzaCIsImF0dHIiLCJpbngiLCJpZENvbGxlY3QiLCJhcnJheUNvbGxlY3RvcklkRWZmZWN0RWxlbWVudHMiLCJzd2l0Y2hlcklkIiwicHJvY2Vzc2VkQXJyYXkiLCJlbG0iLCJhbmltYXRlIiwibWFyZ2luVG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0Esb0JBQVQsR0FBZ0M7QUFFNUIsTUFBSUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLHdCQUExQixDQUFkO0FBQUEsTUFDSUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGdCQUFULENBQTBCLHVCQUExQixDQURqQjtBQUFBLE1BRUlFLEdBQUcsR0FBR0MsQ0FBQyxDQUFDLGtCQUFELENBRlg7QUFJSUwsU0FBTyxDQUFDTSxPQUFSLENBQWdCLFVBQVNDLElBQVQsRUFBZUMsQ0FBZixFQUFrQjtBQUM5QkQsUUFBSSxDQUFDRSxnQkFBTCxDQUFzQixZQUF0QixFQUFvQyxVQUFTQyxLQUFULEVBQWdCO0FBRWhEQyw0QkFBc0IsQ0FBQyxFQUFELEVBQUtILENBQUwsQ0FBdEI7QUFDQUksb0JBQWMsQ0FBQ0osQ0FBRCxDQUFkO0FBQ0FLLGNBQVEsQ0FB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RSxDQUFDO0FBRDhCLEtBQTlDO0FBR0g7O0FBRUQsV0FBU2QscUJBQVQsQ0FBK0JZLEdBQS9CLEVBQW9DTCxHQUFwQyxFQUF5QztBQUNyQ2hCLEtBQUMsb0NBQTZCZ0IsR0FBN0IsT0FBRCxDQUFzQ00sT0FBdEMsQ0FBOEM7QUFDMUNDLGVBQVMsRUFBRTtBQUQrQixLQUE5QztBQUdIO0FBQ1I7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQi9CLG9CQUFqQiIsImZpbGUiOiIuL3NyYy9qcy8yLW1vZHVsZXMvYW5pbWF0aW9uTmF2SXRlbXNIZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhbmltYXRpb25JdGVtTmF2U2l0ZSgpIHtcclxuXHJcbiAgICBsZXQgbmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX25hdlNpdGVfX2l0ZW0nKSxcclxuICAgICAgICBlZmZlY3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fZWZmZWN0X19pdGVtJyksXHJcbiAgICAgICAgbmF2ID0gJCgnLmhlYWRlcl9fbmF2U2l0ZScpO1xyXG5cclxuICAgICAgICBuYXZJdGVtLmZvckVhY2goZnVuY3Rpb24oZWxlbSwgaSkge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblZpc2libGVFZmZlY3QoJycsIGkpO1xyXG4gICAgICAgICAgICAgICAgdmlzaWJsZUlkTGFiZWwoaSk7XHJcbiAgICAgICAgICAgICAgICBpZFN3aXRjaChpKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlZmZlY3RJdGVtLmZvckVhY2goZnVuY3Rpb24oZWxlbSwgaSkge1xyXG4gICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25IaWRkZW5FZmZlY3QoJycsIGkpO1xyXG4gICAgICAgICAgICAgICAgaGlkZGVuSWRMYWJlbChpKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuYXYubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGFsbElkRWZmZWN0SXRlbSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGVmZmVjdEl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFsbElkRWZmZWN0SXRlbS5wdXNoKCQoYC5oZWFkZXJfX2VmZmVjdF9faXRlbTplcSgnJHtpfScpYCkuYXR0cignaWQnKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhbGxJZEVmZmVjdEl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGFsbElkRWZmZWN0SXRlbVtpXSA9PT0gJ3Zpc2libGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRTd2l0Y2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uSGlkZGVuRWZmZWN0KCcnLCBpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB2aXNpYmxlSWRMYWJlbChpbngpIHtcclxuICAgICAgICAgICAgJChgLmhlYWRlcl9fZWZmZWN0X19pdGVtOmVxKCcke2lueH0nKWApLmF0dHIoJ2lkJywgJ3Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiBoaWRkZW5JZExhYmVsKGlueCkge1xyXG4gICAgICAgICAgICAkKGAuaGVhZGVyX19lZmZlY3RfX2l0ZW06ZXEoJyR7aW54fScpYCkuYXR0cignaWQnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBpZFN3aXRjaChpbngpIHtcclxuICAgICAgICAgICAgaWRDb2xsZWN0KCk7XHJcbiAgICBcclxuICAgICAgICAgICAgZnVuY3Rpb24gaWRDb2xsZWN0KCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5Q29sbGVjdG9ySWRFZmZlY3RFbGVtZW50cyA9IFtdOyBcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlZmZlY3RJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlDb2xsZWN0b3JJZEVmZmVjdEVsZW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgLnB1c2goJChgLmhlYWRlcl9fZWZmZWN0X19pdGVtOmVxKCcke2l9JylgKS5hdHRyKCdpZCcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN3aXRjaGVySWQoYXJyYXlDb2xsZWN0b3JJZEVmZmVjdEVsZW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzd2l0Y2hlcklkKHByb2Nlc3NlZEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvY2Vzc2VkQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihwcm9jZXNzZWRBcnJheVtpXSA9PT0gJ2hpZGRlbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKChwcm9jZXNzZWRBcnJheVtpXSA9PT0gJ3Zpc2libGUnKSAmJiAoaW54ID09PSBpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoKHByb2Nlc3NlZEFycmF5W2ldID09PSAndmlzaWJsZScpICYmIChpbnggIT09IGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkhpZGRlbkVmZmVjdCgnJywgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGlvblZpc2libGVFZmZlY3QoZWxtLCBpbngpIHtcclxuICAgICAgICAgICAgJChgLmhlYWRlcl9fZWZmZWN0X19pdGVtOmVxKCR7aW54fSlgKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogLTcwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBmdW5jdGlvbiBhbmltYXRpb25IaWRkZW5FZmZlY3QoZWxtLCBpbngpIHtcclxuICAgICAgICAgICAgJChgLmhlYWRlcl9fZWZmZWN0X19pdGVtOmVxKCR7aW54fSlgKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYW5pbWF0aW9uSXRlbU5hdlNpdGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/2-modules/animationNavItemsHeader.js\n");

/***/ })

/******/ });