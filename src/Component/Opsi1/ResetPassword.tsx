const ResetPassword = () => {
  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-20">
        <div className="flex flex-col gap-4 p-10">
          <div className="flex flex-col justify-center items-center px-10 gap-4 text-center">
            <img className="w-[160px]" src="/logo.png" alt="" />
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="text-[39px] font-nunito font-bold leading-[46.8px]">
                Kesulitan masuk?
              </h3>
              <p className="font-nunito font-medium text-base">
                Masukkan email, lalu cek inbox untuk tautan reset kata sandi.
              </p>
            </div>
          </div>
          <form className="flex flex-col gap-6 w-full">
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
              <img
                src="/eye-outline.svg"
                className="absolute w-6 right-4 bottom-4"
                alt=""
              />
            </div>
            <div className="relative flex flex-col gap-4">
              <label
                htmlFor="confirmPassword"
                className="font-nunito font-bold text-xl leading-6"
              >
                Atur ulang kata sandi
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Konfirmasi kata sandi kamu"
                className="border border-slate-200 rounded-lg p-4"
              />
              <img
                src="/eye-outline.svg"
                className="absolute w-6 right-4 bottom-4"
                alt=""
              />
            </div>
          </form>
          <button className="flex justify-center items-center w-full rounded-lg bg-primary py-4 px-8 gap-2 text-white text-xl font-bold font-nunito leading-6">
            Kirim Tautan Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
