import Navbar from "../Navbar/Navbar";

const Register = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-[85%] flex flex-row justify-between">
        <div className="relative basis-3/5 flex items-center justify-center">
          <img src="/biker.png" className="absolute z-10 scale-50" alt="" />
          <img src="/ellipse.png" className="absolute scale-110" alt="" />
        </div>
        <div className="basis-2/5 flex py-8 px-24">
          <div className="flex flex-col items-center gap-4 w-full">
            <form className="flex flex-col p-6 gap-6 w-full">
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="fullname"
                  className="font-nunito font-bold text-xl leading-6"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Masukkan nama lengkap kamu"
                  className="border border-slate-200 rounded-lg p-4"
                />
              </div>
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
                <img src="/eye-outline.svg" className="absolute w-6 right-4 bottom-4" alt="" />
              </div>
              <div className="relative flex flex-col gap-4">
                <label
                  htmlFor="confirmPassword"
                  className="font-nunito font-bold text-xl leading-6"
                >
                  Konfirmasi Kata Sandi
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Konfirmasi kata sandi kamu"
                  className="border border-slate-200 rounded-lg p-4"
                />
                <img src="/eye-outline.svg" className="absolute w-6 right-4 bottom-4" alt="" />
              </div>
            </form>
            <button className="flex justify-center items-center w-full rounded-lg bg-primary py-4 px-8 gap-2 text-white text-xl font-bold font-nunito leading-6">
              Daftar
              <img src="/arrow-right.svg" alt="" />
            </button>
            <div className="flex flex-col justify-center items-center gap-6 w-fit ">
              <p className="font-nunito font-normal text-base leading-[14.4px] p-2">
                Or sign up with
              </p>
              <div className="flex gap-6">
                <img src="/google.svg" alt="" />
                <img src="/facebook.svg" alt="" />
              </div>
            </div>
            <p className="w-full flex justify-center font-medium font-nunito text-base text-[#434343] border-t-2 border-slate-200 gap-2 pt-2">
              Sudah punya akun?{" "}
              <a href="" className="text-primary">
                {" "}
                Masuk!
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
