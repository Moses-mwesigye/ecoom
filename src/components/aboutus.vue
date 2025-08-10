<template>
<div>

    <div v-if="color" style='width: 100%; height:100px; background-color:crimson;'>
        <h1>This is the AboutUs page</h1>
    </div>

    <div style='width: 100%; height:100px; background-color:green;'>
    </div>
    <div style='width: 100%; height:100px; background-color:black;'>
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

</style>