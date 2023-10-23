/* eslint-disable prefer-arrow-callback */
const sliderElement = document.querySelector('.price-range__scale');
const valueFrom = document.querySelector('.price-range__from');
const valueTo = document.querySelector('.price-range__to');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1000,
  },
  start: [0, 900],
  step: 1,
  connect: true,
});

const inputs = [valueFrom, valueTo];

sliderElement.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = parseInt(values[handle], 10);
});

valueFrom.addEventListener('change', function () {
  sliderElement.noUiSlider.set([this.value, null]);
});

valueTo.addEventListener('change', function () {
  sliderElement.noUiSlider.set([null, this.value]);
});
