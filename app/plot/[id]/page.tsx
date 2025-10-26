"use client";
import React from 'react';
import { Container, Grid, Stack } from '@mantine/core';
import getPlotData from '../../data/mockPlotData';
import ClaimSummary from '../../components/plot/ClaimSummary';
import ImageryEvidence from '../../components/plot/ImageryEvidence';
import SensorEvidence from '../../components/plot/SensorEvidence';
import DecisionPanel from '../../components/plot/DecisionPanel';
import ClaimTimeline from '../../components/plot/ClaimTimeline';
import BlockchainVerification from '../../components/plot/BlockchainVerification';

export default function PlotPage({ params }: { params: { id: string } }) {
  const data = getPlotData(params.id);

  return (
    <Container fluid p="xl">
      <Grid gutter="xl">
        <Grid.Col span={8}>
          <Stack gap="xl">
            <ClaimSummary aiLossAssessment={data.aiLossAssessment} aiRecommendation={data.aiRecommendation} />
            <ImageryEvidence before={data.imagery.before} after={data.imagery.after} />
            <SensorEvidence soilMoisture={data.sensorData.soilMoisture} ndvi={data.sensorData.ndvi} eventLog={data.sensorData.eventLog} />
          </Stack>
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack gap="xl">
            <DecisionPanel farmerAlerts={data.farmerAlerts} />
            <ClaimTimeline eventLog={data.timelineEvents} />
            <BlockchainVerification />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
