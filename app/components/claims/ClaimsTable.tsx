"use client";
import React from 'react';
import { Table, Badge, Button, Group } from '@mantine/core';
import mockClaims from '../../data/mockClaims';
import { useRouter } from 'next/navigation';

export default function ClaimsTable() {
  const router = useRouter();

  const rows = mockClaims.map((c) => (
    <tr key={c.claimId}>
      <td>{c.claimId}</td>
      <td>{c.plotId}</td>
      <td>{c.farmerName}</td>
      <td>{c.calamityType}</td>
      <td>
        <Badge color={c.status === 'Pending Review' ? 'yellow' : 'green'}>{c.status}</Badge>
      </td>
      <td>
        <Group gap="xs">
          <Button size="xs" onClick={() => router.push(`/plot/${c.plotId}`)}>
            Review
          </Button>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Table highlightOnHover verticalSpacing="sm">
      <thead>
        <tr>
          <th>Claim ID</th>
          <th>Plot ID</th>
          <th>Farmer Name</th>
          <th>Calamity</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
