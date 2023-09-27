<template>
    <div class="px-10 py-10 flex flex-col items-center background">
        <div class="flex flex-col items-center">
            <p class="text-center text-2xl font-bold">Our Services</p>
            <HeaderLiner />
            <p class="text-gray-400 mt-4 w-2/3">We provide to you the best choices for you. Adjust it to your
                health needs and make sure you undergo treatement with our
                highly qualified doctors you can Consultwith us which type
                of services is suitable for your health
            </p>
        </div>
        <div class="text-gray-600 body-font">
            <div class="container px-24 py-5 mx-auto">
                <div class="flex flex-wrap ">
                    <Cards v-for="(card, index) in cardsData" :key="index" :heading="card.heading"
                        :description="card.description" :imageSrc="card.imageSrc" :imageAlt="card.imageAlt"
                        class="hover:translate-y-[-20px] transition-transform duration-300 ease-in-out" />

                </div>
            </div>
        </div>
        <Button :labelText="labelTextProp" class="mb-14"></Button>
     
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
import Button from "./common/Button.vue"
import CustomSection2 from "./common/CustomSection2.vue"
export default {
    name: "ServicesSection",
    components: {
        HeaderLiner,
        Cards,
        Button,
        CustomSection2,
    },
    data() {
        return {
            cardsData: [
                {
                    heading: "Search doctor",
                    description: "Choose your doctor from thousands of specialists, general and trusted hospitals",
                    imageSrc: consult,
                    imageAlt: "search",
                },
                {
                    heading: "Online pharmacy",
                    description: "Buy your medicines with our mobile application with a simple delivery system",
                    imageSrc: consult,
                    imageAlt: "drug",
                },
                {
                    heading: "Consultation",
                    description: "Free consultation with our trusted doctors and get the best recommendations.",
                    imageSrc: consult,
                    imageAlt: "consult",
                },
                {
                    heading: "Details info",
                    description: "Free consultation with our trusted doctors and get the best recommendations.",
                    imageSrc: consult,
                    imageAlt: "Service 2 Alt Text",
                },
                {
                    heading: "Emergency care",
                    description: "You can get 24/7 urgent care for yourself or your children and your lovely family",
                    imageSrc: consult,
                    imageAlt: "emergency",
                },
                {
                    heading: "Tracking",
                    description: "Track and save your medical history and data",
                    imageSrc: consult,
                    imageAlt: "Service 2 Alt Text",
                },
                // Add more card data objects as needed
            ],
            sectionData:{
                headingProp: "Leading healthcare providers",
                descriptionProp: "VRHealth provides progressive, and affordable healthcare , accessible on mobile and online for everyone.",
                buttonTextProp: "Consult Now",
                imageSrcProp: image,
                imageAltProp: "mockup",
            },
            labelTextProp:"Learn more"
        };
    },
};
</script>
<style></style>
  