import { Typography } from "@mui/material";
import { ReactNode } from "react";
interface Iprops {
  children: ReactNode;
}
export const Options = (props: Iprops) => {
  const { children } = props;
  return (
    <div>
      <Typography>Options</Typography>
      {children}
    </div>
  );
};
