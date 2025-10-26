import { Container, Stack, Skeleton, SimpleGrid, Card } from '@mantine/core';

export default function Loading() {
  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        {/* Header skeleton */}
        <div>
          <Skeleton height={48} width="60%" mb="md" radius="md" />
          <Skeleton height={24} width="40%" radius="md" />
        </div>

        {/* Stats cards skeleton */}
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} shadow="sm" p="xl" radius="lg" withBorder>
              <Stack gap="md">
                <Skeleton height={56} width={56} radius="md" />
                <Skeleton height={48} width="80%" />
                <Skeleton height={20} width="60%" />
                <Skeleton height={8} mt="md" radius="xl" />
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        {/* Main content skeleton */}
        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Stack gap="md">
            <Skeleton height={32} width="40%" mb="md" />
            <Skeleton height={300} radius="md" />
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
