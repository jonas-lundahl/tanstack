import { styled } from "@mui/material/styles";
import { compose, spacing, border, typography } from "@mui/system";

export const Image = styled("img")(compose(spacing, border, typography), {
  display: "block",
  maxWidth: "100%",
});
