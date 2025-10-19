<template>
    <div class="aboutus-bg">
        <div v-if="color" class="aboutus-card">
            <h1>Customer Service</h1>
            <h3>+256 758 487588</h3>
        </div>
    </div>
</template>


 <script>
export default{
name:'aboutus',
components:{},
data: function(){
    return{
        color:'yellow'
    }
}
}


</script>

<style scoped>
/* Full page dark background */
.aboutus-bg {
    min-height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, #1a1a1a 60%, #6c2eb7 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
}

/* Card styling */
.aboutus-card {
    background: #222;
    border-radius: 18px;
    box-shadow: 0 4px 32px rgba(108,46,183,0.18), 0 1.5px 8px rgba(0,0,0,0.18);
    padding: 2.5em 2em;
    min-width: 320px;
    max-width: 90vw;
    text-align: center;
    color: #fff;
    border: 1.5px solid #6c2eb7;
}
.aboutus-card h1 {
    font-size: 2.2em;
    margin-bottom: 0.5em;
    color: #7fd8ff;
    letter-spacing: 1px;
}
.aboutus-card h3 {
    font-size: 1.3em;
    color: #ffd700;
    margin: 0;
    font-weight: 500;
}

@media (max-width: 600px) {
    .aboutus-card {
        padding: 1.2em 0.5em;
        min-width: 0;
    }
    .aboutus-bg {
        padding: 0;
    }
}
</style>