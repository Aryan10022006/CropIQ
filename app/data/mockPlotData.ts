import type { PlotData, TimePoint } from '../lib/types';
import { IconDroplet, IconAlertTriangle, IconCamera, IconFileCheck } from '@tabler/icons-react';

const soilMoisture: TimePoint[] = [
  { x: '2025-10-18', y: 45 },
  { x: '2025-10-19', y: 42 },
  { x: '2025-10-20', y: 38 },
  { x: '2025-10-21', y: 30 },
  { x: '2025-10-22', y: 25 },
  { x: '2025-10-23', y: 22 },
  { x: '2025-10-24', y: 20 },
  { x: '2025-10-25', y: 18 },
];

const ndvi: TimePoint[] = [
  { x: '2025-10-18', y: 0.82 },
  { x: '2025-10-19', y: 0.80 },
  { x: '2025-10-20', y: 0.78 },
  { x: '2025-10-21', y: 0.74 },
  { x: '2025-10-22', y: 0.68 },
  { x: '2025-10-23', y: 0.60 },
  { x: '2025-10-24', y: 0.52 },
  { x: '2025-10-25', y: 0.48 },
];

export function getPlotData(id: string): PlotData {
  // For now we return the same structured data for any id; in a real app we'd fetch by id.
  return {
    id,
    aiLossAssessment: '32%',
    aiRecommendation: 'Approve',
    imagery: {
      before: 'https://via.placeholder.com/900x600.png?text=UAV+Before+Hail+Damage',
      after: 'https://via.placeholder.com/900x600.png?text=UAV+After+Hail+Damage',
    },
    sensorData: {
      soilMoisture,
      ndvi,
      eventLog: [
        { time: '3:15 PM, Oct 25', event: 'Leaf Wetness sensor detected 100% moisture' },
        { time: '9:12 AM, Oct 22', event: 'Rainfall sensor recorded 12 mm' },
      ],
    },
    timelineEvents: [
      { title: 'Farmer Alert: Low Moisture', time: 'Oct 20, 10:00 AM', icon: IconDroplet },
      { title: 'Calamity Reported: Hailstorm', time: 'Oct 25, 3:15 PM', icon: IconAlertTriangle },
      { title: 'UAV Image Uploaded', time: 'Oct 26, 9:00 AM', icon: IconCamera },
      { title: 'Claim Submitted for Review', time: 'Oct 26, 11:30 AM', icon: IconFileCheck },
    ],
    farmerAlerts: [
      { date: 'Oct 20', alert: 'IRRIGATION ADVISORY: Soil moisture low.' },
      { date: 'Oct 23', alert: 'PEST ALERT: Whiteflies detected in adjacent plot.' },
    ],
  };
}

export default getPlotData;
