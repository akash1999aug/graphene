import { Box } from "@mui/material";
import styles from "./styles";

const Banner = () => {
  return (
    <Box sx={styles.homeWrapper}>
      <Box component="img" src="/webp/banner1.webp" sx={styles.banner1} />
      <Box component="img" src="/svg/logoBanner.svg" sx={styles.logoBanner} />
      <Box sx={styles.bannerText}>
        <Box sx={styles.bestFoodie}>THE BEST FOODIE</Box>
        <Box sx={styles.experience}>EXPERIENCE</Box>
        <Box sx={styles.london}>NOW IN LONDON</Box>
      </Box>
    </Box>
  );
};

export default Banner;
