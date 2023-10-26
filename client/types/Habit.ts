export type Habit = {
  name: string;
  description: string;
  frequency: number;
  startDate: Date;
  endDate?: Date;
  completed: number;
  bgColor: string;
};
