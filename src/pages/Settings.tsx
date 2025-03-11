import { Layout } from "@components/dashboard";
import BlurContainer from "@components/ui/blur-container";
import { Button } from "@components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { toast } from "@hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Switch } from "@components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useTheme } from "next-themes";
const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  job_title: z.string().optional(),
});

const notificationsFormSchema = z.object({
  marketing_emails: z.boolean().default(false),
  security_emails: z.boolean().default(true),
  social_emails: z.boolean().default(false),
  product_updates: z.boolean().default(true),
});

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark", "system"]),
  animated: z.boolean().default(true),
  sidebar_collapsed: z.boolean().default(false),
});

const Settings = () => {
  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "Alex Johnson",
      email: "alex@example.com",
      company: "Acme Corp",
      job_title: "Product Manager",
    },
  });

  const notificationsForm = useForm<z.infer<typeof notificationsFormSchema>>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues: {
      marketing_emails: false,
      security_emails: true,
      social_emails: false,
      product_updates: true,
    },
  });

  const appearanceForm = useForm<z.infer<typeof appearanceFormSchema>>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      theme: "system",
      animated: true,
      sidebar_collapsed: false,
    },
  });

  function onProfileSubmit(data: z.infer<typeof profileFormSchema>) {
    console.log(data);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
  }

  function onNotificationsSubmit(
    data: z.infer<typeof notificationsFormSchema>
  ) {
    console.log(data);
    toast({
      title: "Notification preferences updated",
      description: "Your notification preferences have been saved.",
    });
  }

  function onAppearanceSubmit(data: z.infer<typeof appearanceFormSchema>) {
    console.log(data);
    toast({
      title: "Appearance settings updated",
      description: "Your appearance settings have been saved.",
    });
  }
  const { setTheme } = useTheme();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <BlurContainer>
              <h3 className="text-lg font-semibold mb-6">
                Personal Information
              </h3>
              <Form {...profileForm}>
                <form
                  onSubmit={profileForm.handleSubmit(onProfileSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={profileForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={profileForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={profileForm.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={profileForm.control}
                      name="job_title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              </Form>
            </BlurContainer>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <BlurContainer>
              <h3 className="text-lg font-semibold mb-6">
                Notification Preferences
              </h3>
              <Form {...notificationsForm}>
                <form
                  onSubmit={notificationsForm.handleSubmit(
                    onNotificationsSubmit
                  )}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <FormField
                      control={notificationsForm.control}
                      name="marketing_emails"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Marketing emails
                            </FormLabel>
                            <FormDescription>
                              Receive emails about new products, features, and
                              more.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={notificationsForm.control}
                      name="security_emails"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Security emails
                            </FormLabel>
                            <FormDescription>
                              Receive emails about your account security.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={notificationsForm.control}
                      name="social_emails"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Social emails
                            </FormLabel>
                            <FormDescription>
                              Receive emails for friend requests, follows, and
                              more.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={notificationsForm.control}
                      name="product_updates"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Product updates
                            </FormLabel>
                            <FormDescription>
                              Receive emails about product updates and feature
                              releases.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Save Preferences</Button>
                  </div>
                </form>
              </Form>
            </BlurContainer>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <BlurContainer>
              <h3 className="text-lg font-semibold mb-6">
                Appearance Settings
              </h3>
              <Form {...appearanceForm}>
                <form
                  onSubmit={appearanceForm.handleSubmit(onAppearanceSubmit)}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <FormField
                      control={appearanceForm.control}
                      name="theme"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Theme</FormLabel>
                          <div className="grid grid-cols-3 gap-4 pt-2">
                            <label
                              htmlFor="theme-light"
                              className="relative dark:bg-[#0E121B] flex flex-col items-center gap-1.5 rounded-md border-2 bg-background p-4 cursor-pointer"
                              style={{
                                borderColor:
                                  field.value === "light"
                                    ? "hsl(var(--primary))"
                                    : "transparent",
                              }}
                            >
                              <div className="h-10 w-10 rounded-full bg-[#ffffff] border border-gray-200"></div>
                              <span>Light</span>
                              <input
                                type="radio"
                                id="theme-light"
                                value="light"
                                name={field.name}
                                checked={field.value === "light"}
                                onChange={(e) => {
                                  field.onChange(e.target.value);
                                  setTheme(e.target.value);
                                }}
                                className="sr-only"
                              />
                            </label>
                            <label
                              htmlFor="theme-dark"
                              className="relative dark:bg-[#0E121B] flex flex-col items-center gap-1.5 rounded-md border-2 bg-background p-4 cursor-pointer"
                              style={{
                                borderColor:
                                  field.value === "dark"
                                    ? "hsl(var(--primary))"
                                    : "transparent",
                              }}
                            >
                              <div className="h-10 w-10 rounded-full bg-[#1a1a1a] border border-gray-800"></div>
                              <span>Dark</span>
                              <input
                                type="radio"
                                id="theme-dark"
                                value="dark"
                                name={field.name}
                                checked={field.value === "dark"}
                                onChange={(e) => {
                                  field.onChange(e.target.value);
                                  setTheme(e.target.value);
                                }}
                                className="sr-only"
                              />
                            </label>
                            <label
                              htmlFor="theme-system"
                              className="relative dark:bg-[#0E121B] flex flex-col items-center gap-1.5 rounded-md border-2 bg-background p-4 cursor-pointer"
                              style={{
                                borderColor:
                                  field.value === "system"
                                    ? "hsl(var(--primary))"
                                    : "transparent",
                              }}
                            >
                              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#ffffff] to-[#1a1a1a] border border-gray-200"></div>
                              <span>System</span>
                              <input
                                type="radio"
                                id="theme-system"
                                value="system"
                                name={field.name}
                                checked={field.value === "system"}
                                onChange={(e) => {
                                  field.onChange(e.target.value);
                                  setTheme(e.target.value);
                                }}
                                className="sr-only"
                              />
                            </label>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={appearanceForm.control}
                      name="animated"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Enable animations
                            </FormLabel>
                            <FormDescription>
                              Toggle interface animations and transitions.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={appearanceForm.control}
                      name="sidebar_collapsed"
                      render={({ field }) => (
                        <FormItem className="flex items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              Collapse sidebar by default
                            </FormLabel>
                            <FormDescription>
                              Start with a collapsed sidebar when you open the
                              dashboard.
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Save Settings</Button>
                  </div>
                </form>
              </Form>
            </BlurContainer>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
