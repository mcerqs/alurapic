<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre pelo título da foto">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto.id">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Painel from '../shared/painel/Painel';
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva';

  export default {
    components: {
      'meu-painel' : Painel,
      'imagem-responsiva': ImagemResponsiva
    },

    data() {
      return {
        titulo: 'Alurapic',
        fotos: [],
        filtro: ''
      }
    },

    computed: {
      fotosComFiltro() {
        if(this.filtro) {
          // criando uma expressão com o valor do filtro, insensitivo
          let exp = new RegExp(this.filtro.trim(), 'i');

          // retorna apenas as fotos que condizem com a expressão
          return this.fotos.filter(foto => exp.test(foto.titulo));   
        }

        // se o campo estiver vazio, não filtramos, retornamos a lista
        return this.fotos;
      }
    },

    created() {
      this.$http.get('http://localhost:3000/v1/fotos')
        // .then(res => console.log(res))
        .then(res => res.json())
        .then(fotos => this.fotos = fotos, err => console.log(err));
    }
  }
</script>

<style>
  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
    padding: 0;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>