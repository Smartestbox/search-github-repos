import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
const SvgComponent = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ref: ref, ...props, children: _jsx("path", { fill: "#000", d: "M15.5 4.75A1.75 1.75 0 0 0 13.75 3H6.878a.746.746 0 0 1-.415-.125l-.87-.58A1.743 1.743 0 0 0 4.623 2H2.25A1.75 1.75 0 0 0 .5 3.75v1.5a.25.25 0 0 0 .25.25h14.5a.25.25 0 0 0 .25-.25v-.5Zm-15 7.5A1.75 1.75 0 0 0 2.25 14h11.5a1.75 1.75 0 0 0 1.75-1.75v-5.5a.25.25 0 0 0-.25-.25H.75a.25.25 0 0 0-.25.25v5.5Z" }) }));
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
