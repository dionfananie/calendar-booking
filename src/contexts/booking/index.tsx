import { createContext, useContext, type ReactNode } from "react";

const BookingContext = createContext({});

const BookingProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BookingContext.Provider value={{}}>{children}</BookingContext.Provider>
  );
};

const useBooking = () => {
  return useContext(BookingContext);
};

export { BookingProvider, useBooking };
