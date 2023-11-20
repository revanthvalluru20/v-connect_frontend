import { Box } from "@mui/material";
import { useState } from "react";

const UserImage = ({ image, size = "50px" }) => {
    const [imageError, setImageError] = useState(false);

    const handleError = () => {
        setImageError(true);
    };

    return (
        <Box width={size} height={size}>
            {imageError ? (
                <img src="../assets/userprofile2.png" alt="twitter" /> // Display an error message if the image fails to load
            ) : (
                <img
                    style={{ objectFit: "cover", borderRadius: "50%" }}
                    width={size}
                    height={size}
                    alt="user"
                    onError={handleError} // Handle image loading errors
                    //src={`http://localhost:8800/assets/${image}`}
                    src={`https://v-connect.onrender.com/assets/${image}`}
                    />
            )}
        </Box>
    );
};

export default UserImage;
