import { TabElement } from "@/types/index.type";

export const driverTerms = {
  TRIPS: "trips",
  SHIFTS: "shifts",
};
export const profileTabs: TabElement[] = [
  { title: driverTerms.TRIPS, value: driverTerms.TRIPS },
  { title: driverTerms.SHIFTS, value: driverTerms.SHIFTS },
];
