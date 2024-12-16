import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef, memo } from "react";
const SvgComponent = (props, ref) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ref: ref, ...props, children: _jsx("path", { fill: "#000", d: "M12.312 15a.5.5 0 0 1-.293-.094l-4.02-2.914-4.018 2.914a.5.5 0 0 1-.767-.565L4.78 9.698.72 6.912A.5.5 0 0 1 .999 6h5.013l1.512-4.655a.5.5 0 0 1 .952 0l1.512 4.657H15a.5.5 0 0 1 .283.912l-4.064 2.784 1.566 4.642a.5.5 0 0 1-.473.66Z" }) }));
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
