import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Users,
  Plus,
  Filter,
  Target,
  UserCheck,
  UserX,
  Globe,
  Search,
  Edit,
  Trash2,
} from "lucide-react";

const Segmentation = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const segments = [
    {
      id: 1,
      name: "All Users",
      description: "Every registered user on the platform",
      count: 8921,
      type: "default",
      icon: Users,
      color: "info",
      lastUsed: "2 hours ago",
      criteria: "All users",
    },
    {
      id: 2,
      name: "Verified Users",
      description: "Users who have completed ID verification",
      count: 6547,
      type: "custom",
      icon: UserCheck,
      color: "success",
      lastUsed: "5 hours ago",
      criteria: "ID Status = Verified",
    },
    {
      id: 3,
      name: "Unverified Users",
      description: "Users pending ID verification",
      count: 2374,
      type: "custom",
      icon: UserX,
      color: "warning",
      lastUsed: "1 day ago",
      criteria: "ID Status = Pending",
    },
    {
      id: 4,
      name: "Active Voters",
      description: "Users who voted in the last 30 days",
      count: 4521,
      type: "custom",
      icon: Target,
      color: "primary",
      lastUsed: "3 hours ago",
      criteria: "Last Vote < 30 days",
    },
    {
      id: 5,
      name: "Token Holders",
      description: "Users with wallet balance > 100 tokens",
      count: 3298,
      type: "custom",
      icon: Globe,
      color: "warning",
      lastUsed: "1 week ago",
      criteria: "Tokens > 100",
    },
  ];

  const filteredSegments = segments.filter((segment) =>
    segment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    segment.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTypeColor = (type: string) => {
    return type === "default" ? "muted" : "primary";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">User Segmentation</h1>
          <p className="text-muted-foreground">
            Create and manage user segments for targeted notifications
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Create Segment
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Segment</DialogTitle>
              <DialogDescription>
                Define criteria to create a targeted user segment
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Segment Name</label>
                <Input placeholder="Enter segment name" />
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Input placeholder="Brief description of this segment" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Criteria</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">User Status</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Status</SelectItem>
                        <SelectItem value="verified">Verified</SelectItem>
                        <SelectItem value="pending">Pending Verification</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Join Date</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Time</SelectItem>
                        <SelectItem value="7d">Last 7 days</SelectItem>
                        <SelectItem value="30d">Last 30 days</SelectItem>
                        <SelectItem value="90d">Last 90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Token Balance</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Amount</SelectItem>
                        <SelectItem value="0">0 Tokens</SelectItem>
                        <SelectItem value="1-100">1-100 Tokens</SelectItem>
                        <SelectItem value="100+">100+ Tokens</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Voting Activity</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select activity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Activity</SelectItem>
                        <SelectItem value="active">Active (Last 30 days)</SelectItem>
                        <SelectItem value="inactive">Inactive (30+ days)</SelectItem>
                        <SelectItem value="never">Never Voted</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="rooms" />
                  <label htmlFor="rooms" className="text-sm font-medium">
                    Members of specific rooms only
                  </label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="language" />
                  <label htmlFor="language" className="text-sm font-medium">
                    Filter by preferred language
                  </label>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">Estimated Users</p>
                <p className="text-2xl font-bold text-primary">~2,547 users</p>
                <p className="text-xs text-muted-foreground">Based on current criteria</p>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Create Segment</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search segments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Segments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSegments.map((segment) => {
          const Icon = segment.icon;
          return (
            <Card key={segment.id} className="border border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${segment.color}-muted flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 text-${segment.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{segment.name}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className={`text-xs mt-1 text-${getTypeColor(segment.type)}`}
                      >
                        {segment.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">{segment.count.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">users</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {segment.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Criteria</p>
                    <Badge variant="secondary" className="text-xs">
                      {segment.criteria}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-muted-foreground">
                      Last used {segment.lastUsed}
                    </p>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit className="w-3 h-3" />
                      </Button>
                      {segment.type !== "default" && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-critical">
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredSegments.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No segments found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm 
                ? "Try adjusting your search terms"
                : "Create your first user segment to target specific audiences"
              }
            </p>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Create Segment
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Segmentation;