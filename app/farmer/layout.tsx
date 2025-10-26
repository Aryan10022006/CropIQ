'use client';
import React from 'react';
import { AppShell, Group, ThemeIcon, Text, NavLink, Avatar, Badge, ActionIcon } from '@mantine/core';
import { 
  IconPlant, IconAlertCircle, IconFileText, IconCloudRain, 
  IconMessageCircle, IconHome, IconLogout, IconBell, IconUser
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function FarmerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navigation = [
    { label: 'My Dashboard', icon: IconHome, href: '/farmer' },
    { label: 'My Fields', icon: IconPlant, href: '/farmer/my-fields' },
    { label: 'Alerts & Advisories', icon: IconAlertCircle, href: '/farmer/alerts' },
    { label: 'My Claims', icon: IconFileText, href: '/farmer/claims' },
    { label: 'Weather', icon: IconCloudRain, href: '/farmer/weather' },
    { label: 'Support', icon: IconMessageCircle, href: '/farmer/support' },
  ];

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 280, breakpoint: 'sm' }}
      padding="md"
    >
      {/* Navbar */}
      <AppShell.Navbar p="md" style={{ background: 'white' }}>
        <AppShell.Section>
          {/* Logo */}
          <Link href="/farmer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group gap="md" mb="xl" style={{ padding: '8px' }}>
              <div
                style={{
                  position: 'relative',
                  width: 56,
                  height: 56,
                  border: '2px solid var(--mantine-color-green-3)',
                  borderRadius: 16,
                  padding: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(16, 185, 129, 0.15)',
                  background: 'white'
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="YieldGuard"
                  width={56}
                  height={56}
                  priority
                  style={{ 
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
              <div>
                <Text size="lg" fw={800} style={{ lineHeight: 1.2, color: '#059669' }}>
                  CropIQ
                </Text>
                <Text size="xs" c="dimmed" fw={600}>
                  Farmer Portal
                </Text>
              </div>
            </Group>
          </Link>
        </AppShell.Section>

        <AppShell.Section grow>
          {/* Navigation */}
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <NavLink
                key={item.href}
                component={Link}
                href={item.href}
                label={item.label}
                leftSection={<Icon size={20} stroke={2} />}
                active={isActive}
                variant="filled"
                style={{
                  borderRadius: 8,
                  marginBottom: 4,
                  fontWeight: isActive ? 700 : 500
                }}
              />
            );
          })}
        </AppShell.Section>

        <AppShell.Section>
          {/* User Profile */}
          <div
            style={{
              padding: 16,
              borderRadius: 12,
              background: 'var(--mantine-color-green-0)',
              border: '2px solid var(--mantine-color-green-2)'
            }}
          >
            <Group gap="sm">
              <Avatar size={40} radius="xl" color="green">
                <IconUser size={24} />
              </Avatar>
              <div style={{ flex: 1 }}>
                <Text size="sm" fw={700}>Ramesh Kumar</Text>
                <Text size="xs" c="dimmed">Farmer ID: MH-245</Text>
              </div>
              <ActionIcon variant="subtle" color="green" size="lg">
                <IconLogout size={18} />
              </ActionIcon>
            </Group>
          </div>
        </AppShell.Section>
      </AppShell.Navbar>

      {/* Header */}
      <AppShell.Header
        style={{
          background: 'white',
          borderBottom: '1px solid var(--mantine-color-gray-2)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px'
        }}
      >
        <Group justify="space-between" style={{ width: '100%', height: '100%' }}>
          {/* Left side */}
          <Group gap="md">
            <div
              style={{
                width: 4,
                height: 40,
                background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                borderRadius: 4
              }}
            />
            <div>
              <Text size="lg" fw={800} style={{ lineHeight: 1.2, color: '#0f172a' }}>
                CROPIQ FARMER PORTAL
              </Text>
              <Text size="xs" c="dimmed" fw={500}>
                Your Digital Agriculture Assistant
              </Text>
            </div>
          </Group>

          {/* Right side */}
          <Group gap="md">
            {/* Notifications */}
            <div style={{ position: 'relative' }}>
              <ActionIcon 
                variant="light" 
                color="green" 
                size={42} 
                radius="md"
                style={{ boxShadow: '0 2px 8px rgba(16, 185, 129, 0.15)' }}
              >
                <IconBell size={20} stroke={2} />
              </ActionIcon>
              <div
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  width: 10,
                  height: 10,
                  background: '#ef4444',
                  borderRadius: '50%',
                  border: '2px solid white',
                  boxShadow: '0 0 4px rgba(239, 68, 68, 0.5)'
                }}
              />
            </div>

            {/* Language */}
            <Badge size="lg" variant="light" color="green" style={{ cursor: 'pointer' }}>
              🇮🇳 हिंदी
            </Badge>
          </Group>
        </Group>
      </AppShell.Header>

      {/* Main Content */}
      <AppShell.Main style={{ background: 'var(--mantine-color-gray-0)', minHeight: '100vh' }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
