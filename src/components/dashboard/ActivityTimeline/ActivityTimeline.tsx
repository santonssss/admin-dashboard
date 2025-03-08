import React from "react";
import BlurContainer from "@components/ui/blur-container";
import { cn } from "@lib/utils";
import { Circle } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  description: string;
  time: string;
  status?: "completed" | "in-progress" | "pending";
}

interface ActivityTimelineProps {
  activities: Activity[];
}

const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activities }) => {
  const getStatusColor = (status?: Activity["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "in-progress":
        return "bg-blue-500";
      case "pending":
        return "bg-amber-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <BlurContainer className="w-full">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className={cn(
              "flex items-start gap-3 pb-4",
              index !== activities.length - 1 && "border-b border-border"
            )}
          >
            <div className="relative flex flex-col items-center">
              <Circle
                className={cn(
                  "h-3 w-3 fill-current",
                  getStatusColor(activity.status)
                )}
              />
              {index !== activities.length - 1 && (
                <div className="w-px h-full bg-border absolute top-3 bottom-0"></div>
              )}
            </div>
            <div className="flex-1 pt-0.5">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">{activity.title}</h4>
                <span className="text-xs text-muted-foreground">
                  {activity.time}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </BlurContainer>
  );
};

export default ActivityTimeline;
