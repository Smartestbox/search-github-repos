import { SVGProps, Ref, forwardRef, memo } from "react";

const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#000"
      d="M2 5.125v7.625a1.75 1.75 0 0 0 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.75V5.125A.125.125 0 0 0 13.875 5H2.125A.125.125 0 0 0 2 5.125Zm8.344 4.738-1.99 1.99a.5.5 0 0 1-.707 0l-1.99-1.99a.509.509 0 0 1-.027-.699.5.5 0 0 1 .723-.017L7.5 10.293V7.014c0-.269.207-.5.476-.513A.5.5 0 0 1 8.5 7v3.293l1.147-1.146a.5.5 0 0 1 .723.017c.182.2.164.51-.026.7ZM14 1.5H2a1 1 0 0 0-1 1V3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
