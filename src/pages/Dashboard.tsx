import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Bell,
  Send,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Plus,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Sent",
      value: "12,345",
      change: "+12%",
      icon: Send,
      color: "info",
    },
    {
      title: "Active Users",
      value: "8,921",
      change: "+5%",
      icon: Users,
      color: "success",
    },
    {
      title: "Delivery Rate",
      value: "98.7%",
      change: "+2.1%",
      icon: TrendingUp,
      color: "success",
    },
    {
      title: "Pending",
      value: "147",
      change: "-8%",
      icon: Clock,
      color: "warning",
    },
  ];

  const recentNotifications = [
    {
      id: 1,
      template: "ID Verification Complete",
      recipients: 324,
      status: "delivered",
      channel: "push",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      template: "New Vote Created",
      recipients: 1205,
      status: "sending",
      channel: "in-app",
      timestamp: "3 hours ago",
    },
    {
      id: 3,
      template: "Welcome Tokens",
      recipients: 89,
      status: "delivered",
      channel: "email",
      timestamp: "5 hours ago",
    },
    {
      id: 4,
      template: "Room Invitation",
      recipients: 156,
      status: "failed",
      channel: "push",
      timestamp: "1 day ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "success";
      case "sending":
        return "warning";
      case "failed":
        return "critical";
      default:
        return "muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return CheckCircle;
      case "sending":
        return Clock;
      case "failed":
        return XCircle;
      default:
        return AlertCircle;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your notification performance and activity
          </p>
        </div>
        <Link to="/send">
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4 mr-2" />
            Send Notification
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 text-${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-success">
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Recent Notifications
            </CardTitle>
            <CardDescription>
              Latest notification campaigns and their status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentNotifications.map((notification) => {
                const StatusIcon = getStatusIcon(notification.status);
                return (
                  <div
                    key={notification.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <StatusIcon className={`w-4 h-4 text-${getStatusColor(notification.status)}`} />
                      <div>
                        <p className="font-medium text-foreground">
                          {notification.template}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {notification.recipients} recipients • {notification.timestamp}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {notification.channel}
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className={`text-xs text-${getStatusColor(notification.status)}`}
                      >
                        {notification.status}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              Performance Overview
            </CardTitle>
            <CardDescription>
              Key metrics for the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Delivery Rate</span>
                  <span className="text-sm font-medium text-foreground">98.7%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: "98.7%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Open Rate</span>
                  <span className="text-sm font-medium text-foreground">84.3%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-info h-2 rounded-full" style={{ width: "84.3%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Click Rate</span>
                  <span className="text-sm font-medium text-foreground">23.1%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full" style={{ width: "23.1%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;