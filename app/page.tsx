'use client';
import React, { memo } from 'react';
import { Container, Title, Text, Button, SimpleGrid, Paper, Stack, Group, ThemeIcon, Box } from '@mantine/core';
import { IconDrone, IconDeviceHeartMonitor, IconReportMoney, IconArrowRight, IconShieldCheck, IconChartLine } from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  const features = [
    { icon: IconDrone, title: 'UAV-Powered Assessments', description: 'High-resolution drone imagery provides precise crop health analysis and damage assessment', color: 'blue' },
    { icon: IconDeviceHeartMonitor, title: 'Real-time Sensor Fusion', description: 'IoT sensors continuously monitor soil moisture, temperature, and environmental conditions', color: 'green' },
    { icon: IconReportMoney, title: 'Automated Claims', description: 'AI-powered verification streamlines PMFBY claims processing with blockchain security', color: 'teal' },
  ];

  return (
    <Box style={{ minHeight: '100vh', background: 'var(--mantine-color-gray-0)' }}>
      <Box style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #ecfdf5 100%)', borderBottom: '1px solid var(--mantine-color-gray-2)' }}>
        <Container size="xl" py={80} style={{ paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
          <Stack gap={40} align="center">
            <Box style={{ textAlign: 'center' }}>
              <Group justify="center" mb="xl">
                <Box 
                  style={{ 
                    width: 'clamp(80px, 15vw, 120px)', 
                    height: 'clamp(80px, 15vw, 120px)', 
                    borderRadius: 24, 
                    overflow: 'hidden',
                    border: '3px solid var(--mantine-color-blue-3)',
                    boxShadow: '0 12px 48px rgba(59, 130, 246, 0.25)',
                    background: '#ffffff',
                    padding: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image 
                    src="/images/logo.png" 
                    alt="YieldGuard" 
                    width={120} 
                    height={120} 
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }} 
                    priority 
                  />
                </Box>
              </Group>
              <Title 
                order={1} 
                fw={900} 
                mb="md"
                style={{ 
                  background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  backgroundClip: 'text', 
                  letterSpacing: '-0.02em', 
                  lineHeight: 1.1,
                  fontSize: 'clamp(1.75rem, 5vw, 3.5rem)'
                }}
              >
                Welcome to YieldGuard
              </Title>
              <Text 
                c="dimmed" 
                maw={750} 
                mt="lg" 
                fw={500} 
                mx="auto"
                px="md"
                style={{ lineHeight: 1.7, color: '#64748b', fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}
              >
                The future of crop insurance. Fusing high-resolution UAV imagery with real-time IoT sensor data to deliver precise yield estimates and automated claim verification for PMFBY.
              </Text>
              <Stack mt={40} gap="md" maw={600} mx="auto" px="md">
                <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                  <Button 
                    size="lg"
                    radius="lg" 
                    gradient={{ from: '#2563eb', to: '#1e40af', deg: 135 }} 
                    variant="gradient" 
                    rightSection={<IconArrowRight size={20} stroke={2.5} />}
                    component="div"
                    fullWidth
                    style={{ 
                      height: 56,
                      fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', 
                      fontWeight: 700, 
                      boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Launch Assessor Dashboard
                  </Button>
                </Link>
                <Link href="/farmer" style={{ textDecoration: 'none' }}>
                  <Button 
                    size="lg"
                    radius="lg" 
                    gradient={{ from: '#10b981', to: '#059669', deg: 135 }} 
                    variant="gradient" 
                    rightSection={<IconArrowRight size={20} stroke={2.5} />}
                    component="div"
                    fullWidth
                    style={{ 
                      height: 56,
                      fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', 
                      fontWeight: 700, 
                      boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Farmer Portal (CropIQ)
                  </Button>
                </Link>
              </Stack>
              <Group mt="xl" gap="xl" justify="center" px="md" wrap="wrap">
                <Group gap="xs"><ThemeIcon size="sm" radius="xl" color="green" variant="light"><IconShieldCheck size={14} /></ThemeIcon><Text size="sm" c="dimmed" fw={600}>Blockchain Secured</Text></Group>
                <Group gap="xs"><ThemeIcon size="sm" radius="xl" color="blue" variant="light"><IconChartLine size={14} /></ThemeIcon><Text size="sm" c="dimmed" fw={600}>AI-Powered Analytics</Text></Group>
              </Group>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Features */}
      <Container size="lg" py={80} px="md" style={{ paddingTop: 'clamp(40px, 8vw, 80px)', paddingBottom: 'clamp(40px, 8vw, 80px)' }}>
        <Stack gap={60}>
          <div style={{ textAlign: 'center' }}>
            <Title order={2} fw={800} mb="md" style={{ color: '#0f172a', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              Platform Features
            </Title>
            <Text c="dimmed" maw={650} mx="auto" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}>
              Comprehensive crop insurance solution powered by cutting-edge technology
            </Text>
          </div>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={32}>
            {features.map((feature, idx) => (
              <Paper 
                key={idx} 
                p={32} 
                radius="xl" 
                shadow="sm" 
                withBorder
                style={{ 
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}>
                <Stack gap="md">
                  <ThemeIcon size={64} radius="xl" variant="light" color={feature.color} style={{ boxShadow: `0 8px 24px rgba(37, 99, 235, 0.15)` }}>
                    <feature.icon size={32} stroke={2} />
                  </ThemeIcon>
                  <div>
                    <Text size="xl" fw={700} mb="xs" style={{ color: '#0f172a', fontSize: 'clamp(1.125rem, 3vw, 1.25rem)' }}>
                      {feature.title}
                    </Text>
                    <Text c="dimmed" style={{ lineHeight: 1.6, fontSize: 'clamp(0.8125rem, 2vw, 0.875rem)' }}>
                      {feature.description}
                    </Text>
                  </div>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Footer */}
      <Box style={{ background: 'var(--mantine-color-gray-1)', borderTop: '1px solid var(--mantine-color-gray-3)' }}>
        <Container size="lg" py={40} px="md">
          <Stack gap="xl">
            <Group justify="space-between" wrap="wrap" style={{ gap: 16 }}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <Text size="lg" fw={700} mb="xs" style={{ color: '#0f172a' }}>YieldGuard</Text>
                <Text size="sm" c="dimmed">AI-Powered Crop Insurance Platform</Text>
              </div>
              <Group gap="md" mx="auto" wrap="wrap" justify="center">
                <Text size="sm" c="dimmed" style={{ cursor: 'pointer' }}>Privacy</Text>
                <Text size="sm" c="dimmed" style={{ cursor: 'pointer' }}>Terms</Text>
                <Text size="sm" c="dimmed" style={{ cursor: 'pointer' }}>Support</Text>
              </Group>
            </Group>
            <Text size="sm" c="dimmed" ta="center">
               2024 YieldGuard. All rights reserved. Made with  for SIH 2025
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
