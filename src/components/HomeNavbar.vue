<template>
 <!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-black sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-1 md:px-7">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <input class="menu-btn hidden" type="checkbox" id="menu-btn">
  <label v-on:click="toggleNavbar()" class="menu-icon z-50 block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
    <span class="navicon bg-grey-darkest flex items-center relative"></span>
  </label>

      </div>
  <div>
   
  </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        
        <div class="hidden sm:block">
          <div class="flex md:pl-0 pl-8 space-x-4">
           <a
          class="text-sm font-bold leading-relaxed inline-block whitespace-nowrap uppercase text-white"
          href=""
          >Qwill</a
        >
          </div>
        </div>
      </div>

       <a
          class="text-sm font-semibold leading-relaxed inline-block mr-4 md:mr-4 py-2 whitespace-nowrap hover:text-purple-600 text-white"
          href=""
          >Home</a>
      
          <div>
          
             <button @click="cartOpen = !cartOpen" class="text-white mt-3 focus:outline-none mx-4 sm:mx-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      <span class="flex absolute -mt-8 ml-6">
                        <span
                          class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-purple-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500">
                        </span>
                      </span>
              
            </button>
          </div>

       

      <div class="absolute mr-10 md:mr-0 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="bg-gradient-to-r from-pink-600 to-purple-600 p-0.5 rounded-md">
            <select class="text-white rounded-md h-9 pl-6 pr-6 md:h-10 md:pl-5 md:pr-10 bg-black focus:outline-none appearance-none">
              <option class="bg-white">🇰🇪 (KSH) - Kenya</option>    
                </select>
            </div>
        
      </div>
    </div>
  </div>

    <div class="px-2 pt-2 pb-3 space-y-1" v-bind:class="{'hidden': !showMenu, 'block': showMenu}">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
    </div>
         
              <div :class="cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'" id="cart"
                class="fixed z-50 right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-bold text-gray-700">Your shopping cart</h3>
                  <button @click="cartOpen = !cartOpen" class="text-gray-600 focus:outline-none">
                    <svg class="h-5 w-5 hover:text-purple-600" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                <hr class="my-3">
                <div class="flex p-2 justify-between mt-6">
                  <div class="flex">
                  
                    <img class="h-20 w-20 object-cover rounded"
                      src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80"
                      alt="">
                   
                    <div class="mx-3">
                      <h3 class="text-md font-semibold text-gray-700">Channel</h3>
                      <div class="flex items-center mt-2">
                        <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                          <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </button>
                        
                        <span class="text-gray-700 mx-2">2</span>
                        <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                          <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </button>
                      </div>
                      <span class="text-sm cursor-pointer text-red-600">Remove</span>
                    </div>
                  </div>
                  <span class="text-gray-700 font-semibold">ksh 3600</span>
                
                </div>

                <div class="border-t mt-6 border-gray-200">
                  <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>ksh 3600</p>
                  </div>
                  <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div class="mt-6">

                    <router-link to="/checkout" href="#" class="relative group overflow-hidden flex w-full items-center justify-center rounded-md border border-transparent bg-purple-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-800">Checkout 
                        <div class="flex items-center -space-x-3 translate-x-3">
                          <div class="w-2.5 h-[1.6px] rounded-md bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                    </router-link>
                  </div>
                </div>
              </div>
              <transition name="custom" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
            <!-- Overlay -->
            <div v-if="cartOpen" class="bg-gray-700 bg-opacity-50 fixed bottom-0 left-0 w-full h-full transition duration-100 ease-in-out transfom z-10"></div>
            <!-- ./Overlay -->
          </transition>
</nav>

</template>
<script>
export default {
  name: "home-navbar",
  data() {
    return {
      showMenu: false,
      cartOpen: false,
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
<style>
@media (max-width: 767px) {
  .navicon {
    width: 1.125em;
    height: .125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all .2s ease-out;
    content: '';
    background: #585e64;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: block;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}
</style>