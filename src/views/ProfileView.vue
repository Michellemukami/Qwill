<template>
  <div>
  <navbar-component></navbar-component>
    <main class="profile-page bg-gray-300">
      <section class="relative block" style="height: 500px;">
        <div class="absolute top-0 w-full h-3/4 md:h-full bg-center bg-cover"
          style='background-image: url("https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");'>
          <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
      </section>
      <section class="relative py-0.5 md:py-16 bg-gray-300">
        <div class="container mx-auto px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div class="relative">
                    <img alt="..."
                      src="https://images.unsplash.com/photo-1563132337-f159f484226c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBsYWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      class="shadow-xl mx-auto rounded-full w-44 h-44 object-cover border-none absolute -m-16 -ml-20 lg:-ml-20"
                      style="max-width: 180px;" />
                  </div>
                </div>
                
               
              </div>
   
              <div class="text-center items-center mt-28">
                <h3 class="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Merchant Guild
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  
                  Official online store for Merchant Guild
                </div>
                  <div class="w-full mx-auto lg:w-4/12 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-3">
                    <div class="mr-1 p-1 text-center">
                      <button
                        class="bg-black group text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                        type="button">
                        <i class="flex group-hover:text-purple-500 text-white fa fa-twitter"></i></button>
                  </div>
                    <div class="mr-1 p-1 text-center">
                      <button
                        class="bg-black group shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                        type="button">
                        <i class="flex group-hover:text-purple-500 text-white fa fa-instagram" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div class="lg:mr-1 p-1 text-center">
                      <button
                        class="bg-black group text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                        type="button">
                        <i class="flex group-hover:text-purple-500 text-white fa fa-facebook" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-4 py-6 border-t border-gray-300">
                <div class="mx-auto px-6 py-3">

                  <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div class="w-full cursor-pointer max-w-sm mx-auto rounded-md shadow-xl bg-gray-50 overflow-hidden">
                    <router-link to="/product-details">
                      <div class="flex items-end justify-end h-56 w-full bg-cover relative"
                        style="background-image: url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')">
                        <span
                          class='left-9 top-0 w-12 h-12 bg-blue-dark flex items-center justify-center text-center no-underline rounded-full absolute pin-t pin-r'
                          href='#'>
                          <button class="relative h-8 w-14 rounded">
                            <span class="ribbon bg-purple-500 text-sm whitespace-no-wrap text-white text-sm">-50%</span>
                          </button>
                        </span>
                      </div>
                      <div class="px-5 text-center group py-3">
                        <div class="text-gray-800 group-hover:text-purple-800 font-semibold uppercase">Channel</div>
                        <h1 class="text-gray-500 group-hover:text-purple-600">Elegant wiff ...</h1>
                        <div class="flex pl-9 align-baseline ">
                          <span class="text-lg text-gray-900 pr-4 font-bold mt-2">ksh 3600</span>
                          <span class="text-gray-500 line-through text-md mt-2">ksh 5466</span>
                        </div>
                        <div class="flex mt-2 justify-between">
                          <button class="bg-gray-50 pl-4 pr-4 md:pl-4 md:pr-4 text-sm md:text-base border border-gray-800 rounded-md text-gray-900 p-1">Buy Now</button>
                          <button class="bg-purple-600 pl-4 pr-4 md:pl-4 md:pr-4 text-sm md:text-base text-white rounded-md p-1">Add to Bag</button>

                        </div>
                      </div>
                    </router-link>

                    </div>
                    <div class="cursor-pointer w-full max-w-sm mx-auto rounded-md bg-gray-50 shadow-xl overflow-hidden">
                      <div class="flex items-end justify-end h-56 w-full bg-cover"
                        style="background-image: url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')">

                      </div>
                         <div class="px-5 group text-center py-3">
                        <h3 class="text-gray-800 group-hover:text-purple-800 font-semibold uppercase">Streetwise clothes</h3>
                        <span class="text-gray-500 group-hover:text-purple-600 mt-2">Street grab ...</span>
                        <div class="flex pl-9 align-baseline ">
                          <span class="text-gray-900 text-lg pr-4 font-bold mt-2">ksh 3200</span>
                          <span class="text-gray-500 line-through text-md mt-2">ksh 4066</span>
                        </div>
                        <div class="flex mt-2 justify-between">
                          <button class="bg-gray-50 border pl-4 pr-4 md:pl-4 md:pr-4 text-sm md:text-base border-gray-900 rounded-md text-gray-900 p-1">Buy Now</button>
                          <button class="bg-purple-600 pl-4 pr-4 md:pl-4 md:pr-4 text-sm md:text-base text-white rounded-md p-1">Add to Bag</button>

                        </div>
                      </div>
                    </div>
                    <div class="cursor-pointer w-full max-w-sm mx-auto bg-gray-50 shadow-xl rounded-md overflow-hidden">
                      <div class="flex items-end justify-end h-56 w-full bg-cover relative"
                        style="background-image: url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')">
                        <span
                          class='left-9 top-0 w-12 h-12 bg-blue-dark flex items-center justify-center text-center no-underline rounded-full hover:bg-blue-darker absolute pin-t pin-r'
                          href='#'>
                          <button class="relative h-8 w-14 rounded">
                            <span class="ribbon bg-purple-500 text-sm whitespace-no-wrap text-white text-sm">-10%</span>
                          </button>
                        </span>
                        
                      </div>
                         <div class="px-5 group text-center py-3">
                        <h3 class="text-gray-800 group-hover:text-purple-800 font-semibold uppercase">Classic Watch</h3>
                        <span class="text-gray-500 group-hover:text-purple-600 mt-2">Classy watch ...</span>
                        <div class="flex pl-9 align-baseline ">
                          <span class="text-gray-900 text-lg pr-4 font-bold mt-2">ksh 3600</span>
                          <span class="text-gray-500 line-through text-md mt-2">ksh 4466</span>
                        </div>
                        <div class="flex mt-2 justify-between">
                          <button class="bg-gray-50 border text-sm md:text-base pl-4 pr-4 md:pl-4 md:pr-4 border-gray-900 rounded-md text-gray-900 p-1">Buy Now</button>
                          <button class="bg-purple-600 text-sm md:text-base pl-4 pr-4 md:pl-4 md:pr-4 text-white rounded-md p-1">Add to Bag</button>

                        </div>
                      </div>
                    </div>
                    <div class="w-full cursor-pointer max-w-sm mx-auto rounded-md bg-gray-50 shadow-xl overflow-hidden">
                      <div class="flex items-end justify-end h-56 w-full bg-cover"
                        style="background-image: url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')">
                        
                       
                      </div>
                         <div class="px-5 group text-center py-3">
                        <h3 class="text-gray-800 group-hover:text-purple-800 font-semibold uppercase">Official classy pancho</h3>
                        <span class="text-gray-500 group-hover:text-purple-600 mt-2">Classy pansho ...</span>
                        <div class="flex pl-9 align-baseline ">
                          <span class="text-gray-900 text-lg pr-4 font-bold mt-2">ksh 3600</span>
                          <span class="text-gray-500 line-through text-md mt-2">ksh 5466</span>
                        </div>
                        <div class="flex mt-2 justify-between">
                          <button class="bg-gray-50 text-sm md:text-base border pl-4 pr-4 md:pl-4 md:pr-4 border-black rounded-md text-gray-900 p-1">Buy Now</button>
                          <button class="bg-purple-600 text-sm md:text-base text-white pl-4 pr-4 md:pl-4 md:pr-4 rounded-md p-1">Add to Bag</button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import FooterComponent from "/src/components/HomeFooter.vue";
  import NavbarComponent from "/src/components/HomeNavbar.vue";
  export default {
    name: "ProfileView",
    data: function () {
      return {
        cartOpen: false,
      }
    },
    components: {
      NavbarComponent,
      FooterComponent
    },
    methods: {
      closeWhenClickedOutside(event) {
        if (!event.target.closest('#cart')) {
          this.cartOpen = false;
          document.removeEventListener('click', this.closeWhenClickedOutside);
        }
      }
    },
  }
</script>
<style>
  .ribbon {
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 25px;
    margin-right: -27px;
    margin-top: 5px;
    -ms-transform: rotate(-45deg);
    /* IE 9 */
    -webkit-transform: rotate(-45deg);
    /* Safari prior 9.0 */
    transform: rotate(-45deg);
    /* Standard syntax */
  }

  .notSHown {
    visibility: hidden !important;
  }
</style>