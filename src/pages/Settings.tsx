import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Settings as SettingsIcon,
  Bell,
  Globe,
  Shield,
  Clock,
  Mail,
  Smartphone,
  Monitor,
  Users,
  Save,
  TestTube,
  UserPlus,
  Trash2,
} from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">
            Configure your notification platform and user preferences
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Platform Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5 text-primary" />
                Platform Configuration
              </CardTitle>
              <CardDescription>
                General settings for your notification platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Platform Name</label>
                  <Input defaultValue="NotifyHub Admin" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Organization</label>
                  <Input defaultValue="Your Organization" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground">Default Language</label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground">Timezone</label>
                <Select defaultValue="utc">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time</SelectItem>
                    <SelectItem value="pst">Pacific Time</SelectItem>
                    <SelectItem value="cet">Central European Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Channel Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-info" />
                Channel Configuration
              </CardTitle>
              <CardDescription>
                Configure notification channels and their settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">Send notifications to mobile devices</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-success">Active</Badge>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-info" />
                    <div>
                      <p className="font-medium text-foreground">In-App Notifications</p>
                      <p className="text-sm text-muted-foreground">Show notifications within the application</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-success">Active</Badge>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-warning" />
                    <div>
                      <p className="font-medium text-foreground">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Send notifications via email</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-warning">Limited</Badge>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground">Max Daily Notifications</label>
                  <Input type="number" defaultValue="10" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">Retry Failed Attempts</label>
                  <Select defaultValue="3">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No Retries</SelectItem>
                      <SelectItem value="1">1 Retry</SelectItem>
                      <SelectItem value="3">3 Retries</SelectItem>
                      <SelectItem value="5">5 Retries</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Security & Privacy
              </CardTitle>
              <CardDescription>
                Manage security settings and data privacy options
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Require User Consent</p>
                    <p className="text-sm text-muted-foreground">Users must opt-in to receive notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Data Encryption</p>
                    <p className="text-sm text-muted-foreground">Encrypt notification content and user data</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Audit Logging</p>
                    <p className="text-sm text-muted-foreground">Log all administrative actions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              
              <Separator />
              
              <div>
                <label className="text-sm font-medium text-foreground">Data Retention Period</label>
                <Select defaultValue="90">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 Days</SelectItem>
                    <SelectItem value="90">90 Days</SelectItem>
                    <SelectItem value="180">6 Months</SelectItem>
                    <SelectItem value="365">1 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TestTube className="w-5 h-5 text-warning" />
                Testing & Debug
              </CardTitle>
              <CardDescription>
                Tools for testing and debugging notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                <Bell className="w-4 h-4 mr-2" />
                Test Push Notification
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Test Email Delivery
              </Button>
              <Button variant="outline" className="w-full">
                <Monitor className="w-4 h-4 mr-2" />
                Test In-App Notification
              </Button>
              
              <Separator />
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Test User ID</label>
                <Input placeholder="Enter user ID for testing" />
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-info" />
                System Status
              </CardTitle>
              <CardDescription>
                Current platform health and metrics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Push Service</span>
                <Badge className="bg-success text-success-foreground">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Email Service</span>
                <Badge className="bg-success text-success-foreground">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Database</span>
                <Badge className="bg-success text-success-foreground">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Analytics</span>
                <Badge className="bg-warning text-warning-foreground">Degraded</Badge>
              </div>
              
              <Separator />
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Last Updated</p>
                <p className="text-sm font-medium text-foreground">2 minutes ago</p>
              </div>
            </CardContent>
          </Card>

          {/* Notification Creators Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-primary" />
                Notification Creators
              </CardTitle>
              <CardDescription>
                Manage users who can create and send notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input placeholder="Enter email address" className="flex-1" />
                <Button size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Current Creators</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-foreground">admin@company.com</p>
                      <p className="text-xs text-muted-foreground">Added 2 days ago</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-foreground">sarah.manager@company.com</p>
                      <p className="text-xs text-muted-foreground">Added 1 week ago</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-foreground">team.lead@company.com</p>
                      <p className="text-xs text-muted-foreground">Added 2 weeks ago</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                User Preferences
              </CardTitle>
              <CardDescription>
                Default settings for new users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Auto-opt into notifications</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Email notifications enabled</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Push notifications enabled</span>
                <Switch defaultChecked />
              </div>
              
              <Separator />
              
              <div>
                <label className="text-sm font-medium text-foreground">Default Language</label>
                <Select defaultValue="en">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;