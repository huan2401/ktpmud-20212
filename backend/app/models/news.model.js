const mongoose = require("mongoose");

const News = mongoose.model(
  "News",
  new mongoose.Schema({
    // name: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // price: {
    //   type: Number,
    //   required: true,
    // },
    // price: {
    //   type: String,
    //   required: true,
    // },
    price: {
      time: {
        type: String,
        required: true,
      },
      value: {
        type: Number,
        required: true,
      },
    },
    acreage: {
      type: Number,
      required: true,
    },
    bedroom: {
      type: Number,
      default: 1,
    },
    toilet: {
      required: true,
      type: String,
    },
    // kitchenroom: {
    //   type: Number,
    //   default: 1,
    // },
    kitchenroom: {
      type: {
        type: String,
        required: true,
      },
      value: {
        type: Number,
        default: 1,
      },
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
    updateAt: {
      type: Date,
      default: Date.now(),
    },
    utilities: {
      isChecked_wifi: {
        type: Boolean,
        default: false,
      },
      isChecked_mezzanine: {
        type: Boolean,
        default: false,
      },
      isChecked_camera: {
        type: Boolean,
        default: false,
      },
      isChecked_parking: {
        type: Boolean,
        default: false,
      },
      isChecked_fridge: {
        type: Boolean,
        default: false,
      },
      isChecked_WashingMachine: {
        type: Boolean,
        default: false,
      },
      isChecked_television: {
        type: Boolean,
        default: false,
      },
      isChecked_AirConditional: {
        type: Boolean,
        default: false,
      },
      isChecked_elevator: {
        type: Boolean,
        default: false,
      },
    },
    img_infor: {
      type: Object,
      required: true,
    },
    address: {
      code_city: {
        type: Number,
        required: true,
      },
      code_dictrict: {
        type: Number,
        required: true,
      },
      code_street: {
        type: Number,
        required: true,
      },
      // Lat_ggmap: {
      //   type: Number,
      //   required: true,
      // },
      // Lng_ggmap: {
      //   type: Number,
      //   required: true,
      // },
      address_detail: {
        type: String,
        required: true,
      },
    },
  })
);

module.exports = News;
