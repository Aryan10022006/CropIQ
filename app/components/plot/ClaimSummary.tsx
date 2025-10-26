"use client";
import React from 'react';
import { Card, Title, Badge, Text, Group } from '@mantine/core';

export default function ClaimSummary({ aiLossAssessment, aiRecommendation }: { aiLossAssessment: string; aiRecommendation: string; }) {
  return (
    <Card className="clean-card" p="xl">
      <Group justify="space-between" align="center">
        <div>
          <Title order={3} fw={700} style={{ marginBottom: 8 }}>
            AI Verification: {aiLossAssessment} Yield Loss
          </Title>
          <Text c="dimmed" size="sm">Automated loss estimate from UAV and sensor fusion</Text>
        </div>
        <Badge 
          size="xl" 
          variant="light" 
          color={aiRecommendation === 'Approve' ? 'green' : 'red'}
        >
          {`Recommendation: ${aiRecommendation}`}
        </Badge>
      </Group>
    </Card>
  );
}
