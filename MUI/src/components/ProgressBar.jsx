import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

function LinearProgressWithLabel(props) {
  return (
    <>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          component="p"
          color="secondary"
          fontWeight="600"
          fontSize="12px"
        >
          {props.skill}
        </Typography>
        <Typography
          component="span"
          color="secondary"
          fontWeight="600"
          fontSize="12px"
        >{`${Math.round(props.value)}%`}</Typography>
      </Stack>
      <Box sx={{ display: "flex", alignItems: "center", mt: "5px" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            {...props}
            sx={{
              height: "10px",
            }}
          />
        </Box>
        {/* <Box sx={{ minWidth: 35, display: "block" }}></Box> */}
      </Box>
    </>
  );
}

// LinearProgressWithLabel.propTypes = {
/**
 * The value of the progress indicator for the determinate and buffer variants.
 * Value between 0 and 100.
 */
//   value: PropTypes.number.isRequired,
// };

export default function LinearWithValueLabel({ value, skill }) {
  //   const value = props.value;
  //   const skill = props.skill;
  //   const [progress, setProgress] = React.useState(10);

  //   React.useEffect(() => {
  //     const timer = setInterval(() => {
  //       setProgress((prevProgress) =>
  //         prevProgress >= 100 ? 10 : prevProgress + 10
  //       );
  //     }, 800);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={value} skill={skill} />
    </Box>
  );
}
