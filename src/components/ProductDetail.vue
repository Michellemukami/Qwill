<template>
  <navbar-component></navbar-component>
  <section class="text-gray-700 body-font overflow-hidden bg-gray-300">
    <div class="container w-full px-5 py-20 mx-auto">
      <div class="border-b bg-white rounded-t-lg border-gray-200 text-gray-800">
        <div class="px-10 pt-10">
        <router-link to="/" class="mb-2 cursor-pointer group flex">
            <a href="#" class="focus:outline-none mt-0.5 mr-1 text-sm"><i class="fa fa-arrow-left text-sm group-hover:text-purple-500 text-purple-400"></i></a>
            <p class="ml-1 mb-1 group-hover:text-purple-700 text-purple-500">Back</p> 
        </router-link>
        <div class="mb-2">
            <h1 class="text-md md:text-xl font-semibold text-gray-600">Chanel.</h1>
        </div>
        <div class="mb-5 text-gray-500">
            <a href="#" class="focus:outline-none hover:underline text-gray-500">Home</a> / <span class="text-gray-600">Chanel</span>
        </div>
    </div>
      </div>
      <div class="bg-white rounded-b-lg shadow-xl">
      <div class="flex flex-wrap break-words px-5 py-5 lg:py-16 lg:px-24 mx-auto ">

        <div class="mx-auto lg:w-full flex flex-wrap">
          <div class="lg:w-2/5 w-full">
            <div class="card p-5 md:p-0 object-cover object-center lg:pr-10">
              <div class="card-content">
                <div class="card-carousel">
                  <div class="card-img">
                    <img class="w-full md:h-96 h-80 rounded border border-gray-200" :src="currentImage" alt="">
                    <div class="hidden md:block">
                    <div class="actions">
                      <span @click="prevImage" class="prev">
                        <i class="fa fa-chevron-left"></i>
                      </span>
                      <span @click="nextImage" class="next">
                        <i class="fa fa-chevron-right"></i>
                      </span>
                    </div>
                    </div>
                  </div>
                  <div class="hidden lg:block">
                    <div class="thumbnails">
                      <div v-for="(image, index) in images" :key="image.id"
                      
                        :class="['thumbnail-image', (activeImage == index) ? 'active' : ''] "
                        @click="activateImage(index)">
                        <img class="h-10 pr-1" :src="image.thumb">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-3/5 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">CHANEL</h1>
            <div class="flex mb-4">
              <span class="flex items-center">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                  </path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                  </path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                  </path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2" class="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                  </path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-4 h-4 text-purple-500" viewBox="0 0 24 24">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                  </path>
                </svg>
                <span class="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <div class="flex-1">
                <p class="text-purple-600 text-lg font-semibold">Save 50%</p>
                <p class="text-gray-500 text-sm">Inclusive of all Taxes.</p>
              </div>
              </span>
            </div>
            <p class="leading-relaxed">ALLURE SENSUELLE Eau de Parfum is another olfactory expression of the ALLURE
              fragrance. The voluptuous, floral-soft-ambery scent is the perfect companion for a radiant, true intense
              woman..</p>
            <div class="border-t-2 border-gray-200 mt-5">
              <div class="flex mt-5">
                <span class="title-font mt-2 font-medium lg:text-2xl text-xl text-gray-900">ksh 3600.00</span>
                <button
                  class="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 pr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clip-rule="evenodd" />
                  </svg>Add to bag</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
  <footer-component></footer-component>
</template>
<script>
  import FooterComponent from "/src/components/HomeFooter.vue";
  import NavbarComponent from "/src/components/HomeNavbar.vue";
  export default {
    name: "Product-detail",

    components: {
      NavbarComponent,
      FooterComponent
    },
    data() {
      return {
        //Array to hold all carousel images
        images: [{
            id: '1',
            big: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
            thumb: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80'
          },
          // {
          //   id: '2',
          //   big: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
          //   thumb: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80'
          // },
          // {
          //   id: '3',
          //   big: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
          //   thumb: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80'
          // },
          // {
          //   id: '4',
          //   big: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
          //   thumb: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80'
          // }
        ],
        //Index of the active image on the images array
        activeImage: 0
      }
    },
    computed: {
  
      currentImage() {
        return this.images[this.activeImage].big;
      }
    },
    methods: {
       
      nextImage() {
        var active = this.activeImage + 1;
        if (active >= this.images.length) {
          active = 0;
        }
        this.activateImage(active);
      },
      // Go backwards on the images array 
      // or go at the last image
      prevImage() {
        var active = this.activeImage - 1;
        if (active < 0) {
          active = this.images.length - 1;
        }
        this.activateImage(active);
      },
      activateImage(imageIndex) {
        this.activeImage = imageIndex;
      }
    }
  }
</script>
<style>
  .card-carousel {
    user-select: none;
    position: relative;
  }

  .progressbar {
    display: block;
    width: auto;
    height: 5px;
    position: absolute;
    background-color: rgba(221, 221, 221, 0.25);
    z-index: 1;
  }

  .progressbar>div {
    background-color: rgba(255, 255, 255, 0.52);
    height: 100%;
    width: auto;
  }

  .thumbnails {
    display: flex;

    flex-direction: row;
  }

  .thumbnail-image {
    display: flex;

    cursor: pointer;
    padding: 2px;
  }

  .thumbnail-image>img {
    width: 100%;
    height: 50px;
    transition: all 250ms;
  }

  

  .card-img {
    position: relative;
    margin-bottom: 15px;
  }

  .card-img>img {
    display: block;
    margin: 0 auto;
  }

  .actions {
    font-size: 1.5em;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #585858;
  }

  .actions>span {
    cursor: pointer;
    transition: all 250ms;
  }

  .actions>span.prev {
    margin-left: 5px;
  }

  .actions>span.next {
    margin-right: 5px;
  }

  .actions>span:hover {
    color: purple;
  }
</style>