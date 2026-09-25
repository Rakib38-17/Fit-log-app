export interface Type {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}
export type Plan = Pick<Type, "id" | "name">;

export interface AppContextType {
  addPlan: Plan[];
  setAddPlan: React.Dispatch<React.SetStateAction<Plan[]>>;
}
