import "./App.css";
import { CgArrowRight } from "react-icons/cg";
import heroImage from "./assets/hero_image 1.png";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

function App() {
  const [mobileNav, setMobileNav] = useState(false);

  const navHandler = () => {
    setMobileNav((prev) => !prev);
  };

  return (
    <div className="App">
      <nav
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5 },
        }}
        className="navbar notForMobile"
      >
        <div className="nav-part-I">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M12.1296 0.447618C8.04149 0.87767 4.55445 3.88285 3.52854 7.86731C2.25393 12.8103 4.87051 17.9036 9.63217 19.743C10.6166 20.1212 11.9793 20.3906 12.9327 20.3906C13.3006 20.3906 13.3835 20.3751 13.4715 20.287C13.627 20.1316 13.627 19.8569 13.4715 19.6963C13.3938 19.6186 13.2591 19.5875 12.8135 19.5512C10.969 19.4062 9.36792 18.888 8.05704 18.0176C7.44564 17.6134 7.26429 17.4683 6.72025 16.9295C5.00522 15.2455 4.08813 12.9658 4.08813 10.3854C4.08813 7.21446 5.51818 4.46316 8.03113 2.78441C9.32129 1.92948 11.0467 1.3699 12.8239 1.24555C13.2954 1.20928 13.3524 1.19373 13.4819 1.05902C13.6684 0.87767 13.6633 0.732594 13.4767 0.540882C13.3316 0.400986 13.3006 0.390623 12.943 0.395805C12.7358 0.400986 12.3679 0.426893 12.1296 0.447618Z"
                fill="#FAFAFA"
              />
              <path
                d="M12.202 3.68942C10.6787 3.92258 9.38334 4.56507 8.3678 5.59616C7.42479 6.54952 6.86521 7.58579 6.56987 8.95885C6.47661 9.3889 6.45588 9.65833 6.45588 10.3941C6.4507 11.363 6.50769 11.762 6.76676 12.5858C7.25899 14.1298 8.30044 15.4355 9.68904 16.249C10.6217 16.793 11.9533 17.1661 13.0466 17.1868C13.4507 17.1972 13.5958 17.0884 13.5958 16.7879C13.5958 16.5184 13.4507 16.42 13.0155 16.3837C11.9222 16.2905 11.1087 16.0625 10.3056 15.6272C8.27971 14.5133 7.02583 12.192 7.25381 9.9744C7.48697 7.68424 8.59578 6.01066 10.4922 5.07802C12.3782 4.15056 14.6683 4.26973 16.4662 5.37854C16.9844 5.69978 17.7512 6.43035 18.0776 6.9174C18.632 7.73605 19.0155 8.81377 19.1243 9.85004C19.1968 10.5392 19.2072 10.5858 19.3263 10.705C19.4714 10.85 19.7149 10.8397 19.8704 10.6791C19.9844 10.5703 19.9999 10.5081 19.9999 10.2024C19.9999 9.48735 19.746 8.363 19.4248 7.65833C18.6165 5.87077 17.1709 4.55989 15.3315 3.94849C14.3471 3.61688 13.2486 3.5288 12.202 3.68942Z"
                fill="#FAFAFA"
              />
              <path
                d="M12.7254 6.82405C11.9171 6.93286 11.2746 7.2541 10.6425 7.88623C10.2902 8.23338 10.1814 8.38364 9.98446 8.79296C9.51814 9.76187 9.47151 10.6634 9.83939 11.7101C10.114 12.4976 10.7254 13.1867 11.4871 13.5702C12.1451 13.8966 12.5959 13.9899 13.3886 13.9536C13.9067 13.9329 14.0881 13.9018 14.4404 13.7774C15.0415 13.5598 15.399 13.3266 15.8238 12.8759C17.0466 11.5805 17.1192 9.49763 15.9896 8.11939C15.2073 7.16602 13.943 6.66343 12.7254 6.82405ZM13.8808 7.7256C15.4249 8.09348 16.3368 9.74633 15.829 11.2593C15.2798 12.8914 13.5026 13.6323 11.9586 12.881C10.285 12.0676 9.90156 9.76706 11.2176 8.45099C11.8912 7.77224 12.9067 7.49763 13.8808 7.7256Z"
                fill="#FAFAFA"
              />
              <path
                d="M0.233161 10.0407C0.0362694 10.1443 0 10.2479 0 10.678C0 12.3567 0.518135 14.4914 1.32124 16.1339C2.02591 17.5743 2.75648 18.6003 3.88083 19.7194C6.25907 22.0873 9.27979 23.4293 12.601 23.5847C13.285 23.621 13.2953 23.621 13.4404 23.4914C13.6425 23.3153 13.6477 23.0666 13.4508 22.8956C13.3368 22.7971 13.2487 22.7764 12.9896 22.7764C10.4352 22.7764 7.50777 21.7039 5.41451 20.0044C2.67358 17.7764 1.00518 14.4863 0.84456 10.9889C0.813472 10.2894 0.80829 10.2583 0.668394 10.1236C0.518135 9.96813 0.398964 9.94741 0.233161 10.0407Z"
                fill="#FAFAFA"
              />
            </svg>

            <p className="company-name">Pandem</p>
          </div>

          <div className="navigation-text">Docs</div>

          <div className="navigation-text">Pricing</div>

          <div className="navigation-text">Status</div>

          <div className="navigation-text">FAQs</div>

          <div className="navigation-text">Contact Us</div>
        </div>

        <div className="nav-part-II">
          <button className="login navBtn">Login</button>
          <button className="signup navBtn">Sign Up</button>
        </div>
      </nav>

      <nav
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5 },
        }}
        className="forMobile"
      >
        <div className="logo-name">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
          >
            <path
              d="M12.1296 0.447618C8.04149 0.87767 4.55445 3.88285 3.52854 7.86731C2.25393 12.8103 4.87051 17.9036 9.63217 19.743C10.6166 20.1212 11.9793 20.3906 12.9327 20.3906C13.3006 20.3906 13.3835 20.3751 13.4715 20.287C13.627 20.1316 13.627 19.8569 13.4715 19.6963C13.3938 19.6186 13.2591 19.5875 12.8135 19.5512C10.969 19.4062 9.36792 18.888 8.05704 18.0176C7.44564 17.6134 7.26429 17.4683 6.72025 16.9295C5.00522 15.2455 4.08813 12.9658 4.08813 10.3854C4.08813 7.21446 5.51818 4.46316 8.03113 2.78441C9.32129 1.92948 11.0467 1.3699 12.8239 1.24555C13.2954 1.20928 13.3524 1.19373 13.4819 1.05902C13.6684 0.87767 13.6633 0.732594 13.4767 0.540882C13.3316 0.400986 13.3006 0.390623 12.943 0.395805C12.7358 0.400986 12.3679 0.426893 12.1296 0.447618Z"
              fill="#FAFAFA"
            />
            <path
              d="M12.202 3.68942C10.6787 3.92258 9.38334 4.56507 8.3678 5.59616C7.42479 6.54952 6.86521 7.58579 6.56987 8.95885C6.47661 9.3889 6.45588 9.65833 6.45588 10.3941C6.4507 11.363 6.50769 11.762 6.76676 12.5858C7.25899 14.1298 8.30044 15.4355 9.68904 16.249C10.6217 16.793 11.9533 17.1661 13.0466 17.1868C13.4507 17.1972 13.5958 17.0884 13.5958 16.7879C13.5958 16.5184 13.4507 16.42 13.0155 16.3837C11.9222 16.2905 11.1087 16.0625 10.3056 15.6272C8.27971 14.5133 7.02583 12.192 7.25381 9.9744C7.48697 7.68424 8.59578 6.01066 10.4922 5.07802C12.3782 4.15056 14.6683 4.26973 16.4662 5.37854C16.9844 5.69978 17.7512 6.43035 18.0776 6.9174C18.632 7.73605 19.0155 8.81377 19.1243 9.85004C19.1968 10.5392 19.2072 10.5858 19.3263 10.705C19.4714 10.85 19.7149 10.8397 19.8704 10.6791C19.9844 10.5703 19.9999 10.5081 19.9999 10.2024C19.9999 9.48735 19.746 8.363 19.4248 7.65833C18.6165 5.87077 17.1709 4.55989 15.3315 3.94849C14.3471 3.61688 13.2486 3.5288 12.202 3.68942Z"
              fill="#FAFAFA"
            />
            <path
              d="M12.7254 6.82405C11.9171 6.93286 11.2746 7.2541 10.6425 7.88623C10.2902 8.23338 10.1814 8.38364 9.98446 8.79296C9.51814 9.76187 9.47151 10.6634 9.83939 11.7101C10.114 12.4976 10.7254 13.1867 11.4871 13.5702C12.1451 13.8966 12.5959 13.9899 13.3886 13.9536C13.9067 13.9329 14.0881 13.9018 14.4404 13.7774C15.0415 13.5598 15.399 13.3266 15.8238 12.8759C17.0466 11.5805 17.1192 9.49763 15.9896 8.11939C15.2073 7.16602 13.943 6.66343 12.7254 6.82405ZM13.8808 7.7256C15.4249 8.09348 16.3368 9.74633 15.829 11.2593C15.2798 12.8914 13.5026 13.6323 11.9586 12.881C10.285 12.0676 9.90156 9.76706 11.2176 8.45099C11.8912 7.77224 12.9067 7.49763 13.8808 7.7256Z"
              fill="#FAFAFA"
            />
            <path
              d="M0.233161 10.0407C0.0362694 10.1443 0 10.2479 0 10.678C0 12.3567 0.518135 14.4914 1.32124 16.1339C2.02591 17.5743 2.75648 18.6003 3.88083 19.7194C6.25907 22.0873 9.27979 23.4293 12.601 23.5847C13.285 23.621 13.2953 23.621 13.4404 23.4914C13.6425 23.3153 13.6477 23.0666 13.4508 22.8956C13.3368 22.7971 13.2487 22.7764 12.9896 22.7764C10.4352 22.7764 7.50777 21.7039 5.41451 20.0044C2.67358 17.7764 1.00518 14.4863 0.84456 10.9889C0.813472 10.2894 0.80829 10.2583 0.668394 10.1236C0.518135 9.96813 0.398964 9.94741 0.233161 10.0407Z"
              fill="#FAFAFA"
            />
          </svg>

          <p className="company-name-for-mobile">Pandem</p>
        </div>

        <div className="signup-login-navigation">
          <button className="login navBtn loginMobile">Login</button>

          <button className="signup navBtn loginMobile">Sign Up</button>

          <button onClick={navHandler} className="mobileNavBtn">
            {mobileNav ? (
              <RxCross1 className="mobile-navigating-icon" />
            ) : (
              <FaBars className="mobile-navigating-icon" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`navigation-div-for-mobile ${
          mobileNav ? "visible" : "hidden"
        }`}

        initial={{opacity:0}}
        whileInView={{opacity:1}}
      >
        <ul>
          <button className="mobileNavBtn" onClick={navHandler}><RxCross1 className="cross-Icon"/></button>
          <li className="nav-txt">Docs</li>
          <li className="nav-txt">Pricing</li>
          <li className="nav-txt">Status</li>
          <li className="nav-txt">FAQs</li>
          <li className="nav-txt">Contact Us</li>
        </ul>
      </div>

      <section className="heroSection">
        <h1
          initial={{
            translateY: 50,
          }}
          whileInView={{
            translateY: 0,
            transition: { duration: 1.5 },
          }}
          className="title-heroSection"
        >
          Information you need during on-call emergencies
        </h1>

        <p
          initial={{
            translateY: 50,
          }}
          whileInView={{
            translateY: 0,
            transition: { duration: 1.5 },
          }}
          className="desc"
        >
          Quickly link new on-call tickets to similar past incidents and their
          solutions. All directly in Slack the moment an incident happens.
        </p>

        <button
          initial={{
            translateY: 50,
          }}
          whileInView={{
            translateY: 0,
            transition: { duration: 1.5 },
          }}
          className="getStrt"
        >
          Get Started <CgArrowRight />
        </button>

        <img
          initial={{
            translateY: 50,
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: { duration: 1.5 },
          }}
          src={heroImage}
          className="hero-image"
          alt="first screen shot"
        />
      </section>

      <section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5 },
        }}
        className="quick-features"
      >
        <h2
          initial={{
            translateY: 30,
          }}
          whileInView={{
            translateY: 0,
            transition: { duration: 1.5 },
          }}
          className="quick-features-title"
        >
          Quick solutions, less stress
        </h2>

        <div className="all-features">
          <div
            initial={{
              translateY: 40,
            }}
            whileInView={{
              translateY: 0,
              transition: { duration: 1.5 },
            }}
            className="features-I feature"
          >
            <div className="logos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M10 2.53516H14"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14.5352L15 11.5352"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22.5352C16.4183 22.5352 20 18.9534 20 14.5352C20 10.1169 16.4183 6.53516 12 6.53516C7.58172 6.53516 4 10.1169 4 14.5352C4 18.9534 7.58172 22.5352 12 22.5352Z"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3 className="title-of-features">Fix emergencies fast</h3>

            <p className="quick-features-desc">
              Save 20-30 minutes per on-call ticket - no more searching for
              relevant issues and runbooks.
            </p>
          </div>

          <div
            initial={{
              translateY: 40,
            }}
            whileInView={{
              translateY: 0,
              transition: { duration: 1.5 },
            }}
            className="features-II feature"
          >
            <div className="logos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21 16.5352L17 20.5352L13 16.5352"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 20.5352V4.53516"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 8.53516L7 4.53516L11 8.53516"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 4.53516V20.5352"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3 className="title-of-features">Universally compatible</h3>

            <p className="quick-features-desc quick-desc-II">
              Works with PagerDuty, Jira, or custom Slack alerts—Pandem
              integrates with any system.
            </p>
          </div>

          <div
            initial={{
              translateY: 40,
            }}
            whileInView={{
              translateY: 0,
              transition: { duration: 1.5 },
            }}
            className="features-III feature"
          >
            <div className="logos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M9 3.53516H5C3.89543 3.53516 3 4.43059 3 5.53516V9.53516C3 10.6397 3.89543 11.5352 5 11.5352H9C10.1046 11.5352 11 10.6397 11 9.53516V5.53516C11 4.43059 10.1046 3.53516 9 3.53516Z"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 11.5352V15.5352C7 16.0656 7.21071 16.5743 7.58579 16.9494C7.96086 17.3244 8.46957 17.5352 9 17.5352H13"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 13.5352H15C13.8954 13.5352 13 14.4306 13 15.5352V19.5352C13 20.6397 13.8954 21.5352 15 21.5352H19C20.1046 21.5352 21 20.6397 21 19.5352V15.5352C21 14.4306 20.1046 13.5352 19 13.5352Z"
                  stroke="#D9D9D9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3 className="title-of-features featureIIItitle">Secure for your org</h3>

            <p className="quick-features-desc featureIIIdesc">
              We keep your data safe by taking top security measures.
            </p>
          </div>
        </div>
      </section>

      <section className="mini-hero">
        <h2
          initial={{
            translateY: 30,
            opacity: 0,
          }}
          whileInView={{
            translateY: 0,
            transition: { duration: 1.5 },
          }}
          className="mini-hero-title"
        >
          Instant setup, no custom code
        </h2>

        <p
          initial={{
            translateY: 40,
            opacity: 1,
          }}
          whileInView={{
            translateY: 0,
            transition: { duration: 1.5 },
          }}
          className="mini-hero-desc"
        >
          Invite the bot, pick a channel, and you're set—no custom code needed,
          and no vendor lock-in.
        </p>

        <img
          initial={{
            translateY: 40,
            opacity: 1,
          }}
          whileInView={{
            translateY: 0,
            transition: { duration: 1.5 },
          }}
          src={heroImage}
          className="mini-hero-image"
          alt="second screen shot"
        />
      </section>

      <section className="get-in-touch">
        <h2
          initial={{
            translateY: 30,
            opacity: 0,
          }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: { duration: 1.5 },
          }}
          className="get-in-touch-heading"
        >
          Get in touch
        </h2>

        <p
          initial={{
            translateY: 30,
            opacity: 0,
          }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: { duration: 1.5 },
          }}
          className="get-in-touch-desc"
        >
          Request a demo, or hop on a call.
        </p>

        <button
          initial={{
            translateY: 30,
            opacity: 0,
          }}
          whileInView={{
            translateY: 0,
            opacity: 1,
            transition: { duration: 1.5 },
          }}
          className="getStrt"
        >
          Get Started <CgArrowRight />
        </button>
      </section>

      <footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
      >
        <div className="company-name-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
          >
            <path
              d="M12.1296 0.080431C8.04149 0.510483 4.55445 3.51567 3.52854 7.50012C2.25393 12.4431 4.87051 17.5364 9.63217 19.3758C10.6166 19.754 11.9793 20.0234 12.9327 20.0234C13.3006 20.0234 13.3835 20.0079 13.4715 19.9198C13.627 19.7644 13.627 19.4898 13.4715 19.3291C13.3938 19.2514 13.2591 19.2203 12.8135 19.1841C10.969 19.039 9.36792 18.5208 8.05704 17.6504C7.44564 17.2462 7.26429 17.1012 6.72025 16.5623C5.00522 14.8784 4.08813 12.5986 4.08813 10.0183C4.08813 6.84727 5.51818 4.09597 8.03113 2.41722C9.32129 1.5623 11.0467 1.00271 12.8239 0.878359C13.2954 0.842089 13.3524 0.826546 13.4819 0.69183C13.6684 0.510483 13.6633 0.365406 13.4767 0.173695C13.3316 0.0337982 13.3006 0.0234356 12.943 0.0286179C12.7358 0.0337982 12.3679 0.0597057 12.1296 0.080431Z"
              fill="#FAFAFA"
            />
            <path
              d="M12.202 3.32223C10.6787 3.55539 9.38334 4.19788 8.3678 5.22897C7.42479 6.18234 6.86521 7.21861 6.56987 8.59166C6.47661 9.02172 6.45588 9.29115 6.45588 10.0269C6.4507 10.9958 6.50769 11.3948 6.76676 12.2186C7.25899 13.7626 8.30044 15.0683 9.68904 15.8818C10.6217 16.4259 11.9533 16.7989 13.0466 16.8196C13.4507 16.83 13.5958 16.7212 13.5958 16.4207C13.5958 16.1512 13.4507 16.0528 13.0155 16.0165C11.9222 15.9233 11.1087 15.6953 10.3056 15.2601C8.27971 14.1461 7.02583 11.8248 7.25381 9.60721C7.48697 7.31705 8.59578 5.64348 10.4922 4.71083C12.3782 3.78337 14.6683 3.90254 16.4662 5.01135C16.9844 5.3326 17.7512 6.06317 18.0776 6.55021C18.632 7.36887 19.0155 8.44659 19.1243 9.48286C19.1968 10.172 19.2072 10.2186 19.3263 10.3378C19.4714 10.4829 19.7149 10.4725 19.8704 10.3119C19.9844 10.2031 19.9999 10.1409 19.9999 9.83519C19.9999 9.12016 19.746 7.99581 19.4248 7.29115C18.6165 5.50358 17.1709 4.1927 15.3315 3.5813C14.3471 3.24969 13.2486 3.16161 12.202 3.32223Z"
              fill="#FAFAFA"
            />
            <path
              d="M12.7254 6.45686C11.9171 6.56567 11.2746 6.88691 10.6425 7.51904C10.2902 7.86619 10.1814 8.01645 9.98446 8.42577C9.51814 9.39469 9.47151 10.2962 9.83939 11.3429C10.114 12.1304 10.7254 12.8196 11.4871 13.203C12.1451 13.5294 12.5959 13.6227 13.3886 13.5864C13.9067 13.5657 14.0881 13.5346 14.4404 13.4102C15.0415 13.1926 15.399 12.9595 15.8238 12.5087C17.0466 11.2133 17.1192 9.13044 15.9896 7.7522C15.2073 6.79883 13.943 6.29624 12.7254 6.45686ZM13.8808 7.35842C15.4249 7.72629 16.3368 9.37914 15.829 10.8921C15.2798 12.5242 13.5026 13.2652 11.9586 12.5139C10.285 11.7004 9.90156 9.39987 11.2176 8.08381C11.8912 7.40505 12.9067 7.13044 13.8808 7.35842Z"
              fill="#FAFAFA"
            />
            <path
              d="M0.233161 9.67348C0.0362694 9.77711 0 9.88074 0 10.3108C0 11.9895 0.518135 14.1243 1.32124 15.7667C2.02591 17.2072 2.75648 18.2331 3.88083 19.3522C6.25907 21.7201 9.27979 23.0621 12.601 23.2175C13.285 23.2538 13.2953 23.2538 13.4404 23.1243C13.6425 22.9481 13.6477 22.6994 13.4508 22.5284C13.3368 22.43 13.2487 22.4092 12.9896 22.4092C10.4352 22.4092 7.50777 21.3367 5.41451 19.6372C2.67358 17.4092 1.00518 14.1191 0.84456 10.6217C0.813472 9.92219 0.80829 9.8911 0.668394 9.75638C0.518135 9.60094 0.398964 9.58022 0.233161 9.67348Z"
              fill="#FAFAFA"
            />
          </svg>

          <p className="company-name">Pandem</p>
        </div>

        <div className="foot-text">
          <p className="txtV">Contact us</p>
          <p className="txtV">Terms of service</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
