import { Container } from "@/components/atoms/container";
import { LmsCalendar } from "@/components/organisms/lms-calendar";
import { getUpcomingCourses } from "@/lib/lms";
import { getSiteFlags } from "@/lib/frappe";

// Pack: "The calendar shows upcoming courses by month with mode, duration, fee, seats left and a Book button
// that opens the course in the LMS." Used on /training and /training/calendar.
export async function TrainingCalendar() {
  // Booking happens on the LMS, so the calendar hides with the online-course flag.
  if (!(await getSiteFlags()).enable_online_course) return null;
  return (
    <div id="calendar" className="scroll-mt-32 py-20 max-[767px]:py-12">
      <Container>
        <LmsCalendar courses={await getUpcomingCourses()} />
      </Container>
    </div>
  );
}
