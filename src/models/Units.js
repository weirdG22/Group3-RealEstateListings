import mongoose, { Schema } from "mongoose";

const unitSchema = new Schema(
    {
        type: {
            type: String,
            required: [true, "An invalid type of unit was entered."]
        },
        address: {
            type: String,
            required: [true, "Please enter an address."]
        },
        imgUrl: {
            type: String,
            required: [true, "An invalid image URL was entered."]
        },
        beds: {
            type: Number,
            required: [true, "Please enter the number of bedrooms this unit has."]
        },
        baths: {
            type: Number,
            required: [true, "Please enter the number of bathrooms this unit has."]
        },
        sqft: {
            type: Number,
            required: [true, "Please enter the number of square footage this unit has."]
        },
        status: {
            type: String,
            required: [true, "An invalid status was entered."]
        },
        price: {
            type: Number,
            required: [true, "Please enter the price of the unit."]
        },
        posted: {
            type: Boolean,
            required: [true, "An invalid Boolean for posted was entered."]
        },
        ownerId: {
            type: String,
            required: [true, "An invalid ID was entered."]
        }
    }
);

const Unit = mongoose.models.Unit || mongoose.model("Unit", unitSchema);

export default Unit;