import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Activity,
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  Clock,
  XCircle,
  AlertCircle,
  Calendar,
} from "lucide-react";

const History = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [channelFilter, setChannelFilter] = useState("all");

  const notifications = [
    {
      id: "NTF-001",
      template: "ID Verification Complete",
      recipients: 324,
      channel: "push",
      status: "delivered",
      sentBy: "System",
      sentAt: "2024-01-15 14:30:00",
      deliveryRate: "98.5%",
      openRate: "87.2%",
      clickRate: "23.1%"
    },
    {
      id: "NTF-002",
      template: "New Vote Created",
      recipients: 1205,
      channel: "in-app",
      status: "delivered",
      sentBy: "Admin",
      sentAt: "2024-01-15 12:15:00",
      deliveryRate: "99.1%",
      openRate: "91.4%",
      clickRate: "45.7%"
    },
    {
      id: "NTF-003",
      template: "Welcome Tokens",
      recipients: 89,
      channel: "email",
      status: "sending",
      sentBy: "System",
      sentAt: "2024-01-15 11:45:00",
      deliveryRate: "45.2%",
      openRate: "-",
      clickRate: "-"
    },
    {
      id: "NTF-004",
      template: "Room Invitation",
      recipients: 156,
      channel: "push",
      status: "failed",
      sentBy: "Admin",
      sentAt: "2024-01-14 16:20:00",
      deliveryRate: "12.8%",
      openRate: "-",
      clickRate: "-"
    },
    {
      id: "NTF-005",
      template: "Vote Reminder",
      recipients: 2341,
      channel: "in-app",
      status: "delivered",
      sentBy: "System",
      sentAt: "2024-01-14 09:30:00",
      deliveryRate: "97.3%",
      openRate: "78.9%",
      clickRate: "34.2%"
    },
    {
      id: "NTF-006",
      template: "Network Update",
      recipients: 8921,
      channel: "push",
      status: "delivered",
      sentBy: "Admin",
      sentAt: "2024-01-13 18:00:00",
      deliveryRate: "95.7%",
      openRate: "82.1%",
      clickRate: "19.4%"
    },
  ];

  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch = 
      notification.template.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notification.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || notification.status === statusFilter;
    const matchesChannel = channelFilter === "all" || notification.channel === channelFilter;
    return matchesSearch && matchesStatus && matchesChannel;
  });

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

  const getChannelColor = (channel: string) => {
    switch (channel) {
      case "push":
        return "primary";
      case "in-app":
        return "info";
      case "email":
        return "warning";
      default:
        return "muted";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notification History</h1>
          <p className="text-muted-foreground">
            View and analyze all sent notifications and their performance
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Sent
            </CardTitle>
            <Activity className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">13,036</div>
            <p className="text-xs text-success">+12% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Delivery Rate
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">96.8%</div>
            <p className="text-xs text-success">+2.1% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Avg Open Rate
            </CardTitle>
            <Eye className="h-4 w-4 text-info" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">84.2%</div>
            <p className="text-xs text-success">+5.3% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Failed Deliveries
            </CardTitle>
            <XCircle className="h-4 w-4 text-critical" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">147</div>
            <p className="text-xs text-critical">+3 from yesterday</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search notifications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="sending">Sending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={channelFilter} onValueChange={setChannelFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by channel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Channels</SelectItem>
            <SelectItem value="push">Push</SelectItem>
            <SelectItem value="in-app">In-App</SelectItem>
            <SelectItem value="email">Email</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Notifications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Notification Log</CardTitle>
          <CardDescription>
            Detailed history of all notification campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Template</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Channel</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Delivery Rate</TableHead>
                <TableHead>Open Rate</TableHead>
                <TableHead>Click Rate</TableHead>
                <TableHead>Sent By</TableHead>
                <TableHead>Sent At</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredNotifications.map((notification) => {
                const StatusIcon = getStatusIcon(notification.status);
                return (
                  <TableRow key={notification.id}>
                    <TableCell className="font-mono text-sm">
                      {notification.id}
                    </TableCell>
                    <TableCell className="font-medium">
                      {notification.template}
                    </TableCell>
                    <TableCell>
                      {notification.recipients.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={`text-${getChannelColor(notification.channel)}`}
                      >
                        {notification.channel}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <StatusIcon className={`w-4 h-4 text-${getStatusColor(notification.status)}`} />
                        <Badge 
                          variant="outline" 
                          className={`text-${getStatusColor(notification.status)}`}
                        >
                          {notification.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>{notification.deliveryRate}</TableCell>
                    <TableCell>{notification.openRate}</TableCell>
                    <TableCell>{notification.clickRate}</TableCell>
                    <TableCell>{notification.sentBy}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {notification.sentAt}
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Eye className="w-3 h-3" />
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          
          {filteredNotifications.length === 0 && (
            <div className="text-center py-8">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No notifications found</h3>
              <p className="text-muted-foreground">
                {searchTerm || statusFilter !== "all" || channelFilter !== "all"
                  ? "Try adjusting your search or filters"
                  : "No notifications have been sent yet"
                }
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default History;