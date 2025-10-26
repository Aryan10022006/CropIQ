"use client";
import React from 'react';
import Link from 'next/link';
import { Group, Text, ThemeIcon, Badge } from '@mantine/core';
import { IconPlant } from '@tabler/icons-react';

export default function Logo() {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Group gap="md" align="center" style={{ 
        padding: '16px 12px',
        borderRadius: 12,
        background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, rgba(33, 150, 243, 0.08) 100%)',
        border: '2px solid rgba(76, 175, 80, 0.2)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(76, 175, 80, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      >
        <ThemeIcon
          size={52}
          radius={14}
          variant="gradient"
          gradient={{ from: '#4caf50', to: '#66bb6a', deg: 135 }}
          style={{
            boxShadow: '0 4px 12px rgba(76, 175, 80, 0.3)',
          }}
        >
          <IconPlant size={30} stroke={2.5} />
        </ThemeIcon>
        <div>
          <Text
            size="xl"
            fw={800}
            style={{
              background: 'linear-gradient(135deg, #388e3c 0%, #4caf50 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.5px',
              lineHeight: 1.2
            }}
          >
            YieldGuard
          </Text>
          <Badge 
            size="xs" 
            variant="light" 
            color="brand"
            style={{ marginTop: 4, fontWeight: 600 }}
          >
            PMFBY + CropIQ
          </Badge>
        </div>
      </Group>
    </Link>
  );
}



