import { Layout } from "@components/dashboard";
import BlurContainer from "@components/ui/blur-container";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Search, User, ChevronRight, Send } from "lucide-react";

const Chat = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
          <Button variant="outline" className="gap-1">
            <User size={16} />
            New Chat
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <BlurContainer className="md:col-span-1 p-0 overflow-hidden">
            <div className="border-b p-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search messages..."
                  className="pl-8"
                />
              </div>
            </div>

            <div className="h-[calc(100vh-280px)] overflow-y-auto">
              {[
                "Sarah Johnson",
                "Michael Chen",
                "Alex Thompson",
                "Lisa Garcia",
                "James Wilson",
              ].map((name, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 hover:bg-accent/50 cursor-pointer ${
                    index === 0 ? "bg-accent/50" : ""
                  } transition-colors border-b`}
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                    {name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <p className="font-medium truncate">{name}</p>
                      <p className="text-xs text-muted-foreground">
                        {index === 0 ? "Just now" : `${index + 1}h ago`}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {index === 0
                        ? "Can you check the latest design?"
                        : "Lorem ipsum dolor sit amet..."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </BlurContainer>

          <BlurContainer className="md:col-span-2 p-0 overflow-hidden flex flex-col">
            <div className="border-b p-4 flex items-center gap-3">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                S
              </div>
              <div className="flex-1">
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
              <Button variant="ghost" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                  S
                </div>
                <div className="bg-accent/50 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">
                    Hi there! Can you check the latest design I sent over?
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                </div>
              </div>

              <div className="flex gap-3 flex-row-reverse">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                  Y
                </div>
                <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">
                    Sure, I'll take a look and get back to you with feedback.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">10:32 AM</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                  S
                </div>
                <div className="bg-accent/50 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm">
                    Thanks! I'm particularly wondering about the color scheme
                    and if it matches our brand guidelines.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">10:35 AM</p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button className="gap-1">
                  <Send size={16} />
                  Send
                </Button>
              </div>
            </div>
          </BlurContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Chat;
