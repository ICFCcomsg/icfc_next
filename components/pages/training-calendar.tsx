import { Tx } from "@/components/atoms/tx";
import { SiteBreadcrumb } from "@/components/molecules/site-breadcrumb";
import { TrainingCalendar } from "@/components/organisms/training/training-calendar";
import { SitePageTemplate } from "@/components/templates/site-page-template";

// Pack sitemap: /training/calendar, "Calendar component fed from the LMS".
export function TrainingCalendarPageContent() {
  return (
    <SitePageTemplate route="training/calendar">
      <main>
        <SiteBreadcrumb
          title={<Tx ns="training">{"Course calendar"}</Tx>}
          description={<Tx ns="training">{"Upcoming courses by month, booked through the ICFC Digital LMS"}</Tx>}
        />
        <TrainingCalendar />
      </main>
    </SitePageTemplate>
  );
}
