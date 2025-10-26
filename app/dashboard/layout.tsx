'use client';
import '@mantine/core/styles.css';
import '../global.css';
import React from 'react';
import { AppShell, Group, Text, Avatar, Badge, ActionIcon, NavLink, Box, Stack, Burger } from '@mantine/core';
import { IconBell, IconDashboard, IconListDetails, IconAlertTriangle, IconChartBar } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: IconDashboard },
    { href: '/claims', label: 'Claims Workflow', icon: IconListDetails },
    { href: '/alerts', label: 'Farmer Alerts', icon: IconAlertTriangle },
  ];

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding={{ base: 'sm', sm: 'md', lg: 'xl' }}
      styles={{
        main: {
          background: 'var(--mantine-color-gray-0)',
        },
      }}
    >
      {/* Sidebar Navbar */}
      <AppShell.Navbar
        p="md"
        style={{
          background: '#ffffff',
          borderRight: '1px solid var(--mantine-color-gray-2)',
        }}
        onClick={close}
      >
        <AppShell.Section>
          {/* Logo at the top */}
          <Box
            mb="xl"
            p="lg"
            style={{
              borderBottom: '1px solid var(--mantine-color-gray-2)',
              cursor: 'pointer',
            }}
            onClick={() => router.push('/')}
          >
            <Group gap="md" wrap="nowrap">
              <Box
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  overflow: 'hidden',
                  border: '2px solid var(--mantine-color-blue-3)',
                  boxShadow: '0 6px 20px rgba(37, 99, 235, 0.2)',
                  background: '#ffffff',
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="YieldGuard"
                  width={56}
                  height={56}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  priority
                />
              </Box>
              <Stack gap={2}>
                <Text
                  fw={900}
                  size="lg"
                  style={{
                    background: 'linear-gradient(135deg, #1e40af 0%, #059669 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.2,
                  }}
                >
                  YieldGuard
                </Text>
                <Text size="10px" c="dimmed" fw={700} tt="uppercase" style={{ letterSpacing: '0.8px' }}>
                  Assessor Portal
                </Text>
              </Stack>
            </Group>
          </Box>
        </AppShell.Section>

        <AppShell.Section grow mt="md">
          <Stack gap="xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <NavLink
                  key={item.href}
                  label={item.label}
                  leftSection={<Icon size={20} stroke={2} />}
                  active={isActive}
                  onClick={() => router.push(item.href)}
                  styles={{
                    root: {
                      borderRadius: 8,
                      fontWeight: 600,
                      padding: '12px 16px',
                    },
                    label: {
                      fontSize: '0.9rem',
                    },
                  }}
                />
              );
            })}
          </Stack>
        </AppShell.Section>

        <AppShell.Section>
          <Box
            p="md"
            style={{
              borderTop: '1px solid var(--mantine-color-gray-2)',
              marginTop: 'auto',
            }}
          >
            <Text size="xs" c="dimmed" ta="center">
              © 2025 YieldGuard
            </Text>
          </Box>
        </AppShell.Section>
      </AppShell.Navbar>

      {/* Header */}
      <AppShell.Header
        style={{
          background: '#ffffff',
          borderBottom: '1px solid var(--mantine-color-gray-2)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
        }}
      >
        <Group h="100%" px="xl" justify="space-between" style={{ paddingLeft: 'clamp(16px, 3vw, 40px)', paddingRight: 'clamp(16px, 3vw, 40px)' }}>
          <Group gap="xs">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Box
              style={{
                width: 4,
                height: 24,
                background: 'linear-gradient(135deg, #2563eb 0%, #10b981 100%)',
                borderRadius: 2,
              }}
              visibleFrom="sm"
            />
            <Text fw={700} size="sm" c="#64748b" tt="uppercase" style={{ letterSpacing: '0.5px', fontSize: 'clamp(0.625rem, 2vw, 0.875rem)' }}>
              PMFBY Assessment
            </Text>
          </Group>

          <Group gap="lg" style={{ gap: 'clamp(8px, 2vw, 24px)' }}>
            <Badge
              size="lg"
              variant="light"
              color="green"
              leftSection={<IconChartBar size={16} stroke={2.5} />}
              styles={{
                root: {
                  height: 38,
                  paddingLeft: 14,
                  paddingRight: 18,
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                },
              }}
              visibleFrom="sm"
            >
              24 Active
            </Badge>

            <ActionIcon
              variant="light"
              color="blue"
              size={42}
              radius="lg"
              style={{ position: 'relative', width: 'clamp(36px, 6vw, 42px)', height: 'clamp(36px, 6vw, 42px)' }}
              onClick={() => alert('🔔 3 New Notifications:\n\n✅ Claim #A-2847 approved\n⚠️ High risk alert in Zone 3\n📡 New satellite data available')}
            >
              <IconBell size={18} stroke={2.5} />
              <Box
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  background: '#ef4444',
                  border: '2px solid white',
                  boxShadow: '0 2px 4px rgba(239, 68, 68, 0.4)',
                }}
              />
            </ActionIcon>

            <Group
              gap="md"
              style={{
                padding: '8px 16px',
                borderRadius: 10,
                background: 'var(--mantine-color-gray-0)',
                border: '1px solid var(--mantine-color-gray-3)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              visibleFrom="sm"
            >
              <Avatar 
                size={36} 
                radius="xl" 
                color="blue"
                styles={{
                  root: {
                    border: '2px solid var(--mantine-color-blue-2)',
                  },
                }}
              >
                AS
              </Avatar>
              <Stack gap={2}>
                <Text size="sm" fw={700} style={{ lineHeight: 1.2, color: '#0f172a' }}>
                  Assessor Singh
                </Text>
                <Text size="xs" c="dimmed" fw={600} style={{ lineHeight: 1.2 }}>
                  Insurance Officer
                </Text>
              </Stack>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      {/* Main Content */}
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
