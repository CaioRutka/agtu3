'use client';

export default function SecondSection() {
  return (
    <div className="w-full justify-center items-center flex flex-col bg-white">
      <div className="w-full sm:w-11/12 max-w-screen-2xl h-full justify-center items-center flex flex-col">
        <div className="w-full justify-center items-center flex flex-col pl-4">
          <div className="w-10/12 md:w-full sm:w-full max-w-screen-2xl h-full text-4xl md:text-5xl sm:text-8xl text-[#192335] font-euclid font-bold tracking-tight py-10">
            Program Overview
          </div>
          <div className="w-10/12 md:w-full max-w-screen-2xl text-2xl text-[#192335] font-montserrat font-regular tracking-tight py-6">
            Transform your career with AGTU's Affordable Online MBA with a
            Specialization in Digital Business, a dynamic and cutting-edge
            program designed to propel you to the forefront of the digital
            economy. This two-year graduate degree program equips you with
            essential skills and knowledge to excel in today’s fast-paced
            business landscape. Learn how to enhance productivity, elevate
            customer experiences, and drive profitable growth through advanced
            digital strategies. Dive into a comprehensive curriculum that covers
            the latest in digital transformation, artificial intelligence, and
            e-commerce, preparing you to lead and innovate in the digital age.
          </div>
        </div>
      </div>

      <div
        className={
          'w-10/12 md:w-11/12 sm:w-full rounded-2xl max-w-screen-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 my-10'
        }
      >
        <div
          className={
            'bg-white h-[280px] sm:h-full rounded-2xl p-10 shadow-2xl justify-between items-start flex flex-col overflow-hidden transition-all duration-300 hover:sm:-translate-y-4'
          }
        >
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm4 15h10m-8-4v4m6-4v4"/><path d="m8 12l3-3l2 2l3-3"/></g></svg>
            <div
              className={
                'text-xl text-start text-[#192335] font-euclid font-bold mt-4'
              }
            >
              Analyze Current Trends
            </div>
          </div>
          <div
            className={
              'text-sm text-start text-[#192335] font-montserrat font-regular'
            }
          >
            Understand and interpret the latest trends within the global digital
            market to stay ahead in the competitive landscape.
          </div>
        </div>

        <div
          className={
            'bg-white h-[280px] sm:h-full rounded-2xl p-10 shadow-2xl justify-between items-start flex flex-col overflow-hidden transition-all duration-300 hover:sm:-translate-y-4'
          }
        >
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 6a5 3 0 1 0 10 0a5 3 0 1 0-10 0"/><path d="M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6"/><path d="M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4"/><path d="M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3m2 0v1m0-8v1"/></g></svg>
            <div
              className={
                'text-xl text-start text-[#192335] font-euclid font-bold mt-4'
              }
            >
              Develop Business Plans
            </div>
          </div>
          <div
            className={
              'text-sm text-start text-[#192335] font-montserrat font-regular'
            }
          >
            Craft comprehensive business plans that meet industry standards and
            leverage digital tools for strategic advantage.
          </div>
        </div>

        <div
          className={
            'bg-white h-[280px] sm:h-full rounded-2xl p-10 shadow-2xl justify-between items-start flex flex-col overflow-hidden transition-all duration-300 hover:sm:-translate-y-4'
          }
        >
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M14.06 9.94L12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94zm4.5-5l1.09-2.41L12 5.5L9.59 4.41L8.5 2L7.41 4.41L5 5.5l2.41 1.09zm-4 11.5l6-6.01l4 4L23 8.93l-1.41-1.41l-7.09 7.97l-4-4L3 19z"/></svg>
            <div
              className={
                'text-xl text-start text-[#192335] font-euclid font-bold mt-4'
              }
            >
              Evaluate Productivity
            </div>
          </div>
          <div
            className={
              'text-sm text-start text-[#192335] font-montserrat font-regular'
            }
          >
            Assess productivity metrics and develop strategies to optimize
            business processes for maximum efficiency.
          </div>
        </div>

        <div
          className={
            'bg-white h-[280px] sm:h-full rounded-2xl p-10 shadow-2xl justify-between items-start flex flex-col overflow-hidden transition-all duration-300 hover:sm:-translate-y-4'
          }
        >
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.22c.36.32.97.32 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2M7.69 12.49C8.88 11.56 10.37 11 12 11s3.12.56 4.31 1.49C15.45 13.98 13.85 15 12 15s-3.45-1.02-4.31-2.51M12 6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"/></svg>
            <div
              className={
                'text-xl text-start text-[#192335] font-euclid font-bold mt-4'
              }
            >
              Leadership Theories
            </div>
          </div>
          <div
            className={
              'text-sm text-start text-[#192335] font-montserrat font-regular'
            }
          >
            Apply and summarize key leadership theories to inspire and manage
            teams effectively in a digital environment.
          </div>
        </div>

        <div
          className={
            'bg-white h-[280px] sm:h-full rounded-2xl p-10 shadow-2xl justify-between items-start flex flex-col overflow-hidden transition-all duration-300 hover:sm:-translate-y-4'
          }
        >
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 16 16"><path fill="currentColor" d="M14.25 2.1a1.25 1.25 0 0 0-1.17-.1L6.91 4.43a1.22 1.22 0 0 1-.46.09H2.5a1.25 1.25 0 0 0-1.25 1.25v.1H0v3h1.25V9a1.25 1.25 0 0 0 1.25 1.22L4 13.4a1.26 1.26 0 0 0 1.13.72h.63A1.25 1.25 0 0 0 7 12.87v-2.53l6.08 2.43a1.27 1.27 0 0 0 .47.09a1.29 1.29 0 0 0 .7-.22a1.25 1.25 0 0 0 .55-1V3.13a1.25 1.25 0 0 0-.55-1.03m-8.5 3.67V9H2.5V5.77zm0 7.1h-.63l-1.23-2.65h1.86zm1.62-3.72A2.29 2.29 0 0 0 7 9V5.7a2.26 2.26 0 0 0 .37-.11l6.18-2.46v8.48zm7.46-3.03v2.5a1.25 1.25 0 0 0 0-2.5"/></svg>
            <div
              className={
                'text-xl text-start text-[#192335] font-euclid font-bold mt-4'
              }
            >
              Create Marketing Plans
            </div>
          </div>
          <div
            className={
              'text-sm text-start text-[#192335] font-montserrat font-regular'
            }
          >
            Design innovative marketing strategies tailored for e-commerce and
            digital platforms, ensuring a strong online presence.
          </div>
        </div>

        <div
          className={
            'bg-white h-[280px] sm:h-full rounded-2xl p-10 shadow-2xl justify-between items-start flex flex-col overflow-hidden transition-all duration-300 hover:sm:-translate-y-4'
          }
        >
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 5H8l4-4l4 4h-3v4.43c-.75.46-1.42 1.03-2 1.69zm11 6l-4-4v3a6.747 6.747 0 0 0-7 6.17A3.006 3.006 0 0 0 9.17 20A3.006 3.006 0 0 0 13 21.83A3.01 3.01 0 0 0 14.83 18c-.3-.86-.98-1.53-1.83-1.83c.47-4 4.47-4.2 4.95-4.2v3zm-11.37.59A7.63 7.63 0 0 0 6 10V7l-4 4l4 4v-3c1.34.03 2.63.5 3.64 1.4c.25-.64.58-1.25.99-1.81"/></svg>
            <div
              className={
                'text-xl text-start text-[#192335] font-euclid font-bold mt-4'
              }
            >
              Demonstrate Decision-Making
            </div>
          </div>
          <div
            className={
              'text-sm text-start text-[#192335] font-montserrat font-regular'
            }
          >
            Enhance your decision-making skills with a focus on data-driven
            strategies and digital insights.
          </div>
        </div>
      </div>
    </div>
  );
}
