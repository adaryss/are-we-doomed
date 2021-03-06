import React from "react";
import { Container, Box, CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Trans } from "@lingui/react";

export const SearchButton = ({ handleButtonClick, isFetching, hasError }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "24px",
        "@media (max-width: 1199px)": {
          padding: 0,
        },
      }}
    >
      <LoadingButton
        onClick={handleButtonClick}
        loading={isFetching}
        disabled={hasError !== null}
        loadingPosition="center"
        variant="contained"
        color="warning"
        size="large"
        loadingIndicator={
          <Box
            component="span"
            sx={{ color: "#666", display: "flex", alignItems: "center", }}
          >
            <CircularProgress color="inherit" size={14} />
            <Box component="span" sx={{ marginLeft: "12px", whiteSpace: 'nowrap' }}>
              <Trans id="fetch_button_scanning" />
            </Box>
          </Box>
        }
        sx={{
          width: "100%",
          "@media (min-width: 1200px)": {
            width: "70%",
          },
        }}
      >
        {hasError !== null ? (
          <Box component="span" sx={{ color: "#666" }}>
            <Trans id="fetch_button_error" />
          </Box>
        ) : (
          <Trans id="fetch_button_search" />
        )}
      </LoadingButton>
    </Container>
  );
};
