import { Box } from "@mui/material";
import styles from "./styles";

const Footer = () => {
  return (
    <Box sx={styles.footerWrapper}>
      <Box sx={styles.footerUpper}>
        <Box sx={styles.itemsBoxWrapper}>
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
        </Box>
        <Box
          component="img"
          src="/webp/thisIsLogo.webp"
          sx={styles.thisIsLogo}
        />
      </Box>

      <Box sx={styles.footerBottom}>
        <Box sx={styles.footerBottomLine}>
          2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor .
        </Box>
      </Box>
    </Box>
  );
};

const Items = () => {
  return (
    <Box sx={styles.itemsWrapper}>
      <Box sx={styles.itemsHeading}>SECTION</Box>
      <Box sx={styles.item}>Subsection</Box>
      <Box sx={styles.item}>Subsection</Box>
      <Box sx={styles.item}>Subsection</Box>
      <Box sx={styles.item}>Subsection</Box>
    </Box>
  );
};

export default Footer;
