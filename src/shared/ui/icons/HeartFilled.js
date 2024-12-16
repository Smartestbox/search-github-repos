import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
const SvgComponent = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 18, height: 15, fill: "none", ref: ref, ...props, children: _jsx("path", { fill: "#D44333", d: "M18 4.602C18 10.227 9 15 9 15S0 10.227 0 4.602c0-1.22.492-2.39 1.369-3.254A4.71 4.71 0 0 1 4.673 0C6.628 0 8.303 1.05 9 2.727 9.697 1.05 11.372 0 13.327 0a4.71 4.71 0 0 1 3.304 1.348A4.567 4.567 0 0 1 18 4.602Z" }) }));
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
