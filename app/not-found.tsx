import { Container, Title, Text, Button, Stack, Paper, ThemeIcon } from '@mantine/core';
import { IconError404 } from '@tabler/icons-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container size="sm" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <Paper shadow="md" p="xl" radius="lg" withBorder>
        <Stack align="center" gap="lg">
          <ThemeIcon size={100} radius="xl" variant="light" color="blue">
            <IconError404 size={60} stroke={2} />
          </ThemeIcon>
          
          <div style={{ textAlign: 'center' }}>
            <Title order={1} mb="md" style={{ fontSize: '3rem', fontWeight: 800 }}>
              404
            </Title>
            <Title order={2} mb="sm" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Page Not Found
            </Title>
            <Text size="lg" c="dimmed" mb="xl">
              The page you're looking for doesn't exist or has been moved.
            </Text>
          </div>

          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button size="lg" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>
              Return to Homepage
            </Button>
          </Link>
        </Stack>
      </Paper>
    </Container>
  );
}
