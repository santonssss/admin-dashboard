import React from "react";
import { Calendar as CalendarComponent } from "@components/ui/calendar";
import { Layout } from "@components/dashboard";
import BlurContainer from "@components/ui/blur-container";
import { Button } from "@components/ui/button";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const handlePreviousMonth = () => {
    if (date) {
      const prevMonth = new Date(date);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      setDate(prevMonth);
    }
  };

  const handleNextMonth = () => {
    if (date) {
      const nextMonth = new Date(date);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      setDate(nextMonth);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
          <Button className="gap-1">
            <Plus size={16} />
            New Event
          </Button>
        </div>

        <BlurContainer className="p-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">
                {date
                  ? date.toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })
                  : "Select a date"}
              </h2>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePreviousMonth}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleNextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border p-3 pointer-events-auto"
                month={date}
              />
            </div>

            <div className="mt-6">
              <h3 className="font-medium mb-2">Upcoming Events</h3>
              <div className="space-y-2">
                <div className="p-3 border rounded-md bg-background/50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Team Meeting</p>
                      <p className="text-sm text-muted-foreground">
                        10:00 AM - 11:30 AM
                      </p>
                    </div>
                    <div className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      Work
                    </div>
                  </div>
                </div>

                <div className="p-3 border rounded-md bg-background/50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Project Review</p>
                      <p className="text-sm text-muted-foreground">
                        2:00 PM - 3:00 PM
                      </p>
                    </div>
                    <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                      Important
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BlurContainer>
      </div>
    </Layout>
  );
};

export default Calendar;
