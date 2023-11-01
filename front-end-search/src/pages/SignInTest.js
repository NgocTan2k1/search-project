import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import Image from '@/components/login/Image';

function SignInTest() {
  return (
    <div className="flex w-full h-full bg-gradient-to-br from-[rgba(149,225,255,0.7)] to-[rgba(162,230,230,0.8)] shadow-xl">
      <div
        className="
          relative grid rounded-[25px] bg-[#ffffff] m-auto overflow-hidden
          lg:w-[65%] lg:h-[80%] lg:grid-flow-col lg:grid-cols-8
          md:w-[60%] md:h-[80%] md:grid-flow-row sm:grid-rows-8 
          sm:w-[60%] sm:h-[90%] sm:grid-flow-row sm:grid-rows-8 
          "
      >
        <div className="relative flex w-full h-full justify-center lg:row-span-full lg:col-span-3">
          <Image
            logo={logo}
            title={'Welcome to our website'}
            mode="after:content-[''] after:w-[1px] after:h-[98%] after:bg-black after:absolute after:right-[0px] after:top-[50%] after:translate-y-[-50%]"
          />
        </div>
        <div className="w-full h-full m-auto sm:row-span-5 md:row-span-5 lg:row-span-full lg:col-span-5">
          <h1 className="text-4xl mt-[5%] font-bold text-center">Sign In</h1>
          <h2 className="text-2xl mt-[2%] font-bold text-center">into our website</h2>
          <div className="block max-w-md w-auto m-auto h-autp rounded-lg bg-white p-6 ">
            {/*  */}
            <div class="form-control w-full max-w-md my-2">
              <label class="label">
                <span class="label-text">Email address?</span>
              </label>
              <input type="email" placeholder="Your email..." className="input input-bordered input-info w-full max-w-md" />
            </div>
            <div class="form-control w-full max-w-md my-2">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Your password..."
                  className="input input-bordered input-info w-full max-w-md"
                />
              </div>
            </div>

            {/* <!--Remember me checkbox--> */}
            <div className="my-6 items-center justify-between">
              <div className="block min-h-[1.5rem] pl-[1.5rem]">
                <input
                  className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  value=""
                  id="exampleCheck2"
                />
                <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck2">
                  Remember me
                </label>
              </div>

              {/* <!--Forgot password link--> */}
              <Link
                to="#!"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Forgot password?
              </Link>
            </div>

            {/* <!--Submit button--> */}
            <button
              type="button"
              className="block btn btn-info w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] "
            >
              Sign in
            </button>

            {/* <!--Register link--> */}
            <p className="mt-6 text-center text-neutral-800 dark:text-neutral-200">
              Not a member?{' '}
              <a
                href="#!"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInTest;
