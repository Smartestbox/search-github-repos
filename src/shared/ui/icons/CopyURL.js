import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
const SvgComponent = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, fill: "none", ref: ref, ...props, children: _jsx("path", { stroke: "#3A3A3A", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "m13.348 17.017-1.878 1.878a4.5 4.5 0 0 1-6.364-6.364l1.836-1.837m3.752-3.751 1.836-1.837a4.5 4.5 0 1 1 6.364 6.364l-1.878 1.878M9.12 14.882l5.829-5.83" }) }));
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
