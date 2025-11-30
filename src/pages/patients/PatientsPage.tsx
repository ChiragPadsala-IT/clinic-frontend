import React, { useEffect, useState } from "react";
import { patientService } from "../../services/patientService";
import type { Patient } from "../../types";

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [form, setForm] = useState<Partial<Patient>>({
    first_name: "",
    last_name: "",
  });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const res = await patientService.list();
    setPatients(res.data || res);
  }

  async function create(e: React.FormEvent) {
    e.preventDefault();
    try {
      await patientService.create(form as Partial<Patient>);
      setForm({ first_name: "", last_name: "" });
      await load();
    } catch (err: any) {
      alert(err?.response?.data?.message || err.message);
    }
  }

  return (
    <div>
      <div className="card">
        <h2>Create Patient</h2>
        <form onSubmit={create}>
          <div className="form-grid">
            <label>
              First name
              <input
                value={form.first_name || ""}
                onChange={(e) =>
                  setForm({ ...form, first_name: e.target.value })
                }
              />
            </label>
            <label>
              Last name
              <input
                value={form.last_name || ""}
                onChange={(e) =>
                  setForm({ ...form, last_name: e.target.value })
                }
              />
            </label>
            <label>
              Email
              <input
                value={form.email || ""}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <label>
              Phone
              <input
                value={form.phone || ""}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </label>
            <label>
              Date of birth
              <input
                type="date"
                value={form.date_of_birth || ""}
                onChange={(e) =>
                  setForm({ ...form, date_of_birth: e.target.value })
                }
              />
            </label>
            <label>
              Gender
              <select
                value={form.gender || ""}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <label>
              Address
              <textarea
                value={form.address || ""}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
            </label>
          </div>
          <button type="submit">Create</button>
        </form>
      </div>

      <div className="card">
        <h2>Patients</h2>
        {patients.length === 0 ? (
          <p className="small">No patients</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.patient_id}>
                  <td>
                    {p.first_name} {p.last_name}
                  </td>
                  <td>{p.email}</td>
                  <td>{p.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
