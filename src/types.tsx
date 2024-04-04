export interface Assignment {
    _id: string;
    name: string;
    description: string;
    course?: string;
    dueDate: string;
    totalPoints: number;
    availableFromDate: string | null;
    availableUntilDate: string | null;
  }