"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var rc_tooltip_1 = __importDefault(require("rc-tooltip"));
var ColorPickers = __importStar(require("react-color"));
var ReactColorPopoverPicker = /** @class */ (function (_super) {
    __extends(ReactColorPopoverPicker, _super);
    function ReactColorPopoverPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: false
        };
        /**
         * The handler of change of visible.
         */
        _this.onVisibleChange = function (visible) {
            var onVisibleChange = _this.props.onVisibleChange;
            _this.setState({ visible: visible });
            if (typeof onVisibleChange === 'function') {
                onVisibleChange(visible);
            }
        };
        return _this;
    }
    ReactColorPopoverPicker.getDerivedStateFromProps = function (nextProps) {
        if ('visible' in nextProps) {
            return { visible: nextProps.visible };
        }
        return null;
    };
    /**
     * Overlay Node getter.
     */
    ReactColorPopoverPicker.prototype.getOverlay = function () {
        var _a = this.props, type = _a.type, value = _a.value, onAfterChange = _a.onAfterChange, onChange = _a.onChange;
        var ColorPickerComponent = ColorPickers[type + "Picker"];
        return ColorPickerComponent ? (react_1.default.createElement(ColorPickerComponent, { color: value, onChange: onChange, onChangeComplete: onAfterChange })) : null;
    };
    ReactColorPopoverPicker.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        var visible = state.visible;
        var className = props.className, prefixCls = props.prefixCls, trigger = props.trigger, overlayClassName = props.overlayClassName, overlayStyle = props.overlayStyle, zIndex = props.zIndex, value = props.value, rest = __rest(props, ["className", "prefixCls", "trigger", "overlayClassName", "overlayStyle", "zIndex", "value"]);
        var children = props.children;
        return (react_1.default.createElement(rc_tooltip_1.default, __assign({}, rest, { overlayStyle: __assign(__assign({}, (overlayStyle || {})), { zIndex: zIndex }), overlayClassName: classnames_1.default(prefixCls + "-overlay", overlayClassName), onVisibleChange: this.onVisibleChange, visible: visible, overlay: this.getOverlay(), trigger: trigger }), children || (react_1.default.createElement("div", { className: classnames_1.default(prefixCls + "-trigger", className) },
            react_1.default.createElement("div", { className: prefixCls + "-trigger-transparent" }),
            react_1.default.createElement("div", { className: prefixCls + "-trigger-inner", style: { backgroundColor: value } })))));
    };
    ReactColorPopoverPicker.defaultProps = {
        type: 'Chrome',
        placement: 'bottom',
        prefixCls: 'm-color-popover-picker',
        trigger: ['click'],
        zIndex: 999,
        onChange: function (event) { },
    };
    return ReactColorPopoverPicker;
}(react_1.PureComponent));
exports.default = ReactColorPopoverPicker;
