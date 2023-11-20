import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
    padding: "5%",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "50px",
}));

export default WidgetWrapper;