import { Component } from "solid-js";
import {
  TAS,
  SolarFoundation,
  SwitchElectric,
  Arkreen,
  Your_Project,
} from "~/assets/images/companies";

const Carousel: Component = () => {
  return (
    <div class="carousel">
      <ul class="carousel__list">
        <li class="carousel__item" data-pos="-2">
          <div class="image-container">
            <img
              src={Arkreen}
              alt="Arkreen"
              class="carousel-image object-cover"
            />
          </div>
        </li>
        <li class="carousel__item" data-pos="-1">
          <div class="image-container">
            <img
              src={SwitchElectric}
              alt="Switch Electric"
              class="carousel-image object-cover"
            />
          </div>
        </li>
        <li class="carousel__item" data-pos="0">
          <div class="image-container">
            <div class={`image-container`}>
              <img
                src={Your_Project}
                alt="Your Project Here"
                class={`carousel-image object-cover`}
              />
            </div>
          </div>
        </li>
        <li class="carousel__item" data-pos="1">
          <div class="image-container">
            <img
              src={SolarFoundation}
              alt="Solar Foundation"
              class="carousel-image object-cover"
            />
          </div>
        </li>
        <li class="carousel__item" data-pos="2">
          <div class="image-container">
            <img src={TAS} alt="TAS" class="carousel-image object-cover" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Carousel;
