"use client";
import React from 'react';
import { Card, Text, Group, Stack, Badge, Timeline, ThemeIcon, Code } from '@mantine/core';
import { IconShieldCheck, IconFingerprint, IconLock, IconCheck } from '@tabler/icons-react';

export default function BlockchainVerification() {
  const verificationSteps = [
    { 
      title: 'Claim Submitted',
      hash: '0x7a8f9b2e...',
      time: 'Oct 26, 11:30 AM',
      status: 'verified',
      icon: IconCheck
    },
    { 
      title: 'UAV Evidence Uploaded',
      hash: '0x3c5d1a7f...',
      time: 'Oct 26, 09:00 AM',
      status: 'verified',
      icon: IconCheck
    },
    { 
      title: 'Sensor Data Logged',
      hash: '0x9e4b2f8a...',
      time: 'Oct 25, 3:15 PM',
      status: 'verified',
      icon: IconCheck
    },
    { 
      title: 'Plot Registered',
      hash: '0x1d6c8e5b...',
      time: 'Oct 20, 10:00 AM',
      status: 'verified',
      icon: IconCheck
    },
  ];

  return (
    <Card className="clean-card" p="xl">
      <Group justify="space-between" mb="xl">
        <div>
          <Group gap="sm" mb={4}>
            <ThemeIcon size={40} radius={12} variant="gradient" gradient={{ from: 'violet', to: 'indigo' }}>
              <IconShieldCheck size={24} />
            </ThemeIcon>
            <div>
              <Text size="xl" fw={700}>
                Blockchain Verification
              </Text>
              <Text size="sm" c="dimmed">
                Immutable tamper-proof claim records
              </Text>
            </div>
          </Group>
        </div>
        <Badge size="lg" variant="light" color="violet" leftSection={<IconLock size={14} />}>
          Secured
        </Badge>
      </Group>

      {/* Blockchain Network Info */}
      <Card
        p="lg"
        mb="lg"
        style={{
          background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
          border: '1px solid rgba(156, 39, 176, 0.2)',
        }}
      >
        <Stack gap="xs">
          <Group justify="space-between">
            <Text size="sm" fw={600}>Network Status</Text>
            <Badge size="sm" variant="dot" color="green">Online</Badge>
          </Group>
          <Group justify="space-between">
            <Text size="xs" c="dimmed">Chain</Text>
            <Text size="xs" fw={600}>Polygon (MATIC)</Text>
          </Group>
          <Group justify="space-between">
            <Text size="xs" c="dimmed">Smart Contract</Text>
            <Code style={{ fontSize: 10 }}>0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb</Code>
          </Group>
          <Group justify="space-between">
            <Text size="xs" c="dimmed">Gas Fee</Text>
            <Text size="xs" fw={600} c="green">~$0.001</Text>
          </Group>
        </Stack>
      </Card>

      {/* Verification Timeline */}
      <Text size="sm" fw={600} mb="md" c="dimmed" tt="uppercase" style={{ letterSpacing: '0.05em' }}>
        Transaction History
      </Text>
      
      <Timeline active={3} bulletSize={32} lineWidth={2} color="violet">
        {verificationSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <Timeline.Item
              key={idx}
              bullet={
                <ThemeIcon size={28} radius="xl" variant="light" color="violet">
                  <Icon size={16} />
                </ThemeIcon>
              }
              title={
                <Group justify="space-between">
                  <Text size="sm" fw={600}>{step.title}</Text>
                  <Badge size="xs" variant="light" color="green">
                    Verified
                  </Badge>
                </Group>
              }
            >
              <Stack gap={4} mt="xs">
                <Group gap="xs">
                  <IconFingerprint size={14} color="#9c27b0" />
                  <Code style={{ fontSize: 11 }}>{step.hash}</Code>
                </Group>
                <Text size="xs" c="dimmed">{step.time}</Text>
              </Stack>
            </Timeline.Item>
          );
        })}
      </Timeline>

      {/* Security Features */}
      <Card
        mt="lg"
        p="md"
        style={{
          background: 'linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)',
          border: '1px solid rgba(63, 81, 181, 0.2)',
        }}
      >
        <Text size="sm" fw={600} mb="sm">
          🔐 Security Features
        </Text>
        <Stack gap="xs">
          <Group gap="xs">
            <IconCheck size={16} color="#4caf50" />
            <Text size="xs">Decentralized ledger ensures data integrity</Text>
          </Group>
          <Group gap="xs">
            <IconCheck size={16} color="#4caf50" />
            <Text size="xs">Cryptographic hashing prevents tampering</Text>
          </Group>
          <Group gap="xs">
            <IconCheck size={16} color="#4caf50" />
            <Text size="xs">Multi-signature approval workflow</Text>
          </Group>
        </Stack>
      </Card>
    </Card>
  );
}
