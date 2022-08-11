<template>
  <footer class="relative bg-black pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px;"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-400 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl text-white font-semibold">Let's keep in touch!</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-500">
            Follow Qwill.
          </h5>
          <div class="mt-6 mb-6 md:mb-0 ">
            <button
              class="bg-white text-purple-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <i class="flex text-purple-700 fa fa-twitter"></i></button
            ><button
              class="bg-white text-purple-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <i class="flex text-purple-700  fa fa-facebook-square"></i></button
            ><button
              class="bg-white text-purple-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <i class="flex text-purple-700 fa fa-instagram"></i></button
            >
          </div>
        </div>
        <div class="w-full mt-2 md:mb-0 lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-gray-200 text-sm font-semibold mb-2"
                >Useful Links</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation"
                    >About Us</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com"
                    >Blog</a
                  >
                </li>
               
                <li>
                  <a
                    class="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/bootstrap-themes/free"
                    >Free Products</a
                  >
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-gray-200 text-sm font-semibold mb-2"
                >Other Resources</span
              >
              <ul class="list-unstyled">
                
                <li>
                  <a
                    class="text-gray-500 hover:text-gray-400  font-semibold block pb-2 text-sm"
                    href=""
                    >Terms &amp; Conditions</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-500 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href=""
                    >Privacy Policy</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-500 hover:text-gray-400  font-semibold block pb-2 text-sm"
                    href=""
                    >Contact Us</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{date}}
            <a
              href="https://www.creative-tim.com"
              class="text-gray-600 hover:text-gray-900"
              >Qwill</a
            >.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "home-footer",
  data() {
    return {
      date: new Date().getFullYear()
    }
  }
}
</script>