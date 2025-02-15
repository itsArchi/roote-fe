const ForgotPassword = () => {
  return (
    <div className="bg-primary flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-20">
        <div className="flex flex-col gap-4 p-10">
          <div className="flex flex-col justify-center items-center px-10 gap-4 text-center">
            <img className="w-[160px]" src="/logo.png" alt="" />
            <div className="flex flex-col justify-center items-center gap-2">
              <h3 className="text-[39px] font-nunito font-bold leading-[46.8px]">
                Lupa kata sandi?
              </h3>
              <p className="font-nunito font-medium text-base">
                Masukkan email, lalu cek inbox untuk tautan reset kata sandi.
              </p>
            </div>
          </div>
          <form className="flex flex-col gap-6 w-full">
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
          </form>
          <button className="flex justify-center items-center w-full rounded-lg bg-primary py-4 px-8 gap-2 text-white text-xl font-bold font-nunito leading-6">
            Kirim Tautan Reset
          </button>

          <div className="flex flex-col justify-center items-center border-t border-slate-200 gap-2">
            <p className="font-medium text-textNeutral text-base mt-4">
              Belum punya akun?{" "}
              <a href="" className="text-secondary">
                Daftar Sekarang
              </a>
            </p>
            <p className="font-medium text-textNeutral text-base">ATAU</p>
            <p className="font-medium text-textNeutral text-base">
              Kembali ke{" "}
              <a href="" className="text-textSecondary">
                Halaman Masuk
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
