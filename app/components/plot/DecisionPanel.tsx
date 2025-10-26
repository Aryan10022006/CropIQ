"use client";
import React, { useState } from 'react';
import { Card, Button, Textarea, Title, Stack, Text, Divider } from '@mantine/core';

export default function DecisionPanel({ farmerAlerts = [] }: { farmerAlerts?: any[] }) {
  const [notes, setNotes] = useState('');

  return (
    <Card className="clean-card" p="lg">
      <Title order={4} fw={700} mb="md">Decision Panel</Title>
      <Stack gap="md">
        <Button radius="md" size="md" color="green" fullWidth>
          Approve Claim
        </Button>
        <Button radius="md" size="md" color="red" variant="outline" fullWidth>
          Reject Claim
        </Button>
        <Textarea 
          placeholder="Assessor's notes..." 
          value={notes} 
          onChange={(e) => setNotes(e.currentTarget.value)}
          minRows={4}
        />
      </Stack>

      <Divider my="lg" />

      <Title order={5} fw={600} mb="sm">Farmer Alert Log</Title>
      <Stack gap="xs">
        {farmerAlerts.map((a: any, i: number) => (
          <Card key={i} p="sm" style={{ backgroundColor: '#f8f9fa' }}>
            <Text size="xs" fw={600} c="dimmed">{a.date}</Text>
            <Text size="sm">{a.alert}</Text>
          </Card>
        ))}
      </Stack>
    </Card>
  );
}
