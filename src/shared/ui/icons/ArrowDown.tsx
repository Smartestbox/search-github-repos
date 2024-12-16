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
      fill="#272727"
      fillRule="evenodd"
      d="M5.254 9.258a.857.857 0 0 1 1.227 0L12 14.871l5.52-5.613a.857.857 0 0 1 1.226 0 .892.892 0 0 1 0 1.248l-6.133 6.236a.857.857 0 0 1-1.226 0l-6.133-6.237a.892.892 0 0 1 0-1.247Z"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
