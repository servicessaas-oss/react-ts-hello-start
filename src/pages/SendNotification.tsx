import { SendNotification as SendNotificationComponent } from "@/components/SendNotification";

const SendNotification = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Send Notification</h1>
          <p className="text-muted-foreground">
            Create and send notifications to your users
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <SendNotificationComponent />
      </div>
    </div>
  );
};

export default SendNotification;