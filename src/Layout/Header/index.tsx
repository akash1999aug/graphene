import { Box } from "@mui/material";
import styles from "./styles";

const Header = () => {
  return (
    <Box sx={styles.headerWrapper}>
      <Box sx={styles.leftSect}>
        <Box component="img" src="/svg/headerLogo.svg" sx={styles.logo} />
        <Box sx={styles.headerItem}>ABOUT</Box>
        <Box sx={styles.headerItem}>COMMUNITY</Box>
        <Box sx={styles.headerItem}>LOCATION</Box>
        <Box sx={styles.headerItem}>OUR MENU</Box>
        <Box sx={styles.headerItem}>RECIPES</Box>
      </Box>
      <Box sx={styles.rightSect}>
        <Box sx={styles.headerItem}>CONTACT</Box>
        <Box sx={styles.headerItem}>LOGIN</Box>
      </Box>
    </Box>
  );
};

export default Header;
