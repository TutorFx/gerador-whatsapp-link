<template>
<div id="QR">
    <div id="QRBODY">
        <div id="QRCODE">
            <div class="QR-container">
                <vue-qrious class="qrcodeimg" :value="link" download="WhatsLnk-co" :foreground="pontos" :background="!semfundo ? '#FFFFFF00' : bg" :size="1000" />
            </div>
            <div class="Qr-picker">
                <v-container>
                    <v-expand-transition>
                        <v-row class="pt-5" v-if="personalizar">
                            <v-col cols="12" md="12">
                                <div class="swatch-container text-center">
                                    <div class="swatch-content">
                                        <h4 class="mb-5">{{$t('code-color')}}</h4>
                                        <v-color-picker
                                        dot-size="25"
                                        mode="hexa"
                                        swatches-max-height="200"
                                        v-model="pontos"
                                        ></v-color-picker>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" md="12">
                                <div class="swatch-container text-center">
                                    <div class="swatch-content">
                                    <h4>{{$t('background-color')}}</h4>
                                        <div class="text-center">
                                            <v-checkbox
                                                v-model="semfundo"
                                                :label="$t('has-background')"
                                                color="#25D366"
                                            ></v-checkbox>
                                        </div>
                                        <v-expand-transition>
                                            <v-color-picker
                                            v-if="semfundo"
                                            dot-size="25"
                                            mode="hexa"
                                            swatches-max-height="200"
                                            v-model="bg"
                                            ></v-color-picker>
                                        </v-expand-transition>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-expand-transition>
                </v-container>
            </div>
        </div>
    </div>
    <v-divider v-if="personalizar"></v-divider>
    <div id="buttons" class="text-center py-5">
        <div>
            <v-btn depressed dark color="#25D366" class="mx-2 my-2" @click="download()">
                <v-icon dark class="mr-3">
                    mdi-download
                </v-icon>
                {{$t('download-qr')}}
            </v-btn>
            <v-btn text dark color="#25D366" class="mx-2 my-2" @click="personalizar = !personalizar">
                <v-icon dark class="mr-3">
                    mdi-palette
                </v-icon>
                {{!personalizar ? $t('personalize') : $t('close')}}
            </v-btn>
        </div>
    </div>
</div>
</template>

<i18n>
{
  "en-US": {
    "code-color": "Code color",
    "background-color": "Background color",
    "download-qr": "download QR",
    "close": "Close",
    "customize": "Choose Color",
    "has-background": "Should this QR code have a background?"
  },
  "pt-BR": {
    "code-color": "Cor do Código",
    "background-color": "Cor de Fundo",
    "download-qr": "Baixar QR",
    "close": "Fechar",
    "personalize": "Escolher Cor",
    "has-background": "Esse QR code deve ter fundo?"
  },
  "es": { 
    "code-color": "Color del código",
    "background-color": "Color de fondo", 
    "download-qr": "Descargar QR", 
    "close": "Cerca", 
    "personalize": "Elegir color", 
    "has-background": "¿Este código QR debe tener Color de fondo?" }
}
</i18n>

<script>
import VueQrious from 'vue-qrious'
import { saveAs } from 'file-saver';

export default {
    components: {
        VueQrious,
    },
    data() {
        return {
            link: sessionStorage.link,
            pontos: "#25D366",
            bg: "#fff",
            personalizar: false,
            semfundo: false,
            bgopacity: 0,
        }
    },
    mounted() {
    },
    methods: {
        download() {
            let down = document.querySelector('.qrcodeimg').getAttribute('src')
            saveAs( down, 'QR WhatsLnk')
        }
    },
    watch: {
        semfundo(){
            if (this.semfundo){
                this.bgopacity = 0.1;
            } else {
                this.bgopacity = 0.1;
            }
        }
    }

}
</script>

<style lang="scss">
  @media only screen and (min-width: 830px)  { //desk
    #QR{
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        
        #QRBODY{
            width: 450px;
            max-height: 70vh;
            overflow: auto;
            scrollbar-width: thin;          /* "auto" or "thin" */
            scrollbar-color: #c4c4c4 #fff;   /* scroll thumb and track */
            &::-webkit-scrollbar {
            width: 12px;               /* width of the entire scrollbar */
            }

            &::-webkit-scrollbar-track {
            background: #fff;        /* color of the tracking area */
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            }

            &::-webkit-scrollbar-thumb {
            background-color: #e2e2e2;    /* color of the scroll thumb */
            border-radius: 20px;       /* roundness of the scroll thumb */
            border: 3px solid #fff;  /* creates padding around scroll thumb */
            }
            #QRCODE{
                min-width: 100%;
                .QR-container{
                    min-width: 100%;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    background: rgb(248, 248, 248);
                    img{
                        width: 100%;
                        height: auto;
                        padding: 100px;
                    }
                }
                .Qr-picker{
                    .swatch-container{
                        justify-content: center;
                        align-items: center;
                        display: flex;
                        .swatch-content{

                        }
                    }
                }
            }
        }
        #buttons{
            
        }
    }
  }
  @media only screen and (max-width: 830px)  { //mobile
    #QR{
        background-color: #fff;
        width: 650px;
        max-height: 90vh;
        overflow: auto;
        #QRCODE{
            min-width: 100%;
            .QR-container{
                min-width: 100%;
                justify-content: center;
                align-items: center;
                display: flex;
                img{
                    width: 100%;
                    height: auto;
                    padding: 30px;
                }
            }
            .Qr-picker{
                display: flex;
                .swatch-container{
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    .swatch-content{

                    }
                }
            }
        }
    }
  }
</style>