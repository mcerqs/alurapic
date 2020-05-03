<template>
  <button class="botao" :class="estiloBotao" :type="tipo" @click="disparaAcao()">{{ rotulo }}</button>
</template>

<script>
  export default {
    props: ['tipo', 'rotulo', 'confirmacao', 'estilo'],

    methods: {
      disparaAcao() {
        console.log(typeof(this.confirmacao));

        if(this.confirmacao) {
          if(confirm('Confirma operacao?')) {
            // É através de this.$emit que disparamos um evento customizado passando como nome do parâmetro o evento.
            this.$emit('botaoAtivado');
          }

          return;
        }

        this.$emit('botaoAtivado');
      }
    },

    computed: {
      estiloBotao() {
        // se o valor é padrão ou não passou nada para estilo
        if(this.estilo === 'padrao' || !this.estilo) return 'botao-padrao';
        if(this.estilo === 'perigo') return 'botao-perigo';
      }
    }
  }
</script>

<style scoped>
  .botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
  }

  .botao-perigo {
    color: white;
    background: firebrick;
  }

  .botao-padrao {
    color: white;
    background: darkcyan;
  }
</style>