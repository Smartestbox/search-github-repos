import { SVGProps, Ref, forwardRef, memo } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={13}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#fff"
      d="M15.5 4.002c0 4.687-7.5 8.665-7.5 8.665S.5 8.689.5 4.002c0-1.017.41-1.993 1.14-2.712A3.925 3.925 0 0 1 4.395.167C6.024.167 7.42 1.04 8 2.439 8.581 1.041 9.977.167 11.606.167c1.033 0 2.023.404 2.753 1.123.73.72 1.141 1.695 1.141 2.712Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
