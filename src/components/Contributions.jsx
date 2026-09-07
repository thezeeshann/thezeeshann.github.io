import { Component } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { profile } from "../lib/data";
import "react-github-calendar/tooltips.css";
import { useTheme } from "../lib/useTheme";

// Greyscale ramp — no GitHub green survives.
const calendarTheme = {
  light: ["#ebedf0", "#c6cbd1", "#959da5", "#6a737d", "#24292e"],
  dark: ["#161b22", "#30363d", "#4c545d", "#8b949e", "#f0f6fc"],
};

/**
 * The graph is fed by a third-party API (github-contributions-api.jogruber.de)
 * that can rate-limit or go down. A dead graph is worse than no graph, so on
 * failure the whole section is dropped instead of rendering an error.
 */
class CalendarBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

const Contributions = () => {
  const { theme } = useTheme();

  return (
    <CalendarBoundary>
      <div className="no-scrollbar select-none overflow-x-auto">
        <div className="min-w-[700px] md:min-w-0">
          <GitHubCalendar
            username={profile.githubUsername}
            // Driven by our class-based theme; the library would otherwise
            // read the OS preference and disagree with the page.
            colorScheme={theme === "dark" ? "dark" : "light"}
            theme={calendarTheme}
            blockSize={10}
            blockMargin={3.2}
            blockRadius={5}
            fontSize={12}
            throwOnError
            labels={{ totalCount: "{{count}} contributions in the last year" }}
          />
        </div>
      </div>
    </CalendarBoundary>
  );
};

export default Contributions;
