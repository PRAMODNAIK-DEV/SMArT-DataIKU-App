import React, { useEffect, useState } from "react";
import axios from "axios";
import Counter from "./Counter";

interface Student {
  id: number;
  name: string;
  email: string;
  age: number;
}

const StudentsList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://dss-0c55751b-e7311e24-dku.us-east-1.app.dataiku.io/web-apps-backends/PRAMODSMART/xJhzSWE/first_api_call")
      .then((response) => {
        setStudents(response.data.data);
        console.log("response.data", response.data);
        
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(" Students", students);
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Students List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          {students && students.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{student.id}</td>
              <td className="border border-gray-300 px-4 py-2">{student.name}</td>
              <td className="border border-gray-300 px-4 py-2">{student.email}</td>
              <td className="border border-gray-300 px-4 py-2">{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Counter/>
    </div>
  );
};

export default StudentsList;
