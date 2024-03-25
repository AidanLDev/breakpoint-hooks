"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useIsTablet() {
    var _a = (0, react_1.useState)(false), isTablet = _a[0], setIsTablet = _a[1];
    (0, react_1.useEffect)(function () {
        var mediaQuery = window.matchMedia("(max-width: 1024px)");
        setIsTablet(mediaQuery.matches);
        var listener = function (event) {
            setIsTablet(event.matches);
        };
        mediaQuery.addEventListener("change", listener);
        return function () { return mediaQuery.removeEventListener("change", listener); };
    }, []);
    return isTablet;
}
exports.default = useIsTablet;
