<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Projects</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />

      <div class="row">
        <div
          v-for="(design, idx) in desgin_info"
          :key="idx"
          :class="{ 'mt-4': idx === 0 ? true : true }"
          class="col-xl-6 col-bg-6 col-md-12 col-sm-12"
          style="position: relative;"
        >
          <vueper-slides
            :dragging-distance="50"
            fixed-height="300px"
            :bullets="false"
            slide-content-outside="bottom"
            style="position: aboslute"
            @click.prevent="showDesignModalFn(design)"
          >
            <vueper-slide
              v-for="(slide, i) in design.pictures"
              :key="i"
              :image="slide.img"
            />
          </vueper-slides>
          <div
            style="width: 100%; display: flex; justify-content: space-between"
            class="mt-2"
          >
            <div>
              <div class="title2" style="font-weight: 500;">
                {{ design.title }}
              </div>
              <span
                class="badge mr-2 mb-2"
                v-for="tech in design.technologies"
                :key="tech"
                :class="{ 'bg-dark4': nightMode }"
                >{{ tech }}</span
              >
            </div>
            
            <div class="portfolio-actions">
            <a :href="design.visit" target="_blank">
              <button    class="btn-sm btn btn-outline-secondary no-outline btn-portfolio">
                <i class="fa fa-external-link-alt"></i>
              </button>
            </a>
            <button
              class="btn-sm btn btn-outline-secondary no-outline btn-portfolio"
              @click.prevent="showDesignModalFn(design)"
            >
             read more
            </button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    <transition name="modal">
      <DesignModal
        :showModal="showDesignModal"
        @close="closeModal"
        v-if="showDesignModal"
        :portfolio="design_modal_info"
        :nightMode="nightMode"
      />
    </transition>
  </div>
</template>

<script>
import DesignModal from "../components/DesignModal";
import info from "../../info";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Portfolio",
  components: {
    VueperSlides,
    VueperSlide,
    DesignModal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      desgin_info: info.portfolio_design,
      showDesignModal: false,
      design_modal_info: {},
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    };
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    },
    closeModal() {
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showDesignModalFn(design_portfolio) {
      this.design_modal_info = design_portfolio;
      this.showDesignModal = true;
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn {
  border-color: #8585ad;
  color: #8585ad;
  white-space: nowrap;
}

.btn:hover {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

.btn:focus {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

.design-img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;
}
.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.dimg:hover .design-img {
  position: relative;
  border-radius: 15px;
  opacity: 0.1;
  cursor: pointer;
}

.dimg:hover .middle {
  opacity: 1;
}

/deep/.vueperslide {
  border-radius: 10px !important;
}
/deep/.vueperslides__parallax-wrapper {
  border-radius: 10px !important;
}

.btn {
  border-color: #759cc9;
  color: #759cc9;
}

.btn:hover {
  background-color: #759cc9;
  border-color: #759cc9;
  color: white;
}

.btn:focus {
  background-color: #759cc9;
  border-color: #759cc9;
  color: white;
}
/deep/ .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: grey;
}

.badge {
  background-color: #bbd4dd;
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75;
}

.portfolio-actions {
  white-space: nowrap;
  }

.btn-portfolio {
  height: 31px; 
  margin-top: 5px;
  margin-left: 5px;
}
</style>
