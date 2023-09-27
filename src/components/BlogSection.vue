<template>
    <div class="px-10 py-2 flex flex-col items-center background">
        <div class="flex flex-col items-center">
            <p class="text-center text-4xl font-semibold">Check out our latest article</p>
            <HeaderLiner />
           
        </div>
        <div class="text-gray-600 body-font mt-14">
            <div class="px-2  xl:px-24 md:px-24  mx-auto">
                <div class="flex flex-wrap ">
                    <Cards v-for="(card, index) in cardsData" :key="index" :heading="card.heading"
                        :buttonText="card.buttonTextProps"
                        :description="card.description" :imageSrc="card.imageSrc" :imageAlt="card.imageAlt"
                         />

                </div>
            </div>
        </div>
        <Button :labelText="labelTextProp" class="mb-14 text-cyan-500"></Button>

     
    </div>
</template>
  
<script>

import image from '../assets/img/13.png'
import search from '../assets/img/search.png'
import consult from '../assets/img/consult.png'
import drug from '../assets/img/drug.png'
import details from '../assets/img/details.png'
import emergency from '../assets/img/emergency.png'
import tracking from '../assets/img/tracking.png'
import HeaderLiner from "./common/HeaderLiner.vue";


import Cards from "./common/Cards.vue";
import CustomSection2 from "./common/CustomSection2.vue"
import CustomerCard from './common/CustomerCard.vue'
import Button from './common/Button.vue'
export default {
    name: "BlogSection",
    components: {
        HeaderLiner,
        Cards,
        CustomSection2,
        CustomerCard,
        Button,
    },
    data() {
        return {
            cardsData: [
                {
                    heading:"Disease detection check",
                    description: "In this case the role of the health laboratory is very important to do a disease detection.",
                    imageSrc: image,
                    imageAlt: "search",
                    buttonTextProps: "Read more"

                },
                {
                    heading:"Viola Manisa",
                    description: "In this case the role of the health laboratory is very important to do a disease detection.",
                    imageSrc: image,
                    imageAlt: "drug",
                    buttonTextProps: "Read more"

                },
                {
                    heading:"Viola Manisa",
                    description: "In this case the role of the health laboratory is very important to do a disease detection.",
                    imageSrc: image,
                    imageAlt: "consult",
                    buttonTextProps: "Read more"

                },
      
            ],
            labelTextProp:"Learn more"

        
        };
    },
};
</script>
<style></style>
  