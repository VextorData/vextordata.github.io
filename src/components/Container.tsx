import { Container as MuiContainer } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <MuiContainer
      maxWidth="lg"
      sx={{
        px: {
          xs: 3,
          md: 4,
        },
      }}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;