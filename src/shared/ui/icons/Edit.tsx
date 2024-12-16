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
      d="M14.373 1.664a.503.503 0 0 0-.725-.017l-.387.384a.25.25 0 0 0 0 .354l.354.353a.25.25 0 0 0 .355 0l.377-.375c.19-.19.208-.5.026-.699ZM12.48 2.813l-5.64 5.63a.281.281 0 0 0-.073.124l-.261.777a.122.122 0 0 0 .152.152l.776-.261a.281.281 0 0 0 .123-.072l5.631-5.642a.281.281 0 0 0 0-.396l-.31-.313a.281.281 0 0 0-.398 0Z"
    />
    <path
      fill="#000"
      d="M12.073 6.052 8.264 9.868a1.284 1.284 0 0 1-.527.32l-.81.27a1.123 1.123 0 0 1-1.385-1.385l.271-.81c.062-.198.171-.38.319-.526l3.816-3.81a.25.25 0 0 0-.176-.427H3.25A1.75 1.75 0 0 0 1.5 5.25v7.5a1.75 1.75 0 0 0 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75V6.228a.25.25 0 0 0-.427-.176Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);
const Memo = memo(ForwardRef);
export default Memo;
