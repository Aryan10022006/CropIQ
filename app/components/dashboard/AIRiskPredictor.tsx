"use client";
import React from 'react';
import { Card, Text, Group, Progress, Badge, Stack, ThemeIcon, RingProgress, Center } from '@mantine/core';
import { IconBrain, IconTrendingUp, IconAlertTriangle, IconCheck } from '@tabler/icons-react';

export default function AIRiskPredictor() {
  const predictions = [
    { 
      region: 'North Zone', 
      riskScore: 87, 
      trend: 'increasing', 
      factors: ['Low rainfall', 'High temp'],
      color: 'red',
      icon: IconAlertTriangle
    },
    { 
      region: 'Central Zone', 
      riskScore: 45, 
      trend: 'stable', 
      factors: ['Normal conditions'],
      color: 'yellow',
      icon: IconTrendingUp
    },
    { 
      region: 'South Zone', 
      riskScore: 23, 
      trend: 'decreasing', 
      factors: ['Good irrigation'],
      color: 'green',
      icon: IconCheck
    },
  ];

  return (
    <Card className="clean-card" p="xl">
      <Group justify="space-between" mb="xl">
        <div>
          <Group gap="sm" mb={4}>
            <ThemeIcon size={40} radius={12} variant="gradient" gradient={{ from: 'brand', to: 'accent' }}>
              <IconBrain size={24} />
            </ThemeIcon>
            <div>
              <Text size="xl" fw={700}>
                AI Risk Prediction
              </Text>
              <Text size="sm" c="dimmed">
                Machine Learning Model (96.8% accuracy)
              </Text>
            </div>
          </Group>
        </div>
        <Badge size="lg" variant="light" color="brand">
          Real-time Analysis
        </Badge>
      </Group>

      <Stack gap="lg">
        {predictions.map((pred, idx) => {
          const Icon = pred.icon;
          return (
            <Card
              key={idx}
              p="lg"
              style={{
                background: 'linear-gradient(135deg, #f8fdf8 0%, #ffffff 100%)',
                border: '1px solid rgba(76, 175, 80, 0.12)',
                borderRadius: 12,
              }}
            >
              <Group justify="space-between" mb="md">
                <Group gap="md">
                  <RingProgress
                    size={60}
                    thickness={6}
                    sections={[{ value: pred.riskScore, color: pred.color }]}
                    label={
                      <Center>
                        <Icon size={18} color={pred.color} />
                      </Center>
                    }
                  />
                  <div>
                    <Text fw={600} size="sm">
                      {pred.region}
                    </Text>
                    <Text size="xs" c="dimmed">
                      Risk Score: {pred.riskScore}%
                    </Text>
                  </div>
                </Group>
                <Badge
                  size="sm"
                  variant="dot"
                  color={pred.color}
                >
                  {pred.trend}
                </Badge>
              </Group>
              
              <Progress 
                value={pred.riskScore} 
                size="sm" 
                radius="xl"
                color={pred.color}
                animated
              />
              
              <Group gap="xs" mt="sm">
                {pred.factors.map((factor, i) => (
                  <Badge key={i} size="xs" variant="light" color={pred.color}>
                    {factor}
                  </Badge>
                ))}
              </Group>
            </Card>
          );
        })}
      </Stack>
    </Card>
  );
}
