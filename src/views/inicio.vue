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
        label="Número de WhatsApp"
        placeholder="55 61 99000-0000"
        required
      ></v-text-field>
      <v-textarea
        v-model="message"
        color="#128C7E"
        label="Mensagem a ser enviada"
        placeholder="Que texto você gostaria de compartilhar em seu link? "
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
          @click="getlink = true;"
        >
        <v-icon
          dark
        >
          mdi-link
        </v-icon>
        {{text.btn1}}</v-btn>
        
        <v-btn
          color="#25D366"
          text
          :disabled="!analise"
          class="mx-1 mb-5"
          @click="clipboard()"
        >
        {{text.btn2}}</v-btn>
      </div>
      <p class="mb-0 text-center text-info">{{disclaimer[0]}}</p>
      <p class="mb-0 text-center text-info">{{disclaimer[1]}}</p>
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
          Fechar
        </v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

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
      btn1: 'Obter Link',
      btn2: 'Copiar link'
    },
    getlink: false,
    timeout: 8000,
    phoneNumber: '',
    message: '',
    disclaimer: ["Nós não armazenaremos qualquer tipo de dado aqui inserido.","O WhatsLink não contém qualquer vínculo a marca WhatsApp."]
  }),
  watch:{

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
        var successful = document.execCommand('copy');
        var msg = successful ? 'bem sucedida' : 'mal sucedida';
        this.text.popup = 'Link copiado de forma ' + msg;
        this.snackbar = true;
      } catch (err) {
        this.text.popup = 'Link copiado de forma ' + msg;
        this.snackbar = true;
      }

      /* unselect the range */
      clipboardValue.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
    onlyNumbers() {
      this.phoneNumber = this.phoneNumber.replace(/\D/g,'')
    }
  }
}
</script>
