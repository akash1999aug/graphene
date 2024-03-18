const styles = {
  communityWrapper: {
    display: "flex",
    // alignItems: "center",
    margin: "136px",
    gap: "30px",
  },
  leftWrapper: { width: "50%", display: "flex", flexDirection: "column" },
  headingWrapper: { width: "233px", alignSelf: "end", marginBottom: "53px" },

  meetHeading: {
    padding: "0 10px",
    position: "relative",
    fontFamily: "DIN Condensed",
    fontSize: "62px",
    fontWeight: "bold",
    lineHeight: "52px",
    color: "#333333",
  },
  headingBar: {
    width: "245px",
    top: "65%",
    left: 0,
    height: "5.7px",
    background: "#ffdac9",
    zIndex: "-1",
    position: "absolute",
  },
  knowMore: {
    width: "fit-content",
    padding: "0px 10px",
    marginBottom: "37px",
    background: "#ffdac9",
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "52px",
    color: "#333333",
  },
  meetDesc: {
    fontFamily: "DIN Condensed",
    fontSize: "22px",
    fontWeight: "bold",
    lineHeight: "25px",
    color: "#333333",
  },
  leftInfo: {
    marginTop: "41px",
    width: "233px",
    fontFamily: "Gill Sans",
    fontSize: "15px",
    fontWeight: "bold",
    lineHeight: "20px",
    color: "#333333",
  },

  rightTopInfoCard: { marginTop: "60px" },
  rightBottomInfoCard: {
    marginTop: "265px",
  },

  infoWrapper: {
    width: "267px",
    padding: "30px",
    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.06)",
    filter: "drop-shadow(0px 15px 25px rgba(0,0,0,0.06))",
  },
  infoLabel: {
    fontFamily: "DIN Condensed",
    fontSize: "22px",
    fontWeight: "bold",
    lineHeight: "52px",
    color: "#333333",
  },
  infoDesc: {
    fontFamily: "Gill Sans",
    fontSize: "15px",
    lineHeight: "20px",
    color: "#333333",
  },
  iconWrapper: {
    fontFamily: "DIN Condensed",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: "42px",
    color: "#333333",
  },
  messageIcon: { width: "12px", height: "12px" },
};

export default styles;
