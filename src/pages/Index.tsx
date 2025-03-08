import {
  ActivityTimeline,
  AnalyticsChart,
  Layout,
  QuickActions,
  RecentActivity,
  StatCard,
} from "@components/dashboard";

import { Users, DollarSign, ShoppingCart, BarChart2 } from "lucide-react";
import {
  quickActions,
  recentActivities,
  salesData,
  userActivities,
  userActivityData,
} from "@data/dashboardData";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <div className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value="3,271"
            icon={Users}
            trend={{ value: 12, positive: true }}
            color="blue"
            className="animate-slide-in-top animate-delay-100"
          />
          <StatCard
            title="Revenue"
            value="$24,532"
            icon={DollarSign}
            trend={{ value: 8, positive: true }}
            color="green"
            className="animate-slide-in-top animate-delay-200"
          />
          <StatCard
            title="Orders"
            value="192"
            icon={ShoppingCart}
            trend={{ value: 5, positive: false }}
            color="orange"
            className="animate-slide-in-top animate-delay-300"
          />
          <StatCard
            title="Conversion"
            value="3.2%"
            icon={BarChart2}
            trend={{ value: 2, positive: true }}
            color="purple"
            className="animate-slide-in-top animate-delay-400"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnalyticsChart
              title="Sales Overview"
              data={salesData}
              color="#3b82f6"
              height={300}
            />
          </div>
          <div>
            <ActivityTimeline activities={recentActivities} />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Quick Actions</h2>
          <QuickActions actions={quickActions} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AnalyticsChart
              title="User Activity"
              data={userActivityData}
              color="#10b981"
              height={300}
            />
          </div>
          <div>
            <RecentActivity activities={userActivities} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
