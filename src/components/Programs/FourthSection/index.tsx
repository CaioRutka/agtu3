'use client';
import Player from 'next-video/player';

export default function FourthSection() {
  return (
    <div className="w-full justify-center items-center flex flex-col bg-white">
      <div
        className={
          'w-10/12 md:w-11/12 sm:w-full rounded-2xl max-w-screen-2xl flex flex-col my-10 bg-[#042c84] rounded-xl p-4'
        }
      >
        <div className='w-full rounded-2xl max-w-screen-2xl flex flex-col my-10 rounded-xl px-8'>
          <div className="w-full max-w-screen-2xl h-full text-4xl md:text-5xl sm:text-8xl text-white font-euclid font-bold tracking-tight py-0 sm:py-10">
            Video Lessons
          </div>
          <div className="w-full max-w-screen-2xl text-xl sm:text-2xl text-white font-montserrat font-regular tracking-tight py-6">
            AGTU uses the most advanced educational system to teach the Affordable MBA with Specialization in Digital Business Online. You will enjoy your classes by watching videos recorded by the best professors with perfect image and sound. Additionally, all the assignments are automatically organized for you.
          </div>
        </div>

        <div
          className={
            'w-full rounded-2xl max-w-screen-2xl grid grid-cols-1 sm:grid-cols-3 gap-4'
          }
        >
          <div
            className={
              'h-[280px] sm:h-full rounded-2xl p-10 justify-between items-start flex flex-col overflow-hidden'
            }
          >
            <div className='flex flex-row w-full justify-start items-center gap-4 my-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="m11.05 14.5l4.15-2.65q.45-.3.45-.85t-.45-.85L11.05 7.5q-.5-.325-1.025-.05t-.525.875v5.35q0 .6.525.875t1.025-.05M4 19q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v1q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20v-1zm0-2h16V5H4zm0 0V5z" /></svg>
              <div
                className={
                  'text-xl text-start text-white font-euclid font-bold mt-4 h-full'
                }
              >
                Live Classes
              </div>
            </div>
            <div
              className={
                'text-sm text-start text-white font-montserrat font-regular'
              }
            >
              Engage in weekly live classes for interactive discussions and networking opportunities with peers and professionals.
            </div>
          </div>

          <div
            className={
              'h-[280px] sm:h-full rounded-2xl p-10 justify-between items-start flex flex-col overflow-hidden'
            }
          >
            <div className='flex flex-row w-full justify-start items-center gap-4 my-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="M5.5 2A2.5 2.5 0 0 0 3 4.5v15A2.5 2.5 0 0 0 5.5 22h7.31a6.5 6.5 0 0 1-1.078-1.5H5.5a1 1 0 0 1-1-1h6.813a6.5 6.5 0 0 1-.294-1.5H4.5V4.5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v6.519q.782.061 1.5.294V4.5A2.5 2.5 0 0 0 17 2zM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-6.086-2.403l2.806 1.84q.131.084.205.223q.075.136.075.298a.65.65 0 0 1-.072.298a.6.6 0 0 1-.198.226l-2.807 1.915a.6.6 0 0 1-.158.077a.55.55 0 0 1-.395-.023a.7.7 0 0 1-.193-.135a.7.7 0 0 1-.13-.2a.6.6 0 0 1-.047-.237v-3.758a.62.62 0 0 1 .367-.57a.55.55 0 0 1 .547.045M6 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm1.5 1.5h7v-1h-7z" /></svg>
              <div
                className={
                  'text-xl text-start text-white font-euclid font-bold mt-4 h-full'
                }
              >
                Learning Materials
              </div>
            </div>
            <div
              className={
                'text-sm text-start text-white font-montserrat font-regular'
              }
            >
              Access a vast array of learning materials, including detailed PDFs, to support your studies and expand your knowledge base.
            </div>
          </div>

          <div
            className={
              'h-[280px] sm:h-full rounded-2xl p-10 justify-between items-start flex flex-col overflow-hidden'
            }
          >
            <div className='flex flex-row w-full justify-start items-center gap-4 my-6'>
              <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><path fill="white" d="M10 14h4v-2h-4zm0-3h8V9h-8zm0-3h8V6h-8zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V6h2v14h14v2zM8 4v12z" /></svg> <div
                className={
                  'text-xl text-start text-white font-euclid font-bold mt-4 h-full'
                }
              >
                Virtual Library
              </div>
            </div>
            <div
              className={
                'text-sm text-start text-white font-montserrat font-regular'
              }
            >
              Explore our virtual library, featuring a wealth of publications, research, podcasts, and essential learning tools at your fingertips.

            </div>
          </div>
        </div>

        <div className='w-full rounded-2xl max-w-screen-2xl flex flex-col my-10 rounded-xl px-8'>
          <div className="w-full max-w-screen-2xl text-xl sm:text-2xl text-white font-montserrat font-regular tracking-tight py-6">
            Check out the clarity, quality of the content, and outstanding teaching abilities of our professors. Click on the videos below to watch the sample classes of the Affordable MBA with Specialization in Digital Business Online program.
          </div>
        </div>

        <div className='w-full rounded-2xl max-w-screen-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-xl p-4'>
          <div
            className={
              'bg-black rounded-2xl shadow-2xl justify-center items-center flex flex-col overflow-hidden'
            }
          >
            <Player
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            />
          </div>

          <div
            className={
              'bg-black rounded-2xl shadow-2xl justify-center items-center flex flex-col overflow-hidden'
            }
          >
            <Player
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            />
          </div>

          <div
            className={
              'bg-black rounded-2xl shadow-2xl justify-center items-center flex flex-col overflow-hidden'
            }
          >
            <Player
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
