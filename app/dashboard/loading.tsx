import { Container, Stack, Skeleton, SimpleGrid, Card } from '@mantine/core';

export default function DashboardLoading() {
  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        <div>
          <Skeleton height={44} width="50%" mb="sm" radius="md" />
          <Skeleton height={20} width="35%" radius="md" />
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} shadow="sm" p="xl" radius="lg" withBorder>
              <Stack gap="md">
                <Skeleton height={56} width={56} radius="md" />
                <Skeleton height={48} width="70%" />
                <Skeleton height={16} width="50%" />
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, lg: 12 }} spacing="lg">
          <Card shadow="md" p="xl" radius="lg" withBorder style={{ gridColumn: 'span 8' }}>
            <Skeleton height={500} radius="md" />
          </Card>
          <Card shadow="md" p="xl" radius="lg" withBorder style={{ gridColumn: 'span 4' }}>
            <Stack gap="md">
              <Skeleton height={28} width="60%" />
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} height={80} radius="md" />
              ))}
            </Stack>
          </Card>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
