import React from 'react';
import { Card, Timeline, Text, Badge } from '@mantine/core';
import { IconDroplet, IconAlertTriangle, IconCamera, IconFileCheck } from '@tabler/icons-react';

interface TimelineEvent {
  title: string;
  time: string;
  icon: typeof IconDroplet;
}

interface ClaimTimelineProps {
  eventLog: TimelineEvent[];
}

export default function ClaimTimeline({ eventLog }: ClaimTimelineProps) {
  return (
    <Card className="clean-card" p="lg">
      <Text size="lg" fw={700} mb="md">
        Claim Timeline
      </Text>

      <Timeline active={eventLog.length} bulletSize={28} lineWidth={2} color="blue">
        {eventLog.map((event, index) => {
          const Icon = event.icon;
          return (
            <Timeline.Item
              key={index}
              bullet={<Icon size={14} />}
              title={<Text size="sm" fw={600}>{event.title}</Text>}
            >
              <Text size="xs" c="dimmed" mt={4}>
                {event.time}
              </Text>
            </Timeline.Item>
          );
        })}
      </Timeline>
    </Card>
  );
}
