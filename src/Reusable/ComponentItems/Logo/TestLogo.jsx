import Logo from "./Logo"

export default function TestLogo() {
    return (
        <div>
            <Logo variant="color" glow={true} width="100%" height="100%"/>
            <Logo variant="black" glow={false} width="150px" height="150px"/>
            <Logo variant="white" glow={true} width="500px" height="500px"/>
        </div>
    )
}