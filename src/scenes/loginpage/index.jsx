import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 100px)");
    return (
    <Box>
        <Box width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center">
            <Typography fontWeight="bold" fontSize="32px" color="blue">V-CONNECT</Typography>
        </Box>
        <Box width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}>
            <Typography fontWeight="500" variable="h5" sx={{ color: "blue" }}>
                <h1><b><i>Welcome to V-CONNECT</i></b></h1><br/>Lets connect the World<br/><br/>
                <Form/>
            </Typography>
        </Box>
    </Box>
    );
};

export default LoginPage;