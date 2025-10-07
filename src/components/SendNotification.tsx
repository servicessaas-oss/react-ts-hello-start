import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Clock, Users, Send, Eye, Settings, Image, Link, Bell, Smartphone, Mail, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export const SendNotification = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [scheduledDate, setScheduledDate] = useState<Date>();
  const [isScheduled, setIsScheduled] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("immediate");
  const [priority, setPriority] = useState("normal");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Send Notification</h2>
          <p className="text-muted-foreground">Compose and customize your notification</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button size="sm">
            <Send className="w-4 h-4 mr-2" />
            Send Now
          </Button>
        </div>
      </div>

      <Tabs defaultValue="compose" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="delivery">Delivery</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
        </TabsList>

        <TabsContent value="compose" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Template Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Choose Template</CardTitle>
                  <CardDescription>Start with a pre-designed template or create from scratch</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a template or start blank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blank">Blank Template</SelectItem>
                      <SelectItem value="welcome">Welcome Message</SelectItem>
                      <SelectItem value="verification">ID Verification</SelectItem>
                      <SelectItem value="wallet">Wallet Notification</SelectItem>
                      <SelectItem value="vote">Voting Reward</SelectItem>
                      <SelectItem value="social">Social Interaction</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Message Composition */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Message Content</CardTitle>
                  <CardDescription>Craft your notification message</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Enter notification title" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message content" className="min-h-[100px]" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="action-text">Action Button Text</Label>
                      <Input id="action-text" placeholder="Learn More" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="action-url">Action URL</Label>
                      <Input id="action-url" placeholder="https://example.com" />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="include-image" />
                    <Label htmlFor="include-image">Include image</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Priority & Category */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Priority & Category</CardTitle>
                  <CardDescription>Set notification importance and categorization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Priority Level</Label>
                      <RadioGroup value={priority} onValueChange={setPriority}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="low" id="low" />
                          <Label htmlFor="low">Low</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="normal" id="normal" />
                          <Label htmlFor="normal">Normal</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="high" id="high" />
                          <Label htmlFor="high">High</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="urgent" id="urgent" />
                          <Label htmlFor="urgent">Urgent</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="security">Security</SelectItem>
                          <SelectItem value="wallet">Wallet</SelectItem>
                          <SelectItem value="social">Social</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Preview Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Live Preview</CardTitle>
                  <CardDescription>See how your notification will appear</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Mobile Preview */}
                    <div className="border rounded-lg p-4 bg-muted/30">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Bell className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium text-sm">Notification Title</p>
                          <p className="text-xs text-muted-foreground">Your message content will appear here...</p>
                          <p className="text-xs text-muted-foreground">2 minutes ago</p>
                        </div>
                      </div>
                    </div>

                    {/* Email Preview */}
                    <div className="border rounded-lg p-4 bg-background">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Email Preview</span>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Subject: Notification Title</p>
                          <p className="text-muted-foreground mt-2">Your message content will appear here...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Target Audience</CardTitle>
                <CardDescription>Select who will receive this notification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Audience Segments</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience segment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="verified">Verified Users</SelectItem>
                      <SelectItem value="unverified">Unverified Users</SelectItem>
                      <SelectItem value="active">Active Users (Last 7 days)</SelectItem>
                      <SelectItem value="inactive">Inactive Users</SelectItem>
                      <SelectItem value="new">New Users (Last 30 days)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Channel Preferences</Label>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        <span className="text-sm">Push Notifications</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">Email</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm">In-App</span>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Audience Statistics</CardTitle>
                <CardDescription>Estimated reach for your notification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-foreground">12,480</p>
                    <p className="text-sm text-muted-foreground">Total Recipients</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-success">89%</p>
                    <p className="text-sm text-muted-foreground">Delivery Rate</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Push Notifications</span>
                    <Badge variant="outline">8,240 users</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Email</span>
                    <Badge variant="outline">11,200 users</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">In-App</span>
                    <Badge variant="outline">12,480 users</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="delivery" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Delivery Options</CardTitle>
                <CardDescription>Choose when and how to send your notification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Delivery Method</Label>
                  <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="immediate" id="immediate" />
                      <Label htmlFor="immediate">Send Immediately</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="scheduled" id="scheduled" />
                      <Label htmlFor="scheduled">Schedule for Later</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="optimal" id="optimal" />
                      <Label htmlFor="optimal">Send at Optimal Time</Label>
                    </div>
                  </RadioGroup>
                </div>

                {deliveryMethod === "scheduled" && (
                  <div className="space-y-2">
                    <Label>Schedule Date & Time</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !scheduledDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {scheduledDate ? format(scheduledDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={scheduledDate}
                          onSelect={setScheduledDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                )}

                <Separator />

                <div className="space-y-2">
                  <Label>Rate Limiting</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input placeholder="Messages per minute" type="number" defaultValue="100" />
                    <Select defaultValue="minute">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minute">per minute</SelectItem>
                        <SelectItem value="hour">per hour</SelectItem>
                        <SelectItem value="day">per day</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Advanced Settings</CardTitle>
                <CardDescription>Fine-tune delivery behavior</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Retry Failed Deliveries</Label>
                    <p className="text-xs text-muted-foreground">Automatically retry failed notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Track Opens & Clicks</Label>
                    <p className="text-xs text-muted-foreground">Enable analytics tracking</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Respect Do Not Disturb</Label>
                    <p className="text-xs text-muted-foreground">Honor user quiet hours</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Expiration</Label>
                  <Select defaultValue="7days">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1day">1 Day</SelectItem>
                      <SelectItem value="3days">3 Days</SelectItem>
                      <SelectItem value="7days">7 Days</SelectItem>
                      <SelectItem value="30days">30 Days</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="review" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Review & Send</CardTitle>
              <CardDescription>Double-check your notification before sending</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Message Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Title:</span>
                        <span>Notification Title</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Priority:</span>
                        <Badge variant="outline">Normal</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <span>General</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Audience</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Segment:</span>
                        <span>All Users</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Recipients:</span>
                        <span>12,480</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Channels:</span>
                        <div className="flex gap-1">
                          <Badge variant="outline" className="text-xs">Push</Badge>
                          <Badge variant="outline" className="text-xs">Email</Badge>
                          <Badge variant="outline" className="text-xs">In-App</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Delivery</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Method:</span>
                        <span>Send Immediately</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rate Limit:</span>
                        <span>100/minute</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Expiration:</span>
                        <span>7 days</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Estimated Costs</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Push Notifications:</span>
                        <span>$0.82</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Email:</span>
                        <span>$1.12</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Total:</span>
                        <span>$1.94</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="confirm" className="rounded" />
                  <Label htmlFor="confirm" className="text-sm">
                    I confirm that I want to send this notification to 12,480 recipients
                  </Label>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Save as Draft</Button>
                  <Button>
                    <Send className="w-4 h-4 mr-2" />
                    Send Notification
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};