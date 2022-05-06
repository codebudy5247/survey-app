import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(props:any) {
  const [value, setValue] = React.useState<number | null>(2);

  props.getRatingValue(value);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="size-large"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        max={props?.maxValue}
      />
    </Box>
  );
}