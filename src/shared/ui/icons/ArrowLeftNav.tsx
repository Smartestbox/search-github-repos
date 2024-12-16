import { SVGProps, Ref, forwardRef, memo } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#1E89F0"
      fillRule="evenodd"
      d="m6.817 12.749 4.212 4.19-1.058 1.063-5.5-5.471a.75.75 0 0 1 0-1.064l5.5-5.471 1.058 1.063-4.212 4.19H20v1.5H6.817Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
