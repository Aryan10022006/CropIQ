import { Container, Stack, Skeleton, SimpleGrid, Card } from '@mantine/core';

export default function AlertsLoading() {
  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        <div>
          <Skeleton height={48} width="50%" mb="md" radius="md" />
          <Skeleton height={20} width="40%" radius="md" />
        </div>

        <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="lg">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} shadow="sm" p="lg" radius="lg" withBorder>
              <Skeleton height={80} radius="md" />
            </Card>
          ))}
        </SimpleGrid>

        <Card shadow="sm" p="lg" radius="lg" withBorder>
          <Stack gap="md">
            <Skeleton height={48} radius="md" />
          </Stack>
        </Card>

        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} shadow="md" p="xl" radius="lg" withBorder>
              <Stack gap="md">
                <Skeleton height={48} width="60%" />
                <Skeleton height={100} />
                <Skeleton height={60} />
                <Skeleton height={40} />
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
