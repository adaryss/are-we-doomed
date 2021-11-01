import React from "react";
import { Container, Box, CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export const SearchButton = ({ handleButtonClick, isFetching, hasError }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "24px",
      }}
    >
      <LoadingButton
        loading={isFetching}
        disabled={hasError !== null}
        loadingPosition="center"
        variant="contained"
        color="primary"
        size="large"
        loadingIndicator={
          <Box
            component="span"
            sx={{ color: "#666", display: "flex", alignItems: "center" }}
          >
            <CircularProgress color="inherit" size={14} />
            <Box component="span" sx={{ marginLeft: "12px" }}>
              Fetching the sky...
            </Box>
          </Box>
        }
        sx={{ width: "70%" }}
        onClick={handleButtonClick}
      >
        {hasError !== null ? (
          <Box component="span" sx={{ color: "#666" }}>
            Scanning is broken
          </Box>
        ) : (
          "Find out"
        )}
      </LoadingButton>
    </Container>
  );
};
