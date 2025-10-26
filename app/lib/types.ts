export type RiskLevel = 'High' | 'Medium' | 'Low';

export interface FarmProperties {
  id: string;
  farmerName: string;
  cropType: string;
  predictedYield: number; // kg/ha
  riskLevel: RiskLevel;
  claimStatus: 'Pending' | 'None' | 'Approved';
}

export interface FarmFeatureCollection {
  type: 'FeatureCollection';
  features: GeoJSON.Feature<GeoJSON.Polygon, FarmProperties>[];
}

export interface Claim {
  claimId: string;
  plotId: string;
  farmerName: string;
  calamityType: string;
  dateFiled: string; // ISO or date string
  status: string;
}

export interface TimePoint {
  x: string; // date string
  y: number;
}

export interface TimelineEvent {
  title: string;
  time: string;
  icon: any; // TablerIcon type
}

export interface PlotData {
  id: string;
  aiLossAssessment: string; // e.g., "32%"
  aiRecommendation: string; // e.g., "Approve"
  imagery: {
    before: string;
    after: string;
  };
  sensorData: {
    soilMoisture: TimePoint[];
    ndvi: TimePoint[];
    eventLog: { time: string; event: string }[];
  };
  timelineEvents: TimelineEvent[];
  farmerAlerts: { date: string; alert: string }[];
}

