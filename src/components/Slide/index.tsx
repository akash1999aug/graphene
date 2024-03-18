import MuiSlide, { SlideProps } from "@mui/material/Slide";
import { MutableRefObject } from "react";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";

const Slide = ({
  triggerRef,
  direction = "up",
  children,
  ...rest
}: SlideProps & { triggerRef: MutableRefObject<any> }) => {
  const dataRef = useIntersectionObserver(triggerRef);

  return (
    <MuiSlide
      direction={direction}
      in={dataRef?.isIntersecting}
      timeout={3000}
      mountOnEnter
      unmountOnExit
      {...rest}
    >
      {children}
    </MuiSlide>
  );
};

export default Slide;
