<template>
  <div id="content">
    <div id="Instructions">
      <v-text-field
        v-model="phoneNumber"
        color="#128C7E"
        filled
        :counter="13"
        type="tel"
        name="phone"
        @input="onlyNumbers"
        :label="$t('phone-number-label')"
        :placeholder="$t('phone-number-format')"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      ></v-text-field>
      <v-textarea
        v-model="message"
        color="#128C7E"
        :label="$t('message-label')"
        :placeholder="$t('message-placeholder')"
        counter
        maxlength="120"
        full-width
        filled
      ></v-textarea>
      <div v-if="analise && getlink" id="Linkbox">{{analise}}</div>
      <div class="text-center">
        <v-btn
          color="#25D366"
          depressed
          :disabled="!analise"
          class="white--text mx-1 mb-5"
          @click="getlink = true; track('get')"
        >
        <v-icon
          dark
        >
          mdi-link
        </v-icon>
        {{$t('get-link')}}</v-btn>
        
        <v-btn
          color="#25D366"
          text
          :disabled="!analise"
          class="mx-1 mb-5"
          @click="clipboard(); track('get')"
          
        >
        {{$t('copy-link')}}</v-btn>

        <v-btn
          color="#25D366"
          text
          small
          fab
          class="mx-1 mb-5"
          :disabled="!analise"
          to="/QR/"
          @click="track('qr-code')"
        >
          <v-icon dark>
            mdi-qrcode
          </v-icon>
        </v-btn>
      </div>
      <p class="mb-0 text-center text-info">{{$t('disclaimer')}}</p>
      <p class="mb-0 text-center text-info">{{$t('disclaimer-two')}}</p>
      <input type="hidden" id="clipboard" :value="analise">
    </div>
    <v-snackbar
      v-model="snackbar"
      left
      top
      :timeout="timeout"
    >{{ text.popup }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="#25D366"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          {{$t('close')}}
        </v-btn>
      </template>
    </v-snackbar>
    <script2 data-ad-client="ca-pub-8355023593426591" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script2>
  </div>
</template>

<i18n>
{
  "en-US": {
    "phone-number-label": "WhatsApp number",
    "phone-number-format": "55 61 99000-0000",
    "message-label": "WhatsApp Link Message",
    "message-placeholder": "What text would you like to share on your link?",
    "disclaimer": "We will not store any data entered here.",
    "disclaimer-two": "WhatsLnk does not contain any link to the WhatsApp brand.",
    "get-link": "Get link",
    "copy-link": "Copy link",
    "close": "Close",
    "copy-successful": "link copied to clipboard",
    "copy-fail": "The link cannot be copied, please copy manually to get link. We recommend that you update your browser for a better experience"
  },
  "pt-BR": {
    "phone-number-label": "Número de WhatsApp",
    "phone-number-format": "55 61 99000-0000",
    "message-label": "Mensagem do Link de WhatsApp",
    "message-placeholder": "Que texto você gostaria de compartilhar em seu link?",
    "disclaimer": "Nós não armazenaremos qualquer tipo de dado aqui inserido.",
    "disclaimer-two": "O WhatsLnk não contém qualquer vínculo a marca WhatsApp.",
    "get-link": "Obter link",
    "copy-link": "Copiar link",
    "close": "Fechar",
    "copy-successful": "Link copiado de para área de transferência",
    "copy-fail": "O link não pode ser copiado, por favor copie manualmente em obter link. Recomendamos que você atualize seu navegador para uma melhor experiência"
  },
  "es": {
    "phone-number-label": "Número de WhatsApp",
    "phone-number-format": "55 61 99000-0000",
    "message-label": "Mensaje de enlace de WhatsApp",
    "message-placeholder": "¿Qué texto le gustaría compartir en su enlace?",
    "disclaimer": "No almacenaremos ningún tipo de datos insertados aquí.",
    "disclaimer-two": "WhatsLnk no contiene ningún enlace a la marca WhatsApp.",
    "get-link": "Obtener enlace",
    "copy-link": "Copiar enlace",
    "close": "Cerca",
    "copy-successful": "Enlace copiado desde el portapapeles",
    "copy-fail": "El enlace no se puede copiar, por favor copie manualmente en el enlace get. Le recomendamos que actualice su navegador para una mejor experiencia"
  }
}
</i18n>

<style lang="scss">
  
</style>

<script>
export default {
  name: 'Inicio',
  components: {
  },
  data: () => ({
    snackbar: false,
    text: {
      popup: '',
    },
    getlink: false,
    timeout: 8000,
    phoneNumber: '',
    message: '',
  }),
  watch:{
    analise() {
      sessionStorage.link = this.analise
    },
    phoneNumber(){
      sessionStorage.phoneNumber = this.phoneNumber
    },
    message(){
      sessionStorage.message = this.message
    }
  },
  computed:{
    analise: function() {
      let endpoint="https://api.whatsapp.com/send?"
      let phone=this.phoneNumber
      let message=this.message
      if(phone == ''){
        return false
      }else{
        let ifmessage = message !== '' ? `&text=${encodeURI(message)}` : ''
        return endpoint + `phone=${encodeURI(phone.replace(/\s/g,''))}` + ifmessage
      }
    },
  },
  methods:{
    clipboard () {
      let clipboardValue = document.querySelector('#clipboard')
      clipboardValue.setAttribute('type', 'text')   
      clipboardValue.select()

      try {
        var successful = document.execCommand('copy'); //boolean
        this.text.popup = this.$t('copy-successful');
        this.snackbar = true;
      } catch (err) {
        this.text.popup = this.$t('copy-fail');
        this.snackbar = true;
      }

      /* unselect the range */
      clipboardValue.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
    onlyNumbers () {
      this.phoneNumber = this.phoneNumber.replace(/\D/g,'')
    },
    track (x) {
      x == 'get' ? this.$gtag.event('Click-Get-Button', {
        'event_category': 'Start Page',
        'event_label': 'Click Obtain Link Button',
        'value': 1 
      }):
      x == 'copy' ? this.$gtag.event('Click-Copy-Button', {
        'event_category': 'Start Page',
        'event_label': 'Click Copy Link Button',
        'value': 1 
      }):
      x == 'qr-code' ? this.$gtag.event('Click-Show-QR-Button', {
        'event_category': 'Start Page',
        'event_label': 'Click QR Link Button',
        'value': 1 
      }): console.log('Ação não encontrada')

    }
  },
  mounted(){
    if(sessionStorage.phoneNumber !== undefined){
      this.phoneNumber = sessionStorage.phoneNumber
    }
    if(sessionStorage.message !== undefined){
      this.message = sessionStorage.message
    }
  }
}
</script>
