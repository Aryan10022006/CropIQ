'use client';
import React from 'react';
import {
  Container, Title, Text, Card, Stack, Group, ThemeIcon,
  Paper, SimpleGrid, rem, Textarea, Button, TextInput
} from '@mantine/core';
import {
  IconPhone, IconMail, IconMessageCircle, IconHelp,
  IconClock, IconUser, IconSend
} from '@tabler/icons-react';

export default function SupportPage() {
  return (
    <Container fluid p="xl">
      <Stack gap="xl">
        <div>
          <Title
            order={1}
            style={{
              fontSize: rem(32),
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: 8
            }}
          >
            Support & Help
          </Title>
          <Text size="lg" c="dimmed" fw={500}>
            We're here to help you 24/7
          </Text>
        </div>

        {/* Contact Options */}
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          <Card shadow="md" p="xl" radius="lg" withBorder style={{ textAlign: 'center' }}>
            <ThemeIcon size={64} radius="xl" variant="light" color="green" mx="auto" mb="md">
              <IconPhone size={32} />
            </ThemeIcon>
            <Text size="lg" fw={700} mb="xs">Call Us</Text>
            <Text size="xl" fw={800} c="green.6" mb="xs">1800-123-4567</Text>
            <Text size="sm" c="dimmed">Toll-free • Available 24/7</Text>
          </Card>

          <Card shadow="md" p="xl" radius="lg" withBorder style={{ textAlign: 'center' }}>
            <ThemeIcon size={64} radius="xl" variant="light" color="blue" mx="auto" mb="md">
              <IconMessageCircle size={32} />
            </ThemeIcon>
            <Text size="lg" fw={700} mb="xs">WhatsApp</Text>
            <Text size="xl" fw={800} c="blue.6" mb="xs">+91 98765 43210</Text>
            <Text size="sm" c="dimmed">Chat support available</Text>
          </Card>

          <Card shadow="md" p="xl" radius="lg" withBorder style={{ textAlign: 'center' }}>
            <ThemeIcon size={64} radius="xl" variant="light" color="orange" mx="auto" mb="md">
              <IconMail size={32} />
            </ThemeIcon>
            <Text size="lg" fw={700} mb="xs">Email Support</Text>
            <Text size="md" fw={700} c="orange.6" mb="xs">support@cropiq.in</Text>
            <Text size="sm" c="dimmed">Response within 24 hours</Text>
          </Card>
        </SimpleGrid>

        {/* Contact Form */}
        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Text size="xl" fw={700} mb="lg">Send us a Message</Text>
          <Stack gap="md">
            <TextInput
              label="Your Name"
              placeholder="Enter your name"
              size="md"
              leftSection={<IconUser size={18} />}
              required
            />
            <TextInput
              label="Phone Number"
              placeholder="Enter your phone number"
              size="md"
              leftSection={<IconPhone size={18} />}
              required
            />
            <TextInput
              label="Subject"
              placeholder="What can we help you with?"
              size="md"
              required
            />
            <Textarea
              label="Message"
              placeholder="Describe your issue or question"
              minRows={5}
              size="md"
              required
            />
            <Button
              size="lg"
              leftSection={<IconSend size={18} />}
              variant="filled"
              color="green"
            >
              Send Message
            </Button>
          </Stack>
        </Card>

        {/* FAQs */}
        <Card shadow="md" p="xl" radius="lg" withBorder>
          <Group gap="xs" mb="lg">
            <IconHelp size={24} color="var(--mantine-color-blue-6)" />
            <Text size="xl" fw={700}>Frequently Asked Questions</Text>
          </Group>

          <Stack gap="md">
            <Paper p="lg" radius="md" withBorder>
              <Text size="md" fw={700} mb="xs">How do I file a crop insurance claim?</Text>
              <Text size="sm" c="dimmed">
                Go to "My Claims" section, click "File New Claim", upload photos of damage, and submit. Our team will review within 2-3 days.
              </Text>
            </Paper>

            <Paper p="lg" radius="md" withBorder>
              <Text size="md" fw={700} mb="xs">How long does claim processing take?</Text>
              <Text size="sm" c="dimmed">
                Average claim processing time is 5-7 days from submission to approval. You'll receive SMS updates at each stage.
              </Text>
            </Paper>

            <Paper p="lg" radius="md" withBorder>
              <Text size="md" fw={700} mb="xs">How do I update my field information?</Text>
              <Text size="sm" c="dimmed">
                Visit "My Fields" section, select the field you want to update, and click "Edit Details" to make changes.
              </Text>
            </Paper>

            <Paper p="lg" radius="md" withBorder>
              <Text size="md" fw={700} mb="xs">How are alerts sent to me?</Text>
              <Text size="sm" c="dimmed">
                Critical alerts are sent via SMS to your registered mobile number. You can also view all alerts in the "Alerts & Advisories" section.
              </Text>
            </Paper>
          </Stack>
        </Card>

        {/* Emergency Support */}
        <Card shadow="sm" p="lg" radius="lg" withBorder bg="red.0">
          <Group gap="md">
            <ThemeIcon size={48} radius="md" variant="light" color="red">
              <IconClock size={24} />
            </ThemeIcon>
            <div style={{ flex: 1 }}>
              <Text size="lg" fw={700} c="red.7" mb={4}>Emergency Support</Text>
              <Text size="sm" c="dimmed">
                For urgent crop damage or immediate assistance, call our emergency hotline: <strong>1800-123-4567</strong> (24/7)
              </Text>
            </div>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
}
