"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useIsMobile() {
    var _a = (0, react_1.useState)(false), isMobile = _a[0], setIsMobile = _a[1];
    (0, react_1.useEffect)(function () {
        var mediaQuery = window.matchMedia("(max-width: 640px)");
        setIsMobile(mediaQuery.matches);
        var listener = function (event) {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", listener);
        return function () { return mediaQuery.removeEventListener("change", listener); };
    }, []);
    return isMobile;
}
exports.default = useIsMobile;
