'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Button, Chip, Tab, Tabs } from '@nextui-org/react';

import adm1 from '../../../assets/images/Administration-with-specialization-in-Digital-Business.jpg';

export default function ProgramSection() {
  const [selected, setSelected] = useState('login');
  return (
    <div className="w-full h-full justify-center items-center flex flex-col bg-white">
      <div className="w-10/12 sm:w-full max-w-screen-2xl bg-white h-full text-4xl sm:text-6xl text-[#192335] font-euclid font-bold tracking-tight py-4">
        Our Affordable Global Degree Online Programs
      </div>
      <div className="w-10/12 sm:w-full max-w-screen-2xl bg-white h-full text-xl text-[#192335] font-montserrat font-regular tracking-tight">
        Boost your career prospects
      </div>

      <div className="flex w-10/12 sm:w-full flex-col max-w-screen-2xl pt-10">
        <Tabs
          fullWidth
          size="lg"
          aria-label="Tabs form"
          color="primary"
          variant="solid"
          classNames={{
            tabList:
              'gap-6 w-full relative rounded-none p-0 border-b border-divider hide-scrollbar',
            cursor: 'w-full bg-[#192335] p-4 rounded-2xl',
            tab: 'max-w-fit px-4 h-12',
            tabContent: 'group-data-[selected=true]:text-white',
          }}
        >
          <Tab
            key="all"
            title={
              <div className="flex items-center space-x-2">
                <div className="text-lg font-montserrat font-medium tracking-tight">
                  All Courses
                </div>
              </div>
            }
          >
            <div
              className={
                'rounded-2xl max-w-screen-2xl grid grid-cols-1 sm:grid-cols-4 gap-8 mt-6'
              }
            >
              <div
                className={
                  'bg-gray-200 h-full rounded-2xl p-4 shadow-2xl justify-between items-start flex flex-col'
                }
              >
                <div>
                  <Image
                    className="rounded-2xl"
                    placeholder="blur"
                    src={adm1}
                    alt="Logo"
                  />
                  <div
                    className={
                      'text-lg text-start text-[#192335] font-euclid font-bold mt-4 tracking-tight mb-3'
                    }
                  >
                    Master's Degree in Business Administration with a
                    specialization in Digital Business
                  </div>
                  <Chip
                    variant="shadow"
                    classNames={{
                      base: 'bg-gradient-to-br from-violet-500 to-blue-500 border-small border-white/50 shadow-pink-500/30',
                      content:
                        'drop-shadow shadow-black text-white text-lg p-4',
                    }}
                  >
                    Content Providers
                  </Chip>

                  <div className={'grid grid-cols-2 gap-4 mb-6 mt-4'}>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>
                  <div className={'grid grid-cols-2 gap-4 mb-6'}>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>

                  <Button
                    radius="full"
                    className="bg-gradient-to-tr text-lg bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-6"
                  >
                    Know More
                  </Button>
                </div>
              </div>

              <div
                className={
                  'bg-gray-200 h-full rounded-2xl p-4 shadow-2xl justify-between items-start flex flex-col'
                }
              >
                <div>
                  <Image
                    className="rounded-2xl"
                    placeholder="blur"
                    src={adm1}
                    alt="Logo"
                  />
                  <div
                    className={
                      'text-lg text-start text-[#192335] font-euclid font-bold mt-4 tracking-tight mb-3'
                    }
                  >
                    Master's Degree in Business Administration with a
                    specialization in Digital Business
                  </div>
                  <Chip
                    variant="shadow"
                    classNames={{
                      base: 'bg-gradient-to-br from-violet-500 to-blue-500 border-small border-white/50 shadow-pink-500/30',
                      content:
                        'drop-shadow shadow-black text-white text-lg p-4',
                    }}
                  >
                    Content Providers
                  </Chip>

                  <div className={'grid grid-cols-2 gap-4 mb-6 mt-4'}>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>
                  <div className={'grid grid-cols-2 gap-4 mb-6'}>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>

                  <Button
                    radius="full"
                    className="bg-gradient-to-tr text-lg bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-6"
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            key="technology"
            title={
              <div className="flex items-center space-x-2">
                <div className="text-lg font-montserrat font-medium">
                  Technology
                </div>
              </div>
            }
          >
            <div
              className={
                'rounded-2xl max-w-screen-2xl grid grid-cols-1 sm:grid-cols-4 gap-8 mt-6'
              }
            >
              <div
                className={
                  'bg-gray-200 h-full rounded-2xl p-4 shadow-2xl justify-between items-start flex flex-col'
                }
              >
                <div>
                  <Image
                    className="rounded-2xl"
                    placeholder="blur"
                    src={adm1}
                    alt="Logo"
                  />
                  <div
                    className={
                      'text-lg text-start text-[#192335] font-euclid font-bold mt-4 tracking-tight mb-3'
                    }
                  >
                    Master's Degree in Business Administration with a
                    specialization in Digital Business
                  </div>
                  <Chip
                    variant="shadow"
                    classNames={{
                      base: 'bg-gradient-to-br from-violet-500 to-blue-500 border-small border-white/50 shadow-pink-500/30',
                      content:
                        'drop-shadow shadow-black text-white text-lg p-4',
                    }}
                  >
                    Content Providers
                  </Chip>

                  <div className={'grid grid-cols-2 gap-4 mb-6 mt-4'}>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>
                  <div className={'grid grid-cols-2 gap-4 mb-6'}>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>

                  <Button
                    radius="full"
                    className="bg-gradient-to-tr text-lg bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-6"
                  >
                    Know More
                  </Button>
                </div>
              </div>

              <div
                className={
                  'bg-gray-200 h-full rounded-2xl p-4 shadow-2xl justify-between items-start flex flex-col'
                }
              >
                <div>
                  <Image
                    className="rounded-2xl"
                    placeholder="blur"
                    src={adm1}
                    alt="Logo"
                  />
                  <div
                    className={
                      'text-lg text-start text-[#192335] font-euclid font-bold mt-4 tracking-tight mb-3'
                    }
                  >
                    Master's Degree in Business Administration with a
                    specialization in Digital Business
                  </div>
                  <Chip
                    variant="shadow"
                    classNames={{
                      base: 'bg-gradient-to-br from-violet-500 to-blue-500 border-small border-white/50 shadow-pink-500/30',
                      content:
                        'drop-shadow shadow-black text-white text-lg p-4',
                    }}
                  >
                    Content Providers
                  </Chip>

                  <div className={'grid grid-cols-2 gap-4 mb-6 mt-4'}>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>
                  <div className={'grid grid-cols-2 gap-4 mb-6'}>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>

                  <Button
                    radius="full"
                    className="bg-gradient-to-tr text-lg bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-6"
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            key="education"
            title={
              <div className="flex items-center space-x-2">
                <div className="text-lg font-montserrat font-medium">
                  Education
                </div>
              </div>
            }
          >
            <div
              className={
                'rounded-2xl max-w-screen-2xl grid grid-cols-1 sm:grid-cols-4 gap-8 mt-6'
              }
            >
              <div
                className={
                  'bg-gray-200 h-full rounded-2xl p-4 shadow-2xl justify-between items-start flex flex-col'
                }
              >
                <div>
                  <Image
                    className="rounded-2xl"
                    placeholder="blur"
                    src={adm1}
                    alt="Logo"
                  />
                  <div
                    className={
                      'text-lg text-start text-[#192335] font-euclid font-bold mt-4 tracking-tight mb-3'
                    }
                  >
                    Master's Degree in Business Administration with a
                    specialization in Digital Business
                  </div>
                  <Chip
                    variant="shadow"
                    classNames={{
                      base: 'bg-gradient-to-br from-violet-500 to-blue-500 border-small border-white/50 shadow-pink-500/30',
                      content:
                        'drop-shadow shadow-black text-white text-lg p-4',
                    }}
                  >
                    Content Providers
                  </Chip>

                  <div className={'grid grid-cols-2 gap-4 mb-6 mt-4'}>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>
                  <div className={'grid grid-cols-2 gap-4 mb-6'}>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>

                  <Button
                    radius="full"
                    className="bg-gradient-to-tr text-lg bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-6"
                  >
                    Know More
                  </Button>
                </div>
              </div>

              <div
                className={
                  'bg-gray-200 h-full rounded-2xl p-4 shadow-2xl justify-between items-start flex flex-col'
                }
              >
                <div>
                  <Image
                    className="rounded-2xl"
                    placeholder="blur"
                    src={adm1}
                    alt="Logo"
                  />
                  <div
                    className={
                      'text-lg text-start text-[#192335] font-euclid font-bold mt-4 tracking-tight mb-3'
                    }
                  >
                    Master's Degree in Business Administration with a
                    specialization in Digital Business
                  </div>
                  <Chip
                    variant="shadow"
                    classNames={{
                      base: 'bg-gradient-to-br from-violet-500 to-blue-500 border-small border-white/50 shadow-pink-500/30',
                      content:
                        'drop-shadow shadow-black text-white text-lg p-4',
                    }}
                  >
                    Content Providers
                  </Chip>

                  <div className={'grid grid-cols-2 gap-4 mb-6 mt-4'}>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>
                  <div className={'grid grid-cols-2 gap-4 mb-6'}>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>

                  <Button
                    radius="full"
                    className="bg-gradient-to-tr text-lg bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-6"
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          </Tab>
          <Tab
            key="business"
            title={
              <div className="flex items-center space-x-2">
                <div className="text-lg font-montserrat font-medium">
                  Business
                </div>
              </div>
            }
          >
            <div
              className={
                'rounded-2xl max-w-screen-2xl grid grid-cols-1 sm:grid-cols-4 gap-8 mt-6'
              }
            >
              <div
                className={
                  'bg-gray-200 h-full rounded-2xl p-4 shadow-2xl justify-between items-start flex flex-col'
                }
              >
                <div>
                  <Image
                    className="rounded-2xl"
                    placeholder="blur"
                    src={adm1}
                    alt="Logo"
                  />
                  <div
                    className={
                      'text-lg text-start text-[#192335] font-euclid font-bold mt-4 tracking-tight mb-3'
                    }
                  >
                    Master's Degree in Business Administration with a
                    specialization in Digital Business
                  </div>
                  <Chip
                    variant="shadow"
                    classNames={{
                      base: 'bg-gradient-to-br from-violet-500 to-blue-500 border-small border-white/50 shadow-pink-500/30',
                      content:
                        'drop-shadow shadow-black text-white text-lg p-4',
                    }}
                  >
                    Content Providers
                  </Chip>

                  <div className={'grid grid-cols-2 gap-4 mb-6 mt-4'}>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>
                  <div className={'grid grid-cols-2 gap-4 mb-6'}>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>

                  <Button
                    radius="full"
                    className="bg-gradient-to-tr text-lg bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-6"
                  >
                    Know More
                  </Button>
                </div>
              </div>

              <div
                className={
                  'bg-gray-200 h-full rounded-2xl p-4 shadow-2xl justify-between items-start flex flex-col'
                }
              >
                <div>
                  <Image
                    className="rounded-2xl"
                    placeholder="blur"
                    src={adm1}
                    alt="Logo"
                  />
                  <div
                    className={
                      'text-lg text-start text-[#192335] font-euclid font-bold mt-4 tracking-tight mb-3'
                    }
                  >
                    Master's Degree in Business Administration with a
                    specialization in Digital Business
                  </div>
                  <Chip
                    variant="shadow"
                    classNames={{
                      base: 'bg-gradient-to-br from-violet-500 to-blue-500 border-small border-white/50 shadow-pink-500/30',
                      content:
                        'drop-shadow shadow-black text-white text-lg p-4',
                    }}
                  >
                    Content Providers
                  </Chip>

                  <div className={'grid grid-cols-2 gap-4 mb-6 mt-4'}>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-violet-500 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>
                  <div className={'grid grid-cols-2 gap-4 mb-6'}>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      edX
                    </div>
                    <div
                      className={
                        'text-lg text-start text-gray-200 font-montserrat font-medium mt-4 tracking-tight flex justify-start items-center'
                      }
                    >
                      AGTU
                    </div>
                  </div>

                  <Button
                    radius="full"
                    className="bg-gradient-to-tr text-lg bg-transparent font-montserrat font-medium border-[#192335] border-2 text-[#192335] p-6"
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
