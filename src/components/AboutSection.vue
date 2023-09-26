<template>
    <div class="px-10  flex flex-col items-center background">
       
        <CustomSection2
        :heading="sectionData.headingProp"
        :description="sectionData.descriptionProp"
        :imageSrc="sectionData.imageSrcProp"
        :imageAlt="sectionData.imageAltProp"
        />
    </div>
</template>
  
<script>

import image from '../assets/img/test2.png'
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
    name: "AboutSection",
    components: {
        HeaderLiner,
        Cards,
        CustomSection2,
    },
    data() {
        return {
           
            sectionData:{
                headingProp: "Leading healthcare providers",
                descriptionProp: "VRHealth provides progressive, and affordable healthcare , accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver",
                imageSrcProp: image,
                imageAltProp: "mockup",
            },
            labelTextProp:"Learn more"
        };
    },
};
</script>
<style></style>
  