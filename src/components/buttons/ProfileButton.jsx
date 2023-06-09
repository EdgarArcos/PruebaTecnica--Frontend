import { useAuth0 } from "@auth0/auth0-react";

export default function ProfileButton() {
    const { user, logout } = useAuth0()
    return (
        <div className="text-center">
            <button onClick={() => logout()} ><img className=" h-20 rounded-full border-purple-700 border-4 hover:rounded-full hover:border-red-700" src={user.picture} alt={user.name} /></button>
        </div>
    )
}
