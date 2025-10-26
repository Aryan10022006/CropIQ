import type { FarmFeatureCollection } from '../lib/types';

export const mockFarms: FarmFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 'F-101',
        farmerName: 'Ramesh Patel',
        cropType: 'Cotton',
        predictedYield: 4200,
        riskLevel: 'High',
        claimStatus: 'Pending',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [78.032, 28.704],
            [78.034, 28.704],
            [78.034, 28.706],
            [78.032, 28.706],
            [78.032, 28.704],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 'F-102',
        farmerName: 'Sita Devi',
        cropType: 'Wheat',
        predictedYield: 3800,
        riskLevel: 'Medium',
        claimStatus: 'None',
      },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [78.036, 28.703],
            [78.038, 28.703],
            [78.038, 28.705],
            [78.036, 28.705],
            [78.036, 28.703],
          ],
        ],
      },
    },
  ],
};

export default mockFarms;
