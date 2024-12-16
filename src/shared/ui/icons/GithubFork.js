import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
const SvgComponent = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ref: ref, ...props, children: _jsx("path", { fill: "#000", d: "M13 5a2 2 0 1 0-3.008 1.726c-.072.909-.628 1.157-2.344 1.513-.555.115-1.123.233-1.647.436V4.73a2 2 0 1 0-2 0v6.538a2 2 0 1 0 2.013.008c.075-.563.5-.76 2.04-1.08.856-.176 1.742-.36 2.492-.841.907-.581 1.392-1.462 1.45-2.622A2 2 0 0 0 13 5ZM5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0 12a1 1 0 1 1 0-2.001A1 1 0 0 1 5 14Zm6-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" }) }));
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
