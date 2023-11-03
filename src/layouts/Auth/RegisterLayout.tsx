import logoUrl from "../../assets/images/logo_kopkarla.png";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import MainColorSwitcher from "../../components/MainColorSwitcher";

const RegisterLayout = (props : any) => {
    const {children} = props;
  return (
        <div className="container">
            <DarkModeSwitcher />
            <MainColorSwitcher />
            <div className="flex items-center justify-center w-full min-h-screen px-5 md:px-20 pb-32 md:pb-20">
            <div className="w-full intro-y">
                <div className="box px-5 pt-12 pb-8 mt-10 relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                    {children}
                </div>
            </div>
            </div>
        </div>
  )
}

export default RegisterLayout