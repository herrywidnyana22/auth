import { auth, signOut } from "@/auth";

const Setting = async() => {
    const session = await auth()
    const onSignout = async() =>{
        'use server'
        await signOut()
    }
    return (
        <div>
            {JSON.stringify(session)}
            <form action={onSignout}>
                <button type="submit">
                    Sign out
                </button>
            </form>
        </div>
    );
}
 
export default Setting;