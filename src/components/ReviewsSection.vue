<template>
    <div class=" py-10 flex flex-col items-center background">
        <div class="flex flex-col items-center">
            <p class="text-center text-4xl font-semibold">What Our Customers are Saying</p>
            <HeaderLiner />
            <p class="text-gray-400 mt-4 w-2/3">We provide to you the best choices for you. Adjust it to your
                health needs and make sure you undergo treatement with our
                highly qualified doctors you can Consultwith us which type
                of services is suitable for your health.
            </p>
        </div>
        <div class="text-gray-600 body-font mt-10">
            <div class=" px-2 xl:px-40 md:px-24 mx-auto">
                <div class="flex flex-wrap ">
                    <CustomerCard  v-for="(card, index) in cardsData" :key="index"
            :description="card.description" 
            :imageSrc="card.imageSrc" 
            :imageAlt="card.imageAlt"
            :username = "card.username"
            />
                </div>
            </div>
        </div>
        
     
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
export default {
    name: "ReviewSection",
    components: {
        HeaderLiner,
        Cards,
        CustomSection2,
        CustomerCard,
    },
    data() {
        return {
            cardsData: [
                {
                    username:"Viola Manisa",
                    description: "I received great customer service from the specialties who helped me. i would recommend to anyone who want quality.",
                    imageSrc: consult,
                    imageAlt: "search",
                },
                {
                    username:"Viola Manisa",
                    description: "I received great customer service from the specialties who helped me. i would recommend to anyone who want quality.",
                    imageSrc: consult,
                    imageAlt: "drug",
                },
                {
                    username:"Viola Manisa",
                    description: "Free consultation with our trusted doctors and get the best recommendations.",
                    imageSrc: consult,
                    imageAlt: "consult",
                },
      
            ],
        
        };
    },
};
</script>
<style></style>
  