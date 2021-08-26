const TopNavBar = () => {
    return (
        <>
      <header>
      <nav class="container mx-auto flex border-solid border-2 back h-20 sticky" >
        <div class="flex w-12 h-12 relative left-32 mt-4">
          <img src="images/Group.svg" alt="" class=""/>
       </div>
        <div class="container inline-flex flex-col font-moderat relative left-36 mt-4">
                <div class=" text-color text-xl inline-flex">
                    <p class="inline-flex font-semibold leading-7">
                        Journeys
                    </p>
                </div>
                <div class=" inline-flex">
                    <p  class="flex leading-3 font-normal text-color text-l ">
                        by SWC
                    </p>
                </div>
            </div>
            <div class="relative right-6 inline-flex flex-row ">
                <div class="hidden mt-4 md:flex justify-around ">
                    <i class="fas fa-search relative left-12 top-4"></i>
                    <input type="text" class="w-72 h-12 border-2 mx-4 px-10 rounded-md " placeholder="Search"/>
                </div>
                <div class="w-16 h-16 mt-6 hidden lg:flex">
                    <a href=""><img src="/images/Gift.png" alt="Gift"/></a>
                </div>
                <div class="w-16 h-16 mt-6 hidden lg:flex">
                    <a href=""><img src="/images/Bell.png" alt=""/></a>
                </div>
                <div class="w-16 h-16 mt-6 flex ">
                    <a href=""><img src="/images/Profile.png" alt=""/></a>
                </div>
            </div>
      </nav>

     </header>
     </>
    );
}

export default TopNavBar;