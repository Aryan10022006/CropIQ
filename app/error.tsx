'use client';
import { useEffect } from 'react';
import { Container, Title, Text, Button, Stack, Paper, Group, ThemeIcon } from '@mantine/core';
import { IconAlertTriangle, IconRefresh } from '@tabler/icons-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry)
    console.error('Application error:', error);
  }, [error]);

  return (
    <Container size="sm" py={80}>
      <Paper shadow="md" p="xl" radius="lg" withBorder>
        <Stack align="center" gap="lg">
          <ThemeIcon size={80} radius="xl" variant="light" color="red">
            <IconAlertTriangle size={48} stroke={2} />
          </ThemeIcon>
          
          <div style={{ textAlign: 'center' }}>
            <Title order={1} mb="md" style={{ fontSize: '2rem', fontWeight: 800 }}>
              Something went wrong
            </Title>
            <Text size="lg" c="dimmed" mb="xl">
              We apologize for the inconvenience. The error has been logged and our team will look into it.
            </Text>
            
            {error.message && (
              <Paper p="md" radius="md" bg="red.0" style={{ border: '1px solid var(--mantine-color-red-2)' }}>
                <Text size="sm" c="red.7" fw={500}>
                  Error: {error.message}
                </Text>
              </Paper>
            )}
          </div>

          <Group gap="md">
            <Button
              size="lg"
              leftSection={<IconRefresh size={20} />}
              onClick={() => reset()}
            >
              Try Again
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.location.href = '/'}
            >
              Go to Homepage
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}
