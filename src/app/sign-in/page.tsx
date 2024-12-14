export default function SignIn() {
    return (
        <div className="flex h-full w-full gap-5">

            <div className="bg-[#003DF6] w-full h-full rounded-2xl flex-col p-6 hidden lg:flex">
                <div className="w-full h-full flex items-center justify-center">
                    <img className="w-[500px]" src="/images/bitcoin.svg" />
                </div>
                <div className="bg-[#FFFFFF1A] flex flex-col gap-4 w-full h-min rounded-2xl p-6">
                    <div className="flex gap-4 w-full">
                        <div className="w-[60px] h-[60px] mr-[-50px] flex-shrink-0 rounded-full border" />
                        <div className="h-[60px] border rounded-full w-full flex items-center justify-center">
                            <p className="text-white">Stay Informed: Real-Time Market Updates</p>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-[60px] h-[60px] bg-[#FFFFFF1A] flex items-center justify-center rounded-full">
                                <img className="scale-75" src="/icons/arrow.svg" />
                            </div>
                            <div className="w-[60px] h-[60px] bg-[#FFFFFF1A] flex items-center justify-center rounded-full">
                                <img className="rotate-180 scale-75" src="/icons/arrow.svg" />
                            </div>
                        </div>
                    </div>
                    <p className="text-[#B0C3FC]">Access up-to-the-minute market insights, live prices, and trends right at your fingertips. Stay informed about the crypto landscape and make informed decisions effortlessly. Welcome to a dashboard that keeps you ahead in the crypto game!</p>
                </div>
            </div>

            <div className="flex flex-col gap-6 w-full h-full lg:max-w-[40%]">
                <div className="bg-white w-full h-full rounded-2xl p-4 lg:p-10 flex flex-col gap-6">
                    <img className="w-[123px]" src="logos/pop-trade.svg" />
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold">Welcome Back!</h3>
                        <p className="text-[#9AA0A6]">Let's navigate the cryptoverse together — PopTrade is ready to launch you into a world of limitless possibilities.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-center gap-4 border border-[#E8EAED] p-3 rounded-full">
                            <img src="icons/binance.svg" />
                            <p>Continue with Binance</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 border border-[#E8EAED] p-3 rounded-full">
                            <img src="icons/google.svg" />
                            <p>Continue with Google</p>
                        </div>
                        <div className="flex items-center justify-center gap-4 border border-[#E8EAED] p-3 rounded-full">
                            <img src="icons/apple.svg" />
                            <p>Continue with Apple</p>
                        </div>
                    </div>
                    <p className="text-[#9AA0A6] text-center">Or login with Email</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 bg-[#F8F9FA] py-3 px-4 rounded-full">
                            <img src="icons/email.svg" />
                            <input
                                className="bg-transparent outline-none text-[#9AA0A6] w-full"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="flex items-center gap-3 bg-[#F8F9FA] py-3 px-4 rounded-full">
                            <img src="icons/lock.svg" />
                            <input
                                className="bg-transparent outline-none text-[#9AA0A6] w-full"
                                placeholder="Enter your email address"
                            />
                            <img src="icons/eye.svg" />
                        </div>
                        <p className="text-[#003DF6] font-semibold text-right">Forgot password?</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="bg-[#003DF6] text-white rounded-full p-3">Login</button>
                        <div className="flex items-center gap-1 justify-center">
                            <p className="text-[#9AA0A6]">Doesn’t have an account?</p>
                            <p className="text-[#003DF6] font-semibold">Sign Up</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white rounded-2xl p-10 flex items-center gap-6 justify-between">
                    <div className="flex items-center gap-6">
                        <div className="flex">
                            <img className="lg:mr-[-30px] w-[40px] mr-[-20px] lg:w-[60px]" src="images/profile-1.svg" />
                            <img className="lg:mr-[-30px] w-[40px] mr-[-20px] lg:w-[60px]" src="images/profile-2.svg" />
                            <img className="w-[40px] lg:w-[60px]" src="images/profile-3.svg" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-md">Join with +100k other users!</p>
                            <p className="text-sm text-[#9AA0A6]">Let’s see our happy customers</p>
                        </div>
                    </div>

                    <div className="w-[60px] h-[60px] bg-[#E6ECFE] items-center justify-center rounded-full hidden lg:flex">
                        <img className="scale-75 rotate-180" src="/icons/arrow-blue.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
