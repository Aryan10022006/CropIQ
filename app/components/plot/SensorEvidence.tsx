"use client";
import React from 'react';
import { Card, Title, Text, List, Stack, Divider } from '@mantine/core';
import { ResponsiveLine } from '@nivo/line';

export default function SensorEvidence({ soilMoisture, ndvi, eventLog }: any) {
  const data = [
    {
      id: 'Soil Moisture',
      color: '#228be6',
      data: soilMoisture.map((p: any) => ({ x: p.x, y: p.y })),
    },
    {
      id: 'NDVI',
      color: '#40c057',
      data: ndvi.map((p: any) => ({ x: p.x, y: Number((p.y as number).toFixed(2)) })),
    },
  ];

  return (
    <Card className="clean-card" p="xl">
      <Title order={4} fw={700} mb="lg">Sensor Data — Timeline</Title>
      <div style={{ height: 320, marginBottom: 24 }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 20, right: 50, bottom: 60, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
          axisBottom={{ tickRotation: -45, legend: 'Date', legendOffset: 46 }}
          axisLeft={{ legend: 'Value', legendOffset: -40 }}
          colors={{ datum: 'color' }}
          pointSize={8}
          pointBorderWidth={2}
          pointBorderColor="#ffffff"
          useMesh
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: '#868e96',
                },
              },
              legend: {
                text: {
                  fill: '#495057',
                  fontWeight: 600,
                },
              },
            },
            grid: {
              line: {
                stroke: '#e9ecef',
              },
            },
          }}
        />
      </div>

      <Divider mb="md" />

      <Title order={5} fw={600} mb="sm">Event Log</Title>
      <Stack gap="xs">
        {eventLog.map((e: any, i: number) => (
          <Card key={i} p="sm" style={{ backgroundColor: '#f8f9fa' }}>
            <Text size="xs" fw={600} c="dimmed">{e.time}</Text>
            <Text size="sm">{e.event}</Text>
          </Card>
        ))}
      </Stack>
    </Card>
  );
}
