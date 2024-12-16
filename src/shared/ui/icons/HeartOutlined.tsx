import { SVGProps, Ref, forwardRef, memo } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={17}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#fff"
      stroke="#3A3A3A"
      strokeWidth={1.5}
      d="M19 5.602C19 11.227 10 16 10 16S1 11.227 1 5.602c0-1.22.492-2.39 1.369-3.254A4.71 4.71 0 0 1 5.673 1C7.628 1 9.303 2.05 10 3.727 10.697 2.05 12.372 1 14.327 1a4.71 4.71 0 0 1 3.304 1.348A4.567 4.567 0 0 1 19 5.602Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
