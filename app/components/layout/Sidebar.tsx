"use client";
import React from 'react';
import Link from 'next/link';
import { NavLink, Stack, Divider, Group, Text, Badge, ThemeIcon } from '@mantine/core';
import { IconMap, IconListDetails, IconAlertTriangle, IconDashboard, IconActivity } from '@tabler/icons-react';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Risk Dashboard', icon: IconDashboard, color: 'brand' },
    { href: '/claims', label: 'Claims Workflow', icon: IconListDetails, color: 'accent' },
    { href: '/alerts', label: 'Farmer Alerts', icon: IconAlertTriangle, color: 'orange' },
  ];

  return (
    <div style={{ padding: 16, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Logo />
      
      <Stack gap="sm" mt="xl" style={{ flex: 1 }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} passHref style={{ textDecoration: 'none' }}>
              <NavLink
                label={item.label}
                leftSection={<Icon size={20} stroke={2} />}
                active={isActive}
                variant="light"
                color="brand"
                style={{
                  borderRadius: 12,
                  fontWeight: 600,
                  padding: '12px 16px',
                  background: isActive 
                    ? 'linear-gradient(135deg, rgba(76, 175, 80, 0.12) 0%, rgba(76, 175, 80, 0.08) 100%)'
                    : 'transparent',
                  border: isActive 
                    ? '1px solid rgba(76, 175, 80, 0.3)' 
                    : '1px solid transparent',
                  boxShadow: isActive 
                    ? '0 2px 8px rgba(76, 175, 80, 0.15)'
                    : 'none',
                  transition: 'all 0.2s ease',
                }}
              />
            </Link>
          );
        })}
      </Stack>

      <div>
        <Divider my="md" color="rgba(76, 175, 80, 0.15)" />
        
        <Group
          gap="xs"
          p="sm"
          style={{
            background: 'rgba(64, 192, 87, 0.08)',
            borderRadius: 8,
            border: '1px solid rgba(64, 192, 87, 0.2)',
          }}
        >
          <ThemeIcon size={28} radius="md" variant="light" color="green">
            <IconActivity size={16} />
          </ThemeIcon>
          <div>
            <Text size="xs" fw={600} tt="uppercase" c="green">
              System Status
            </Text>
            <Badge size="xs" variant="dot" color="green">
              All Systems Operational
            </Badge>
          </div>
        </Group>

        <Text size="xs" c="dimmed" mt="sm" ta="center">
          YieldGuard v1.0 • SIH 2025
        </Text>
      </div>
    </div>
  );
}

