import { Button } from "@mui/material";
import * as React from "react";

interface URL {
  url: string;
}
export function EmailButton(props: URL) {
  const { url } = props;

  return (
    <div>
      {" "}
      <Button href={url}>Click me</Button>
    </div>
  );
}
