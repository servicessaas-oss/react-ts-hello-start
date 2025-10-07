import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Zap,
  Plus,
  Search,
  Play,
  Pause,
  Edit,
  Trash2,
  Clock,
  UserCheck,
  Vote,
  Wallet,
  Users,
  ArrowRight,
} from "lucide-react";

const Automation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const automations = [
    {
      id: 1,
      name: "Welcome New Users",
      description: "Send welcome notification when user completes registration",
      trigger: "User Registration",
      action: "Send 'Welcome' template",
      status: "active",
      icon: Users,
      color: "success",
      executions: 324,
      lastRun: "2 hours ago",
      conditions: "Status = New"
    },
    {
      id: 2,
      name: "ID Verification Complete",
      description: "Congratulate users and send welcome tokens after verification",
      trigger: "ID Verified",
      action: "Send 'Verification Complete' + Tokens",
      status: "active",
      icon: UserCheck,
      color: "success",
      executions: 156,
      lastRun: "5 hours ago",
      conditions: "Verification = Approved"
    },
    {
      id: 3,
      name: "Vote Reminder",
      description: "Remind users about ongoing votes they haven't participated in",
      trigger: "24h Before Vote End",
      action: "Send 'Vote Reminder' template",
      status: "paused",
      icon: Vote,
      color: "warning",
      executions: 1247,
      lastRun: "2 days ago",
      conditions: "Not Voted & Vote Active"
    },
    {
      id: 4,
      name: "Token Milestone",
      description: "Celebrate when users reach token milestones",
      trigger: "Token Balance Change",
      action: "Send 'Milestone' template",
      status: "active",
      icon: Wallet,
      color: "warning",
      executions: 89,
      lastRun: "1 day ago",
      conditions: "Tokens >= 100, 500, 1000"
    },
    {
      id: 5,
      name: "Inactive User Re-engagement",
      description: "Re-engage users who haven't been active for 30 days",
      trigger: "30 Days Inactive",
      action: "Send 'Come Back' template",
      status: "active",
      icon: Clock,
      color: "info",
      executions: 67,
      lastRun: "3 days ago",
      conditions: "Last Login > 30 days"
    },
  ];

  const filteredAutomations = automations.filter((automation) =>
    automation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    automation.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    return status === "active" ? "success" : "warning";
  };

  const toggleAutomation = (id: number) => {
    // In a real app, this would call an API
    console.log("Toggling automation", id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Automation</h1>
          <p className="text-muted-foreground">
            Set up automated triggers and rules for your notifications
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Create Automation
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Automation</DialogTitle>
              <DialogDescription>
                Set up automated notification triggers based on user actions
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Automation Name</label>
                <Input placeholder="Enter automation name" />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Input placeholder="Brief description of this automation" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Trigger Configuration</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Trigger Event</label>
                    <select className="w-full p-2 border border-border rounded-md">
                      <option value="">Select event</option>
                      <option value="registration">User Registration</option>
                      <option value="verification">ID Verification</option>
                      <option value="vote_created">New Vote Created</option>
                      <option value="token_received">Tokens Received</option>
                      <option value="room_joined">Room Joined</option>
                      <option value="time_based">Time-based</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Delay (optional)</label>
                    <select className="w-full p-2 border border-border rounded-md">
                      <option value="immediate">Send Immediately</option>
                      <option value="1h">1 Hour Delay</option>
                      <option value="24h">24 Hours Delay</option>
                      <option value="7d">7 Days Delay</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Action Configuration</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Template</label>
                    <select className="w-full p-2 border border-border rounded-md">
                      <option value="">Select template</option>
                      <option value="welcome">Welcome Template</option>
                      <option value="verification">Verification Complete</option>
                      <option value="vote_reminder">Vote Reminder</option>
                      <option value="tokens">Token Notification</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Target Segment</label>
                    <select className="w-full p-2 border border-border rounded-md">
                      <option value="all">All Users</option>
                      <option value="verified">Verified Users</option>
                      <option value="unverified">Unverified Users</option>
                      <option value="active">Active Voters</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-2">Automation Summary</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">WHEN</span>
                  <span>User Registration</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="font-medium">THEN</span>
                  <span>Send Welcome Template</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="font-medium">TO</span>
                  <span>All Users</span>
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Create Automation</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search automations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Automations List */}
      <div className="space-y-4">
        {filteredAutomations.map((automation) => {
          const Icon = automation.icon;
          return (
            <Card key={automation.id} className="border border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-${automation.color}-muted flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 text-${automation.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{automation.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {automation.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge 
                      variant="outline" 
                      className={`text-${getStatusColor(automation.status)}`}
                    >
                      {automation.status}
                    </Badge>
                    <Switch 
                      checked={automation.status === "active"}
                      onCheckedChange={() => toggleAutomation(automation.id)}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Trigger</h4>
                    <p className="text-sm text-muted-foreground">{automation.trigger}</p>
                    <Badge variant="secondary" className="text-xs mt-2">
                      {automation.conditions}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Action</h4>
                    <p className="text-sm text-muted-foreground">{automation.action}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Performance</h4>
                    <p className="text-lg font-bold text-foreground">{automation.executions}</p>
                    <p className="text-xs text-muted-foreground">executions</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Last Run</h4>
                      <p className="text-sm text-muted-foreground">{automation.lastRun}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        {automation.status === "active" ? (
                          <Pause className="w-3 h-3" />
                        ) : (
                          <Play className="w-3 h-3" />
                        )}
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-critical">
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredAutomations.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No automations found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm 
                ? "Try adjusting your search terms"
                : "Create your first automation to streamline your notification workflows"
              }
            </p>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Create Automation
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Automation;