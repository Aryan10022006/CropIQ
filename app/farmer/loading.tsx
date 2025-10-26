import { Container, Stack, Skeleton, SimpleGrid, Card } from '@mantine/core';

export default function FarmerLoading() {
  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        <div>
          <Skeleton height={44} width="60%" mb="sm" radius="md" />
          <Skeleton height={20} width="40%" radius="md" />
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} shadow="sm" p="lg" radius="lg" withBorder>
              <Skeleton height={80} radius="md" />
            </Card>
          ))}
        </SimpleGrid>

        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Skeleton height={32} width="40%" mb="lg" />
          <Skeleton height={200} radius="md" />
        </Card>

        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
          {[1, 2].map((i) => (
            <Card key={i} shadow="md" p="xl" radius="lg" withBorder>
              <Stack gap="md">
                <Skeleton height={28} width="50%" />
                <Skeleton height={150} />
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
