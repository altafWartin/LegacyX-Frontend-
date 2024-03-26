import React from 'react'
import vector12 from "../../assets/vector-12.svg";
import group51 from "../../assets/group-5-1.svg";
const Security = () => {
  return (
    <section class="flex-1 ml-[19rem] mt-[8rem] rounded-xl bg-gray-200 flex flex-row items-start justify-start py-[2.375rem] px-[2.125rem] box-border gap-[0rem_1.375rem] min-h-[55.188rem] max-w-[calc(100%_-_300px)] text-left text-[2.375rem] text-white font-gilroy mq925:flex-wrap mq925:pt-[1.563rem] mq925:pb-[1.563rem] mq925:box-border mq925:max-w-full mq450:pt-[1.25rem] mq450:pb-[1.25rem] mq450:box-border">

    <div class="w-full flex flex-col items-start justify-start pt-[0.438rem] px-[0rem] pb-[0rem] box-border min-w-[20.188rem] max-w-full mq925:flex-1">
      <div class="self-stretch flex flex-col items-start justify-start gap-[1.375rem_0rem] max-w-full">
        <div class="self-stretch flex flex-col items-start justify-start gap-[1.938rem_0rem] max-w-full mq450:gap-[1.938rem_0rem]">
          <div className="w-full d-flex">
            <h1 class="m-0 h-[2rem] relative text-inherit leading-[2.375rem] capitalize font-semibold font-inherit inline-block shrink-0 z-[1] mq925:text-[1.875rem] mq925:leading-[1.875rem] mq450:text-[1.438rem] mq450:leading-[1.438rem]">
              Security
            </h1>{" "}
            <div class="flex-1 flex flex-col items-end justify-start gap-[1.438rem_0rem] min-w-[27.125rem] max-w-full text-[1.375rem] mq700:min-w-full">
              <div class="flex flex-row items-start justify-start gap-[0rem_1.125rem] max-w-full text-[1.125rem] mq700:flex-wrap">
                <div class="rounded-3xs flex flex-row items-center justify-start py-[1.063rem] pr-[1.188rem] pl-[1.063rem] gap-[1.125rem] z-[1] border-[0.6px] border-solid border-white">
                  <div class="h-[2.875rem] w-[12.438rem] relative rounded-3xs box-border hidden border-[0.6px] border-solid border-white"></div>
                  <div class="flex flex-row items-start justify-start gap-[0rem_0.813rem]">
                    <div class="relative leading-[0.75rem] capitalize z-[1]">
                      sort by :
                    </div>
                    <div class="relative leading-[0.75rem] capitalize z-[1]">
                      recent
                    </div>
                  </div>
                  <img
                    class="h-[0.25rem] w-[0.5rem] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src={vector12}
                  />
                </div>
                <button class="cursor-pointer [border:none] pt-[1rem] px-[2rem] pb-[0.938rem] bg-white rounded-3xs flex flex-row items-end justify-start gap-[0rem_0.5rem] z-[1] hover:bg-gainsboro-100">
                  <div class="h-[2.875rem] w-[8.813rem] relative rounded-3xs bg-white hidden"></div>
                  <img
                    class="h-[0.938rem] w-[0.813rem] relative min-h-[0.938rem] z-[2]"
                    alt=""
                    src={group51}
                  />

                  <div class="relative text-[1.125rem] leading-[0.75rem] capitalize font-gilroy text-gray-200 text-center z-[2]">
                    delete
                  </div>
                </button>
              </div>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  </section>
  )
}

export default Security
