import { BookingProvider } from "./contexts/booking";
import Calendar from "./modules/Calendar";
import Settings from "./modules/Settings";

export default function App() {
  return (
    <div className="container p-8 mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <BookingProvider>
          <Settings />
          <Calendar />
        </BookingProvider>
      </div>
    </div>
  );
}
