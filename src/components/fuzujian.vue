<template>
    <div>
        <input type="text" v-model="name" @change="dataChange">
        <p>{{name}}</p>
        <zizujian :inputName="name"></zizujian>
    </div>

</template>
<script>
import zizujian from '@/../src/components/zizujian'
export default {
   
    data(){
        return{
            name:"wanglihong"
        };
        
    },
    methods:{
        dataChange(data){
            this.inputName=data
            
        }
    },
     components:{
        zizujian
    }
}
</script>
