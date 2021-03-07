<template>
  <v-app>
    <div id="app">
      <div id="gerador">
        <router-view/>
      </div>
      <div id="brand">
        <branding/>
      </div>
    </div>
  </v-app>
</template>

<script>
import branding from '@/components/branding.vue'

export default {
  components:{
    branding
  },
  created(){
    this.changelang()
  },
  methods: {
    changelang(){
      if(this.lang.includes(navigator.language)){
        this.langselect = navigator.language
      }
      this.$i18n.locale = this.langselect
    }
  },
  data: () => ({
      lang: ['pt-BR', 'en-US', 'pt-PT', 'es'], 
      langselect: 'en-US',
  }),
  watch: {
    langselect(){
      this.changelang()
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
  @media only screen and (min-width: 830px)  { //desk
    html{
      overflow: hidden!important;
    }
    #app{
      display: flex;
      #gerador{
        width: calc(100% - 350px);
        height: 100vh;
        background-color: #ECE5DD;
        display: flex;
        justify-content: center;
        align-items: center;


        #content{
          background-color: #fff;
          padding: 50px;
          border-radius: 5px;
          width: 60%;
          max-width: 625px;
          min-width: 400px;
          overflow-y: auto;
          #Instructions{
            .text-info {
              color: #c7c1ba;
            }
            #Linkbox{
              background-color: #f3f2f288;
              padding: 15px;
              margin-bottom: 30px;
              border-radius: 15px;
              word-break: break-all;
            }
          }
        }
      }
      #brand{
        width: 350px;
        height: 100vh;
        background: #25D366;
        min-width: 320px;

        padding: 100px;
        #brand-container{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          
          #brand-content{
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
  }
  @media only screen and (max-width: 830px)  { //mobile
    html{
      overflow: auto!important;
    }
    #app{
      display: auto;

      #gerador{
        width: 100%;
        min-height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;


        #content{
          background-color: #fff;
          padding: 50px;
          width: 100%;
          height: 100%;
          max-height: 90vh;
          overflow: auto;
          #Instructions{
            .text-info {
              color: #c7c1ba;
            }
            #Linkbox{
              background-color: #f3f2f288;
              padding: 15px;
              margin-bottom: 30px;
              border-radius: 15px;
              word-break: break-all;
            }
          }
        }
      }
      #brand{
        width: 100%;
        height: 10vh;
        background: #25D366;

        #brand-container{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          
          #brand-content{
            text-align: center;

            display: flex;
            justify-content: center;
            align-items: center;


            #whatsapp-logo{
              max-width: 200px;
              width: 30px;
              margin-right: 10px;
            }
            #brand-name{
              font-family: 'Roboto','Helvetica Neue',Helvetica,Arial,sans-serif;
              text-align: center;
              color: white;
              font-size:30px;
            }
          }
        }
      }
    }
  }
</style>