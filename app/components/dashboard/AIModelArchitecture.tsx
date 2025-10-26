"use client";
import React from 'react';
import { Card, Text, Group, Stack, Badge, ThemeIcon, Timeline, Divider, SimpleGrid, Progress } from '@mantine/core';
import { IconBrain, IconDatabase, IconGitBranch, IconCheck, IconAlertTriangle, IconDeviceAnalytics } from '@tabler/icons-react';

export default function AIModelArchitecture() {
  const models = [
    {
      name: 'Early Stress Detection',
      type: 'Classification (CNN + LSTM)',
      accuracy: 96.8,
      status: 'production',
      color: '#4caf50',
      input: 'NDVI, NDRE, Soil Moisture',
      output: 'Stress Hotspot Maps',
    },
    {
      name: 'Yield Prediction',
      type: 'Regression (XGBoost + RF)',
      accuracy: 94.2,
      status: 'production',
      color: '#2196f3',
      input: 'EVI, PRI, Weather, Phenology',
      output: 'Estimated Yield (kg/ha)',
    },
    {
      name: 'Soil Anomaly Detection',
      type: 'Autoencoder (VAE)',
      accuracy: 91.5,
      status: 'production',
      color: '#ff9800',
      input: 'Soil EC, pH, Temperature',
      output: 'Anomaly Score & Location',
    },
    {
      name: 'Pest/Disease Risk',
      type: 'Classification (CNN)',
      accuracy: 93.7,
      status: 'production',
      color: '#f44336',
      input: 'Leaf Wetness, Temp, SWIR',
      output: 'Risk Level (0-100%)',
    },
  ];

  const pipelineSteps = [
    {
      stage: 'Data Extraction',
      description: 'Sentinel-2, Hyperion, Landsat 8/9 + IoT sensors',
      icon: IconDatabase,
      color: 'blue',
    },
    {
      stage: 'MATLAB Preprocessing',
      description: 'Radiometric correction, cloud masking, resampling',
      icon: IconDeviceAnalytics,
      color: 'cyan',
    },
    {
      stage: 'Feature Extraction',
      description: 'NDVI, EVI, SAVI, NDRE, REIP, NDWI, PRI, ΔNDVI',
      icon: IconGitBranch,
      color: 'violet',
    },
    {
      stage: 'Temporal Fusion',
      description: 'ConvLSTM/Transformer with cross-modal attention',
      icon: IconBrain,
      color: 'grape',
    },
    {
      stage: 'Task-Specific Models',
      description: '4 specialized models for distinct tasks',
      icon: IconAlertTriangle,
      color: 'orange',
    },
    {
      stage: 'Decision & Alert System',
      description: 'Risk thresholds, ensemble voting, farmer alerts',
      icon: IconCheck,
      color: 'green',
    },
  ];

  return (
    <Stack gap="lg">
      {/* Pipeline Overview */}
      <Card className="clean-card" p="xl">
        <Group justify="space-between" mb="md">
          <div>
            <Group gap="sm" mb={4}>
              <ThemeIcon size={44} radius={14} variant="gradient" gradient={{ from: 'violet', to: 'grape' }}>
                <IconBrain size={26} />
              </ThemeIcon>
              <div>
                <Text size="xl" fw={800}>
                  CropIQ AI Architecture
                </Text>
                <Text size="sm" c="dimmed">
                  Multi-modal fusion with task-specific deep learning models
                </Text>
              </div>
            </Group>
          </div>
          <Badge size="lg" variant="light" color="grape" leftSection={<IconBrain size={16} />}>
            5 Models Active
          </Badge>
        </Group>

        {/* Architecture Pipeline */}
        <Timeline active={5} bulletSize={40} lineWidth={3} color="violet" mt="xl">
          {pipelineSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Timeline.Item
                key={idx}
                bullet={
                  <ThemeIcon size={36} radius="xl" variant="light" color={step.color}>
                    <Icon size={20} />
                  </ThemeIcon>
                }
                title={
                  <Text size="md" fw={700}>
                    {step.stage}
                  </Text>
                }
              >
                <Text size="sm" c="dimmed" mt={4}>
                  {step.description}
                </Text>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Card>

      {/* Task-Specific Models Grid */}
      <Card className="clean-card" p="lg">
        <Text size="lg" fw={700} mb="md">
          Task-Specific Model Performance
        </Text>
        <Text size="sm" c="dimmed" mb="lg">
          Specialized models trained on multi-modal sensor fusion data
        </Text>

        <SimpleGrid cols={2} spacing="md">
          {models.map((model) => (
            <Card
              key={model.name}
              p="lg"
              style={{
                background: `linear-gradient(135deg, ${model.color}10 0%, ${model.color}20 100%)`,
                border: `1px solid ${model.color}30`,
              }}
            >
              <Group justify="space-between" mb="sm">
                <Badge size="sm" variant="filled" color={model.status === 'production' ? 'green' : 'orange'}>
                  {model.status}
                </Badge>
                <Badge size="sm" variant="light" color={model.color}>
                  {model.accuracy}% Accuracy
                </Badge>
              </Group>

              <Text size="lg" fw={700} mb="xs">
                {model.name}
              </Text>
              <Text size="xs" c="dimmed" mb="md">
                {model.type}
              </Text>

              <Divider my="sm" />

              <Stack gap={6}>
                <Group justify="space-between">
                  <Text size="xs" c="dimmed">Input Features</Text>
                  <Text size="xs" fw={600} style={{ maxWidth: '60%', textAlign: 'right' }}>
                    {model.input}
                  </Text>
                </Group>
                <Group justify="space-between">
                  <Text size="xs" c="dimmed">Output</Text>
                  <Text size="xs" fw={600} style={{ maxWidth: '60%', textAlign: 'right' }}>
                    {model.output}
                  </Text>
                </Group>
              </Stack>

              <Progress value={model.accuracy} color={model.color} size="sm" radius="xl" mt="md" />
            </Card>
          ))}
        </SimpleGrid>
      </Card>

      {/* Fusion Architecture Details */}
      <Card
        p="lg"
        style={{
          background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
          border: '1px solid rgba(156, 39, 176, 0.2)',
        }}
      >
        <Group gap="md" mb="md">
          <ThemeIcon size={40} radius="xl" variant="light" color="grape">
            <IconGitBranch size={22} />
          </ThemeIcon>
          <div>
            <Text size="md" fw={700}>
              Temporal Fusion Transformer (TFT)
            </Text>
            <Text size="sm" c="dimmed">
              Multi-head attention with cross-modal fusion
            </Text>
          </div>
        </Group>

        <SimpleGrid cols={3} spacing="xs">
          <Card p="sm" style={{ background: 'rgba(255,255,255,0.5)' }}>
            <Text size="xs" c="dimmed" mb={2}>Image Encoder</Text>
            <Text size="xs" fw={600}>ConvLSTM / ConvTransformer</Text>
          </Card>
          <Card p="sm" style={{ background: 'rgba(255,255,255,0.5)' }}>
            <Text size="xs" c="dimmed" mb={2}>Sensor Encoder</Text>
            <Text size="xs" fw={600}>LSTM / GRU / Temporal CNN</Text>
          </Card>
          <Card p="sm" style={{ background: 'rgba(255,255,255,0.5)' }}>
            <Text size="xs" c="dimmed" mb={2}>Attention Mechanism</Text>
            <Text size="xs" fw={600}>Multi-head Cross-Modal</Text>
          </Card>
        </SimpleGrid>
      </Card>

      {/* Decision Engine Info */}
      <Card
        p="md"
        style={{
          background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
          border: '1px solid rgba(76, 175, 80, 0.2)',
        }}
      >
        <Group gap="md">
          <ThemeIcon size={36} radius="xl" variant="light" color="green">
            <IconCheck size={20} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={700}>
              Decision Logic & Rule Engine
            </Text>
            <Text size="xs" c="dimmed">
              Ensemble voting across models • Risk thresholds • Domain rules • GPS-tagged alerts • SMS/WhatsApp notifications
            </Text>
          </div>
        </Group>
      </Card>
    </Stack>
  );
}
