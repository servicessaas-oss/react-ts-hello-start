import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  BarChart3,
  FileText,
  Users,
  Settings,
  Zap,
  Bell,
  Activity,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: BarChart3,
    description: "Overview & Analytics"
  },
  {
    title: "Send Notification",
    url: "/send",
    icon: Bell,
    description: "Compose & Send"
  },
  {
    title: "Templates",
    url: "/templates",
    icon: FileText,
    description: "Notification Templates"
  },
  {
    title: "Segmentation",
    url: "/segmentation",
    icon: Users,
    description: "User Targeting"
  },
  {
    title: "Automation",
    url: "/automation",
    icon: Zap,
    description: "Triggers & Rules"
  },
  {
    title: "History",
    url: "/history",
    icon: Activity,
    description: "Notification Log"
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    description: "Platform Config"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getNavClass = (isActiveRoute: boolean) =>
    isActiveRoute
      ? "bg-primary text-primary-foreground font-medium"
      : "text-muted-foreground hover:bg-muted hover:text-foreground";

  return (
    <Sidebar className="bg-sidebar-bg border-r border-border">
      <SidebarContent className="bg-sidebar-bg">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Bell className="w-4 h-4 text-primary-foreground" />
            </div>
            {state !== "collapsed" && (
              <div>
                <h2 className="text-sm font-semibold text-foreground">NotifyHub</h2>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">
            Platform
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={getNavClass(isActive(item.url))}
                    >
                      <item.icon className="w-4 h-4" />
                      {state !== "collapsed" && (
                        <div className="flex flex-col">
                          <span className="text-sm">{item.title}</span>
                          <span className="text-xs opacity-70">{item.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}