import { Box, SliderProps } from "@mui/material";
import { useRef } from "react";
import Slide from "src/components/Slide";
import styles from "./styles";

const Menu = () => {
  return (
    <Box sx={styles.menuWrapper}>
      <Box sx={styles.headingWrapper}>
        <Box sx={styles.meetHeading}>
          Our Menu
          <Box sx={styles.headingBar} />
        </Box>
        <Box sx={styles.knowMore}>KNOW MORE</Box>
      </Box>
      <Box sx={styles.menuHomeWrapper}>
        <MenuItem direction="up" customStyles={{ zIndex: "8" }} />
        <MenuItem
          heading="MAIN COURSES"
          customStyles={{ paddingTop: "550px", zIndex: "6" }}
          direction="down"
        />
        <MenuItem
          heading="SIDES"
          customStyles={{ paddingTop: "500px", zIndex: "4" }}
        />
        <MenuItem
          heading="DESSERTS"
          isBorder={false}
          customStyles={{ paddingTop: "310px", zIndex: "3" }}
          direction="down"
        />
      </Box>
    </Box>
  );
};

const MenuItem = ({
  heading = "STARTERS",
  isBorder = true,
  customStyles = {},
  direction = "up",
}: {
  direction?: "left" | "right" | "up" | "down";
  heading?: string;
  isBorder?: boolean;
  customStyles?: any;
}) => {
  const triggerRef = useRef();

  return (
    <Box
      sx={{
        width: "40%",
        backgroundColor: "#F8F8F8",
        ...(isBorder && { borderRight: "1px solid #CECECE" }),
        zIndex: customStyles?.zIndex,
      }}
      ref={triggerRef}
    >
      <Slide triggerRef={triggerRef} direction={direction}>
        <Box
          sx={{
            ...styles.menuItemsWrapper,
            ...customStyles,
          }}
        >
          <Box sx={styles.menuItemHeading}>{heading}</Box>
          <Box sx={styles.subMenuWrapper}>
            <SubMenuItem />
            <SubMenuItem />
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};

const SubMenuItem = () => {
  return (
    <Box sx={styles.subMenuItemWrapper}>
      <Box sx={styles.subMenuHeading}>QUINOA CROQUETTAS</Box>
      <Box sx={styles.subMenuDesc}>
        Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)
      </Box>
      <Box sx={styles.price}>£4.95</Box>
    </Box>
  );
};

export default Menu;
