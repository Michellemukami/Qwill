<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <section>
        <!-- component -->

<div class="min-w-screen min-h-screen bg-gray-300 py-5">
  <div class="container mt-16 mb-20 mx-auto px-7">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
    <div class="px-10 mt-11">
        <router-link to="/" class="mb-2 cursor-pointer group flex">
            <a href="#" class="focus:outline-none mr-1 mt-0.5 text-sm"><i class="fa fa-arrow-left text-sm group-hover:text-purple-500 text-purple-400"></i></a>
            <p class="ml-1 mb-1 group-hover:text-purple-700 text-purple-500">Back</p> 
        </router-link>
        <div class="mb-2">
            <h1 class="text-md md:text-xl font-semibold text-gray-600">Checkout.</h1>
        </div>
        <div class="mb-5 text-gray-500">
            <a href="#" class="focus:outline-none hover:underline text-gray-500">Home</a> / <a href="#" class="focus:outline-none hover:underline text-gray-500">Cart</a> / <span class="text-gray-600">Checkout</span>
        </div>
    </div>
    <div class="w-full bg-white border-t border-b border-gray-200 p-9 text-gray-800">
        <div class="w-full">
            <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-7/12 lg:pr-10">
                    <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                        <div class="w-full flex items-center">
                            <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                <img src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80" alt="">
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-semibold uppercase text-md text-gray-600">Chanel.</h6>
                                <p class="text-gray-500">x 1</p>
                            </div>
                            <div>
                                <span class="font-semibold text-gray-600 text-md">ksh 3600</span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6 pb-6 border-b border-gray-200">
                        <div class="-mx-2 flex items-end justify-end">
                            <div class="flex-grow px-2 lg:max-w-xs">
                                <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                                <div>
                                    <input class="w-full px-3 text-purple-400 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-purple-600 transition-colors" placeholder="XXXXXX" type="text"/>
                                </div>
                            </div>
                            <div class="px-2">
                                <button class="block w-full max-w-xs mx-auto border border-transparent bg-purple-600 hover:bg-purple-500 focus:bg-purple-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-400">Subtotal</span>
                            </div>
                            <div class="pl-3">
                                <span class="text-sm text-gray-400 font-semibold">ksh 3600.00</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-400">Taxes (ksh)</span>
                            </div>
                            <div class="pl-3">
                                <span class="text-sm text-gray-400 font-semibold">ksh 0.00</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-400">Discount</span>
                            </div>
                            <div class="pl-3">
                                <span class="text-sm text-gray-400 font-semibold">ksh 0.00</span>
                            </div>
                        </div>
                        <div class="w-full flex mb-3 items-center">
                            <div class="flex-grow">
                                <span class="text-gray-400">Delivery</span>
                            </div>
                            <div class="pl-3">
                                <span class="text-sm text-gray-400 font-semibold">ksh 0.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-ld font-semibold text-gray-700">Total</span>
                            </div>
                            <div class="pl-3">
                                <span class="text-base font-bold">ksh 3600.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-7/12">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-3 items-center">
                            <div class="w-32">
                                <span class="text-gray-600 font-semibold">Contact</span>
                            </div>
                            <div class="flex-grow pl-1 md:pl-3">
                                <span>Ciel Ongwae</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center">
                            <div class="w-32">
                                <span class="text-gray-600 font-semibold">Billing Address</span>
                            </div>
                            <div class="flex-grow pl-3">
                                <span>Langata, Otiende, Moi Estate</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                        <div class="w-full p-3 border-b border-gray-200">
                            <div class="mb-5">
                                <label for="type1" class="flex items-center cursor-pointer">
                                    <input type="radio" @click="isHidden = !isHidden" class="form-radio h-5 w-5 text-purple-600" name="type" id="type1" checked>
                                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-6 ml-3">
                                </label>
                            </div>
                            <div  v-if="!isHidden" class="transition duration-500 ease-in-out transfom">
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                                    <div>
                                        <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                                    <div>
                                        <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
                                    </div>
                                </div>
                                <div class="mb-3 -mx-2 flex items-end">
                                    <div class="px-2 w-full md:w-1/4">
                                        <label class="text-gray-600 font-semibold text-sm mb-2 ml-0 md:ml-1">Expiration date</label>
                                        <div>
                                            <select class="form-select w-full md:w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                <option value="01">01 - January</option>
                                                <option value="02">02 - February</option>
                                                <option value="03">03 - March</option>
                                                <option value="04">04 - April</option>
                                                <option value="05">05 - May</option>
                                                <option value="06">06 - June</option>
                                                <option value="07">07 - July</option>
                                                <option value="08">08 - August</option>
                                                <option value="09">09 - September</option>
                                                <option value="10">10 - October</option>
                                                <option value="11">11 - November</option>
                                                <option value="12">12 - December</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="px-2 w-2/3 lg:w-1/4">
                                        <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                        </select>
                                    </div>
                                    <div class="px-2 w-full lg:w-1/4">
                                        <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                                        <div>
                                            <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full p-3">
                            <label for="type2" class="flex items-center cursor-pointer">
                                <input type="radio" class="form-radio text-purple-600 h-5 w-5" name="type" id="type2">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" class="ml-3"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button class="block w-full max-w-xs mx-auto bg-purple-800 hover:bg-purple-800 focus:bg-purple-800 text-white rounded-lg px-3 py-2 font-semibold"><i class="fa fa-lock-outline mr-1"></i> PAY NOW</button>
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

<style>

.form-radio {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  -webkit-print-color-adjust: exact;
          color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  flex-shrink: 0;
  border-radius: 100%;
  border-width: 2px;
}

.form-radio:checked {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}

@media not print {
  .form-radio::-ms-check {
    border-width: 1px;
    color: transparent;
    background: inherit;
    border-color: inherit;
    border-radius: inherit;
  }
}

.form-radio:focus {
  outline: none;
}

.form-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  -webkit-print-color-adjust: exact;
          color-adjust: exact;
  background-repeat: no-repeat;
  padding-top: 0.5rem;
  padding-right: 2.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
}

.form-select::-ms-expand {
  color: #a0aec0;
  border: none;
}

@media not print {
  .form-select::-ms-expand {
    display: none;
  }
}

@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none) {
  .form-select {
    padding-right: 0.75rem;
  }
}
</style>

<script>
  import FooterComponent from "/src/components/HomeFooter.vue";
  import NavbarComponent from "/src/components/HomeNavbar.vue";
  export default {
    name: "home-checkout",
    data: function () {
      return {
          isHidden: false,
      }
    },
    components: {
      NavbarComponent,
      FooterComponent
    },

  }
</script>
