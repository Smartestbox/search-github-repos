import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
const SvgComponent = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ref: ref, ...props, children: _jsx("path", { fill: "#000", d: "M13.5 1h-11a2.002 2.002 0 0 0-2 2v10a2.002 2.002 0 0 0 2 2h11a2.003 2.003 0 0 0 2-2V3a2.002 2.002 0 0 0-2-2ZM3 8a.5.5 0 0 1-.313-.89L4.7 5.5 2.687 3.89a.5.5 0 0 1 .626-.78l2.5 2a.5.5 0 0 1 0 .78l-2.5 2A.5.5 0 0 1 3 8Zm5 0H6a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1Z" }) }));
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
