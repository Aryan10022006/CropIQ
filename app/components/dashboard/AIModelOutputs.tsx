"use client";
import React from 'react';
import { Card, Title, Text, Badge, Group, Stack, Progress, Grid, ThemeIcon, List } from '@mantine/core';
import { IconBrain, IconAlertTriangle, IconChartLine, IconBug, IconDroplet, IconTrendingUp } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const aiModels = [
  {
    id: 'Stress Detection',
    icon: IconAlertTriangle,
    type: 'Segmentation (U-Net)',
    status: 'Active',
    confidence: 94.2,
    result: 'Stress Detected',
    severity: 'High',
    color: 'red',
    details: ['Water stress in Zone A', 'Nutrient deficiency Zone C', 'Heat stress detected'],
  },
  {
    id: 'Yield Prediction',
    icon: IconTrendingUp,
    type: 'Regression (XGBoost)',
    status: 'Complete',
    confidence: 88.7,
    result: '4,180 kg/ha',
    severity: 'Normal',
    color: 'green',
    details: ['Expected: 4,200 kg/ha', 'Variance: -0.5%', 'Harvest in 28 days'],
  },
  {
    id: 'Anomaly Detection',
    icon: IconBrain,
    type: 'Autoencoder (VAE)',
    status: 'Active',
    confidence: 91.3,
    result: '3 Anomalies',
    severity: 'Medium',
    color: 'orange',
    details: ['Soil salinity spike', 'Unusual moisture pattern', 'Canopy gap detected'],
  },
  {
    id: 'Pest Risk',
    icon: IconBug,
    type: 'Classification (CNN+XGB)',
    status: 'Alert',
    confidence: 96.8,
    result: 'Whitefly Risk',
    severity: 'High',
    color: 'red',
    details: ['High infestation probability', 'Spread risk: 78%', 'Action needed within 48h'],
  },
  {
    id: 'Disease Forecast',
    icon: IconChartLine,
    type: 'Forecasting (ConvLSTM)',
    status: 'Monitoring',
    confidence: 85.4,
    result: 'Low Risk',
    severity: 'Low',
    color: 'teal',
    details: ['Favorable conditions', 'No outbreak predicted', '7-day outlook: stable'],
  },
];

export default function AIModelOutputs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="glass-card" shadow="xl" p="xl">
        <Group justify="space-between" mb="xl">
          <div>
            <Group gap="sm">
              <IconBrain size={32} color="#f7b801" />
              <Title order={3} className="tech-heading">AI Model Outputs</Title>
            </Group>
            <Text size="sm" c="dimmed" mt={4}>5 Task-Specific Models • Fusion Transformer Active</Text>
          </div>
          <Badge size="lg" variant="gradient" gradient={{ from: 'teal', to: 'lime' }}>
            All Models Running
          </Badge>
        </Group>

        <Grid gutter="lg">
          {aiModels.map((model, i) => {
            const Icon = model.icon;
            const severityColor = model.severity === 'High' ? 'red' : model.severity === 'Medium' ? 'orange' : 'green';
            
            return (
              <Grid.Col key={model.id} span={6}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card
                    className="data-card"
                    p="lg"
                    style={{
                      height: '100%',
                      borderLeft: `4px solid var(--${model.color})`,
                    }}
                  >
                    <Group justify="space-between" mb="md">
                      <Group gap="sm">
                        <ThemeIcon
                          size={48}
                          radius="md"
                          variant="light"
                          color={model.color}
                          className={model.status === 'Alert' ? 'alert-pulse' : ''}
                        >
                          <Icon size={24} />
                        </ThemeIcon>
                        <div>
                          <Text fw={700} size="lg">
                            {model.id}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {model.type}
                          </Text>
                        </div>
                      </Group>
                      <Badge color={severityColor} variant="dot">
                        {model.status}
                      </Badge>
                    </Group>

                    <Stack gap="sm">
                      <div>
                        <Group justify="space-between" mb={4}>
                          <Text size="xs" c="dimmed" tt="uppercase">
                            Confidence
                          </Text>
                          <Text size="sm" fw={700} c="teal">
                            {model.confidence}%
                          </Text>
                        </Group>
                        <Progress
                          value={model.confidence}
                          color={model.color}
                          size="sm"
                          radius="xl"
                          styles={{
                            root: { background: 'rgba(255, 255, 255, 0.05)' },
                          }}
                        />
                      </div>

                      <Group
                        justify="space-between"
                        p="md"
                        style={{
                          background: `rgba(${model.color === 'red' ? '239, 68, 68' : model.color === 'orange' ? '245, 158, 11' : '16, 185, 129'}, 0.15)`,
                          borderRadius: 8,
                        }}
                      >
                        <Text size="xs" c="dimmed">
                          Result
                        </Text>
                        <Text fw={700} size="lg" c={model.color}>
                          {model.result}
                        </Text>
                      </Group>

                      <List size="xs" spacing={4} c="dimmed">
                        {model.details.map((detail, idx) => (
                          <List.Item key={idx}>{detail}</List.Item>
                        ))}
                      </List>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid.Col>
            );
          })}
        </Grid>

        <Card mt="xl" p="md" style={{ background: 'rgba(56, 178, 172, 0.1)' }}>
          <Group justify="space-between">
            <div>
              <Text size="sm" fw={700} c="teal">
                Temporal Fusion Transformer (FTT)
              </Text>
              <Text size="xs" c="dimmed">
                Cross-modal attention • Multi-head layers • Spatio-temporal embeddings
              </Text>
            </div>
            <Badge color="green" variant="dot">
              Active
            </Badge>
          </Group>
        </Card>
      </Card>
    </motion.div>
  );
}
