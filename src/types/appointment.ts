export interface Appointment {
  appointment_id: number;
  patient_id: number;
  therapist_id: number;
  appointment_date: string; // ISO timestamp
  status: "scheduled" | "completed" | "canceled";
  notes?: string;
  created_at: string;
}
