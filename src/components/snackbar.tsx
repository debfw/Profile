import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { useTranslation } from 'next-i18next';

const action = (
  <Button color="secondary" size="small">
    AI assistant
  </Button>
);

export default function LongTextSnackbar() {
    const { t } = useTranslation();

  return (
    <Stack spacing={2} sx={{ maxWidth: 500, mt:3 }}>
      <SnackbarContent message="Where are you now?" action={action} />
      <SnackbarContent
        message={
            t('location')
        }
      />
      <SnackbarContent
        message="Your focus?"
        action={action}
      />
      <SnackbarContent
        message={
            t('summary.focus')
        }
        action={action}
      />
    </Stack>
  );
}
