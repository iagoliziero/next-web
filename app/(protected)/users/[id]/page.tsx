interface UserProps {
    params: Promise<{id: string}>
}

const User = async ({params}: UserProps) => {

    const {id} = await params;

    return ( 
        <h1> User id: {id} </h1>
     );
}
 
export default User;