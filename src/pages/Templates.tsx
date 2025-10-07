import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Plus,
  Search,
  Edit,
  Copy,
  Trash2,
  FileText,
  Users,
  Wallet,
  Vote,
  Shield,
  Home,
} from "lucide-react";

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const templates = [
    // 🔒 No Identity Templates
    {
      id: 1,
      name: "ID Verification - General",
      category: "no-identity",
      subcategory: "verification",
      description: "Verify your identity to unlock the full app experience.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Shield,
      color: "warning",
      lastModified: "2 days ago",
      usage: "High",
    },
    {
      id: 2,
      name: "Wallet Verification Required",
      category: "no-identity",
      subcategory: "wallet",
      description: "Want to send and receive tokens? Complete your ID verification.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Wallet,
      color: "warning",
      lastModified: "2 days ago",
      usage: "High",
    },
    {
      id: 3,
      name: "Compensation Vote Verification",
      category: "no-identity",
      subcategory: "voting",
      description: "Get rewarded for your participation—verify your identity now.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Vote,
      color: "warning",
      lastModified: "2 days ago",
      usage: "Medium",
    },
    {
      id: 4,
      name: "Chat Rooms Verification",
      category: "no-identity",
      subcategory: "rooms",
      description: "Join chat rooms and connect with others—verify your identity to get access.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Home,
      color: "warning",
      lastModified: "2 days ago",
      usage: "Medium",
    },
    {
      id: 5,
      name: "Network Engagement Verification",
      category: "no-identity",
      subcategory: "network",
      description: "Engage with posts: like, comment, and share once your identity is verified.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Users,
      color: "warning",
      lastModified: "2 days ago",
      usage: "Medium",
    },
    {
      id: 6,
      name: "Supporters Verification",
      category: "no-identity",
      subcategory: "supporters",
      description: "Gain supporters and grow your community—verify your identity to activate this feature.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Users,
      color: "warning",
      lastModified: "2 days ago",
      usage: "Medium",
    },
    {
      id: 7,
      name: "Credentials Verification",
      category: "no-identity",
      subcategory: "credentials",
      description: "Verify your identity to send and receive credentials securely.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: FileText,
      color: "warning",
      lastModified: "2 days ago",
      usage: "Low",
    },
    {
      id: 8,
      name: "Signature Verification",
      category: "no-identity",
      subcategory: "signature",
      description: "Want to sign documents and media? Verify your identity to enable signatures.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Edit,
      color: "warning",
      lastModified: "2 days ago",
      usage: "Low",
    },
    
    // ✅ Identity Templates
    {
      id: 9,
      name: "ID Verification Complete",
      category: "verified",
      subcategory: "verification",
      description: "Your account has been successfully verified.",
      channels: ["push", "in-app", "email"],
      languages: ["en", "fr"],
      icon: Shield,
      color: "success",
      lastModified: "1 day ago",
      usage: "High",
    },
    {
      id: 10,
      name: "Post Liked",
      category: "verified",
      subcategory: "network",
      description: "{{username}} liked your post.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Users,
      color: "info",
      lastModified: "1 hour ago",
      usage: "High",
    },
    {
      id: 11,
      name: "Post Comment",
      category: "verified",
      subcategory: "network",
      description: "{{username}} commented on your vote: {{comment}}",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Users,
      color: "info",
      lastModified: "2 hours ago",
      usage: "High",
    },
    {
      id: 12,
      name: "Post Shared",
      category: "verified",
      subcategory: "network",
      description: "{{username}} shared your post.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Users,
      color: "info",
      lastModified: "3 hours ago",
      usage: "Medium",
    },
    {
      id: 13,
      name: "Room Invitation",
      category: "verified",
      subcategory: "rooms",
      description: "You've been invited to join the chat room for the vote '{{question}}'.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Home,
      color: "primary",
      lastModified: "4 hours ago",
      usage: "Medium",
    },
    {
      id: 14,
      name: "New Supporter",
      category: "verified",
      subcategory: "supporters",
      description: "{{username}} has started supporting you.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Users,
      color: "success",
      lastModified: "5 hours ago",
      usage: "Medium",
    },
    {
      id: 15,
      name: "New Observer",
      category: "verified",
      subcategory: "supporters",
      description: "{{username}} is now observing your activity.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Users,
      color: "info",
      lastModified: "6 hours ago",
      usage: "Low",
    },
    {
      id: 16,
      name: "New Opposer",
      category: "verified",
      subcategory: "supporters",
      description: "{{username}} is following you as an opposer.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Users,
      color: "destructive",
      lastModified: "7 hours ago",
      usage: "Low",
    },
    {
      id: 17,
      name: "New Bystander",
      category: "verified",
      subcategory: "supporters",
      description: "{{username}} is following you as a bystander.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Users,
      color: "muted",
      lastModified: "8 hours ago",
      usage: "Low",
    },
    {
      id: 18,
      name: "Welcome Tokens",
      category: "verified",
      subcategory: "wallet",
      description: "Welcome! You've received {{amount}} tokens from Primesay.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Wallet,
      color: "success",
      lastModified: "1 day ago",
      usage: "High",
    },
    {
      id: 19,
      name: "Voting Rewards",
      category: "verified",
      subcategory: "wallet",
      description: "You've received {{amount}} tokens for voting.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Wallet,
      color: "success",
      lastModified: "1 day ago",
      usage: "High",
    },
    {
      id: 20,
      name: "Account Debit",
      category: "verified",
      subcategory: "wallet",
      description: "Your account has been debited {{amount}} tokens.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Wallet,
      color: "destructive",
      lastModified: "1 day ago",
      usage: "Medium",
    },
    {
      id: 21,
      name: "Token Credit",
      category: "verified",
      subcategory: "wallet",
      description: "You have received {{amount}} tokens from {{sender}}.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Wallet,
      color: "success",
      lastModified: "1 day ago",
      usage: "High",
    },
    {
      id: 22,
      name: "Credentials Received",
      category: "verified",
      subcategory: "credentials",
      description: "You've received credentials from {{sender}}.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: FileText,
      color: "info",
      lastModified: "2 days ago",
      usage: "Medium",
    },
    {
      id: 23,
      name: "Credentials Sent",
      category: "verified",
      subcategory: "credentials",
      description: "You've sent credentials to {{recipient}}.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: FileText,
      color: "info",
      lastModified: "2 days ago",
      usage: "Medium",
    },
    {
      id: 24,
      name: "Signature Required",
      category: "verified",
      subcategory: "signature",
      description: "A new media file requires your signature.",
      channels: ["push", "in-app", "email"],
      languages: ["en", "fr"],
      icon: Edit,
      color: "warning",
      lastModified: "3 days ago",
      usage: "Medium",
    },
    {
      id: 25,
      name: "Coffee Room Invitation",
      category: "verified",
      subcategory: "rooms",
      description: "Coffee Room: You've been invited to join.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Home,
      color: "primary",
      lastModified: "1 day ago",
      usage: "Low",
    },
    {
      id: 26,
      name: "Rally Room Invitation",
      category: "verified",
      subcategory: "rooms",
      description: "Rally Room: You've been invited to join.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Home,
      color: "primary",
      lastModified: "1 day ago",
      usage: "Low",
    },
    {
      id: 27,
      name: "Conference Room Invitation",
      category: "verified",
      subcategory: "rooms",
      description: "Conference Room: You've been invited to join.",
      channels: ["push", "in-app"],
      languages: ["en", "fr"],
      icon: Home,
      color: "primary",
      lastModified: "1 day ago",
      usage: "Low",
    },
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "no-identity", label: "🔒 No Identity" },
    { value: "verified", label: "✅ Identity Verified" },
    { value: "verification", label: "Verification" },
    { value: "wallet", label: "Wallet" },
    { value: "voting", label: "Voting" },
    { value: "rooms", label: "Rooms" },
    { value: "network", label: "Network" },
    { value: "supporters", label: "Supporters" },
    { value: "credentials", label: "Credentials" },
    { value: "signature", label: "Signature" },
  ];

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getUsageColor = (usage: string) => {
    switch (usage) {
      case "High": return "success";
      case "Medium": return "warning";
      case "Low": return "muted";
      default: return "muted";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Templates</h1>
          <p className="text-muted-foreground">
            Manage your notification templates and create new ones
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              Create Template
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Template</DialogTitle>
              <DialogDescription>
                Design a new notification template for your campaigns
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Template Name</label>
                  <Input placeholder="Enter template name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="verification">Verification</SelectItem>
                      <SelectItem value="wallet">Wallet</SelectItem>
                      <SelectItem value="voting">Voting</SelectItem>
                      <SelectItem value="rooms">Rooms</SelectItem>
                      <SelectItem value="network">Network</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Segments</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target segment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="verified">Verified Users</SelectItem>
                      <SelectItem value="unverified">Unverified Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div></div>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Input placeholder="Brief description of this template" />
              </div>
              <div>
                <label className="text-sm font-medium">Title</label>
                <Input placeholder="Notification title (use {{username}} for variables)" />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Notification message content..." rows={4} />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Create Template</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => {
          const Icon = template.icon;
          return (
            <Card key={template.id} className="border border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${template.color}-muted flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 text-${template.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {template.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`text-xs text-${getUsageColor(template.usage)}`}
                  >
                    {template.usage}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {template.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Channels</p>
                    <div className="flex gap-1">
                      {template.channels.map((channel) => (
                        <Badge key={channel} variant="secondary" className="text-xs">
                          {channel}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Languages</p>
                    <div className="flex gap-1">
                      {template.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-muted-foreground">
                      Modified {template.lastModified}
                    </p>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Copy className="w-3 h-3" />
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

      {filteredTemplates.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No templates found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || selectedCategory !== "all" 
                ? "Try adjusting your search or filters"
                : "Create your first notification template to get started"
              }
            </p>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Create Template
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Templates;