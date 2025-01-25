import { useState } from "react";
import Header from "./Header";
import UserCart from "./UserCart";

const USERS = [
  {
    id: crypto.randomUUID(),
    fullName: "Tapas Adhikari",
    age: 50,
    occupation: "Teacher",
  },
  {
    id: crypto.randomUUID(),
    fullName: "Md Khabbab Hossen",
    age: 24,
    occupation: "Student",
  },
  {
    id: crypto.randomUUID(),
    fullName: "Md Rezaul Karim",
    age: 29,
    occupation: "Student",
  },
  {
    id: crypto.randomUUID(),
    fullName: "Emtiaj Ahomed",
    age: 23,
    occupation: "Student",
  },
  {
    id: crypto.randomUUID(),
    fullName: "Fakrul Islam Miraj",
    age: 26,
    occupation: "Student",
  },
  {
    id: crypto.randomUUID(),
    fullName: "Atik Foysal Mon",
    age: 32,
    occupation: "Student",
  },
  {
    id: crypto.randomUUID(),
    fullName: "Md Khabbab Hossen",
    age: 24,
    occupation: "Volunteer",
  },
  {
    id: crypto.randomUUID(),
    fullName: "Md Alom Hosain",
    age: 24,
    occupation: "Marketer",
  },
];

const Users = () => {
  const [users, setUsers] = useState(USERS);
  return (
    <div className="w-screen h-screen bg-slate-900">
      <Header users={users} onSetUsers={setUsers} />

      <ul className="container mx-auto grid grid-cols-4 gap-5">
        {users.map((user) => (
          <li key={user.id}>
            <UserCart user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
