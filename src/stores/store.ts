import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface Habit{
    id:string,
    name:string,
    frequency: "daily" | "weekly"
    completedDates:string[],
    createAt : string;
}
interface HabitState{
    habits:Habit[];
    addHabit:(name:string,frequency:"daily" | "weekly")=> void;
    removeHabit:(id:string)=>void;
    toggleHabit:(id:string,date:string)=>void;
}
const useHabitStore = create(
  persist(
    (set: (arg0: { (state: { habits: any; }): { habits: any[]; }; (state: { habits: any[]; }): { habits: any[]; }; (state: { habits: any[]; }): { habits: any[]; }; }) => any) => ({
      habits: [],
      addHabit: (name: any, frequency: any) =>
        set((state: { habits: any; }) => ({
          habits: [
            ...state.habits,
            {
              id: Date.now().toString(),
              name,
              frequency,
              completedDates: [],
              createdAt: new Date().toISOString(),
            },
          ],
        })),
      removeHabit: (id: any) =>
        set((state: { habits: any[]; }) => ({
          habits: state.habits.filter((habit) => habit.id !== id),
        })),
      toggleHabit: (id: any, date: any) =>
        set((state: { habits: any[]; }) => ({
          habits: state.habits.map((habit) =>
            habit.id === id
              ? {
                  ...habit,
                  completedDates: habit.completedDates.includes(date)
                    ? habit.completedDates.filter((d) => d !== date)
                    : [...habit.completedDates, date],
                }
              : habit
          ),
        })),
    }),
    {
      name: "habit-storage", // Unique name for the storage key
    }
  )
);
export default useHabitStore;