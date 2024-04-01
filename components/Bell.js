const Bell = () => {
  return (
    <>
      <div class="relative">
        <div class="relative top-0 left-0 w-[344px] h-[344px] border-2 border-orange-500 rounded-full flex justify-center items-center">
          <div class="relative top-0 right-0 w-[278px] h-[278px] border-2 border-orange-500 rounded-full flex justify-center items-center">
            <div class="relative bottom-0 left-0 w-[222px] h-[222px] border-2 border-orange-500 rounded-full flex justify-center items-center">
              <div class="relative bottom-0 right-0 w-[160px] h-[160px] border-2 border-orange-500 rounded-full flex justify-center items-center">
                <div className="w-[100px] h-[100px] rounded-full bg-orange-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-16 h-16 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bell;
