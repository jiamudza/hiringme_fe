import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../../components/Footer/Footer";
import { getAllProfile } from "../../../redux/actions/ProfileWorker";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const HomeCompany = () => {
  const { data } = useSelector((state) => state.profileWorkers);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProfile());
  }, []);
  return (
    <>
      <div>
        <Navbar />
        <header className="bg-secondary ">
          <section className="container max-w-5xl mx-auto">
            <h1 className="text-white font-extrabold text-start text-xl p-6">
              Berkah Jaya
            </h1>
          </section>
        </header>
        <main className="container max-w-5xl mx-auto flex flex-col mt-10 ">
          <section className="flex flex-row bg-white">
            <div className="basis-[70%] border-r-2 ">
              <form className="flex items-center m-1">
                <input
                  type="text"
                  className="w-full  p-3 rounded-lg shadow-lg"
                  placeholder="Search....."
                />
              </form>
            </div>
            <div className="dropdown basis-[15%] text-center">
              <label
                tabIndex={0}
                className="btn bg-white shadow-lg border-white m-1 w-full text-text hover:bg-secondary hover:text-white"
              >
                ▼ Sort
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu  text-start shadow bg-base-100 rounded-lg w-52"
              >
                <li>
                  <h1>Sortir berdasarkan Skill</h1>
                </li>
                <li>
                  <h1>Sortir berdasarkan Freelance</h1>
                </li>
                <li>
                  <h1>Sortir berdasarkan Fulltime</h1>
                </li>
              </ul>
            </div>
            <div className=" basis-[15%]">
              <button className="btn border-white bg-secondary hover:bg-white hover:text-text m-1 w-full">
                Search
              </button>
            </div>
          </section>
          <section className="mt-10 grid grid-cols-1 gap-7 p-3 mx-[1rem] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data?.map((item) => (
              <div
                key={item.user_id}
                className="card bg-base-100 shadow-xl  hover:cursor-pointer p-2"
                onClick={() => navigate(`/profilecompany/${item.id}`)}
              >
                <figure>
                  <img
                    className="h-28 w-28 shadow-xl mr-20 p-2"
                    src={`https://gas-crack-production.up.railway.app/public/uploads/images/${item.image}`}
                    alt="Profile-image"
                  />
                </figure>
                <div className="card-body p-2">
                  <h2 className="card-title">{item.name}</h2>
                  <p className="text-pale">{item.email}</p>
                  <p className="flex items-center text-pale"><FaHome className="mr-3"/> {item.address}</p>
                  <div className="flex flex-row justify-center px-4">
                    <p className="px-3 py-2 text-sm font-bold text-white bg-primary rounded-3xl ">More Information</p>
                  </div>
                </div>
              </div>
            )) ?? "Loading..."}
          </section>
          <section className="self-center mt-4 mb-10">
            <div className="btn-group ">
            <AiOutlineLeft size={50} className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white mx-4" />
              
              <button className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white marker:mx-1">
                1
              </button>
              <button className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white mx-1">
                2
              </button>
              <button className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white mx-1">
                3
              </button>
              <button className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white mx-1">
                4
              </button>
              <AiOutlineRight size={50} className="btn bg-white border-[#E2E5ED] text-text hover:bg-secondary hover:text-white mx-4" />
              
            </div>
          </section>
        </main>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default HomeCompany;
