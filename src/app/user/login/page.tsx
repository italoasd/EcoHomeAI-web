export default function Login(){
  return(
    <div className="h-screen flex bg-[#070709] justify-between">
    <div className="flex items-center justify-center w-[50%]">
      <div className="w-[100%]">
        <section className="bg-[#070709] rounded-[34px] z-0 h-[654px] flex max-sm:rounded-[24px] justify-center">
          <div className="ml-[60px] mt-[79px] max-sm:ml-0 max-sm:mt-5 max-sm:p-12 sm:max-md:ml-0 sm:max-md:w-[600px]">
            <div className="flex sm:max-md:justify-center">
              <h1 className="text-white text-5xl font-bold leading-[64px] whitespace-nowrap mb-[60px]">
                Faça seu login
              </h1>
              <div className="ml-2 h-12 flex items-end">
                <div className="w-4 h-4 rounded-lg bg-gradient-to-tr from-[#283760] to-[#34E291] items-end"></div>
              </div>
            </div>
            <form className="sm:max-md:mx-[50px]">
              <div className="flex flex-col">
                <div className="flex flex-col z-10">
                  <label className="text-gray-400 flex flex-col font-normal text-[14px] leading-5">
                    Email
                    <div className="hover:bg-gradient-to-tr from-[#283760] to-[#34E291] hover:p-px rounded-2xl h-15 flex items-center w-full mt-[8px]">
                      <input
                        type="email"
                        className="rounded-2xl w-full h-[53px] bg-[#111112] text-[22px] text-white pl-1 pr-1 placeholder:text-base placeholder:text-[#616161]"
                        placeholder="Digite seu email..."
                      />
                    </div>
                  </label>
                  <label className="text-gray-400 flex flex-col font-normal text-[14px] leading-5 mt-7">
                    Senha
                    <div className="hover:bg-gradient-to-tr from-[#283760] to-[#34E291] hover:p-px rounded-2xl h-15 flex items-center w-full mt-[8px] z-10">
                      <input
                        type="password"
                        className="rounded-2xl w-full h-[53px] bg-[#111112] text-[22px] text-white pl-1 pr-1 placeholder:text-base placeholder:text-[#616161]"
                        placeholder="Digite sua senha..."
                      />
                    </div>
                  </label>
                </div>
                <a href="sem redirecionamento" className="link-login text-gray-400 not-italic font-normal text-[13px] leading-[18px] flex justify-end pr-3 pt-6 pb-10 underline">
                  Esqueci minha senha
                </a>
                <button className="text-white font-normal text-[23px] leading-[30px] h-[53px] rounded-2xl custom-gradient-button">
                  Entrar
                </button>
                <a href="sem redirecionamento" className="link-login text-[13px] leading-[18px] mt-[35px] flex justify-center underline">
                  <span className="main-text text-gray-400">Ainda não tenho uma conta?</span>
                  <span className="sub-text ml-1 text-[#34E291]">Cadastre-se</span>
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
    <div className="flex justify-end items-end w-[50%] bg-[#16244d] shadowLog">
      <img src="/assets/image-login.png" className="w-4/12 h-2/6 mb-28 shadowIco"/>
    </div>
  </div>
  )
}