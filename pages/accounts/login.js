import React from 'react'
import Link from 'next/link'

function Login() {
    return (
        <div className="flex flex-col">
            <main className="bg-gray-50 min-h-screen min-w-screen">
                <div className="mx-auto max-w-[350px] flex justify-center items-center flex-1 flex-col">
                    <div className="w-full h-96 border bg-white mt-10 flex flex-col items-center py-2">
                        <img className="w-40 mt-6 mb-10" src="/img/logo.png" />
                        <input className="text-xs border outline-none bg-gray-100 p-2 w-4/5 rounded" placeholder="Telefon numarası, kullanıcı adı veya eposta" />
                        <input className="text-xs border outline-none bg-gray-100 p-2 w-4/5 rounded mt-2" placeholder="Şifre" type="password" />

                        <Link href="/">
                            <a className="text-center bg-btnBlue text-white mt-3 w-4/5 rounded py-1">Giriş Yap</a>
                        </Link>

                        <div className="flex mt-4 text-xs text-gray-500 items-center space-x-5">
                            <div className="h-1 w-28 border-t-2"></div>
                            <span>YA DA</span>
                            <div className="h-1 w-28 border-t-2"></div>
                        </div>

                        <a href="#" className="text-blue-800 font-medium mt-5">Facebook ile Giriş Yap</a>

                        <a href="#" className="text-blue-800 text-xs mt-5">Şifreni mi unuttun?</a>

                    </div>
                    <div className="w-full h-16 text-sm bg-white border mt-5 flex items-center justify-center">
                        <span>Hesabın yok mu?</span>
                        <Link href="/accounts/signup">
                            <a className="text-btnBlue ml-2 font-medium">Kaydol</a>
                        </Link>
                    </div>

                    <span className="text-sm my-5">Uygulamayı indir.</span>

                    <div className="flex space-x-2">
                        <a href="#" >
                            <img
                                className="h-10"
                                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png" />
                        </a>
                        <a href="#">
                            <img
                                className="h-10"
                                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png" />
                        </a>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Login
