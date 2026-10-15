import { Container } from "@/components/atoms/container";
import { LmsCalendar } from "@/components/organisms/lms-calendar";
import { getUpcomingCourses } from "@/lib/lms";

// Pack: "The calendar shows upcoming courses by month with mode, duration, fee, seats left and a Book button
// that opens the course in the LMS." Used on /training and /training/calendar.
export async function TrainingCalendar() {
  return (
    <div id="calendar" className="scroll-mt-32 py-20 max-[767px]:py-12">
      <Container>
        <LmsCalendar courses={await getUpcomingCourses()} />
      </Container>
    </div>
  );
}
