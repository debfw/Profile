import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, Button } from "@mui/material";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
  const helperText = React.useMemo(() => {
    if (focused) {
      return "writing...";
    }

    return "";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}


export default function EmailInputbox() {
  const [email, setEmail] = React.useState("");
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipientEmail: email }),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <form noValidate autoComplete="on" onSubmit={handleSubmit}>
      <FormControl sx={{ width: "25ch", height: 200, margin: 2 }}>
        <OutlinedInput
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            height: 50,
            marginBottom:1,
            alignItems: "start",
            "& .MuiInputBase-input::placeholder": {
              fontSize: "0.7rem",
              lineHeight: "1",
              color: "secondary",
            },
          }}
        />
        <OutlinedInput
          placeholder="Send to clwork1324@gmail.com"
          sx={{
            height: 150,
            alignItems: "start",
            "& .MuiInputBase-input::placeholder": {
              fontSize: "0.7rem",
              lineHeight: "1",
              color: "secondary",
            },
          }}
        />
        <MyFormHelperText />
        <Box sx={{ display: "flex", justifyContent: "end" }}>
         <Button onClick={handleSubmit}>Click me</Button>
        </Box>
      </FormControl>
    </form>
  );
}