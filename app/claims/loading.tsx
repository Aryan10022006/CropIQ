import { Container, Stack, Skeleton, SimpleGrid, Card } from '@mantine/core';

export default function ClaimsLoading() {
  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        <div>
          <Skeleton height={48} width="50%" mb="md" radius="md" />
          <Skeleton height={20} width="40%" radius="md" />
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} shadow="sm" p="xl" radius="lg" withBorder>
              <Skeleton height={120} radius="md" />
            </Card>
          ))}
        </SimpleGrid>

        <Card shadow="sm" p="lg" radius="lg" withBorder>
          <Stack gap="md">
            <Skeleton height={48} radius="md" />
          </Stack>
        </Card>

        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Stack gap="md">
            <Skeleton height={32} width="40%" mb="md" />
            <Skeleton height={400} radius="md" />
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
