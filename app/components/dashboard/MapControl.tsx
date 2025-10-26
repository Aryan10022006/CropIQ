"use client";
import React from 'react';
import { Card, Switch, Group, Text, Stack } from '@mantine/core';

export default function MapControl({ showPest = true, onTogglePest }: { showPest?: boolean; onTogglePest?: (v: boolean) => void }) {
  return (
    <Card className="glass-card" shadow="sm" style={{ position: 'absolute', right: 16, top: 16, zIndex: 1000 }}>
      <Stack gap="xs">
        <Text size="sm" fw={700}>Map Layers</Text>
        <Group justify="space-between" style={{ width: 220 }}>
          <Text size="xs">Pest Risk</Text>
          <Switch defaultChecked={showPest} onChange={(e) => onTogglePest?.(e.currentTarget.checked)} />
        </Group>
        <Group justify="space-between" style={{ width: 220 }}>
          <Text size="xs">Soil Moisture</Text>
          <Switch defaultChecked onChange={() => {}} />
        </Group>
      </Stack>
    </Card>
  );
}
