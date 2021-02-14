<template>
  <div id="app">
    <div id="gerador">
      <router-view/>
    </div>
    <div id="ads">
      <ads/>
    </div>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

  html{
    overflow: hidden!important;
  }
  #app{
    display: flex;

    #gerador{
      width: 50%;
      height: 100vh;
      //background-color: #ECE5DD;

      padding: 100px;
    }
    #ads{
      width: 50%;
      height: 100vh;
      background: #25D366;

      padding: 100px;
      #ads-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        
        #ads-content{
          text-align: center;

          #whatsapp-logo{
            max-width: 200px;
            width: 60%;
            margin-bottom: 30px;
          }
          #brand-name{
            font-family: 'Roboto','Helvetica Neue',Helvetica,Arial,sans-serif;
            text-align: center;
            color: white;
            font-size:40px;
          }
        }
      }
    }
  }
</style>

<script>
import ads from '@/components/Ads.vue'

export default {
  components:{
    ads
  },
}
</script>