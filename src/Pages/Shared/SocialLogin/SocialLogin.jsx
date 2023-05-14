import {useContext} from "react";
import {AuthContext} from "../../../providers/AuthProviders";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div onClick={handleGoogleSignIn} className="text-center"><button className="btn btn-circle btn-outline">G</button></div>
        </div>
    );
};

export default SocialLogin;