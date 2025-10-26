import type { Claim } from '../lib/types';

export const mockClaims: Claim[] = [
  {
    claimId: 'C-501',
    plotId: 'F-101',
    farmerName: 'Ramesh Patel',
    calamityType: 'Hailstorm',
    dateFiled: '2025-10-25',
    status: 'Pending Review',
  },
  {
    claimId: 'C-502',
    plotId: 'F-102',
    farmerName: 'Sita Devi',
    calamityType: 'Flood',
    dateFiled: '2025-09-18',
    status: 'None',
  },
];

export default mockClaims;
