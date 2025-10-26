"use client";
import React from 'react';
import { Group, Text, Avatar, Badge, ActionIcon, Menu } from '@mantine/core';
import { IconBell, IconSettings, IconLogout, IconUserCircle } from '@tabler/icons-react';

export default function Header() {
  return (
    <Group h="100%" px="xl" justify="space-between">
      <Group gap="md">
        <Text 
          fw={800} 
          size="xl"
          style={{
            background: 'linear-gradient(135deg, #388e3c 0%, #4caf50 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          YieldGuard
        </Text>
        <Badge size="md" variant="light" color="brand">
          PMFBY Insurance Portal
        </Badge>
      </Group>

      <Group gap="md">
        <ActionIcon variant="subtle" color="gray" size="lg" radius="md">
          <IconBell size={20} />
        </ActionIcon>
        <ActionIcon variant="subtle" color="gray" size="lg" radius="md">
          <IconSettings size={20} />
        </ActionIcon>
        
        <Menu shadow="lg" width={220} position="bottom-end">
          <Menu.Target>
            <Group gap="sm" style={{ cursor: 'pointer', padding: '6px 12px', borderRadius: 12, transition: 'background 0.2s' }}>
              <Avatar 
                size={36} 
                radius="xl" 
                color="brand"
                style={{
                  background: 'linear-gradient(135deg, #4caf50 0%, #66bb6a 100%)',
                  border: '2px solid rgba(76, 175, 80, 0.2)',
                }}
              >
                AS
              </Avatar>
              <div>
                <Text size="sm" fw={600}>
                  Assessor Singh
                </Text>
                <Text size="xs" c="dimmed">
                  Insurance Officer
                </Text>
              </div>
            </Group>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item leftSection={<IconUserCircle size={16} />}>
              Profile
            </Menu.Item>
            <Menu.Item leftSection={<IconSettings size={16} />}>
              Settings
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item leftSection={<IconLogout size={16} />} color="red">
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Group>
  );
}
