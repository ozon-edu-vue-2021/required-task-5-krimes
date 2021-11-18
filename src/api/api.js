import base from "./base";

export default {
  food: {
    random: (params) => base.get("food/random_food", { params }),
  },
};
