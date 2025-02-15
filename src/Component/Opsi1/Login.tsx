const Login = () => {
    return (
      <div className="flex h-screen justify-between">
        <div className="w-1/2 flex py-8 px-24 items-center">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col justify-center items-center gap-4">
              <img className="w-[160px]" src="/logo.png" alt="" />
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-[39px] font-nunito font-bold leading-[46.8px]">
                  Welcome back!
                </h3>
                <p className="font-nunito font-medium text-base">
                  Get started in a few clicks and enjoy your expirience with us
                </p>
              </div>
            </div>
  
            <form className="flex flex-col p-6 gap-6 w-full">
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="email"
                  className="font-nunito font-bold text-xl leading-6"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Masukkan email kamu"
                  className="border border-slate-200 rounded-lg p-4"
                />
              </div>
              <div className="relative flex flex-col gap-4">
                <label
                  htmlFor="password"
                  className="font-nunito font-bold text-xl leading-6"
                >
                  Kata Sandi
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Masukkan kata sandi kamu"
                  className="border border-slate-200 rounded-lg p-4"
                />
                <a href="" className="absolute font-nunito font-normal text-xs text-[#767676] leading-[14.4px] right-0 -bottom-[20px]">Lupa Password?</a>
              </div>
            </form>
            <button className="flex justify-center w-full rounded-lg bg-primary py-4 px-8 gap-8 text-white text-xl font-bold font-nunito leading-6">
              Login
              <img src="/arrow-right.svg" alt="" />
            </button>
            <div className="flex flex-col justify-center items-center gap-6 w-fit ">
              <p className="font-nunito font-normal text-base leading-[14.4px]">
                Or sign up with
              </p>
              <div className="flex gap-6">
                <img src="/google.svg" alt="" />
                <img src="/facebook.svg" alt="" />
              </div>
            </div>
            <p className="w-full flex justify-center font-medium font-nunito text-base text-[#434343] border-t-2 border-slate-200 gap-2 pt-2">
              Sudah Punya Akun?{" "}
              <a href="" className="text-primary">
                {" "}
                Daftar!
              </a>
            </p>
          </div>
        </div>
        <div className="relative w-1/2 bg-primary h-screen flex items-center justify-center">
          <img className="absolute w-3/4 scale-x-[-1]" src="/biker.png" alt="" />
        </div>
      </div>
    );
  };
  
  export default Login;
  