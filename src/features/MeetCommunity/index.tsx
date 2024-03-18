import { Box } from "@mui/material";
import { useRef } from "react";
import Slide from "src/components/Slide";
import styles from "./styles";

const MeetCommunity = () => {
  return (
    <Box sx={styles.communityWrapper}>
      <Box sx={styles.leftWrapper}>
        <Box sx={styles.headingWrapper}>
          <Box sx={styles.meetHeading}>
            MEET OUR COMMUNITY
            <Box sx={styles.headingBar} />
          </Box>
          <Box sx={styles.knowMore}>KNOW MORE</Box>
          <Box sx={styles.meetDesc}>
            LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN
            TORNA ENTALTO
          </Box>
        </Box>

        <InfoCard />
        <Box sx={styles.leftInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure.
        </Box>
      </Box>

      <Box>
        <InfoCard
          flexDirection="row-reverse"
          customStyles={styles.rightTopInfoCard}
        />
        <InfoCard customStyles={styles.rightBottomInfoCard} />
      </Box>
    </Box>
  );
};

const InfoCard = ({ flexDirection = "row", customStyles = {} }) => {
  const triggerRef = useRef();

  return (
    <Box ref={triggerRef}>
      <Slide triggerRef={triggerRef}>
        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: "20px",
            flexDirection,
            ...customStyles,
          }}
        >
          <Box sx={styles.infoWrapper}>
            <Box sx={styles.infoLabel}>@love_food</Box>
            <Box sx={styles.infoDesc}>
              Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles,
              dark chocolate with coconut and milk chocolate with peanuts! [📷:
              @foodwithmichel] #lovefood
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                gap: "11px",
              }}
            >
              <Box sx={styles.iconWrapper}>
                <Box
                  component="img"
                  src="/svg/message.svg"
                  sx={styles.messageIcon}
                />
                798
              </Box>

              <Box sx={styles.iconWrapper}>
                <Box
                  component="img"
                  src="/svg/like.svg"
                  sx={styles.messageIcon}
                />
                99.7K
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px",
              width: "250px",
              height: "250px",
              boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.06)",
            }}
          >
            <Box
              component="img"
              src="/webp/communityImage.webp"
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};

export default MeetCommunity;
