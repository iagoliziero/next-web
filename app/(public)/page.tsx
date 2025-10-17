import { db } from "../db";
import CreateUserForm from "./components/create-user-form";

export default async function Home() {

    const users = await db.query.usersTable.findMany();

    return ( 
        <div className="h-screen flex flex-col items-center justify-center">
            <h1> Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
            <CreateUserForm />
        </div>
     );
}
 